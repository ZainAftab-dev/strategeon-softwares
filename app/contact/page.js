import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Contact | Strategeon Softwares",
  description: "Schedule a free consultation with Strategeon Softwares. Share your project goals and get a practical next step."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to"
        highlight="build"
        text="Schedule a free consultation and share the product, platform, or growth system your business needs next."
      />
      <section className="section">
        <div className="container split">
          <div className="copy">
            <span className="eyebrow">Start the conversation</span>
            <h2>We will help you shape the next practical step.</h2>
            <p>
              Send a few details about your business goal, timeline, and current
              challenge. Every submission lands directly in our inbox.
            </p>
            <div className="contact-methods">
              <div className="card">
                <Mail size={26} className="card-icon" />
                <h3>Email</h3>
                <p>ozsoftwareagency@gmail.com</p>
              </div>
              <div className="card">
                <Phone size={26} className="card-icon" />
                <h3>Phone</h3>
                <p>+1 (640) 227-4748</p>
              </div>
              <div className="card">
                <MapPin size={26} className="card-icon" />
                <h3>Address</h3>
                <p>7901 4th St N # 21548<br />Saint Petersburg, FL 33702</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
