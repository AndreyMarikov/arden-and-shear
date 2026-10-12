"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function NavItem({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  return (
    <Link href={href} aria-current={active ? "page" : undefined} className={active ? "is-active" : undefined} onClick={onClick}>
      {label}
    </Link>
  );
}

type NavLink = { href: string; label: string };
type HeaderProps = {
  leftLinks: NavLink[];
  rightLinks: NavLink[];
  ctaHref: string;
  ctaLabel: string;
  logo: { src: string; width: number; height: number };
  brandName: string;
};

export default function Header({ leftLinks, rightLinks, ctaHref, ctaLabel, logo, brandName }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("menu-open");
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        window.setTimeout(() => toggleRef.current?.focus(), 0);
        return;
      }
      if (event.key === "Tab") {
        const focusable = Array.from(
          document.querySelectorAll<HTMLElement>("#mobile-nav a[href], #mobile-nav button:not([disabled])"),
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 901px)").matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    window.setTimeout(() => toggleRef.current?.focus(), 0);
  };

  return (
    <>
      <header className="site-header">
      <div className="header-bar wrap">
        <nav className="nav nav-left" aria-label="Primary">
          {leftLinks.map((link) => <NavItem key={link.href} {...link} />)}
        </nav>
        <Link href="/" className="logo" aria-label={`${brandName} — home`}>
          <Image src={logo.src} width={logo.width} height={logo.height} alt="" unoptimized priority />
        </Link>
        <nav className="nav nav-right" aria-label="Main pages">
          {rightLinks.map((link) => <NavItem key={link.href} {...link} />)}
          <a href={ctaHref} className="btn btn-dark btn-sm"><Phone size={16} strokeWidth={1.75} aria-hidden="true" />{ctaLabel}</a>
        </nav>
        <button ref={toggleRef} type="button" className="menu-btn" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={22} strokeWidth={1.75} aria-hidden="true" /> : <Menu size={22} strokeWidth={1.75} aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
    </header>
    {open && (
      <div id="mobile-nav" className="mobile-menu-overlay" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
        <div className="mobile-menu-head">
          <Link href="/" className="mobile-menu-logo" aria-label={`${brandName} — home`} onClick={closeMenu}>
            <Image
              src="/brand/logo-compact.svg"
              width={243}
              height={40}
              alt={brandName}
              className="mobile-menu-logo-image"
              unoptimized
              priority
            />
          </Link>
          <button ref={closeRef} type="button" className="mobile-menu-close" onClick={closeMenu} aria-label="Close navigation menu">
            <X size={24} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <NavItem href="/" label="Home" onClick={closeMenu} />
          {[...leftLinks, ...rightLinks].map((link) => <NavItem key={link.href} {...link} onClick={closeMenu} />)}
        </nav>
        <div className="mobile-menu-footer">
          <a href={ctaHref} className="btn btn-dark mobile-menu-cta" onClick={closeMenu}>
            <Phone size={18} strokeWidth={1.75} aria-hidden="true" />{ctaLabel}
          </a>
        </div>
      </div>
    )}
    </>
  );
}
