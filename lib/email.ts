import nodemailer from "nodemailer";

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

// Initialize email transporter (supports SMTP and OAuth2)
let transporter: nodemailer.Transporter | null = null;

const initializeTransporter = () => {
  if (transporter) return transporter;

  const emailProvider = process.env.EMAIL_PROVIDER || "smtp";

  if (emailProvider === "smtp") {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  } else if (emailProvider === "gmail") {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    });
  } else {
    throw new Error(`Unsupported email provider: ${emailProvider}`);
  }

  return transporter;
};

// Generate professional email HTML
const generateEmailHTML = (
  fromName: string,
  fromEmail: string,
  company: string,
  message: string
): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; }
        .sender-info { background: white; padding: 15px; border-left: 4px solid #667eea; margin-bottom: 20px; border-radius: 4px; }
        .sender-info p { margin: 5px 0; }
        .label { font-weight: 600; color: #667eea; }
        .message-box { background: white; padding: 20px; border-radius: 4px; margin: 20px 0; border: 1px solid #eee; white-space: pre-wrap; word-wrap: break-word; }
        .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; }
        .timestamp { color: #999; font-size: 12px; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="sender-info">
            <p><span class="label">From:</span> ${fromName}</p>
            <p><span class="label">Email:</span> <a href="mailto:${fromEmail}">${fromEmail}</a></p>
            ${company ? `<p><span class="label">Company:</span> ${company}</p>` : ""}
            <p class="timestamp">Received at ${new Date().toLocaleString()}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">Message:</h2>
          </div>

          <div class="message-box">
${message}
          </div>

          <div class="footer">
            <p>This is an automated email from your contact form. Please reply directly to ${fromEmail} or use your email client's reply function.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send email
export const sendContactEmail = async (options: EmailOptions): Promise<void> => {
  try {
    const transport = initializeTransporter();

    if (!transport) {
      throw new Error("Email transporter not initialized");
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
      replyTo: options.replyTo,
    };

    const info = await transport.sendMail(mailOptions);

    console.log("Email sent successfully:", {
      messageId: info.messageId,
      to: options.to,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Failed to send email. Please try again later.");
  }
};

// Send confirmation email to user
export const sendConfirmationEmail = async (
  userEmail: string,
  userName: string
): Promise<void> => {
  const confirmationHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Contacting Us!</h1>
        </div>
        <div class="content">
          <p>Hi ${userName},</p>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>The Team</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await sendContactEmail({
    to: userEmail,
    subject: "We received your message",
    html: confirmationHTML,
  });
};

export { generateEmailHTML };
