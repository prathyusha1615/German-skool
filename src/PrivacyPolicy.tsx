import Header from "./components/Header";
import Footer from "./components/Footer";
const PrivacyPolicy = () => {
  return (
    <>
      <Header />
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-[#022850] md:text-4xl text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-[#757279] mb-8">
        At Online German Skool, a part of The Language Skool (TLS), we understand the importance of your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide when visiting our website [www.onlinegermanskool.com] (the “Site”).
        By using our Site, you agree to this Privacy Policy and the associated Terms and Conditions. If you do not agree, please do not use the Site.
      </p>

      <h2 className="text-[#022850] text-2xl font-semibold mb-2">1. Relationship with The Language Skool (TLS)</h2>
      <p className="text-[#757279] mb-4">
        Online German Skool operates as a division under The Language Skool (TLS). All references to “we”, “our”, or “us” in this Privacy Policy refer collectively to Online German Skool and The Language Skool (TLS).
        Certain information collected on this Site may be shared with or processed by TLS to help improve services, maintain compliance, and ensure consistent quality across all TLS divisions.
      </p>

      <h2 className="text-[#022850] text-2xl font-semibold mb-2">2. Personal and Other Information</h2>
      <p className="text-[#757279] mb-4">
        Through your interaction and use of our Site, Online German Skool may collect:
        <br />
        <strong>Personal Information:</strong> data that identifies or relates to you as an individual, such as your name, address, email, phone number, or other contact details.
        <br />
        <strong>Other Information:</strong> data that does not directly identify you, such as browser type, device information, location, and aggregated statistics.
        <br />
        When Personal and Other Information are combined, we treat the combined data as Personal Information.
      </p>

      <h2 className="text-[#022850] text-2xl font-semibold mb-2">3. Information You Provide to Us</h2>
      <p className="text-[#757279] mb-4">
        When you contact us, request information, or enrol in a course through our Site, we collect and store the Personal Information you provide to assist us in responding to your inquiries and delivering our services.
        If you submit information for employment opportunities, we may use it for recruitment, evaluation, and communication purposes in accordance with TLS’s HR policies.
      </p>

      <h2 className="text-[#022850] text-2xl font-semibold mb-2">4. Information We Collect Automatically</h2>
      <p className="text-[#757279] mb-4">
        We may use cookies, analytics tools, and web server logs to collect data about your visit, including:
        <br />
        IP address, browser type, and device information
        <br />
        Pages visited and time spent
        <br />
        Referring URLs
        <br />
        Cookies help us enhance user experience, improve functionality, and analyse website performance. You can adjust your browser settings to refuse cookies; however, some parts of the Site may not function properly.
      </p>

      <h2 className="text-[#022850] text-2xl font-semibold mb-2">5. How We Use Your Information</h2>
      <p className="text-[#757279] mb-4">
        In accordance with applicable law, Online German Skool and The Language Skool (TLS) may use your Personal and Other Information to:
      </p>
        <ul className="list-disc pl-6 text-[#757279] mb-4">
          <li>Provide, personalise, and improve our educational services</li>
          <li>Communicate updates, offers, or information you have opted in to receive</li>
          <li>Respond to inquiries or customer support requests</li>
          <li>Prevent fraud, enhance security, and ensure site integrity</li>
          <li>Comply with legal obligations and resolve disputes</li>
        </ul>

      <h2 className="text-[#022850] text-2xl font-semibold mb-2">6. Information Sharing</h2>
      <p className="text-[#757279] mb-4">
        We do not sell or rent your Personal Information. However, we may share it under these circumstances:
      </p>
        <ul className="list-disc pl-6 text-[#757279] mb-4">
          <li>With TLS for operational and service improvement purposes</li>
          <li>With service providers who assist us in operating the Site and delivering services</li>
          <li>When required by law or to protect rights, property, or safety</li>
          <li>In connection with business transfers, such as mergers or acquisitions</li>
        </ul>

      <h2 className="text-[#022850] text-2xl font-semibold mb-2">7. Google AdSense</h2>
      <p className="text-[#757279] mb-4">
        Our website uses Google AdSense, provided by Google Inc. Google may use cookies to serve ads based on your interests. You can opt out of personalised advertising by visiting the Google Ad Settings page.
      </p>

      <h2 className="text-[#022850] text-2xl font-semibold mb-2">8. Children’s Privacy</h2>
      <p className="text-[#757279] mb-4">
        Online German Skool does not knowingly collect Personal Information from children under the age of 13. If you believe your child has provided information to us, please contact us immediately so that we can take appropriate action.
      </p>

      <h2 className="text-[#022850] text-2xl font-semibold mb-2">9. Data Security</h2>
      <p className="text-[#757279] mb-4">
        We take reasonable administrative, technical, and physical measures to protect your data against unauthorised access or disclosure. However, no online system can be guaranteed to be completely secure.
      </p>

      <h2 className="text-[#022850] text-2xl font-semibold mb-2">10. Changes to This Privacy Policy</h2>
      <p className="text-[#757279] mb-4">
        We may update this Privacy Policy periodically. Any revisions will be posted on this page with the updated Effective Date. Continued use of our Site after changes means you accept the revised policy.
      </p>

      <h2 className="text-[#022850] text-2xl font-semibold mb-2">11. Links to Other Websites</h2>
      <p className="text-[#757279] mb-4">
        Our Site may contain links to third-party websites. Online German Skool and The Language Skool (TLS) are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies.
      </p>

      <h2 className="text-[#022850] text-2xl font-semibold mb-2">12. Your Rights and Choices</h2>
      <p className="text-[#757279] mb-4">
        You may choose to:
      </p>
        <ul className="list-disc pl-6 text-[#757279] mb-4">
          <li>Opt out of marketing communications by following the unsubscribe instructions in our emails</li>
          <li>Access, correct, or delete your Personal Information by contacting us</li>
          <li>Adjust your browser settings to manage cookies</li>
        </ul>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;
