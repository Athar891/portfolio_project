import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, company, message } = body;

    // Validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you can integrate with email service (e.g., SendGrid, Nodemailer, etc.)
    // For now, we'll just log and return success
    console.log("Contact form submission:", {
      fullName,
      email,
      company,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service to send the message
    // Example with SendGrid or similar:
    // await sendEmail({
    //   to: "your-email@example.com",
    //   from: email,
    //   subject: `New contact from ${fullName}`,
    //   html: `<p>${message}</p>`,
    // });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
