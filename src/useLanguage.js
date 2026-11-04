import { useEffect, useState } from "react";
import { content } from "./data/content";

// Remembers the chosen language and flips the whole page
export function useLanguage() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") || "ar";
    } catch {
      return "ar";
    }
  });

  useEffect(() => {
    // These two lines are the whole trick:
    // lang changes the fonts, dir flips the layout right ↔ left
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = lang === "ar" ? "صالون عدي للسيدات | Oday Shami" : "Oday Shami | Ladies Beauty Lounge";
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // private mode: just don't remember
    }
  }, [lang]);

  const toggle = () => setLang(lang === "ar" ? "en" : "ar");

  // t = the texts of the current language
  return { lang, t: content[lang], toggle };
}
