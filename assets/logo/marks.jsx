// marks.jsx — Grupo Real logo direction marks. Exports to window.
const C = {
  orange: '#E8501A', deep: '#CE3A00', vibrant: '#FB6516', light: '#FF8A3D',
  graphite: '#241F1A', ink: '#2B2A27', sand: '#FDFAF5', cream: '#FFF4EA',
  amber: '#D98324', white: '#ffffff', mute: '#6F5648',
};

/* ---------- Direction 1 — Monograma GR (quadrado app-icon) ---------- */
function D1Container({ size = 120 }) {
  const r = size * 0.24;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="24" fill={C.orange} />
      <text x="50" y="51" textAnchor="middle" dominantBaseline="central"
        fontFamily="'Source Sans 3',sans-serif" fontWeight="700" fontSize="44"
        letterSpacing="-3" fill={C.white}>GR</text>
    </svg>
  );
}
function D1Free({ size = 120 }) {
  return (
    <svg width={size * 1.55} height={size} viewBox="0 0 155 100">
      <text x="77" y="52" textAnchor="middle" dominantBaseline="central"
        fontFamily="'Source Sans 3',sans-serif" fontWeight="700" fontSize="58"
        letterSpacing="-4" fill={C.orange}>GR</text>
    </svg>
  );
}

/* ---------- Direction 2 — Ligadura serifada (Bitter) ---------- */
function D2Free({ size = 120 }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 160 100">
      <text x="80" y="54" textAnchor="middle" dominantBaseline="central"
        fontFamily="'Bitter',serif" fontWeight="700" fontSize="64" letterSpacing="-2">
        <tspan fill={C.graphite}>G</tspan><tspan fill={C.orange}>R</tspan>
      </text>
    </svg>
  );
}
function D2Container({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="22" fill={C.graphite} />
      <text x="50" y="53" textAnchor="middle" dominantBaseline="central"
        fontFamily="'Bitter',serif" fontWeight="700" fontSize="42" letterSpacing="-2">
        <tspan fill={C.cream}>G</tspan><tspan fill={C.orange}>R</tspan>
      </text>
    </svg>
  );
}
function D2Favicon({ size = 120 }) {
  // single serif R reads clean at favicon scale
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="22" fill={C.graphite} />
      <text x="51" y="55" textAnchor="middle" dominantBaseline="central"
        fontFamily="'Bitter',serif" fontWeight="700" fontSize="62" fill={C.orange}>R</text>
    </svg>
  );
}

/* ---------- Direction 3 — Intermediação (elos entrelaçados) ---------- */
function D3Free({ size = 120 }) {
  // two open rings offset on the diagonal, gaps facing each other = linked
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <g fill="none" strokeWidth="11" strokeLinecap="round">
        <path d="M47.7 63.2 A22 22 0 1 1 63.2 47.7" stroke={C.deep} />
        <path d="M52.3 36.8 A22 22 0 1 1 36.8 52.3" stroke={C.vibrant} />
      </g>
    </svg>
  );
}
function D3Container({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="22" fill={C.orange} />
      <g fill="none" strokeWidth="9.5" strokeLinecap="round">
        <path d="M48.6 60.7 A19 19 0 1 1 60.7 48.6" stroke="rgba(255,255,255,.5)" />
        <path d="M51.4 39.3 A19 19 0 1 1 39.3 51.4" stroke={C.white} />
      </g>
    </svg>
  );
}

/* ---------- Direction 4 — Selo R (círculo institucional) ---------- */
function D4Free({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke={C.orange} strokeWidth="3" />
      <text x="50" y="54" textAnchor="middle" dominantBaseline="central"
        fontFamily="'Bitter',serif" fontWeight="700" fontSize="46" fill={C.graphite}>R</text>
    </svg>
  );
}
function D4Container({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="48" fill={C.orange} />
      <text x="50" y="54" textAnchor="middle" dominantBaseline="central"
        fontFamily="'Bitter',serif" fontWeight="700" fontSize="48" fill={C.white}>R</text>
    </svg>
  );
}

/* ---------- Direction 5 — Losangos GR (assinatura da marca, minimalizada) ---------- */
function DiaShapes({ L, R, Y, half, rx, fill, stroke, sw }) {
  const s = half * 2;
  return (
    <g>
      <rect x={L - half} y={Y - half} width={s} height={s} rx={rx} transform={`rotate(45 ${L} ${Y})`} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
      <rect x={R - half} y={Y - half} width={s} height={s} rx={rx} transform={`rotate(45 ${R} ${Y})`} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
    </g>
  );
}
function DiaFree({ size = 120, sty }) {
  const L = 45, R = 79, Y = 50, half = 21;
  return (
    <svg width={size * 1.24} height={size} viewBox="0 0 124 100">
      <DiaShapes L={L} R={R} Y={Y} half={half} rx={7} fill={sty.fill} stroke={sty.stroke} sw={sty.sw} />
      <text x={L} y={Y + 1} textAnchor="middle" dominantBaseline="central" fontFamily="'Source Sans 3',sans-serif" fontWeight="800" fontSize="26" fill={sty.letter}>G</text>
      <text x={R} y={Y + 1} textAnchor="middle" dominantBaseline="central" fontFamily="'Source Sans 3',sans-serif" fontWeight="800" fontSize="26" fill={sty.letter}>R</text>
    </svg>
  );
}
function DiaContainer({ size = 120, sty }) {
  const L = 37, R = 63, Y = 50, half = 17.5;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="22" fill={sty.bg} />
      <DiaShapes L={L} R={R} Y={Y} half={half} rx={6} fill={sty.cFill} stroke={sty.cStroke} sw={sty.cSw} />
      <text x={L} y={Y + 1} textAnchor="middle" dominantBaseline="central" fontFamily="'Source Sans 3',sans-serif" fontWeight="800" fontSize="21" fill={sty.cLetter}>G</text>
      <text x={R} y={Y + 1} textAnchor="middle" dominantBaseline="central" fontFamily="'Source Sans 3',sans-serif" fontWeight="800" fontSize="21" fill={sty.cLetter}>R</text>
    </svg>
  );
}
function DiaSilhouette({ size = 120 }) {
  // no letters — the double-diamond silhouette, reads at 16px
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="22" fill={C.orange} />
      <DiaShapes L={37} R={63} Y={50} half={18.5} rx={6} fill={C.white} stroke="none" sw={0} />
    </svg>
  );
}
// finishes
const DIA = {
  branco: { label: 'Branco', desc: 'Losango branco, contorno laranja, letras grafite. Lê em qualquer fundo.',
    fill: '#fff', stroke: C.orange, sw: 2.4, letter: C.graphite,
    bg: C.orange, cFill: '#fff', cStroke: 'none', cSw: 0, cLetter: C.graphite },
  fiel: { label: 'Fiel ao original', desc: 'Como o de vocês: fundo laranja, contorno branco grosso, letras grafite.',
    fill: '#fff', stroke: C.orange, sw: 2.4, letter: C.graphite,
    bg: C.orange, cFill: C.orange, cStroke: '#fff', cSw: 4, cLetter: C.graphite },
  solido: { label: 'Sólido minimal', desc: 'Losango laranja cheio, costura branca, letras brancas. Mais moderno.',
    fill: C.orange, stroke: '#fff', sw: 2.6, letter: '#fff',
    bg: C.cream, cFill: C.orange, cStroke: '#fff', cSw: 2.6, cLetter: '#fff' },
};

const MARKS = {
  1: { Container: D1Container, Free: D1Free, Favicon: D1Container, concept: 'Monograma GR · quadrado app-icon', note: 'Sans-serif justo dentro de um quadrado laranja. Máxima legibilidade — favicon impecável.' },
  2: { Container: D2Container, Free: D2Free, Favicon: D2Favicon, concept: 'Ligadura serifada · GR em Bitter', note: 'A serifa-slab da marca vira o símbolo. Tradição de cartório + premium editorial. No favicon, simplifica para um R serifado (o GR fica ilegível abaixo de 32px).' },
  3: { Container: D3Container, Free: D3Free, Favicon: D3Container, concept: 'Intermediação · elos entrelaçados', note: 'Dois elos que se conectam = o Grupo Real entre cliente e banco. Homenagem geométrica à referência.' },
  4: { Container: D4Container, Free: D4Free, Favicon: D4Container, concept: 'Selo R · círculo institucional', note: 'Anel de selo (cartório / autorizado BC) com um R sóbrio. O mais minimalista de todos.' },
};

Object.assign(window, { GR_C: C, MARKS, DIA, DiaFree, DiaContainer, DiaSilhouette, D1Container, D1Free, D2Free, D2Container, D2Favicon, D3Free, D3Container, D4Free, D4Container });
