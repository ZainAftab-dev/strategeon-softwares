import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img src="/logo.png" alt="Strategeon Softwares" className="footer-logo" width={56} height={56} />
            <p>
              Full stack development solutions for businesses that need modern,
              scalable, high-performing web and mobile applications.
            </p>
            <p>Real solutions. Real results.</p>
          </div>
          <div>
            <h4>Pages</h4>
            <div className="footer-links">
              {navItems.slice(1, 7).map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <div className="footer-links">
              <Link href="/insights">Insights</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/work">Case Studies</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <p><Mail size={16} /> info@strategeonsoftwares.com</p>
            <p><Phone size={16} /> +1 (640) 227-4748</p>
            <p><MapPin size={16} /> 7901 4th St N # 21548, Saint Petersburg, FL 33702</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Strategeon Softwares. All rights reserved.</span>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
