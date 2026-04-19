# 🚀 Athar's Interactive Portfolio

> A modern, fully interactive portfolio website built with cutting-edge web technologies. Features dynamic 3D visualizations, interactive contact forms, and a seamless user experience.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&style=flat-square)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&style=flat-square)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&style=flat-square)](https://www.typescriptlang.org)
[![Three.js](https://img.shields.io/badge/Three.js-0.184-049EF4?logo=three.js&style=flat-square)](https://threejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-06B6D4?logo=tailwindcss&style=flat-square)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)](LICENSE)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Pages & Components](#pages--components)
- [API Routes](#api-routes)
- [Configuration](#configuration)
- [Environment Variables](#environment-variables)
- [Key Features Explained](#key-features-explained)
- [Performance Optimizations](#performance-optimizations)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### 🎨 Interactive 3D Components
- **3D Globe** - Interactive globe visualization with animated arcs showing global connections
- **Lamp Effect** - Dynamic lighting with smooth animations
- **3D Pins** - Interactive pin markers for locations
- **Webcam Pixel Grid** - Real-time motion detection with 3D elevation effects using webcam feed

### 📧 Smart Contact System
- **Contact Form** - Modern, responsive contact form with validation
- **Email Integration** - Nodemailer-powered email sending
- **Rate Limiting** - Protection against spam with intelligent rate limiting
- **Form Validation** - Client-side and server-side validation with Zod

### 🎯 Modern UI/UX
- **Dark Theme** - Beautiful dark mode design with smooth gradients
- **Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Background Animations** - Dynamic wavy and gradient backgrounds
- **Smooth Transitions** - Framer Motion powered animations

### 📱 Multi-Page Experience
- **Home** - Hero section with webcam pixel grid background
- **About** - Profile information with skills showcase
- **Projects** - Portfolio of projects
- **Blog** - Blog post section
- **Contact** - Full-featured contact form with globe visualization

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|---------------|
| **Frontend Framework** | Next.js 16.2, React 19.2 |
| **Language** | TypeScript 6.0 |
| **3D Graphics** | Three.js 0.184, React Three Fiber 9.6, Drei 10.7 |
| **Styling** | Tailwind CSS 4.2, Framer Motion 12.38 |
| **Form & Validation** | Zod 4.3, Validator 13.15 |
| **Email** | Nodemailer 8.0 |
| **UI Components** | Lucide React (icons) |
| **Build Tools** | Next.js built-in (Webpack, Turbopack) |
| **Package Manager** | npm |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Athar891/portfolio_project.git
cd portfolio_project

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 📦 Installation

### Prerequisites
- Node.js 18.0 or higher
- npm 9.0 or higher

### Step-by-Step Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/Athar891/portfolio_project.git
   cd portfolio_project
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your settings (see [Environment Variables](#environment-variables))

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

---

## 📁 Project Structure

```
portfolio_project/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Home page (/)
│   ├── layout.tsx               # Root layout
│   ├── about/
│   │   └── page.tsx             # About page (/about)
│   ├── blog/
│   │   └── page.tsx             # Blog page (/blog)
│   ├── projects/
│   │   └── page.tsx             # Projects page (/projects)
│   ├── contact/
│   │   └── page.tsx             # Contact page (/contact)
│   └── api/
│       └── contact/
│           └── route.ts         # Contact form API endpoint
├── components/                  # React components
│   ├── navbar.tsx              # Navigation bar
│   ├── footer.tsx              # Footer component
│   ├── ui/                      # UI components
│   │   ├── globe.tsx           # 3D globe component
│   │   ├── compact-globe.tsx   # Compact globe variant
│   │   ├── lamp.tsx            # Lamp effect component
│   │   ├── 3d-pin.tsx          # 3D pin component
│   │   ├── webcam-pixel-grid.tsx  # Webcam motion detection
│   │   ├── background-gradient.tsx # Gradient background
│   │   ├── glowing-effect.tsx  # Glow effect component
│   │   ├── wavy-background.tsx # Wavy animation background
│   │   └── globe-demo.tsx      # Globe demo
│   └── *-demo.tsx              # Component demos
├── lib/                         # Utility functions
│   ├── utils.ts                # General utilities
│   ├── email.ts                # Email sending logic
│   ├── rateLimit.ts            # Rate limiting
│   ├── validators.ts           # Form validation schemas
│   └── contactFormConfig.ts    # Contact form configuration
├── data/
│   └── globe.json              # Global data for 3D globe
├── public/
│   ├── images/
│   │   └── profile.jpg         # Profile picture
│   └── favicon.*               # Site favicon
├── styles/                      # Global styles
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts              # Next.js configuration
└── README.md                   # This file
```

---

## 🎨 Pages & Components

### Pages

#### **Home** (`/`)
- Hero section with webcam-powered pixel grid background
- Interactive motion detection visualization
- Resume download button
- Navigation bar

#### **About** (`/about`)
- Profile section with background gradient effect
- Skills showcase grid
- Professional information
- Custom lamp effect background

#### **Projects** (`/projects`)
- Project portfolio display
- Project cards with descriptions
- Responsive grid layout

#### **Blog** (`/blog`)
- Blog post listing
- Post navigation
- Reading experience optimized

#### **Contact** (`/contact`)
- Full-featured contact form
- 3D globe visualization
- Contact information
- Real-time form validation

### Key Components

#### **Webcam Pixel Grid** (`WebcamPixelGrid`)
Interactive component that captures webcam feed and converts it to an animated pixel grid with 3D elevation effects based on motion detection.

**Props:**
```typescript
{
  gridCols?: number;              // Columns in grid (default: 64)
  gridRows?: number;              // Rows in grid (default: 48)
  maxElevation?: number;          // Max height (default: 15)
  motionSensitivity?: number;     // Sensitivity 0-1 (default: 0.4)
  colorMode?: "webcam" | "monochrome";  // Color display mode
  backgroundColor?: string;       // Background color
  mirror?: boolean;               // Mirror webcam feed
  onWebcamError?: (error) => void;
  onWebcamReady?: () => void;
}
```

#### **3D Globe** (`Globe`)
Renders an interactive 3D globe with countries, animated arcs showing connections, and ring animations.

**Features:**
- Hexagonal country polygons
- Animated arc connections between locations
- Ring propagation effects
- Auto-rotation with orbit controls
- Customizable colors and animations

#### **Lamp Effect** (`Lamp`)
Dynamic lighting effect component using Three.js shaders for smooth, realistic illumination.

---

## 🔌 API Routes

### Contact Form Endpoint

**POST** `/api/contact`

Handles contact form submissions with validation, rate limiting, and email sending.

**Request Body:**
```json
{
  "fullName": "string",
  "email": "string",
  "company": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Error Response:**
```json
{
  "error": "Error message",
  "status": 400
}
```

**Features:**
- ✅ Email validation
- ✅ Rate limiting (prevents spam)
- ✅ Required field validation
- ✅ Secure email transmission
- ✅ Error handling

---

## ⚙️ Configuration

### Tailwind CSS
Configured in `tailwind.config.ts` with:
- Dark theme optimized
- Custom spacing and sizing
- Animation presets
- Extended color palette

### Next.js
Configured in `next.config.ts`:
- Image optimization
- Bundle optimization
- Environment variable handling

---

## 🔐 Environment Variables

Create `.env.local` file with the following variables:

```env
# Email Configuration
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@example.com

# Contact Email (where form submissions go)
CONTACT_EMAIL=contact@athar.com

# Rate Limiting
RATE_LIMIT_WINDOW_MS=3600000  # 1 hour
RATE_LIMIT_MAX_REQUESTS=5     # Max requests per window

# App Configuration
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 🎯 Key Features Explained

### 1. **Webcam Motion Detection**
The homepage features a real-time webcam feed converted into a dynamic pixel grid. Each pixel's elevation is determined by motion detection in that area, creating a 3D wave effect that responds to your movement.

```typescript
// Motion detection algorithm
const motion = Math.min(1, colorDifference / (255 * sensitivity));
pixelElevation = motion * maxElevation;
```

### 2. **Contact Form Validation**
Uses Zod for robust schema validation:
```typescript
const contactSchema = z.object({
  fullName: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Message too short"),
});
```

### 3. **Rate Limiting**
Prevents spam by limiting requests per IP:
- Configurable time window
- Configurable request limits
- Memory-based tracking (production: use Redis)

### 4. **3D Rendering with React Three Fiber**
Efficient 3D graphics rendering using:
- Canvas component from react-three-fiber
- Reusable 3D components
- Automatic cleanup
- Performance optimization

### 5. **Email Integration**
Nodemailer integration for sending contact form emails:
- SMTP authentication
- HTML email templates
- Error handling and logging
- Async/await pattern

---

## ⚡ Performance Optimizations

1. **Code Splitting** - Dynamic imports for heavy components
2. **Image Optimization** - Next.js Image component with sizing
3. **CSS Optimization** - Tailwind CSS purging unused styles
4. **3D Rendering** - WebGL canvas optimization
5. **Lazy Loading** - Components load on demand
6. **Caching** - Browser and server-side caching strategies
7. **Minification** - Automatic by Next.js build

---

## 🐛 Troubleshooting

### Webcam Access Issues
- **Problem**: "Camera access needed" popup
- **Solution**: Grant camera permissions in browser settings
- **Check**: Browser's privacy settings allow camera access

### 3D Components Not Loading
- **Problem**: Black screen or no globe visible
- **Solution**: Ensure JavaScript is enabled
- **Check**: GPU support for WebGL
- **Fallback**: Modern browsers provide fallback rendering

### Contact Form Not Sending
- **Problem**: "Failed to send message" error
- **Solution**: Check environment variables are set correctly
- **Check**: SMTP credentials are valid
- **Debug**: Check browser console for detailed errors

### Email Going to Spam
- **Problem**: Emails not arriving in inbox
- **Solution**: Configure SPF/DKIM records
- **Check**: Email domain verification
- **Debug**: Check email provider's spam folder

### Rate Limit Errors
- **Problem**: "Too many requests" on contact form
- **Solution**: Wait for rate limit window to reset
- **Check**: `RATE_LIMIT_WINDOW_MS` configuration
- **Debug**: Clear browser cache if stuck

---

## 📚 Scripts

```bash
# Development
npm run dev          # Start dev server on port 3000

# Production
npm run build        # Build optimized production bundle
npm start           # Start production server

# Code Quality
npm run lint        # Run Next.js linting
```

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Write TypeScript for type safety
- Follow Tailwind CSS naming conventions
- Add comments for complex logic
- Test responsive design
- Update documentation as needed

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Athar** - Full-stack developer passionate about building beautiful and functional web applications.

- GitHub: [@Athar891](https://github.com/Athar891)
- Email: contact@athar.com
- Phone: +91 8918394413

---

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - 3D Graphics Library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - React renderer for Three.js
- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation Library

---

## 📞 Support

For support, email contact@athar.com or open an issue on GitHub.

---

<div align="center">

Made with ❤️ by Athar

⭐ If you like this project, please consider giving it a star!

</div>
