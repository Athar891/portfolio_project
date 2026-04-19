// Simple in-memory rate limiter
// In production, use Redis for distributed rate limiting

type RateLimitStore = {
  [key: string]: { count: number; resetTime: number };
};

const rateLimitStore: RateLimitStore = {};

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const key in rateLimitStore) {
    if (rateLimitStore[key].resetTime < now) {
      delete rateLimitStore[key];
    }
  }
}, 60000); // Cleanup every minute

export interface RateLimitOptions {
  maxRequests: number;
  windowMs: number; // Time window in milliseconds
}

export const checkRateLimit = (
  identifier: string,
  options: RateLimitOptions = { maxRequests: 5, windowMs: 3600000 } // 5 requests per hour
): { allowed: boolean; remaining: number; resetTime: number } => {
  const now = Date.now();
  const windowStart = now - options.windowMs;

  // Get or create entry
  if (!rateLimitStore[identifier]) {
    rateLimitStore[identifier] = { count: 1, resetTime: now + options.windowMs };
    return {
      allowed: true,
      remaining: options.maxRequests - 1,
      resetTime: rateLimitStore[identifier].resetTime,
    };
  }

  const entry = rateLimitStore[identifier];

  // Reset if window has passed
  if (entry.resetTime < now) {
    entry.count = 1;
    entry.resetTime = now + options.windowMs;
    return {
      allowed: true,
      remaining: options.maxRequests - 1,
      resetTime: entry.resetTime,
    };
  }

  // Check if limit exceeded
  if (entry.count >= options.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  // Increment count
  entry.count++;
  return {
    allowed: true,
    remaining: options.maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
};

// Extract IP from request headers
export const getClientIP = (request: Request): string => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  return "unknown";
};
