import { salon } from "../data/content";

export default function About({ t }) {
  return (
    <section id="about" className="bg-blush">
      <div className="max-w-6xl mx-auto px-5 py-24 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-display text-4xl md:text-5xl">{t.aboutTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-3 mt-10">
            {t.about.map((a, i) => (
              <div key={a.title}>
                <p className="font-display text-4xl text-rose">0{i + 1}</p>
                <h3 className="font-medium text-lg mt-2">{a.title}</h3>
                <p className="text-ink/65 mt-1 text-sm leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-cream rounded-3xl p-7 self-start">
          {t.hours.length > 0 && (
            <>
              <h3 className="font-display text-2xl">{t.hoursTitle}</h3>
              <ul className="mt-4 mb-4 divide-y divide-blush">
                {t.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4 py-3 text-sm">
                    <span>{h.days}</span>
                    <span className="text-ink/60">{h.time}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className="font-display text-2xl">{t.address}</p>
          {/* English bits inside Arabic text get their own dir="ltr", so @ and spaces stay in place */}
          <p className="mt-2 text-lg text-rose"><span dir="ltr">{salon.phone}</span></p>
          <div className="flex flex-wrap gap-3 mt-4 text-sm">
            <a href={salon.instagram} target="_blank" className="underline" dir="ltr">@oday.shami</a>
            <a href={salon.salonInstagram} target="_blank" className="underline" dir="ltr">@oday.beautyloung</a>
          </div>
        </div>
      </div>
    </section>
  );
}
