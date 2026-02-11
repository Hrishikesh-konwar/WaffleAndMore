'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-foreground mb-4">Privacy Policy</h1>
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
                  Waffles and More ("we," "us," or "our") operates the website. This page informs
                  you of our policies regarding the collection, use, and disclosure of personal
                  data when you use our website and the choices you have associated with that data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">2. Information Collection</h2>
                <p className="leading-relaxed mb-4">
                  We collect different types of information for various purposes to provide and
                  improve our website and services to you.
                </p>
                <div className="ml-4 space-y-4">
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Personal Data:</h3>
                    <p className="leading-relaxed">
                      While using our website, we may ask you to provide us with certain personally
                      identifiable information that can be used to contact or identify you
                      ("Personal Data"). This may include, but is not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>Name and Email address</li>
                      <li>Phone number</li>
                      <li>Messages you send us through our contact form</li>
                      <li>Cookies and usage data</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Usage Data:</h3>
                    <p className="leading-relaxed">
                      We may also collect information about how the website is accessed and used
                      ("Usage Data"). This may include information such as your computer's IP
                      address, browser type, browser version, the pages you visit, and other
                      diagnostic data.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">3. Use of Data</h2>
                <p className="leading-relaxed mb-4">
                  Waffles and More uses the collected data for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide and maintain our website and services</li>
                  <li>To notify you about changes to our website or services</li>
                  <li>To allow you to participate in interactive features of our website</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so we can improve our website</li>
                  <li>To monitor the usage of our website</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">4. Security of Data</h2>
                <p className="leading-relaxed">
                  The security of your data is important to us but remember that no method of
                  transmission over the Internet or method of electronic storage is 100% secure.
                  While we strive to use commercially acceptable means to protect your Personal
                  Data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">5. Cookies</h2>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website
                  and hold certain information. Cookies are files with a small amount of data which
                  may include an anonymous unique identifier. Most browsers have the option to
                  disable cookies. If you choose to disable cookies, you may not be able to use
                  certain portions of our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">6. Third-Party Services</h2>
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for
                  the privacy practices of these other websites. We encourage you to review the
                  privacy policies of any third-party websites before providing your personal
                  information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">
                  7. Changes to This Privacy Policy
                </h2>
                <p className="leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any
                  changes by posting the new Privacy Policy on this page and updating the "Last
                  updated" date at the top of this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">8. Your Rights</h2>
                <p className="leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to our processing of your personal data</li>
                  <li>Request restriction of processing of your personal data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4">9. Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
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
