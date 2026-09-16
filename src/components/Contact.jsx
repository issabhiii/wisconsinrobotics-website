import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import Icon from "./Icon";
import { org } from "../data/site";

/**
 * Google Apps Script web-app URL that appends rows to the contact spreadsheet.
 * Paste the deployed URL here after running scripts/contact-to-sheet.gs
 * (or set VITE_CONTACT_FORM_URL in .env).
 */
const FORM_ENDPOINT =
  import.meta.env.VITE_CONTACT_FORM_URL || "";

const details = [
  { icon: "mail", label: "Email", value: org.email, href: `mailto:${org.email}` },
  { icon: "map-pin", label: "Find us", value: org.address.join(", ") },
  { icon: "calendar", label: "Meetings", value: org.meetings },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!FORM_ENDPOINT) {
      // No sheet endpoint yet — fall back to mailto.
      const subject = encodeURIComponent(`Website inquiry from ${form.name || "a visitor"}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${org.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      // text/plain + no-cors avoids a CORS preflight; Apps Script still receives the JSON body.
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-chalk-dim outline-none transition-colors focus:border-badger/60 focus:bg-white/[0.05]";

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get involved"
          eyebrowIcon="send"
          title="Join the mission or"
          accent="back the team."
          subtitle="Students of any major are welcome, and sponsors keep us in the desert. Reach out — we'd love to hear from you."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-badger/40 bg-white/[0.02] p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-badger/30 bg-badger/10">
                    <Icon name={d.icon} className="h-5 w-5 text-badger-bright" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-chalk-dim">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a href={d.href} className="mt-1 block text-white hover:text-badger-bright">
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-white">{d.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-badger/40 bg-white/[0.02] p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  className={field}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  required
                  type="email"
                  className={field}
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <textarea
                required
                rows={5}
                className={`${field} mt-4 resize-none`}
                placeholder="Tell us why you're reaching out…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-badger px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(197,5,12,0.7)] transition-all duration-200 hover:bg-badger-bright active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                  <Icon name="send" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                {status === "sent" && (
                  <span className="text-sm text-chalk-soft">
                    {FORM_ENDPOINT
                      ? "Thanks — we got your message."
                      : "Thanks — opening your email client…"}
                  </span>
                )}
                {status === "error" && (
                  <span className="text-sm text-badger-bright">
                    Something went wrong — email us at {org.email}.
                  </span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
