export default function Services({ t }) {
  return (
    <section id="services" className="max-w-6xl mx-auto px-5 py-24">
      <h2 className="font-display text-4xl md:text-5xl">{t.servicesTitle}</h2>
      <p className="text-ink/60 mt-3">{t.servicesText}</p>

      <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
        {t.services.map((s) => (
          // border-s = the line on the starting side (right in Arabic, left in English)
          <li key={s.title} className="py-6 border-b border-blush ps-5 border-s-2 border-s-rose/60">
            <div className="flex items-baseline gap-4">
              <h3 className="font-display text-2xl">{s.title}</h3>
              {s.price && (
                <>
                  <span className="flex-1 border-b border-dotted border-ink/20" />
                  <p className="whitespace-nowrap text-sm text-ink/60">
                    {t.from} <span className="text-xl text-plum font-medium">{s.price}</span> {t.currency}
                  </p>
                </>
              )}
            </div>
            <p className="text-ink/65 mt-1">{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
