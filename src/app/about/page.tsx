import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock, MessagesSquare } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import Photo from "@/components/Photo";
import SiteFrame from "@/components/SiteFrame";
import { brand, photos, principles } from "@/content/site";

export const metadata: Metadata = {
  title: "About the Studio",
  description: "Discover the approach behind Arden & Shear: considered barbering, thoughtful color, and a more personal studio experience.",
  alternates: { canonical: "/about" },
  openGraph: { type: "website", url: "/about", title: "About the Studio | Arden & Shear", siteName: "Arden & Shear", description: "Considered barbering, thoughtful color, and a more personal studio experience.", images: [{ url: "/arden-and-shear/assets/social/og-image.png", width: 1200, height: 630, alt: "Inside the Arden & Shear studio" }] },
  twitter: { card: "summary_large_image", title: "About the Studio | Arden & Shear", description: "Considered barbering, thoughtful color, and a more personal studio experience.", images: ["/arden-and-shear/assets/social/og-image.png"] },
};

const principleIcons = [Clock, MessagesSquare, Check];

export default function AboutPage() {
  return (
    <SiteFrame>
      <main id="main">
        <PageIntro eyebrow="A little about us" title={<>A modern studio. <em>A human pace.</em></>} description="Arden & Shear brings barbering and the hair studio together around a simple idea: great work starts with good listening." action={{ href: "/team", label: "Meet the people" }} />
        <section className="section tint" aria-labelledby="story-title">
          <div className="wrap about-story">
            <div className="about-story-copy">
              <p className="eyebrow">The idea</p>
              <h2 id="story-title">Different skills, one shared point of view.</h2>
              <p className="lead">{brand.name} began with one chair and a simple idea: good barbering and good color belong together. The shop is bright, a little noisy at the right moments, and built around conversation.</p>
              <p>We like clear plans, honest recommendations, and results that make sense for real life—not just the mirror on the way out. Whether it's a regular tidy-up or a change you've been thinking about for months, we make room to get it right.</p>
              <Link className="link-arrow" href="/services">See how we can help <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
            <div className="about-story-media">
              <Photo {...photos.interiors[0]} sizes="(min-width: 900px) 42vw, 92vw" className="arch-left" />
            </div>
          </div>
        </section>
        <section className="section wrap" aria-labelledby="principles-title">
          <div className="section-head"><p className="eyebrow">What matters here</p><h2 id="principles-title">Small things, done with care.</h2></div>
          <ul className="principles principles-cards">
            {principles.map((p, i) => {
              const Icon = principleIcons[i] ?? Check;
              return <li key={p.title}><Icon size={23} strokeWidth={1.5} aria-hidden="true" /><div><h3>{p.title}</h3><p className="muted">{p.text}</p></div></li>;
            })}
          </ul>
          <div className="about-final-image"><Photo {...photos.interiors[1]} sizes="100vw" /></div>
        </section>
        <section className="section tint">
          <div className="wrap contact-band-inner"><div><p className="eyebrow">A good place to start</p><h2>Tell us what you're thinking.</h2></div><Link className="btn btn-dark" href="/contact">Contact the studio <ArrowRight size={18} aria-hidden="true" /></Link></div>
        </section>
      </main>
    </SiteFrame>
  );
}
