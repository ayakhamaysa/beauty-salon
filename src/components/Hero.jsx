import { motion } from "framer-motion";
import { salon } from "../data/content";
import Arrow from "./Arrow";
import HairLock from "./HairLock";

export default function Hero({ t }) {
  return (
    <section className="relative bg-plum text-cream pt-28 pb-16 md:pb-24 overflow-hidden">
      {/* Soft glow behind the arch */}
      <div className="absolute top-10 end-[8%] w-[28rem] h-[28rem] rounded-full bg-rose/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 grid gap-12 md:grid-cols-2 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-rose tracking-wide">{t.hero.eyebrow}</p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight mt-4">{t.hero.title}</h1>
          <p className="text-lg text-cream/75 mt-6 max-w-lg leading-relaxed">{t.hero.text}</p>

          <div className="flex flex-wrap gap-2 mt-6">
            {t.hero.tags.map((tag) => (
              <span key={tag} className="text-sm border border-rose/40 text-rose px-4 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <a href="#book" className="flex items-center gap-2 bg-rose text-plum font-medium px-7 py-3.5 rounded-full hover:bg-blush transition-colors">
              {t.hero.cta}
              <Arrow />
            </a>
            <a href="#services" className="border border-cream/30 px-7 py-3.5 rounded-full hover:border-rose transition-colors">
              {t.hero.second}
            </a>
          </div>
        </motion.div>

        {/* Arch like a salon mirror */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xs md:max-w-sm"
        >
          <div className="absolute -inset-3 rounded-t-full border border-rose/40" />
          <div className="relative aspect-[3/4] rounded-t-full overflow-hidden bg-linear-to-b from-[#3a2c31] to-[#1f1b1d]">
            {/* Very slow zoom so the hair feels alive */}
            {salon.heroImage ? (
              <motion.img
                src={salon.heroImage}
                alt=""
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
            ) : (
              <HairLock />
            )}
            {/* Dark fade at the bottom so the signature reads clearly */}
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-linear-to-t from-[#1f1b1d] via-[#1f1b1d]/85 to-transparent" />
            {/* Signature at the bottom of the arch */}
            <p
              className="absolute bottom-6 inset-x-0 text-center text-3xl text-cream/90"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              dir="ltr"
            >
              Hair artist
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
