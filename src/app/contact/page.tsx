import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SiteFrame from "@/components/SiteFrame";
import { contact, hours, serviceGroups } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & Hours",
  description: "Contact Arden & Shear, explore studio hours, or send a note about the service you're considering.",
  alternates: { canonical: "/contact" },
  openGraph: { type: "website", url: "/contact", title: "Contact & Hours | Arden & Shear", siteName: "Arden & Shear", description: "Find studio hours and contact details or send a note about the service you're considering.", images: [{ url: "/assets/social/og-image.png", width: 1200, height: 630, alt: "Contact Arden & Shear" }] },
  twitter: { card: "summary_large_image", title: "Contact & Hours | Arden & Shear", description: "Find studio hours and contact details or send a note to the studio.", images: ["/assets/social/og-image.png"] },
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <main id="main">
        <section className="contact-main tint" aria-labelledby="contact-content-title">
          <div className="wrap contact-layout">
            <div className="contact-form-column">
              <div className="section-head contact-form-heading"><p className="eyebrow">Send a note</p><h1 id="contact-content-title">What's on your mind?</h1></div>
              <ContactForm groups={serviceGroups.map((group) => ({ id: group.id, title: group.title, items: group.items.map((service) => service.name) }))} />
            </div>
            <aside className="contact-details">
              <div className="contact-detail-group">
                <h3><MapPin size={20} aria-hidden="true" />Find the studio</h3>
                <address>{contact.address.map((line) => <span key={line}>{line}</span>)}</address>
              </div>
              <div className="contact-detail-group">
                <h3><Phone size={20} aria-hidden="true" />Call us</h3>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </div>
              <div className="contact-detail-group">
                <h3><Mail size={20} aria-hidden="true" />Email</h3>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className="contact-detail-group">
                <h3><Clock3 size={20} aria-hidden="true" />Opening hours</h3>
                <dl className="hours">
                  {hours.map((item) => <div key={item.days}><dt>{item.days}</dt><dd>{item.time}</dd></div>)}
                </dl>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
