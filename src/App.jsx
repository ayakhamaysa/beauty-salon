import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useLanguage } from "./useLanguage";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Booking from "./components/Booking";

export default function App() {
  const { lang, t, toggle } = useLanguage();

  return (
    <MotionConfig reducedMotion="user">
      {/* key={lang}: when the language changes, the page fades out and back in */}
      <AnimatePresence mode="wait">
        <motion.div
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Header t={t} toggle={toggle} />
          <Hero t={t} />
          <Services t={t} />
          <About t={t} />
          <Booking t={t} />
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}
