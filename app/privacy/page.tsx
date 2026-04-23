import { Navbar } from "@/components/navbar";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <WavyBackground>
        <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-white/80">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Introduction
                </h2>
                <p>
                  This Privacy Policy describes how Voyager ("we", "us", "our", or "Company")
                  collects, uses, and shares information about you when you visit our website
                  and related online services (collectively, the "Services").
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Information We Collect
                </h2>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Contact us through our contact form</li>
                  <li>Subscribe to our newsletter or notifications</li>
                  <li>Participate in surveys or feedback forms</li>
                  <li>Interact with our Services</li>
                </ul>
              </section>

              {/* Automatically Collected Information */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Automatically Collected Information
                </h2>
                <p className="mb-4">
                  When you access our Services, we automatically collect certain information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Log data (IP address, browser type, pages visited)</li>
                  <li>Device information (device type, operating system)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Usage analytics and interaction data</li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  How We Use Your Information
                </h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Provide, maintain, and improve our Services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you updates and promotional content (with your consent)</li>
                  <li>Analyze usage patterns and improve user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Detect and prevent fraud or security issues</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Information Sharing
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties.
                  We may share information with service providers who assist us in operating
                  our website and conducting our business, subject to confidentiality agreements.
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures to protect
                  your personal information against unauthorized access, alteration, disclosure,
                  or destruction. However, no method of transmission over the Internet is 100%
                  secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Your Rights
                </h2>
                <p className="mb-4">Depending on your location, you may have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of promotional communications</li>
                  <li>Request portability of your data</li>
                </ul>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Cookies and Tracking
                </h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience.
                  You can control cookie settings through your browser preferences. Please note
                  that disabling cookies may affect the functionality of our Services.
                </p>
              </section>

              {/* Third-Party Links */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Third-Party Links
                </h2>
                <p>
                  Our Services may contain links to third-party websites. We are not responsible
                  for the privacy practices of these external sites. Please review their privacy
                  policies before providing any personal information.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Children's Privacy
                </h2>
                <p>
                  Our Services are not intended for children under 13 years of age. We do not
                  knowingly collect personal information from children. If we become aware of such
                  collection, we will delete the information and notify the parent or guardian.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy periodically. We will notify you of any
                  material changes by posting the new Privacy Policy on this page and updating
                  the effective date. Your continued use of our Services constitutes your
                  acceptance of the updated policy.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy or our privacy practices,
                  please contact us at{" "}
                  <a
                    href="mailto:support@athar.com"
                    className="text-white hover:text-white/70 transition-colors"
                  >
                    support@athar.com
                  </a>
                </p>
              </section>

              {/* Effective Date */}
              <div className="border-t border-white/20 pt-8 mt-8">
                <p className="text-sm text-white/60">
                  Effective Date: April 23, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </WavyBackground>
    </>
  );
}
