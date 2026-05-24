import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { AnimateInView, StaggerContainer, FadeItem, SlideLeft, SlideRight } from "@/components/AnimateInView";

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
          <SlideLeft className="copy">
            <span className="eyebrow">Start the conversation</span>
            <h2>We will help you shape the next practical step.</h2>
            <p>
              Send a few details about your business goal, timeline, and current
              challenge. Every submission lands directly in our inbox.
            </p>
            <StaggerContainer className="contact-methods">
              {[
                { Icon: Mail, title: "Email", text: "info@strategeonsoftwares.com" },
                { Icon: Phone, title: "Phone", text: "+1 (640) 227-4748" },
                { Icon: MapPin, title: "Address", text: "7901 4th St N # 21548\nSaint Petersburg, FL 33702" },
              ].map(({ Icon, title, text }) => (
                <FadeItem key={title}>
                  <div className="card">
                    <Icon size={26} className="card-icon" />
                    <h3>{title}</h3>
                    <p style={{ whiteSpace: "pre-line" }}>{text}</p>
                  </div>
                </FadeItem>
              ))}
            </StaggerContainer>
          </SlideLeft>
          <SlideRight>
            <ContactForm />
          </SlideRight>
        </div>
      </section>
    </>
  );
}
