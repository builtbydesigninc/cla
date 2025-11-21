import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0c0a05', color: '#ffffff' }}>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-20 md:py-32 text-white/90 prose prose-invert">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6">
          <p className="font-bold">Clinic Launch Academy Mobile App</p>
          <p>Last Updated: November 19, 2025</p>
          
          <p>This Privacy Policy describes how Clinic Launch Academy ("CLA", "we", "us", or "our") collects, uses, stores, and protects information when you use the Clinic Launch Academy Mobile App ("the App"), a customized and white-labeled version of the GoHighLevel ("GHL") platform.</p>
          
          <p>By accessing or using the App, you agree to the practices described in this Privacy Policy.</p>
          
          <div className="bg-yellow-900/30 border border-yellow-500/30 p-4 rounded-lg">
            <p className="font-bold text-yellow-200">IMPORTANT NOTICE: This App is a business management tool for facilitating B2B connections in the healthcare industry. It is not a medical device, diagnostic tool, or patient care system.</p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>We may collect the following categories of information:</p>
          
          <h3 className="text-xl font-bold mt-4 mb-2">A. Personal Information Provided by You</h3>
          <p>When creating an account or using features inside the App, you may provide:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business/clinic information</li>
            <li>Login credentials</li>
            <li>Appointment details</li>
            <li>Uploaded files (documents, media, forms)</li>
            <li>Payment details (processed through third-party gateways)</li>
            <li>Communication preferences</li>
          </ul>

          <h3 className="text-xl font-bold mt-4 mb-2">B. Business Information You Enter</h3>
          <p>You may store information about your business contacts, leads, or clients, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Contact details</li>
            <li>Appointment history</li>
            <li>Notes and messages</li>
            <li>Questionnaire responses</li>
            <li>Tags, pipeline stages, and CRM records</li>
          </ul>
          <p>You are solely responsible for ensuring this data complies with all applicable laws (HIPAA, GDPR, TCPA, CCPA, and others).</p>

          <h3 className="text-xl font-bold mt-4 mb-2">C. Automatically Collected Data</h3>
          <p>When you use the App, we (or GHL) may automatically collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Device information and identifiers</li>
            <li>IP address</li>
            <li>App version and performance data</li>
            <li>Browser type and operating system</li>
            <li>Usage logs and interaction data</li>
            <li>Page views and session duration</li>
            <li>Crash analytics</li>
          </ul>

          <h3 className="text-xl font-bold mt-4 mb-2">D. Cookies & Tracking Technologies</h3>
          <p>The App and web-based interfaces may use:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cookies</li>
            <li>Pixels and web beacons</li>
            <li>Local storage</li>
            <li>Analytics tools</li>
          </ul>
          <p>These help improve performance, personalization, and user experience.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide access to the App and its features</li>
            <li>Enable CRM, pipeline, automation, email, and SMS functions</li>
            <li>Improve app performance and stability</li>
            <li>Offer training and support services</li>
            <li>Personalize your experience</li>
            <li>Communicate updates, alerts, or service messages</li>
            <li>Process payments and billing</li>
            <li>Comply with legal or regulatory requirements</li>
            <li>Protect against fraud and security threats</li>
          </ul>
          <p>We do not sell or rent your personal information to third parties.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Business Facilitation Services</h2>
          <p>This App facilitates B2B connections between healthcare providers and suppliers. We do not:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide medical advice or services</li>
            <li>Store medical records or patient data</li>
            <li>Handle diagnostic or treatment information</li>
            <li>Guarantee regulatory compliance unless separately contracted</li>
          </ul>
          <p>If you enter sensitive business or client data into the App, you are fully responsible for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Complying with all applicable regulations</li>
            <li>Obtaining proper consents</li>
            <li>Maintaining legal use of communication tools</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. How We Share Information</h2>
          <p>We may share data only in the following situations:</p>

          <h3 className="text-xl font-bold mt-4 mb-2">A. With GoHighLevel (Platform Provider)</h3>
          <p>Since the App is built on GHL:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>All hosting, data storage, and backend services are managed by GHL</li>
            <li>Information you enter is stored on their secure servers</li>
            <li>Their privacy policy applies to storage and infrastructure</li>
          </ul>

          <h3 className="text-xl font-bold mt-4 mb-2">B. With Trusted Service Providers</h3>
          <p>Information may be shared with:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email/SMS service providers</li>
            <li>Payment processors</li>
            <li>Cloud storage providers</li>
            <li>Analytics and performance monitoring tools</li>
            <li>Customer support platforms</li>
          </ul>
          <p>All third-party vendors must meet appropriate security requirements.</p>

          <h3 className="text-xl font-bold mt-4 mb-2">C. For Legal or Protection Reasons</h3>
          <p>We may disclose information if required to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Comply with laws, regulations, or legal requests</li>
            <li>Enforce our Terms & Conditions</li>
            <li>Protect our rights, property, or safety</li>
            <li>Prevent security breaches or fraud</li>
            <li>Respond to government requests</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
          <p>We implement industry-standard technical and organizational measures to protect your data, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Encryption in transit and at rest (via GHL infrastructure)</li>
            <li>Access control and authentication safeguards</li>
            <li>Regular security assessments</li>
            <li>Secure hosting environments</li>
          </ul>
          <p>However, no system is completely secure, and we cannot guarantee absolute protection. You are responsible for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Maintaining strong passwords</li>
            <li>Securing your devices</li>
            <li>Managing team member access permissions</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Retention</h2>
          <p>We retain your data for as long as:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your account remains active</li>
            <li>Required by applicable law</li>
            <li>Needed to provide services or maintain records</li>
            <li>Necessary for legitimate business purposes</li>
          </ul>
          <p>You may request deletion of your data at any time (subject to legal exceptions).</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Communications: SMS, Email & Notifications</h2>
          <p>The App allows you to send:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>SMS messages</li>
            <li>Email campaigns</li>
            <li>Automated workflows</li>
            <li>Appointment reminders</li>
            <li>Marketing communications</li>
          </ul>
          <p>You agree to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Follow TCPA, CAN-SPAM, carrier regulations, and local laws</li>
            <li>Obtain proper consent from all recipients</li>
            <li>Manage opt-in/opt-out processes appropriately</li>
            <li>Maintain suppression lists</li>
          </ul>
          <p>You are solely responsible for compliance with all communication regulations.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Your Rights</h2>
          <p>Depending on your location, you may have rights to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Restrict or object to processing</li>
            <li>Request data portability</li>
            <li>Withdraw consent</li>
            <li>Lodge a complaint with supervisory authorities</li>
          </ul>
          <p>To exercise these rights, contact us using the details below.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. California Residents Rights (CCPA)</h2>
          <p>California residents have additional rights including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Right to know what personal information is collected</li>
            <li>Right to delete personal information</li>
            <li>Right to opt-out of data sales (we do not sell personal data)</li>
            <li>Right to non-discrimination for exercising privacy rights</li>
          </ul>
          <p>To exercise these rights, email: <a href="mailto:info@cliniclaunchacademy.com" className="text-yellow-500 hover:underline">info@cliniclaunchacademy.com</a></p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Apple App Store Privacy</h2>
          <p>When using our iOS app:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>We may use Apple Sign-In for authentication</li>
            <li>Analytics may be shared with Apple for app improvement</li>
            <li>Push notifications require your explicit permission</li>
            <li>Location services are only used with your consent</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Children's Privacy</h2>
          <p>The App is not intended for individuals under 18 years of age. We do not knowingly collect information from minors. If you believe a minor has provided information, please contact us immediately.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">12. International Data Transfers</h2>
          <p>Because the App uses global hosting infrastructure:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Data may be stored or processed outside your country</li>
            <li>Transfers comply with applicable legal frameworks</li>
            <li>Appropriate safeguards are implemented for cross-border transfers</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">13. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. Updates take effect immediately upon posting. We will notify you of material changes via email or App notification. Your continued use signifies acceptance of modifications.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">14. Contact Information</h2>
          <p>For questions, requests, or concerns regarding this Privacy Policy:</p>
          <div className="mt-4 space-y-1">
            <p className="font-bold">Clinic Launch Academy (CLA)</p>
            <p>Support Email: <a href="mailto:info@cliniclaunchacademy.com" className="text-yellow-500 hover:underline">info@cliniclaunchacademy.com</a></p>
            <p>Website: <a href="https://cliniclaunchacademy.com" className="text-yellow-500 hover:underline">https://cliniclaunchacademy.com</a></p>
            <p>Address: 11799 Sebastian Way Ste 103, Rancho Cucamonga, CA 91730</p>
            <p>Data Protection Officer: <a href="mailto:privacy@cliniclaunchacademy.com" className="text-yellow-500 hover:underline">privacy@cliniclaunchacademy.com</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

