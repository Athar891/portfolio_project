import { z } from "zod";
import validator from "validator";

// Zod schema for form validation
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name contains invalid characters"),
  email: z
    .string()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  company: z
    .string()
    .max(100, "Company name must be less than 100 characters")
    .optional()
    .nullable()
    .default(""),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(5000, "Message must be less than 5000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Sanitize input to prevent XSS
export const sanitizeInput = (input: string): string => {
  return validator.escape(input.trim());
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  return validator.isEmail(email);
};

// Check for suspicious patterns (spam indicators)
export const hasSuspiciousContent = (text: string): boolean => {
  const suspiciousPatterns = [
    /viagra|cialis|pharmacy|casino|lottery|prize/gi,
    /click here|buy now|limited offer/gi,
    /(http|https):\/\/[^\s]+/gi, // Multiple URLs
    /\b(xxx|porn|adult)\b/gi,
  ];

  // Count URLs
  const urlCount = (text.match(/(http|https):\/\/[^\s]+/g) || []).length;
  if (urlCount > 2) return true;

  // Check for suspicious keywords
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(text)) {
      return true;
    }
  }

  // Check for excessive capitalization
  const allCaps = text.replace(/[^A-Z]/g, "");
  if (allCaps.length > text.length * 0.5) return true;

  // Check for excessive special characters
  const specialChars = text.replace(/[a-zA-Z0-9\s]/g, "");
  if (specialChars.length > text.length * 0.3) return true;

  return false;
};

// Validate form data with zod
export const validateContactForm = (data: unknown) => {
  try {
    const validated = contactFormSchema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.issues.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        })),
      };
    }
    return { success: false, errors: [{ field: "unknown", message: "Validation failed" }] };
  }
};
