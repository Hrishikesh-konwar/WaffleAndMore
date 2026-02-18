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
            <p className="text-lg text-secondary-foreground/90">Last Updated: February 18, 2026</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-foreground">
              <div>
                <p className="leading-relaxed">
                  Waffles & More (hereinafter referred to as "Platform", "Website", "Waffles & More") is a website owned and operated by JAY SHAILESHKUMAR MODI (hereinafter referred to as "we", "us", or "our").
                </p>
                <p className="leading-relaxed mt-4">
                  This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our services via our website or any of our digital platforms (collectively, the "Platform").
                </p>
                <p className="leading-relaxed mt-4">
                  By accessing or using our Platform, you agree to the collection and use of your information in accordance with this Privacy Policy and applicable data protection laws, including but not limited to the Information Technology Act, 2000 (India), and the Digital Personal Data Protection Act, 2023.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">1. Definitions</h2>
                <ul className="space-y-3 ml-4">
                  <li><strong>Service</strong> – Waffles & More's website and associated features and services.</li>
                  <li><strong>Personal Data</strong> – Any information relating to an identified or identifiable natural person.</li>
                  <li><strong>Usage Data</strong> – Information collected automatically through the use of the Platform.</li>
                  <li><strong>Cookies</strong> – Small files stored on your device used to improve your user experience.</li>
                  <li><strong>Data Controller</strong> – Waffles & More determines the purposes and means of processing personal data.</li>
                  <li><strong>Consent</strong> – Freely given, specific, informed, and unambiguous indication of the user's wishes.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-secondary mb-3 mt-6">a. Personal Data You Provide</h3>
                <p className="leading-relaxed mb-3">When you interact with Waffles & More, we may collect:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Full name, email address, contact number</li>
                  <li>Delivery address and location</li>
                  <li>Social media login data (if you use third-party sign-ins)</li>
                  <li>Order history and preferences</li>
                  <li>Payment and billing information (handled via secure third-party gateways)</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary mb-3 mt-6">b. Automatically Collected Usage Data</h3>
                <p className="leading-relaxed mb-3">When you visit or use our services, we may collect:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your IP address and geographic location</li>
                  <li>Browser type, operating system, and device model</li>
                  <li>Pages visited, features used, and time spent</li>
                  <li>Clickstream data and referring URLs</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary mb-3 mt-6">c. Cookies & Tracking Technologies</h3>
                <p className="leading-relaxed mb-3">We use cookies, web beacons, tags, and scripts for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Session management</li>
                  <li>Analytics and traffic monitoring</li>
                  <li>Personalization and remarketing</li>
                </ul>
                <p className="leading-relaxed mt-3">You can control cookies via your browser settings. However, disabling cookies may affect your experience.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">3. How We Use Your Data</h2>
                <p className="leading-relaxed mb-3">We process your data for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To process and fulfill your orders</li>
                  <li>To provide customer support and notify you of updates</li>
                  <li>To personalize your experience and improve service functionality</li>
                  <li>To send order confirmations, newsletters, and promotional offers (with opt-out options)</li>
                  <li>To enforce terms and conditions and protect against abuse</li>
                  <li>To comply with legal, tax, or contractual obligations</li>
                  <li>To analyze usage patterns and improve our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">4. Legal Basis for Processing</h2>
                <p className="leading-relaxed mb-3">Our legal basis for collecting and using your personal information includes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Consent</strong> – Where you have given consent for specific purposes</li>
                  <li><strong>Contractual Necessity</strong> – Where processing is necessary for a service you requested</li>
                  <li><strong>Legal Obligation</strong> – To comply with applicable laws</li>
                  <li><strong>Legitimate Interest</strong> – To enhance platform experience, prevent fraud, or analyze behavior</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">5. Data Sharing and Disclosure</h2>
                <p className="leading-relaxed mb-3">
                  We do not sell or rent your personal data. However, we may share data with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Authorized Service Providers:</strong> Payment processors (Zomato, Swiggy), delivery partners, cloud hosting, and analytics tools</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                  <li><strong>Legal Authorities:</strong> If required by law, regulation, or legal process</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  All third parties are contractually obligated to handle your data securely and only for permitted purposes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">6. Data Retention</h2>
                <p className="leading-relaxed mb-3">We retain your data for as long as necessary to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fulfill the purposes outlined in this Privacy Policy</li>
                  <li>Maintain business and transactional records</li>
                  <li>Comply with legal or regulatory obligations</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  When no longer required, your data will be securely deleted or anonymized.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">7. Your Data Protection Rights</h2>
                <p className="leading-relaxed mb-3">As a user, you have the following rights:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access</strong> – You may request a copy of the data we hold about you</li>
                  <li><strong>Correction</strong> – You may request that inaccurate data be corrected</li>
                  <li><strong>Deletion</strong> – You may request that we delete your personal data</li>
                  <li><strong>Objection</strong> – You may object to processing based on legitimate interests</li>
                  <li><strong>Consent Withdrawal</strong> – You can withdraw consent at any time</li>
                  <li><strong>Data Portability</strong> – Right to receive your data in a machine-readable format</li>
                  <li><strong>Restrict Processing</strong> – Right to restrict processing in certain cases</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  To exercise any of these rights, contact us at +91 94996 78796.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">8. Data Security</h2>
                <p className="leading-relaxed mb-3">We take your data security seriously. Measures we implement include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SSL encryption and secure HTTPS connections</li>
                  <li>Role-based access control within our systems</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Secure third-party payment gateways</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  However, no method of transmission over the Internet is 100% secure. We encourage you to take precautions such as using strong passwords.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">9. International Data Transfers</h2>
                <p className="leading-relaxed">
                  Your personal data may be transferred to and stored in countries outside your residence, including India, where data protection laws may differ. We ensure that appropriate safeguards are in place to protect your rights.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">10. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our Platform is not intended for users under the age of 18. We do not knowingly collect personal data from minors. If we become aware of such data being submitted, we will delete it immediately.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">11. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy periodically. If we make significant changes, we will notify you via email or website alerts. Continued use of the platform after any changes implies your consent to the updated policy. We request you to keep visiting our privacy policy page to see any changes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">12. Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  For questions, concerns, or to exercise your rights under this Policy, please contact:
                </p>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <p className="leading-relaxed">
                    <strong className="text-primary">Waffles & More</strong>
                    <br />
                    <strong>Owned & Operated by JAY SHAILESHKUMAR MODI</strong>
                    <br />
                    Shop No. 2, Nagarpalika Shopping Centre, Civil Road, Bharuch, Gujarat – 392001
                    <br />
                    Phone: +91 94996 78796
                    <br />
                    Instagram: @_wafflesandmore_
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
