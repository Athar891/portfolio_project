import { NextRequest, NextResponse } from "next/server";
import { validateContactForm, sanitizeInput, hasSuspiciousContent } from "@/lib/validators";
import { checkRateLimit, getClientIP } from "@/lib/rateLimit";
import { sendContactEmail, sendConfirmationEmail, generateEmailHTML } from "@/lib/email";

// Configuration
const DEVELOPER_EMAIL = process.env.DEVELOPER_EMAIL || "contact@athar.com";
const ENABLE_SPAM_DETECTION = process.env.ENABLE_SPAM_DETECTION !== "false";
const SEND_CONFIRMATION_EMAIL = process.env.SEND_CONFIRMATION_EMAIL !== "false";
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "5");
const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW_MS || "3600000");

export async function POST(request: NextRequest) {
  try {
    // 1. SECURITY: Get client IP and check rate limiting
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP, {
      maxRequests: RATE_LIMIT_MAX,
      windowMs: RATE_LIMIT_WINDOW,
    });

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          resetTime: new Date(rateLimit.resetTime).toISOString(),
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // 2. Parse request body
    const body = await request.json();
    console.log("Received body:", body);

    // 3. SECURITY: Validate input with Zod
    const validation = validateContactForm(body);
    if (!validation.success) {
      console.error("Validation failed:", validation.errors);
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    const { fullName, email, company, message } = validation.data as any;

    // 4. SECURITY: Sanitize inputs to prevent XSS
    const sanitizedName = sanitizeInput(fullName);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedCompany = sanitizeInput(company || "");
    const sanitizedMessage = sanitizeInput(message);

    // 5. SECURITY: Spam detection
    if (ENABLE_SPAM_DETECTION) {
      if (hasSuspiciousContent(sanitizedMessage)) {
        // Don't reveal that it was marked as spam (security by obscurity)
        console.warn("Potential spam detected:", {
          email: sanitizedEmail,
          timestamp: new Date().toISOString(),
        });
        return NextResponse.json(
          { success: true, message: "Message sent successfully!" },
          { status: 200 }
        );
      }
    }

    // 6. Send email to developer (don't wait for completion to improve UX)
    // Generate HTML first, then send in background
    const emailHTML = generateEmailHTML(
      sanitizedName,
      sanitizedEmail,
      sanitizedCompany,
      sanitizedMessage
    );

    // Email will send in the background
    sendContactEmail({
      to: DEVELOPER_EMAIL,
      subject: `New Contact Form Submission from ${sanitizedName}`,
      html: emailHTML,
      replyTo: sanitizedEmail,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nCompany: ${sanitizedCompany}\n\nMessage:\n${sanitizedMessage}`,
    }).catch((error) => {
      console.error("Background email sending failed:", error);
    });

    // 7. Send confirmation email to user (don't wait)
    if (SEND_CONFIRMATION_EMAIL) {
      sendConfirmationEmail(sanitizedEmail, sanitizedName).catch((error) => {
        console.error("Confirmation email failed:", error);
      });
    }

    // 8. Log submission (optional database logging)
    logContactSubmission({
      fullName: sanitizedName,
      email: sanitizedEmail,
      company: sanitizedCompany,
      message: sanitizedMessage,
      clientIP,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    // Don't expose internal error details to client
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Optional: Log contact submissions to database or file
function logContactSubmission(data: {
  fullName: string;
  email: string;
  company: string;
  message: string;
  clientIP: string;
  timestamp: string;
}) {
  // TODO: Implement database logging if needed
  // Example:
  // await db.contactMessages.create({
  //   name: data.fullName,
  //   email: data.email,
  //   company: data.company,
  //   message: data.message,
  //   clientIP: data.clientIP,
  //   createdAt: new Date(data.timestamp),
  // });

  console.log("Contact submission logged:", {
    name: data.fullName,
    email: data.email,
    timestamp: data.timestamp,
  });
}

