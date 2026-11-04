// An arrow that points "forward" in both languages.
// rtl:rotate-180 flips it when the page is Arabic.
export default function Arrow({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} rtl:rotate-180`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
