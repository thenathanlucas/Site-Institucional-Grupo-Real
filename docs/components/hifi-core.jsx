// hifi-core.jsx — palettes, products, and the hi-fi product Card.
// Type system (ui-rules): Playfair Display (display), Plus Jakarta Sans (UI), Inter (body).

const PALETTES = {
  // Page-level tokens (over the hero bg): page, pageInk, pageSub, eyebrow, hiBg, hiInk,
  //   navChrome, wa, headerBg, headerBorder.
  // Card-level tokens (over the card): card, cardBorder, panel, panelInk, panelSub,
  //   ink, sub, accent, accentInk, amber, glow.
  2: { // Laranja — fundo laranja vibrante e impactante, cards brancos flutuando
    key: 2, name: 'Laranja',
    page: 'radial-gradient(110% 82% at 50% -2%, #FF8A3D 0%, rgba(255,138,61,0) 60%), linear-gradient(158deg, #FB6516 0%, #ED4A05 50%, #CE3A00 100%)',
    pageInk: '#FFFFFF', pageSub: 'rgba(255,247,240,0.92)', eyebrow: '#FFE3CC',
    hiBg: '#17A24B', hiInk: '#FFFFFF',
    navChrome: 'light', wa: '#16A34A',
    headerBg: 'rgba(253,250,245,0.9)', headerBorder: 'rgba(43,42,39,0.10)',
    headerInk: '#241F1A', headerSub: '#6F5648',
    // card
    card: '#FFFFFF', cardBorder: 'rgba(43,42,39,0.10)',
    panel: 'linear-gradient(155deg, #E8501A 0%, #B23C0E 100%)',
    panelInk: '#FFF3E9', panelSub: 'rgba(255,243,233,0.75)',
    ink: '#2B2A27', sub: '#7a756c',
    accent: '#E8501A', accentInk: '#FFFFFF', amber: '#D98324',
    glow: 'rgba(232,80,26,0.34)', dark: false
  },
  1: { // Boutique — areia clara, oliva, coral, âmbar (alternativa calma)
    key: 1, name: 'Boutique',
    page: '#F4F1EA', pageInk: '#1E2E22', pageSub: '#5b6a5e', eyebrow: '#FF5722',
    hiBg: 'rgba(217,131,36,0.18)', hiInk: '#a85f10',
    navChrome: 'dark', wa: '#1f9d54',
    headerBg: 'rgba(244,241,234,0.82)', headerBorder: 'rgba(30,46,34,0.10)',
    // card
    card: '#FFFFFF', cardBorder: 'rgba(30,46,34,0.10)',
    panel: 'linear-gradient(155deg, #2c4232 0%, #1E2E22 100%)',
    panelInk: '#F4F1EA', panelSub: 'rgba(244,241,234,0.72)',
    ink: '#1E2E22', sub: '#5b6a5e',
    accent: '#FF5722', accentInk: '#FFFFFF', amber: '#D98324',
    glow: 'rgba(255,87,34,0.16)', dark: false
  }
};

const PRODUCTS = [
  { tag: 'CLT', name: 'Empréstimo do\nTrabalhador', rate: 'R$ 33,60', sub: 'Crédito rápido e seguro para quem tem carteira assinada.' },
  { tag: 'INSS', name: 'Empréstimo\nConsignado', sub: 'Para aposentados e pensionistas, com desconto em folha.' },
  { tag: 'SIAPE', name: 'Empréstimo\nFederal Civil', sub: 'Condições dedicadas a servidores públicos federais civis.' },
  { tag: 'Cartão', name: 'Empréstimo no\nCartão de Crédito', sub: 'Use o limite do seu cartão sem comprometer o salário.' },
  { tag: 'Militar', name: 'Empréstimo\nMilitares', sub: 'Crédito com condições próprias para as Forças Armadas.' }
];

// design size of one card (scaled by the carousels)
const CARD_W = 340, CARD_H = 452;

if (typeof document !== 'undefined' && !document.getElementById('hf-styles')) {
  const s = document.createElement('style');
  s.id = 'hf-styles';
  s.textContent = `
    .hf, .hf * { box-sizing: border-box; }
    .hf-disp { font-family: 'Bitter', Georgia, serif; }
    .hf-ui   { font-family: 'Source Sans 3', system-ui, sans-serif; }
    .hf-body { font-family: 'Source Sans 3', system-ui, sans-serif; }
    .hf-card-shadow-l { box-shadow: 0 18px 50px rgba(43,42,39,0.18), 0 4px 12px rgba(43,42,39,0.08); }
    .hf-card-shadow-d { box-shadow: 0 22px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,168,102,0.06); }
  `;
  document.head.appendChild(s);
}

// ── small parts ──────────────────────────────────────────────
function Tag({ children, pal }) {
  return (
    <span className="hf-ui" style={{
      fontSize: 12, fontWeight: 700, letterSpacing: '.04em',
      color: pal.panelInk, padding: '5px 13px', borderRadius: 999,
      background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.28)',
      backdropFilter: 'blur(4px)', whiteSpace: 'nowrap'
    }}>{children}</span>
  );
}

function Badge({ pal, rateText }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <span className="hf-ui" style={{ fontSize: 11, fontWeight: 600, color: pal.sub, marginBottom: 4 }}>Parcelas a partir de</span>
      <span className="hf-disp" style={{ fontSize: 26, fontWeight: 700, color: pal.accent, lineHeight: 1, whiteSpace: 'nowrap' }}>{rateText}</span>
    </div>
  );
}

function CTA({ pal, label, compact = false }) {
  return (
    <a href="https://wa.me/5521986862308?text=Ol%C3%A1!+Quero+consultar+um+empr%C3%A9stimo." target="_blank" rel="noopener"
      className="hf-ui" style={{
        display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none',
        padding: compact ? '10px 16px' : '12px 20px', borderRadius: 7,
        background: pal.accent, color: pal.accentInk, fontWeight: 700, fontSize: 15,
        whiteSpace: 'nowrap', boxShadow: `0 8px 22px ${pal.glow}`
      }}>
      {label}
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={pal.accentInk} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    </a>
  );
}

// flying R$100 notes — money-bundle.png, with a small offset duplicate
function Money({ pal }) {
  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', width: 150, height: 130, top: -26, left: -34,
        transform: 'rotate(20deg)', opacity: pal.dark ? 0.95 : 0.92,
        filter: `drop-shadow(0 10px 18px rgba(0,0,0,0.4))`,
        backgroundImage: 'url(assets/money-bundle.png)', backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
      }} />
      <div style={{
        position: 'absolute', width: 280, height: 200, bottom: -30, right: -42,
        transform: 'rotate(-10deg)',
        filter: `drop-shadow(0 18px 26px rgba(0,0,0,0.5)) drop-shadow(0 0 40px ${pal.glow})`,
        backgroundImage: 'url(assets/money-bundle.png)', backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'
      }} />
    </React.Fragment>
  );
}

// CLT card art — fanned notes behind + carteira de trabalho in front (matches print)
function CltArt({ pal }) {
  return (
    <React.Fragment>
      {/* warm glow to seat the objects on the panel */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 64% 24%, rgba(255,196,140,0.35) 0%, rgba(255,196,140,0) 58%)' }} />
      {/* fanned R$ notes — behind, centered (−20%) */}
      <div style={{
        position: 'absolute', width: 288, height: 217, top: -22, left: 144,
        transform: 'rotate(-3deg)',
        filter: 'drop-shadow(0 14px 22px rgba(0,0,0,0.42))',
        backgroundImage: 'url(assets/notas-leque.png)', backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat', backgroundPosition: 'top center'
      }} />
      {/* carteira de trabalho — in front, centered (−20%) */}
      <div style={{
        position: 'absolute', width: 138, height: 164, top: 46, left: 185,
        transform: 'rotate(-12deg)',
        filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.5))',
        backgroundImage: 'url(assets/carteira-trabalho.png)', backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom center'
      }} />
    </React.Fragment>
  );
}

// ── the hi-fi product card (fixed design size CARD_W×CARD_H) ──
function Card({ p, pal, cta = 'Consultar já', rate = 'R$ —,—' }) {
  return (
    <div className={`hf ${pal.dark ? 'hf-card-shadow-d' : 'hf-card-shadow-l'}`} style={{
      width: CARD_W, height: CARD_H, borderRadius: 16, overflow: 'hidden',
      background: pal.card, border: `1px solid ${pal.cardBorder}`,
      display: 'flex', flexDirection: 'column',
      transition: 'box-shadow .35s ease'
    }}>
      {/* visual panel */}
      <div style={{ position: 'relative', height: 224, background: pal.panel, overflow: 'hidden', flexShrink: 0 }}>
        {p.tag === 'CLT' ? <CltArt pal={pal} /> : <Money pal={pal} />}
        {/* legibility gradient for the title */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 58%)' }} />
        <div style={{ position: 'absolute', top: 16, left: 16 }}><Tag pal={pal}>{p.tag}</Tag></div>
        <h3 className="hf-disp" style={{
          position: 'absolute', left: 18, right: p.tag === 'CLT' ? 70 : 110, bottom: 16, margin: 0,
          fontSize: p.tag === 'CLT' ? 23 : 27, fontWeight: 700, lineHeight: 1.05, color: pal.panelInk,
          whiteSpace: 'pre-line', textShadow: '0 2px 14px rgba(0,0,0,0.4)'
        }}>{p.name}</h3>
      </div>
      {/* info */}
      <div style={{ flex: 1, padding: '18px 20px 16px', display: 'flex', flexDirection: 'column' }}>
        <p className="hf-body" style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: pal.sub }}>{p.sub}</p>
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, paddingTop: 16 }}>
          <Badge pal={pal} rateText={p.rate || rate} />
          <CTA pal={pal} label={cta} />
        </div>
        <div style={{ height: 1, background: pal.cardBorder, margin: '14px 0 10px' }} />
        <p className="hf-body" style={{ margin: 0, fontSize: 11, lineHeight: 1.4, color: pal.sub, opacity: 0.8 }}>
          Sujeito a análise e contratação. Taxas, prazos e CET informados na simulação com o consultor.
        </p>
      </div>
    </div>
  );
}

Object.assign(window, {
  HF: { PALETTES, PRODUCTS, CARD_W, CARD_H },
  Tag, Badge, CTA, Money, CltArt, Card
});
