/**
 * Contact Form Security & Configuration Guide
 *
 * This file documents best practices and common issues
 */

// ===================================
// COMMON CONFIGURATION ISSUES
// ===================================

// ❌ WRONG: Hardcoding credentials
// const GMAIL_PASSWORD = "myPassword123";
// ❌ WRONG: Exposing secrets in error messages
// return NextResponse.json({ error: `SMTP Error: ${error.message}` });

// ✅ CORRECT: Use environment variables
// const EMAIL_PASSWORD = process.env.GMAIL_APP_PASSWORD;
// ✅ CORRECT: Generic error messages
// return NextResponse.json({ error: "Failed to send email" });


// ===================================
// EMAIL PROVIDER QUICK REFERENCE
// ===================================

export const emailProviderConfigs = {
  gmail: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "your-email@gmail.com",
      pass: "16-character-app-password", // NOT your regular password!
    },
    notes: [
      "Enable 2-Step Verification",
      "Generate App Password at https://myaccount.google.com/apppasswords",
      "Use 16-character password without spaces",
      "Free tier has no sending limits",
    ],
  },

  sendgrid: {
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: "apikey", // Always use "apikey"
      pass: "your-sendgrid-api-key",
    },
    notes: [
      "Sign up at https://sendgrid.com",
      "Generate API Key in Settings > API Keys",
      "First 100 emails/day free",
      "$14.95/month for 100k emails",
    ],
  },

  awsSES: {
    host: "email-smtp.us-east-1.amazonaws.com", // Change region as needed
    port: 587,
    secure: false,
    auth: {
      user: "your-aws-smtp-username",
      pass: "your-aws-smtp-password",
    },
    notes: [
      "Configure SES in AWS Console",
      "Verify sender email address",
      "Request production access (starts in sandbox)",
      "Very cheap: ~$0.10 per 1000 emails",
    ],
  },

  mailgun: {
    host: "smtp.mailgun.org",
    port: 587,
    secure: false,
    auth: {
      user: "postmaster@your-domain.com",
      pass: "your-mailgun-smtp-password",
    },
    notes: [
      "Sign up at https://www.mailgun.com",
      "Free tier: 5000 emails/month",
      "Good for testing and small projects",
      "Need custom domain for production",
    ],
  },

  brevo: {
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: "your-brevo-email@example.com",
      pass: "your-brevo-smtp-key",
    },
    notes: [
      "Free tier: 300 emails/day",
      "Simple setup, no domain verification needed",
      "Good for portfolios and small sites",
      "Sign up at https://www.brevo.com",
    ],
  },
};

// ===================================
// SPAM DETECTION PATTERNS
// ===================================

export const spamPatterns = {
  suspiciousKeywords: [
    /viagra|cialis/gi,
    /casino|gambling|lottery/gi,
    /prize|winner|congratulations/gi,
    /click here|buy now|limited offer/gi,
    /urgent|act now|don't miss/gi,
  ],

  // These are detected but messages still succeed (silent fail)
  // This prevents attackers from knowing their spam was caught
  notes: [
    "Detected emails return 200 success but never send",
    "No indication given to spammer that message was blocked",
    "Legitimate users may need to rephrase if caught",
    "Consider disabling for internal beta testing",
  ],
};

// ===================================
// SECURITY CHECKLIST
// ===================================

export const securityChecklist = [
  {
    category: "Environment Variables",
    items: [
      "✅ Never commit .env.local to git",
      "✅ Use .gitignore to exclude .env.local",
      "✅ Rotate credentials regularly",
      "✅ Use app-specific passwords (Gmail)",
      "✅ Don't hardcode any secrets",
    ],
  },

  {
    category: "Input Validation",
    items: [
      "✅ Validate all inputs server-side",
      "✅ Sanitize to prevent XSS",
      "✅ Check string length limits",
      "✅ Validate email format",
      "✅ Reject suspicious content",
    ],
  },

  {
    category: "Rate Limiting",
    items: [
      "✅ 5 requests per hour per IP (default)",
      "✅ 429 status code on limit",
      "✅ Clear Retry-After header",
      "✅ Consider Redis for production",
      "✅ Log rate limit violations",
    ],
  },

  {
    category: "Email Security",
    items: [
      "✅ Use TLS/SSL (port 587)",
      "✅ Set Reply-To header",
      "✅ Don't expose credentials in emails",
      "✅ Include unsubscribe/removal options",
      "✅ Professional formatting",
    ],
  },

  {
    category: "Error Handling",
    items: [
      "✅ Don't expose internal errors to client",
      "✅ Log full errors server-side",
      "✅ Return generic error messages",
      "✅ Include error IDs for debugging",
      "✅ Monitor failed email attempts",
    ],
  },

  {
    category: "Deployment",
    items: [
      "✅ Use HTTPS only in production",
      "✅ Set secure headers",
      "✅ Enable CORS restrictions",
      "✅ Monitor API usage",
      "✅ Set up email delivery alerts",
    ],
  },
];

// ===================================
// QUICK SETUP COMMANDS
// ===================================

export const setupCommands = {
  setup: "npm install nodemailer validator zod",
  envSetup: "cp .env.example .env.local",
  testEmail: "node test-email.js",
  testForm: "bash test-contact-form.sh",
  linting: "npm run lint",
  build: "npm run build",
  deploy: "npm run build && npm run start",
};

// ===================================
// TESTING SCENARIOS
// ===================================

export const testScenarios = [
  {
    name: "Happy Path",
    description: "Valid form with all fields",
    data: {
      fullName: "John Doe",
      email: "john@example.com",
      company: "Acme Corp",
      message: "I'm interested in your services. Can you provide more details?",
    },
    expectedStatus: 200,
  },

  {
    name: "Minimal Form",
    description: "Only required fields",
    data: {
      fullName: "Jane Smith",
      email: "jane@example.com",
      company: "",
      message: "Your portfolio looks great! Let's connect.",
    },
    expectedStatus: 200,
  },

  {
    name: "Invalid Email",
    description: "Malformed email address",
    data: {
      fullName: "Bob",
      email: "not-an-email",
      company: "Test",
      message: "This should fail validation",
    },
    expectedStatus: 400,
  },

  {
    name: "Short Message",
    description: "Message below minimum length",
    data: {
      fullName: "Alice",
      email: "alice@example.com",
      company: "",
      message: "Too short",
    },
    expectedStatus: 400,
  },

  {
    name: "Spam Message",
    description: "Contains spam keywords",
    data: {
      fullName: "Spammer",
      email: "spam@example.com",
      company: "",
      message: "You won a prize! Click here now for casino games with viagra deals!",
    },
    expectedStatus: 200, // Returns 200 but silently fails
    silent: true,
  },

  {
    name: "Rate Limit",
    description: "6th request within rate limit window",
    repeats: 6,
    expectedStatus: "429 on 6th request",
  },

  {
    name: "Missing Fields",
    description: "Omit required field",
    data: {
      fullName: "Charlie",
      email: "charlie@example.com",
      // missing message
    },
    expectedStatus: 400,
  },

  {
    name: "XSS Attempt",
    description: "Message contains script tags",
    data: {
      fullName: "Attacker",
      email: "attacker@example.com",
      company: "",
      message: "Check this out: <script>alert('xss')</script>",
    },
    expectedStatus: 200, // Script is sanitized/escaped
  },
];

// ===================================
// PRODUCTION READINESS CHECKLIST
// ===================================

export const productionReadiness = {
  before_launch: [
    "✅ Test with actual email credentials",
    "✅ Verify emails are being received",
    "✅ Test all validation scenarios",
    "✅ Test rate limiting",
    "✅ Enable HTTPS",
    "✅ Set DEVELOPER_EMAIL to your actual email",
    "✅ Review all environment variables",
    "✅ Test in staging environment",
    "✅ Set up monitoring/alerting",
    "✅ Create backup email addresses",
  ],

  ongoing: [
    "📊 Monitor email delivery rates",
    "🔍 Review spam filter logs weekly",
    "🔄 Rotate credentials monthly",
    "📈 Track submission volume",
    "🛡️ Monitor for security issues",
    "📧 Check email provider's status page",
    "💾 Backup contact submissions if applicable",
    "🧪 Run penetration tests quarterly",
  ],
};

console.log(
  "📚 Contact Form Configuration Guide loaded. Check this file for best practices."
);
