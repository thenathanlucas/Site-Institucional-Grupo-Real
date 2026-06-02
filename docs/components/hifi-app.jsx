// hifi-app.jsx — Header, TitleBlock, Coverflow (A), Deck (D), Hero + Tweaks.
const { useState, useRef, useLayoutEffect, useEffect } = React;
const { PALETTES, PRODUCTS, CARD_W, CARD_H } = window.HF;

function useWidth() {
  const ref = useRef(null);
  const [w, setW] = useState(1120);
  useLayoutEffect(() => {
    const el = ref.current; if (!el) return;
    const measure = () => { const x = el.clientWidth; if (x > 0) setW(x); };
    measure();
    const ro = new ResizeObserver(measure); ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, w];
}

// round nav button
function NavBtn({ dir, pal, onClick, style }) {
  const light = pal.navChrome === 'light';
  return (
    <button onClick={onClick} aria-label={dir} style={{
      width: 52, height: 52, borderRadius: '50%', cursor: 'pointer',
      border: `1.5px solid ${light ? 'rgba(255,255,255,0.55)' : 'rgba(30,46,34,0.18)'}`,
      background: light ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.92)',
      color: pal.pageInk, display: 'flex', alignItems: 'center', justifyContent: 'center',
      backdropFilter: light ? 'blur(6px)' : 'none',
      boxShadow: light ? '0 8px 20px rgba(0,0,0,0.18)' : '0 8px 20px rgba(43,42,39,0.12)',
      flexShrink: 0, transition: 'transform .15s', ...style
    }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ transform: dir === 'prev' ? 'rotate(180deg)' : 'none' }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    </button>
  );
}

function Dots({ n, active, pal, onPick }) {
  const light = pal.navChrome === 'light';
  return (
    <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
      {Array.from({ length: n }).map((_, i) =>
        <button key={i} onClick={() => onPick(i)} aria-label={`Produto ${i + 1}`} style={{
          height: 9, width: i === active ? 26 : 9, borderRadius: 5, cursor: 'pointer',
          border: 'none', padding: 0, transition: 'all .25s',
          background: i === active ? (light ? '#FFFFFF' : pal.accent) : (light ? 'rgba(255,255,255,0.45)' : 'rgba(30,46,34,0.2)')
        }} />
      )}
    </div>
  );
}

// ── Layout A · Coverflow ──────────────────────────────────────
const BAND = 1000, STAGE_H = CARD_H + 34;
function Coverflow({ pal, active, setActive, cta, rate }) {
  const [ref, w] = useWidth();
  const rf = Math.min(1, (w - 24) / BAND);
  const conf = (o) => {
    const a = Math.abs(o), s = Math.sign(o);
    if (a === 0) return { x: 0, sc: 1, z: 30, op: 1, ry: 0 };
    if (a === 1) return { x: s * CARD_W * 0.62, sc: 0.84, z: 20, op: 0.82, ry: -s * 16 };
    if (a === 2) return { x: s * CARD_W * 1.06, sc: 0.66, z: 10, op: 0.42, ry: -s * 22 };
    return { x: s * CARD_W * 1.4, sc: 0.55, z: 0, op: 0, ry: -s * 26 };
  };
  return (
    <div ref={ref} style={{ position: 'relative', width: '100%', height: STAGE_H * rf }}>
      <div style={{
        position: 'absolute', left: '50%', top: 0, width: BAND, height: STAGE_H,
        transform: `translateX(-50%) scale(${rf})`, transformOrigin: 'top center',
        perspective: 1500
      }}>
        {PRODUCTS.map((p, i) => {
          const c = conf(i - active);
          return (
            <div key={i} onClick={() => setActive(i)} style={{
              position: 'absolute', left: '50%', top: '50%', width: CARD_W, height: CARD_H,
              transform: `translate(-50%,-50%) translateX(${c.x}px) scale(${c.sc}) rotateY(${c.ry}deg)`,
              zIndex: c.z, opacity: c.op, cursor: i === active ? 'default' : 'pointer',
              pointerEvents: c.op === 0 ? 'none' : 'auto',
              transition: 'transform .5s cubic-bezier(.22,.61,.36,1), opacity .5s'
            }}>
              <Card p={p} pal={pal} cta={cta} rate={rate} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Layout D · Baralho (deck) ─────────────────────────────────
const DSTAGE_W = CARD_W + 110, DSTAGE_H = CARD_H + 70;
function Deck({ pal, active, setActive, cta, rate }) {
  const [ref, w] = useWidth();
  const rf = Math.min(1, (w - 24) / DSTAGE_W);
  const n = PRODUCTS.length;
  // front + two behind (peeking above)
  const layers = [
    { i: active, ty: 52, sc: 1, z: 30, op: 1 },
    { i: (active + 1) % n, ty: 26, sc: 0.93, z: 20, op: 0.85 },
    { i: (active + 2) % n, ty: 0, sc: 0.86, z: 10, op: 0.55 }
  ];
  return (
    <div ref={ref} style={{ position: 'relative', width: '100%', height: DSTAGE_H * rf }}>
      <div style={{
        position: 'absolute', left: '50%', top: 0, width: DSTAGE_W, height: DSTAGE_H,
        transform: `translateX(-50%) scale(${rf})`, transformOrigin: 'top center'
      }}>
        {layers.slice().reverse().map((L) => (
          <div key={L.i} onClick={() => L.z !== 30 && setActive(L.i)} style={{
            position: 'absolute', left: '50%', top: 0, width: CARD_W, height: CARD_H,
            transform: `translateX(-50%) translateY(${L.ty}px) scale(${L.sc})`,
            transformOrigin: 'top center', zIndex: L.z, opacity: L.op,
            cursor: L.z === 30 ? 'default' : 'pointer',
            transition: 'transform .45s cubic-bezier(.22,.61,.36,1), opacity .45s'
          }}>
            <Card p={PRODUCTS[L.i]} pal={pal} cta={cta} rate={rate} />
          </div>
        ))}
      </div>
    </div>
  );
}

// product tabs (layout D)
function Tabs({ pal, active, setActive }) {
  const light = pal.navChrome === 'light';
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 640 }}>
      {PRODUCTS.map((p, i) => {
        const on = i === active;
        return (
          <button key={i} onClick={() => setActive(i)} className="hf-ui" style={{
            fontSize: 13.5, fontWeight: 700, padding: '8px 16px', borderRadius: 999, cursor: 'pointer',
            border: `1.5px solid ${on ? (light ? '#FFFFFF' : pal.accent) : (light ? 'rgba(255,255,255,0.42)' : 'rgba(30,46,34,0.16)')}`,
            background: on ? (light ? '#FFFFFF' : pal.accent) : 'transparent',
            color: on ? (light ? pal.accent : pal.accentInk) : pal.pageSub, transition: 'all .2s'
          }}>{p.tag}</button>
        );
      })}
    </div>
  );
}

// ── Header ────────────────────────────────────────────────────
function Header({ pal }) {
  const ink = pal.headerInk || pal.pageInk;
  const sub = pal.headerSub || pal.pageSub;
  const link = { color: sub, textDecoration: 'none', fontSize: 14.5, fontWeight: 600 };
  return (
    <header className="hf-ui" style={{
      position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', gap: 24, padding: '17px clamp(18px,5vw,56px)',
      background: pal.headerBg, backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${pal.headerBorder}`
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
          <img src="assets/logo-gr.png" alt="Grupo Real" style={{ width: 46, height: 46, borderRadius: 10 }} />
          <div className="hf-disp" style={{ fontWeight: 700, fontSize: 20, color: ink, lineHeight: 1.1 }}>Grupo Real</div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 9, flex: 1, maxWidth: 340,
          padding: '10px 16px', borderRadius: 999,
          background: pal.headerSearchBg || 'rgba(43,42,39,0.05)',
          border: `1px solid ${pal.headerSearchBorder || 'rgba(43,42,39,0.12)'}`
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sub} strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>
          <input type="search" placeholder="Buscar produtos" aria-label="Buscar produtos" style={{
            border: 'none', outline: 'none', background: 'transparent', flex: 1, minWidth: 0,
            fontFamily: 'inherit', fontSize: 14.5, fontWeight: 500, color: ink
          }} />
        </div>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
        <a href="#" style={{ ...link, opacity: 0.95 }} className="hf-nav">Produtos</a>
        <a href="#" style={link} className="hf-nav">Filiais</a>
        <a href="#" style={link} className="hf-nav">Quem somos</a>
      </nav>
    </header>
  );
}

function TitleBlock({ pal, hi }) {
  const head = 'Escolha o crédito § pra você'.split('§');
  return (
    <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
      <div className="hf-ui" style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: pal.eyebrow, marginBottom: 14 }}>• Correspondente Bancário</div>
      <h1 className="hf-disp" style={{ margin: 0, fontWeight: 700, fontSize: 'clamp(30px,4.4vw,46px)', lineHeight: 1.08, color: pal.pageInk }}>
        {head[0]}
        <span style={{ background: pal.hiBg, color: pal.hiInk, padding: '0 .22em', borderRadius: 8, fontStyle: 'italic' }}>{hi}</span>
        {head[1]}
      </h1>
      <p className="hf-body" style={{ margin: '16px auto 0', maxWidth: 540, fontSize: 'clamp(15px,1.6vw,17px)', lineHeight: 1.55, color: pal.pageSub }}>
        Um consultor analisa seu convênio e mostra as condições reais — sem pressão, sem letra miúda escondida.
      </p>
    </div>
  );
}

Object.assign(window, { Coverflow, Deck, Tabs, Header, TitleBlock, NavBtn, Dots, useWidth });
