"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

type ServiceGroupOption = { id: string; title: string; items: string[] };

export default function ContactForm({ groups }: { groups: ServiceGroupOption[] }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="form-success" aria-labelledby="form-success-title">
        <div className="form-success-icon"><CheckCircle2 size={24} strokeWidth={1.6} aria-hidden="true" /></div>
        <p className="eyebrow">Message preview complete</p>
        <h2 id="form-success-title">Thanks for reaching out.</h2>
        <p role="status" aria-live="polite">Your form passed its checks. This portfolio demo is not connected to an inbox, so no message was sent.</p>
        <button type="button" className="btn btn-ghost" onClick={() => setSubmitted(false)}>Write another message <ArrowRight size={17} aria-hidden="true" /></button>
      </section>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-fields">
        <div className="field">
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" autoComplete="name" required maxLength={100} placeholder="First and last name" />
        </div>
        <div className="field">
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" />
        </div>
        <div className="field field-wide">
          <label htmlFor="contact-service">Service (optional)</label>
          <div className="select-wrap">
            <select id="contact-service" name="service" defaultValue="" aria-describedby="contact-service-hint">
              <option value="" disabled hidden>Select a service</option>
              {groups.map((group) => (
                <optgroup key={group.id} label={group.title}>
                  {group.items.map((service) => <option key={service} value={service}>{service}</option>)}
                </optgroup>
              ))}
            </select>
            <ChevronDown className="select-chevron" size={18} strokeWidth={1.75} aria-hidden="true" />
          </div>
          <span id="contact-service-hint" className="field-hint">Choose an option from the dropdown, or leave it blank.</span>
        </div>
        <div className="field field-wide">
          <label htmlFor="contact-message">Your message</label>
          <textarea id="contact-message" name="message" required minLength={10} maxLength={2000} rows={4} placeholder="Tell us a little about what you have in mind…" />
          <span className="field-hint">Please don't include sensitive personal information.</span>
        </div>
      </div>
      <button className="btn btn-dark" type="submit">Send message <ArrowRight size={18} aria-hidden="true" /></button>
    </form>
  );
}
