import { Navbar } from "@/components/navbar";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Terms() {
  return (
    <>
      <Navbar />
      <WavyBackground>
        <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Terms of Service
            </h1>

            <div className="space-y-8 text-white/80">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Introduction
                </h2>
                <p>
                  These Terms of Service ("Terms") govern your access to and use of Voyager's
                  website and related online services (collectively, the "Services"). By accessing
                  or using our Services, you agree to be bound by these Terms. If you do not agree
                  with any part of these Terms, please do not use our Services.
                </p>
              </section>

              {/* Use License */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Use License
                </h2>
                <p className="mb-4">
                  Permission is granted to temporarily download one copy of the materials
                  (information or software) on our Services for personal, non-commercial transitory
                  viewing only. This is the grant of a license, not a transfer of title, and under
                  this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software on the Services</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              {/* Disclaimer */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Disclaimer of Warranties
                </h2>
                <p>
                  The materials on our Services are provided on an "as is" basis without any
                  warranties of any kind, either express or implied, including but not limited to
                  warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  We do not warrant that the Services will be uninterrupted, error-free, or free from
                  harmful components.
                </p>
              </section>

              {/* Limitations of Liability */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Limitations of Liability
                </h2>
                <p>
                  In no event shall Voyager or its suppliers be liable for any damages (including,
                  without limitation, damages for loss of data or profit, or due to business
                  interruption) arising out of the use or inability to use the materials on our
                  Services, even if we or an authorized representative has been notified orally or
                  in writing of the possibility of such damage.
                </p>
              </section>

              {/* Accuracy of Materials */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Accuracy of Materials
                </h2>
                <p>
                  The materials appearing on our Services could include technical, typographical,
                  or photographic errors. We do not warrant that any of the materials on our Services
                  are accurate, complete, or current. We may make changes to the materials contained
                  on our Services at any time without notice.
                </p>
              </section>

              {/* Materials and Content */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Materials and Content
                </h2>
                <p>
                  Unless otherwise stated, we own the intellectual property rights for all material
                  on our Services. All intellectual property rights are reserved. You may access this
                  for personal use subject to restrictions set in these terms and conditions. You must
                  not reproduce, sell, resell, or exploit any materials from our Services without our
                  prior written permission.
                </p>
              </section>

              {/* User Comments */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  User Comments and Submissions
                </h2>
                <p className="mb-4">
                  In these Terms, "User Comments" shall mean any audio, visual, text, or other content
                  submitted, posted, or displayed on our Services. By submitting User Comments, you
                  grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, adapt,
                  publish, translate, and distribute it in any media. User Comments must not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Be obscene, offensive, or abusive</li>
                  <li>Violate any laws or regulations</li>
                  <li>Infringe upon third-party intellectual property rights</li>
                  <li>Contain viruses or malware</li>
                  <li>Constitute harassment or defamation</li>
                </ul>
              </section>

              {/* Third-Party Links */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Third-Party Links
                </h2>
                <p>
                  Our Services may contain links to third-party websites and resources. These links
                  are provided for your convenience, and we do not endorse, control, or assume
                  responsibility for the content, accuracy, or practices of these external sites.
                  Your use of third-party websites is governed by their own terms and conditions.
                </p>
              </section>

              {/* Modifications to Terms */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Modifications to Terms
                </h2>
                <p>
                  We may revise these Terms at any time without notice. By using our Services, you are
                  agreeing to be bound by the then current version of these Terms. If you do not agree
                  with the revised Terms, please discontinue using our Services.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Governing Law
                </h2>
                <p>
                  These Terms and all related documents are governed by and construed in accordance
                  with the laws of the jurisdiction in which Voyager operates, without regard to its
                  conflict of law principles.
                </p>
              </section>

              {/* Indemnification */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Indemnification
                </h2>
                <p>
                  You agree to defend, indemnify, and hold harmless Voyager from and against any and
                  all losses, damages, liabilities, and expenses arising out of your use of our
                  Services or any claims related to your violation of these Terms.
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Termination
                </h2>
                <p>
                  We reserve the right to terminate or suspend your access to our Services at any time,
                  without notice, for conduct that we believe violates these Terms or any applicable
                  laws or regulations. Upon termination, you must cease all use of our Services and
                  destroy any downloaded materials.
                </p>
              </section>

              {/* Entire Agreement */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Entire Agreement
                </h2>
                <p>
                  These Terms, together with our Privacy Policy and any other policies referenced herein,
                  constitute the entire agreement between you and us regarding your use of our Services
                  and supersede all prior and contemporaneous agreements, representations, and warranties.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at{" "}
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
