import { useState } from "react";
import { salon } from "../data/content";
import Arrow from "./Arrow";

export default function Booking({ t }) {
  const [service, setService] = useState("");

  // The WhatsApp message is written in the language the visitor chose
  const link = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(t.whatsappMessage(service))}`;

  return (
    <section id="book" className="bg-plum text-cream">
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <h2 className="font-display text-4xl md:text-6xl">{t.bookTitle}</h2>
        <p className="text-cream/70 mt-4">{t.bookText}</p>

        <div className="flex flex-col sm:flex-row gap-3 mt-10 max-w-xl mx-auto">
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="flex-1 bg-cream text-ink rounded-full px-5 py-3.5 text-start"
          >
            <option value="">{t.choose}</option>
            {t.services.map((s) => (
              <option key={s.title} value={s.title}>{s.title}</option>
            ))}
          </select>

          <a
            href={service ? link : undefined}
            target="_blank"
            aria-disabled={!service}
            className={`flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium transition ${
              service ? "bg-rose text-plum hover:bg-blush" : "bg-rose/40 text-plum/60 pointer-events-none"
            }`}
          >
            {t.bookButton}
            <Arrow />
          </a>
        </div>
      </div>

      <p className="border-t border-cream/10 py-5 text-center text-xs text-cream/60">
        {t.footer}{" "}
        <a href="https://www.instagram.com/oneclick.ps" target="_blank" className="font-medium text-rose">One Click</a>
      </p>
    </section>
  );
}
