import Image from "next/image";
import Link from "next/link";
import { brand, contact, logos, socials } from "@/content/site";
import SocialIcon from "@/components/SocialIcon";
import Year from "@/components/Year";

const links = [
  { href: "/services", label: "Services & pricing" },
  { href: "/team", label: "Meet the team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About the shop" },
  { href: "/contact", label: "Contact & hours" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" aria-label={`${brand.name} — home`}>
            <Image src={logos.compactLight.src} width={logos.compactLight.width} height={logos.compactLight.height} alt={brand.name} unoptimized />
          </Link>
          <p className="footer-tag">{brand.tagline}</p>
        </div>
        <nav aria-label="Footer"><ul>{links.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul></nav>
        <div className="footer-contact">
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.address.join(", ")}</span>
          <ul className="socials">
            {socials.map((s) => (
              <li key={s.id}>
                {s.href ? (
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${brand.name} on ${s.label}`}><SocialIcon id={s.id} /></a>
                ) : (
                  <span className="social-static" aria-hidden="true"><SocialIcon id={s.id} /></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="wrap copyright">© <Year /> {brand.name}. A fictional business created for a design portfolio.</p>
      <div className="footer-mark" aria-hidden="true">Arden &amp; Shear</div>
    </footer>
  );
}
