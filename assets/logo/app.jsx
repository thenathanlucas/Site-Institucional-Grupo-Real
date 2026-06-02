// app.jsx — builds the logo exploration canvas
const { useState } = React;
const C = window.GR_C;

/* Navbar lockup, faithful to the live site (sand bg, orange hairline, search pill) */
function Navbar({ mark, font }) {
  const wordFont = font === 'bitter' ? "'Bitter',serif" : "'Source Sans 3',sans-serif";
  return (
    <div style={{ width: '100%', background: C.sand, borderBottom: `2px solid ${C.orange}` }}>
      <div style={{ display: 'flex', alignItems: 'center', height: 84, padding: '0 26px', gap: 16 }}>
        <a style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          {mark}
          <span style={{ fontFamily: wordFont, fontWeight: 700, fontSize: 21, color: C.graphite, letterSpacing: '-0.3px', lineHeight: 1 }}>Grupo Real</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, flex: 1, maxWidth: 300, padding: '9px 16px', borderRadius: 999, background: 'rgba(43,42,39,0.05)', border: '1px solid rgba(43,42,39,0.12)' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={C.mute} strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>
          <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 14, fontWeight: 500, color: C.mute }}>Buscar produtos</span>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 24, fontFamily: "'Source Sans 3',sans-serif", fontWeight: 600, fontSize: 14, color: C.mute }}>
          <span>Produtos</span><span>Filiais</span><span>Quem somos</span>
        </div>
      </div>
    </div>
  );
}

/* Favicon proof: browser tab + standalone renders on light & dark */
function FaviconTest({ Favicon }) {
  return (
    <div style={{ padding: 26, display: 'flex', flexDirection: 'column', gap: 22, fontFamily: "'Source Sans 3',sans-serif" }}>
      {/* browser tab */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: C.mute, marginBottom: 10 }}>Na aba do navegador</div>
        <div style={{ background: '#E4E0DA', borderRadius: '10px 10px 0 0', padding: '8px 8px 0', display: 'flex' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: '#fff', borderRadius: '9px 9px 0 0', padding: '9px 13px', minWidth: 190, boxShadow: '0 -1px 3px rgba(0,0,0,.05)' }}>
            <Favicon size={16} />
            <span style={{ fontSize: 12.5, color: C.ink, flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Grupo Real — Crédito</span>
            <span style={{ fontSize: 14, color: '#aaa' }}>×</span>
          </div>
        </div>
      </div>
      {/* size ladder */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: C.mute, marginBottom: 12 }}>Escalas reais</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 22 }}>
          {[16, 32, 64].map((s) => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}>
              <Favicon size={s} />
              <span style={{ fontSize: 10.5, color: C.mute }}>{s}px</span>
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, marginLeft: 6 }}>
            <div style={{ background: C.graphite, borderRadius: 8, padding: 9, display: 'flex' }}><Favicon size={32} /></div>
            <span style={{ fontSize: 10.5, color: C.mute }}>no escuro</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Large symbol board: container + free side by side */
function SymbolBoard({ dir }) {
  const M = window.MARKS[dir];
  return (
    <div style={{ padding: '30px 26px 26px', fontFamily: "'Source Sans 3',sans-serif" }}>
      <div style={{ display: 'flex', gap: 30, alignItems: 'center', justifyContent: 'center', marginBottom: 26 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <M.Container size={132} />
          <span style={{ fontSize: 11, color: C.mute, fontWeight: 600 }}>com container</span>
        </div>
        <div style={{ width: 1, height: 110, background: 'rgba(43,42,39,.1)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', height: 132 }}><M.Free size={92} /></div>
          <span style={{ fontSize: 11, color: C.mute, fontWeight: 600 }}>solto</span>
        </div>
      </div>
      <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: C.ink, textAlign: 'center', maxWidth: 340, marginInline: 'auto' }}>{M.note}</p>
    </div>
  );
}

/* ---- Diamonds (signature) section ---- */
function DiaFinishes() {
  const keys = ['branco', 'fiel', 'solido'];
  return (
    <div style={{ padding: '26px', fontFamily: "'Source Sans 3',sans-serif", background: '#fff', width: '100%', height: '100%', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', gap: 18, justifyContent: 'space-between' }}>
        {keys.map((k) => {
          const sty = window.DIA[k];
          return (
            <div key={k} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 11, textAlign: 'center' }}>
              <DiaContainer size={104} sty={sty} />
              <div style={{ fontSize: 13, fontWeight: 700, color: C.graphite }}>{sty.label}</div>
              <div style={{ fontSize: 11.5, lineHeight: 1.5, color: C.mute }}>{sty.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function DiaFaviconTest() {
  const sty = window.DIA.branco;
  const Box = (props) => <DiaContainer {...props} sty={sty} />;
  return (
    <div style={{ padding: 26, display: 'flex', flexDirection: 'column', gap: 20, fontFamily: "'Source Sans 3',sans-serif", background: '#fff', height: '100%', boxSizing: 'border-box' }}>
      <div style={{ background: '#E4E0DA', borderRadius: '10px 10px 0 0', padding: '8px 8px 0', display: 'flex' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: '#fff', borderRadius: '9px 9px 0 0', padding: '9px 13px', minWidth: 190 }}>
          <Box size={16} />
          <span style={{ fontSize: 12.5, color: C.ink, flex: 1, whiteSpace: 'nowrap' }}>Grupo Real — Crédito</span>
          <span style={{ fontSize: 14, color: '#aaa' }}>×</span>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: C.mute, marginBottom: 12 }}>Com letras G/R</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
          {[16, 32, 64].map((s) => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <Box size={s} /><span style={{ fontSize: 10.5, color: C.mute }}>{s}px</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: C.amber, marginBottom: 12 }}>Alternativa sem letras (favicon mini)</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
          {[16, 32].map((s) => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <DiaSilhouette size={s} /><span style={{ fontSize: 10.5, color: C.mute }}>{s}px</span>
            </div>
          ))}
          <span style={{ fontSize: 11.5, color: C.mute, maxWidth: 150, lineHeight: 1.5 }}>Só a silhueta dos losangos — lê nítido a 16px.</span>
        </div>
      </div>
    </div>
  );
}
function DiamondsSection() {
  const branco = window.DIA.branco;
  const fiel = window.DIA.fiel;
  return (
    <DCSection id="diamonds" title="★ Losangos GR — sua marca, minimalizada" subtitle="O par de losangos com G/R, limpo e otimizado. Sem o texto 'Empréstimo Consignado'.">
      <DCArtboard id="dia-finishes" label="3 acabamentos — qual você prefere?" width={620} height={250}>
        <DiaFinishes />
      </DCArtboard>
      <DCArtboard id="dia-nav-box-bitter" label="Navbar · caixa laranja + Bitter" width={820} height={84}>
        <Navbar mark={<DiaContainer size={44} sty={branco} />} font="bitter" />
      </DCArtboard>
      <DCArtboard id="dia-nav-box-sans" label="Navbar · caixa laranja + Source Sans" width={820} height={84}>
        <Navbar mark={<DiaContainer size={44} sty={branco} />} font="sans" />
      </DCArtboard>
      <DCArtboard id="dia-nav-free" label="Navbar · losangos soltos + Bitter" width={820} height={84}>
        <Navbar mark={<DiaFree size={42} sty={branco} />} font="bitter" />
      </DCArtboard>
      <DCArtboard id="dia-nav-fiel" label="Navbar · acabamento Fiel + Bitter" width={820} height={84}>
        <Navbar mark={<DiaContainer size={44} sty={fiel} />} font="bitter" />
      </DCArtboard>
      <DCArtboard id="dia-fav" label="Favicon" width={460} height={330}>
        <DiaFaviconTest />
      </DCArtboard>
    </DCSection>
  );
}

function App() {
  const dirs = [1, 2, 3, 4];
  return (
    <DesignCanvas>
      <DiamondsSection />
      {dirs.map((d) => {
        const M = window.MARKS[d];
        const nav = (Comp) => <Comp size={42} />;
        return (
          <DCSection key={d} id={`dir-${d}`} title={`Direção ${d} — ${M.concept.split(' · ')[0]}`} subtitle={M.concept.split(' · ')[1] || ''}>
            <DCArtboard id={`d${d}-sym`} label="Símbolo" width={420} height={300}>
              <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', alignItems: 'center' }}>
                <SymbolBoard dir={d} />
              </div>
            </DCArtboard>
            <DCArtboard id={`d${d}-nav-bitter`} label="Navbar · Bitter (serifa)" width={820} height={84}>
              <Navbar mark={nav(M.Container)} font="bitter" />
            </DCArtboard>
            <DCArtboard id={`d${d}-nav-sans`} label="Navbar · Source Sans" width={820} height={84}>
              <Navbar mark={nav(M.Container)} font="sans" />
            </DCArtboard>
            <DCArtboard id={`d${d}-nav-free`} label="Navbar · símbolo solto + Bitter" width={820} height={84}>
              <Navbar mark={<M.Free size={40} />} font="bitter" />
            </DCArtboard>
            <DCArtboard id={`d${d}-fav`} label="Favicon" width={420} height={300}>
              <div style={{ width: '100%', height: '100%', background: '#fff' }}>
                <FaviconTest Favicon={M.Favicon} />
              </div>
            </DCArtboard>
          </DCSection>
        );
      })}
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
