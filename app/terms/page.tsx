'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-foreground mb-4">Terms and Conditions</h1>
            <p className="text-lg text-secondary-foreground/90">Last updated: February 2025</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">1. Introduction</h2>
                <p className="leading-relaxed">
                  Welcome to Waffles and More. These Terms and Conditions govern your use of our
                  website and services. By accessing and using this website, you accept and agree
                  to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">2. Use License</h2>
                <p className="leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials
                  (information or software) on Waffles and More's website for personal,
                  non-commercial transitory viewing only. This is the grant of a license, not a
                  transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on another server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">3. Disclaimer</h2>
                <p className="leading-relaxed">
                  The materials on Waffles and More's website are provided on an 'as is' basis.
                  Waffles and More makes no warranties, expressed or implied, and hereby disclaims
                  and negates all other warranties including, without limitation, implied warranties
                  or conditions of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">
                  4. Limitations of Liability
                </h2>
                <p className="leading-relaxed">
                  In no event shall Waffles and More or its suppliers be liable for any damages
                  (including, without limitation, damages for loss of data or profit, or due to
                  business interruption) arising out of the use or inability to use the materials
                  on Waffles and More's website, even if Waffles and More or an authorized
                  representative has been notified orally or in writing of the possibility of such
                  damage.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">5. Accuracy of Materials</h2>
                <p className="leading-relaxed">
                  The materials appearing on Waffles and More's website could include technical,
                  typographical, or photographic errors. Waffles and More does not warrant that
                  any of the materials on its website are accurate, complete, or current. Waffles
                  and More may make changes to the materials contained on its website at any time
                  without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">6. Links</h2>
                <p className="leading-relaxed">
                  Waffles and More has not reviewed all of the sites linked to its website and is
                  not responsible for the contents of any such linked site. The inclusion of any
                  link does not imply endorsement by Waffles and More of the site. Use of any such
                  linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">7. Modifications</h2>
                <p className="leading-relaxed">
                  Waffles and More may revise these terms of service for its website at any time
                  without notice. By using this website, you are agreeing to be bound by the then
                  current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">
                  8. Governing Law and Jurisdiction
                </h2>
                <p className="leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the
                  laws of India, and you irrevocably submit to the exclusive jurisdiction of the
                  courts in Gujarat, India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">9. Contact Information</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="leading-relaxed">
                  <strong>Waffles and More</strong>
                  <br />
                  Phone: +91 9499678796
                  <br />
                  Bharuch Location: Nagarpalika Shopping Centre, Civil Hospital Road, Moficer Jin
                  Compound, Bharuch, Gujarat 392001
                  <br />
                  Ankleshwar Location: Orange Heights, Sardar Park, Golden Point Chowkdi Road, GIDC,
                  Ankleshwar, Gujarat 393002
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
