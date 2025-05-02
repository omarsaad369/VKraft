import React from "react";
import "../styles/privacypolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="policy-title">Privacy Policy</h1>
      <p className="intro-text">
        Welcome to the "Custom Order Creation" website. We are committed to protecting your privacy and providing a safe experience on our platform.
        By using this website, you agree to the terms outlined in this Privacy Policy.
      </p>

      <section className="policy-section">
        <h2>1. Information We Collect</h2>
        <p>
          We collect information such as name, email address, phone number, address, and order details.
          Technical information such as device type, operating system, pages visited, and session duration may also be collected.
        </p>
      </section>

      <section className="policy-section">
        <h2>2. How We Use the Information</h2>
        <p>
          We use the information to provide accurate services, enhance user experience, send order-related notifications, and address technical issues.
        </p>
      </section>

      <section className="policy-section">
        <h2>3. Cookies</h2>
        <p>
          We use cookies to improve your experience on the site, analyze performance, and personalize content.
          You can manage cookie settings through your browser.
        </p>
      </section>

      <section className="policy-section">
        <h2>4. Information Security</h2>
        <p>
          We follow strict security standards to protect your data, including encryption, access restrictions, and continuous system updates.
        </p>
      </section>

      <section className="policy-section">
        <h2>5. Information Sharing</h2>
        <p>
          We do not sell or rent your information to third parties. Some data may be shared with technical partners strictly for service delivery and with full confidentiality compliance.
        </p>
      </section>

      <section className="policy-section">
        <h2>6. Data Retention</h2>
        <p>
          We retain your information only as long as necessary to provide services or as required by law. You can request your data to be deleted at any time.
        </p>
      </section>

      <section className="policy-section">
        <h2>7. User Rights</h2>
        <ul>
          <li>The right to know how your data is used.</li>
          <li>The right to update or correct your information.</li>
          <li>The right to request deletion of your personal data.</li>
          <li>The right to object to the use of your data for marketing purposes.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>8. Third-Party Links</h2>
        <p>
          The site may contain links to external websites. We are not responsible for their privacy practices, so we advise reviewing their policies upon visiting.
        </p>
      </section>

      <section className="policy-section">
        <h2>9. Privacy Policy Updates</h2>
        <p>
          We reserve the right to update this policy as needed. Significant changes will be communicated through the website or via email.
        </p>
      </section>

      <section className="policy-section">
        <h2>10. Contact Us</h2>
        <p>
          For any inquiries, please contact us via email:
          <a href="mailto:example@email.com"> example@email.com </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
