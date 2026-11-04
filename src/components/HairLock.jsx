import { motion } from "framer-motion";

// Full flowing hair made of many thin strands.
// Every strand follows the same S-shaped wave, shifted a little to the side,
// so together they look like a full head of long wavy hair.

const H = 420; // drawing height

// Small repeatable "random" numbers, so the hair looks the same on every visit
function seeded(n) {
  const x = Math.sin(n * 999) * 10000;
  return x - Math.floor(x);
}

// The center line of the hair: an S-shaped wave from top to bottom
const centerX = (y) => 150 + 40 * Math.sin((y / H) * Math.PI * 2.2 + 0.4);

// How wide the hair is at each height: full at the top, a bit narrower in the waves, opens at the ends
const width = (y) => 70 + 30 * Math.cos((y / H) * Math.PI * 1.6) ** 2 + (y / H) * 40;

function strandPath(u, phase, end) {
  const points = [];
  for (let y = 0; y <= end; y += 6) {
    const wobble = Math.sin(y / 38 + phase) * 2; // tiny natural waves
    const x = centerX(y) + u * width(y) + wobble;
    points.push(`${x.toFixed(1)} ${y}`);
  }
  return "M" + points.join(" L");
}

const strands = Array.from({ length: 240 }, (_, i) => {
  const u = seeded(i + 1) * 2 - 1; // position across the hair (-1 to 1)
  const highlight = seeded(i + 50) > 0.8; // some strands catch the light
  return {
    d: strandPath(u, seeded(i + 100) * 6, H - 10 - seeded(i + 400) * 50),
    width: 0.5 + seeded(i + 200) * 1.2,
    opacity: highlight ? 0.9 : 0.3 + seeded(i + 300) * 0.45,
    color: highlight ? "url(#shine)" : "url(#hair)",
  };
});

export default function HairLock() {
  return (
    <svg viewBox={`0 0 300 ${H}`} className="absolute inset-0 w-full h-full" fill="none" strokeLinecap="round">
      <defs>
        {/* Hair color from the roots (dark) to the ends (caramel) */}
        <linearGradient id="hair" x1="0" y1="0" x2="0" y2={H} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3b2620" />
          <stop offset="0.45" stopColor="#8a5a3c" />
          <stop offset="1" stopColor="#c99a6b" />
        </linearGradient>
        {/* Light highlights, like balayage */}
        <linearGradient id="shine" x1="0" y1="0" x2="0" y2={H} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7a5444" />
          <stop offset="0.5" stopColor="#e8c9a6" />
          <stop offset="1" stopColor="#f3dcc0" />
        </linearGradient>
        {/* The hair appears from the top down */}
        <clipPath id="reveal">
          <motion.rect
            x="0"
            y="0"
            width="300"
            initial={{ height: 0 }}
            animate={{ height: H }}
            transition={{ duration: 2.4, delay: 0.3, ease: "easeInOut" }}
          />
        </clipPath>
      </defs>

      {/* Very slow sway, held from the top like real hair */}
      <motion.g
        clipPath="url(#reveal)"
        style={{ originX: "50%", originY: "0%" }}
        animate={{ rotate: [-1, 1, -1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {strands.map((s, i) => (
          <path key={i} d={s.d} stroke={s.color} strokeWidth={s.width} strokeOpacity={s.opacity} />
        ))}
      </motion.g>
    </svg>
  );
}
