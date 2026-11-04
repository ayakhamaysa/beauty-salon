export default function Header({ t, toggle }) {
  return (
    <header className="absolute top-0 inset-x-0 z-20 text-cream">
      <nav className="max-w-6xl mx-auto px-5 h-20 flex items-center gap-6">
        <a href="#" className="leading-none text-center" dir="ltr">
          <span className="block font-semibold tracking-[0.25em] text-lg" style={{ fontFamily: "Jost, sans-serif" }}>ODAY SHAMI</span>
          <span className="block text-rose text-lg -mt-0.5" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>Hair artist</span>
        </a>

        {/* ms-auto pushes the links to the end of the row, in both directions */}
        <div className="ms-auto hidden sm:flex gap-6 text-sm">
          <a href="#services" className="hover:text-rose transition-colors">{t.nav.services}</a>
          <a href="#about" className="hover:text-rose transition-colors">{t.nav.about}</a>
          <a href="#book" className="hover:text-rose transition-colors">{t.nav.book}</a>
        </div>

        <button
          onClick={toggle}
          className="ms-auto sm:ms-0 border border-cream/40 rounded-full px-4 py-1.5 text-sm hover:bg-cream hover:text-plum transition-colors"
        >
          {t.switchTo}
        </button>
      </nav>
    </header>
  );
}
