export const metadata = {
  title: "Privacy Policy | Strategeon Softwares",
  description: "How Strategeon Softwares collects, uses, and protects your personal information."
};

const LAST_UPDATED = "May 24, 2026";

export default function PrivacyPage() {
  return (
    <div className="article-page">
      <div className="container article-container">
        <span className="pill">Legal</span>
        <h1 className="article-title">Privacy Policy</h1>
        <p className="article-summary">
          Last updated: {LAST_UPDATED}
        </p>
        <div className="article-divider" />

        <div className="article-body">

          <div className="article-section">
            <h2>1. Who we are</h2>
            <p>
              Strategeon Softwares ("Strategeon", "we", "us", or "our") is a full stack software development
              company located at 7901 4th St N # 21548, Saint Petersburg, FL 33702, United States.
              We operate the website at this domain and provide software development services to
              businesses. You can reach us at ozsoftwareagency@gmail.com or +1 (640) 227-4748.
            </p>
          </div>

          <div className="article-section">
            <h2>2. What information we collect</h2>
            <p>
              We collect only the information you voluntarily provide through our contact form.
              This includes your name, email address, the type of project you are inquiring about,
              and any message you choose to send. We do not collect payment information, government
              identifiers, or sensitive personal data through this website. We do not use tracking
              cookies, advertising cookies, or third-party analytics cookies. We do not build
              behavioral profiles of website visitors.
            </p>
          </div>

          <div className="article-section">
            <h2>3. How we use your information</h2>
            <p>
              Information submitted through our contact form is used solely to respond to your
              inquiry and to discuss potential project work. We do not sell, rent, trade, or share
              your personal information with third parties for marketing purposes. We may follow up
              with you via email in connection with the inquiry you submitted. We do not add you to
              any mailing list without your explicit consent.
            </p>
          </div>

          <div className="article-section">
            <h2>4. Third-party services</h2>
            <p>
              Our contact form uses Web3Forms (web3forms.com) to deliver form submissions to our
              inbox. When you submit the contact form, your name, email address, project type, and
              message are transmitted to Web3Forms servers and forwarded to our email address.
              Web3Forms acts as a data processor on our behalf. Their privacy policy is available
              at web3forms.com. Our website is hosted on Vercel (vercel.com). Vercel processes
              standard server log data including IP addresses and request headers as part of
              delivering web pages. Their privacy policy is available at vercel.com/legal/privacy-policy.
              The hero image on our homepage is served from Unsplash (unsplash.com). When your
              browser loads this image, your IP address is shared with Unsplash as part of the
              standard HTTP request.
            </p>
          </div>

          <div className="article-section">
            <h2>5. Cookies and tracking</h2>
            <p>
              This website does not use cookies for tracking, advertising, or analytics purposes.
              We do not use Google Analytics, Meta Pixel, or any other behavioral tracking tools
              at this time. If we add analytics in the future, we will update this policy and
              implement appropriate consent mechanisms before doing so. Your browser may store
              standard technical data such as cached page assets, but this is controlled by your
              browser settings and is not used by us to track your behavior.
            </p>
          </div>

          <div className="article-section">
            <h2>6. Data retention</h2>
            <p>
              Form submissions are received via email and retained in our email account for as long
              as is necessary to manage the associated business inquiry. If no project engagement
              results from an inquiry, we do not retain the personal data beyond the period required
              to respond to your message. You may request deletion of your information at any time
              by contacting us at ozsoftwareagency@gmail.com.
            </p>
          </div>

          <div className="article-section">
            <h2>7. Your rights</h2>
            <p>
              Depending on where you are located, you may have the following rights regarding your
              personal data: the right to access the information we hold about you, the right to
              request correction of inaccurate information, the right to request deletion of your
              information, the right to object to or restrict processing of your information, and
              the right to data portability. Residents of California have additional rights under
              the California Consumer Privacy Act (CCPA), including the right to know what personal
              information is collected, the right to delete personal information, and the right to
              opt out of the sale of personal information. We do not sell personal information.
              To exercise any of these rights, contact us at ozsoftwareagency@gmail.com. We will
              respond to verifiable requests within 30 days.
            </p>
          </div>

          <div className="article-section">
            <h2>8. Children's privacy</h2>
            <p>
              This website is not directed at children under the age of 13. We do not knowingly
              collect personal information from children under 13. If you believe we have
              inadvertently collected such information, please contact us and we will delete it
              promptly.
            </p>
          </div>

          <div className="article-section">
            <h2>9. Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect the personal
              information we receive. Form submissions are transmitted over HTTPS. Our email
              account is protected with strong authentication. No method of transmission over the
              internet is completely secure, and we cannot guarantee absolute security, but we
              take the protection of your information seriously.
            </p>
          </div>

          <div className="article-section">
            <h2>10. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the
              "Last updated" date at the top of this page. We encourage you to review this page
              periodically. Continued use of this website after any changes constitutes your
              acceptance of the updated policy.
            </p>
          </div>

          <div className="article-section">
            <h2>11. Contact us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your personal
              information, please contact us at: Strategeon Softwares, 7901 4th St N # 21548,
              Saint Petersburg, FL 33702. Email: ozsoftwareagency@gmail.com.
              Phone: +1 (640) 227-4748.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
