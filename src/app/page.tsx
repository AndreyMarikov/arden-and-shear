import type { Metadata } from "next";
import Link from "next/link";
import { Icon, ArrowRight, Clock3, MessagesSquare, Phone, Scissors, Sparkles, Palette } from "lucide-react";
import { razor } from "@lucide/lab";
import Gallery from "@/components/Gallery";
import Photo, { resolvePhoto } from "@/components/Photo";
import SiteFrame from "@/components/SiteFrame";
import TeamGrid from "@/components/TeamGrid";
import { brand, contact, gallery, highlights, hours, photos, principles } from "@/content/site";

export const metadata: Metadata = {
  title: "Barbers & Hair Studio",
  description: "Thoughtful barbering, expressive color, and unhurried appointments at Arden & Shear, a fictional barbershop and hair studio concept.",
  alternates: { canonical: "/" },
};

const featuredIcons = [null, Sparkles, Palette] as const;

function FeaturedServiceIcon({ index, size }: { index: number; size: number }) {
  if (index === 0) {
    return <Icon iconNode={razor} size={size} strokeWidth={1.5} aria-hidden="true" />;
  }
  const IconComponent = featuredIcons[index] ?? Scissors;
  return <IconComponent size={size} strokeWidth={1.5} aria-hidden="true" />;
}

export default function Home() {
  const galleryItems = gallery.slice(0, 6).flatMap((item) => {
    const src = resolvePhoto(item.base);
    return src ? [{ src, alt: item.alt, ratio: item.ratio }] : [];
  });

  return (
    <SiteFrame>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy rule-block">
            <p className="eyebrow">{brand.descriptor} · Alderbrook</p>
            <h1 id="hero-title">Sharp lines, <em>soft landings.</em></h1>
            <p className="lead">Barbers and colorists under one roof. Precise cuts, honest advice, and an hour that never feels rushed.</p>
            <div className="actions">
              <a className="btn btn-dark" href={contact.phoneHref}><Phone size={18} strokeWidth={1.75} aria-hidden="true" />Call {contact.phone}</a>
              <Link className="link-arrow" href="/services">Explore the menu <ArrowRight size={18} strokeWidth={1.75} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="hero-media">
            <Photo {...photos.hero} sizes="(min-width: 960px) 58vw, 100vw" priority className="hero-photo" />
            <aside className="glass" aria-label="Popular services">
              <ul>
                {highlights.map((h, i) => {
                  return <li key={h.label}><FeaturedServiceIcon index={i} size={20} /><span>{h.label}</span><strong>{h.price}</strong></li>;
                })}
              </ul>
              <Link className="link-arrow" href="/services">Full menu <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" /></Link>
            </aside>
          </div>
        </section>

        <section className="section tint" aria-labelledby="approach-title">
          <div className="wrap split-intro">
            <div className="section-head reveal">
              <p className="eyebrow">A little different</p>
              <h2 id="approach-title">Two disciplines. One good chair.</h2>
            </div>
            <div className="split-intro-copy reveal">
              <p className="lead">Old-school barbering and thoughtful hair color belong together. We built a calm, collaborative studio for people who care about the details—and the feeling of being looked after.</p>
              <Link className="link-arrow" href="/about">Get to know us <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="section wrap" aria-labelledby="services-preview-title">
          <div className="section-head reveal">
            <p className="eyebrow">Services & pricing</p>
            <h2 id="services-preview-title">A menu without the mystery.</h2>
            <p className="lead">Clear starting prices, thoughtful consultations, and no surprises at the chair.</p>
          </div>
          <div className="featured-services">
            {highlights.map((item, i) => {
              return (
                <Link href="/services" className="featured-service reveal" key={item.label}>
                  <span className="featured-service-icon"><FeaturedServiceIcon index={i} size={23} /></span>
                  <span className="featured-service-name">{item.label}</span>
                  <strong>{item.price}</strong>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              );
            })}
          </div>
          <div className="section-end-link"><Link className="link-arrow" href="/services">View all services and prices <ArrowRight size={18} aria-hidden="true" /></Link></div>
        </section>

        <section className="section tint" aria-labelledby="team-preview-title">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow">The team</p>
              <h2 id="team-preview-title">Good hands, good conversation.</h2>
            </div>
            <TeamGrid limit={4} />
            <div className="section-end-link"><Link className="link-arrow" href="/team">Meet the team <ArrowRight size={18} aria-hidden="true" /></Link></div>
          </div>
        </section>

        {galleryItems.length > 0 && (
          <section className="section wrap" aria-labelledby="gallery-preview-title">
            <div className="section-head reveal">
              <p className="eyebrow">Recent work</p>
              <h2 id="gallery-preview-title">Cuts, colors and clean lines.</h2>
            </div>
            <Gallery items={galleryItems} />
            <div className="section-end-link"><Link className="link-arrow" href="/gallery">See the full gallery <ArrowRight size={18} aria-hidden="true" /></Link></div>
          </section>
        )}

        <section className="section wrap about home-about" aria-labelledby="about-preview-title">
          <div className="about-copy reveal">
            <p className="eyebrow">About the shop</p>
            <h2 id="about-preview-title">Room for a little ritual.</h2>
            <p className="lead">Bright, a little noisy at the right moments, and built around conversation. Every appointment starts with listening, then a plan, then the first snip.</p>
            <ul className="principles">
              {principles.slice(0, 2).map((principle, i) => {
                const Icon = i === 0 ? Clock3 : MessagesSquare;
                return <li key={principle.title}><Icon size={22} strokeWidth={1.5} aria-hidden="true" /><div><h3>{principle.title}</h3><p className="muted">{principle.text}</p></div></li>;
              })}
            </ul>
            <Link className="link-arrow" href="/about">Our approach <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="interiors">
            <Photo {...photos.interiors[0]} sizes="(min-width: 960px) 34vw, 74vw" className="reveal arch-left int-a" />
            <Photo {...photos.interiors[1]} sizes="(min-width: 960px) 22vw, 52vw" className="reveal int-b" />
          </div>
        </section>

        <section className="contact-band tint" aria-labelledby="contact-band-title">
          <div className="wrap contact-band-inner">
            <div><p className="eyebrow">Your next good hair day</p><h2 id="contact-band-title">Let's find you a time.</h2></div>
            <div className="actions"><a className="btn btn-dark" href={contact.phoneHref}><Phone size={18} aria-hidden="true" />Call to book</a><Link className="btn btn-ghost" href="/contact">Contact the studio <ArrowRight size={18} aria-hidden="true" /></Link></div>
          </div>
          <div className="wrap mini-hours"><Clock3 size={17} aria-hidden="true" /><span>{hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}</span></div>
        </section>
      </main>
    </SiteFrame>
  );
}
