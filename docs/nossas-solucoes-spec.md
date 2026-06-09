# Spec — Seção "Nossas soluções" (filtro por convênio + cards com losango)

> **Objetivo:** substituir a vitrine deslizante atual (`#prod-rail` + `#prod-detail`) da seção `#produtos` por um **mosaico filtrado**: o cliente toca no seu convênio e só então aparecem os produtos daquele convênio, em cards com **losango** (slot de mídia). Resolve a queixa de UX (não obrigar o idoso a rolar por todos os produtos) e prepara o card para receber imagem/ícone no losango futuramente.
> **Arquivo a editar:** `site_inst.html` (HTML único, Tailwind via CDN, **sem build**).
> **Referência canônica (aprovada pelo cliente):** `docs/grade-produtos-5opcoes.html` → **Opção 5**. Em dúvida de marcação/CSS/JS, copiar de lá.
> **Supersede:** para a seção `#produtos`, esta spec substitui a vitrine descrita em `docs/product_grid-spec.md` e `docs/grade_produtos.md`. A **paleta laranja** dessas specs permanece válida.
> **Status:** ⏳ a implementar.

---

## 1. Decisões fechadas
- **Modelo de interação:** filtro por **chips de convênio** (single-select). Estado inicial **sem produtos** — só os chips + um aviso convidando a escolher. Produtos aparecem **somente ao tocar** num convênio, mostrando apenas os daquele convênio. **Não existe "Todos"** (era o que gerava a lista longa).
- **Título da seção:** **"Nossas soluções"** (`Nossas <span class="text-grafite">soluções</span>`).
- **Subtítulo:** "Toque no seu convênio para ver só os produtos dele."
- **Card de produto:** topo com **losango** (reaproveitado), depois etiqueta do convênio (laranja, caixa-alta), nome do produto, descrição e **CTA WhatsApp** (largura total, fixo na base; cards de altura igual).
- **Losango = slot de mídia:** recorta o conteúdo no formato de diamante. Hoje mostra o ícone do convênio; deve ficar **pronto para troca por `<img>`** no futuro (ver §5).

---

## 2. Paleta (mantém a da seção — `ui-rules §1`)
- **Fundo da seção:** `.prod-section` (gradiente laranja vibrante) — **mantém**.
- **Cards:** brancos `#fff`, borda `areia-borda #E8E3D9`, sombra sutil `0 2px 10px rgba(43,42,39,.05)`.
- **Losango:** laranja sólido `linear-gradient(135deg,#FB6516,#ED4A05)`, borda `white/40`, sombra `0 8px 20px rgba(232,80,26,.4)`, ícone branco.
- **Etiqueta do convênio no card:** `text-laranja-acao` caixa-alta 12px bold.
- **Texto:** nome do produto grafite 18px bold; descrição `#6B6560` 16px.
- **CTA:** Laranja Ação `#E8501A` (hover `#C2410C`), texto branco (`ui-rules §7`).
- **Header sobre laranja:** H2 branco + destaque grafite; eyebrow cream `#FFE3CC` (`.eyebrow-white`); subtítulo `rgba(255,247,240,.92)`.
- **Aviso (placeholder):** caixa branca `bg-white/95`, borda `white/70`, sombra; ícone de seta para cima em chip `bg-[#FDEADF] text-laranja-acao`; texto grafite 18px + apoio `#6B6560` 15px.

---

## 3. HTML — substituir o miolo da seção `#produtos`

**Remover** os 3 elementos da vitrine (`#prod-rail`, a dica "deslize para ver todos →", `#prod-detail`) e **trocar** título/subtítulo. Resultado:

```html
<section class="prod-section relative overflow-hidden py-16 px-5 md:py-[100px] md:px-12" id="produtos">
  <div class="max-w-[1200px] mx-auto">
    <div class="eyebrow eyebrow-white inline-flex items-center gap-2 text-[11px] font-semibold tracking-[.12em] uppercase text-[#FFE3CC] mb-3.5">Soluções financeiras</div>
    <h2 class="section-title font-body font-bold leading-[1.2] tracking-[-0.3px] text-white mb-4">Nossas <span class="text-grafite">soluções</span></h2>
    <p class="text-base leading-[1.75] max-w-[520px]" style="color:rgba(255,247,240,.92)">Toque no seu convênio para ver só os produtos dele.</p>

    <!-- chips de filtro (single-select) -->
    <div id="prod-chips" class="flex flex-wrap gap-2.5 mt-8 mb-7" role="group" aria-label="Filtrar produtos por convênio"></div>

    <!-- grade de produtos (vazia até escolher; anuncia mudanças a leitores de tela) -->
    <div id="prod-grid" aria-live="polite"></div>
  </div>
</section>
```

> Manter `section-title` (clamp tipográfico já existente) no H2 para consistência com as outras seções.

---

## 4. CSS — no bloco `<style>` existente
- **Manter** `.prod-section`, `.eyebrow-white`.
- **Remover** as regras agora órfãs da vitrine: `.prod-rail`, `.prod-card` (+ `:hover`, `:focus-visible`, `.is-active` e subitens), `.prod-detail` (+ `.swap`). (`.no-bar` pode ficar; é usada em outros lugares? Se não, remover.)
- **Adicionar** os chips:
```css
.prod-chip { background:rgba(255,255,255,.92); color:#2B2A27; border:0; cursor:pointer; box-shadow:0 4px 12px rgba(120,40,0,.15); transition:.25s; }
.prod-chip:hover { background:#fff; }
.prod-chip.is-on { background:#fff; color:#C2410C; box-shadow:0 0 0 2px #E8501A, 0 8px 18px rgba(120,40,0,.25); }
.prod-chip:focus-visible { outline:3px solid #2B2A27; outline-offset:2px; }
```
- O card e o aviso usam classes utilitárias do Tailwind inline (copiar do preview), sem CSS dedicado.

---

## 5. JS — substituir o render da vitrine

**Reaproveitar (não duplicar):** `WA`, `WA_PATH`, `CONVS`, `byId`, `waLink`, `plural`, `convIcon`, `waCta`, `trackWA`, `toggleAcord`.

**Remover:** `heroDiamond`, `prodRow`, `prodRail`/`prodDetail`, `renderDetail`, `setActive`, `pick`, o `IntersectionObserver` (`prodIo`), o `keydown` da tablist e o IIFE de init da vitrine.

**Ajustar `waCta`** para aceitar largura total (4º parâmetro), mantendo o `trackWA`:
```js
const waCta = (msg, label, trackLabel, full=false) => `<a href="${waLink(msg)}" target="_blank" rel="noopener" onclick="trackWA('${trackLabel}')"
  class="inline-flex items-center justify-center gap-1.5 ${full ? 'w-full mt-auto' : ''} bg-laranja-acao hover:bg-laranja-acao-d text-white font-bold text-[15px] min-h-[48px] px-5 rounded-btn no-underline transition-colors">
  ${label}<svg class="w-[14px] h-[14px] fill-white" viewBox="0 0 24 24"><path d="${WA_PATH}"/></svg></a>`;
```

**Adicionar `mediaDiamond`** (losango slot de mídia — recorta no formato diamante):
```js
// Hoje mostra o ícone do convênio. Para usar imagem depois, trocar o convIcon(...)
// por <img src="..." class="w-full h-full object-cover"> — encaixa recortado no losango.
const mediaDiamond = (conv, size=68) => `
  <span aria-hidden="true" class="relative inline-block shrink-0" style="width:${size}px;height:${size}px">
    <span class="absolute inset-0 rounded-[16px] rotate-45 overflow-hidden border border-white/40" style="background:linear-gradient(135deg,#FB6516,#ED4A05);box-shadow:0 8px 20px rgba(232,80,26,.4)">
      <span class="absolute inset-0 -rotate-45 flex items-center justify-center text-white">${convIcon(conv, Math.round(size*0.42))}</span>
    </span>
  </span>`;
```

**Render dos chips + grade + filtro:**
```js
const prodChips = document.getElementById('prod-chips');
const prodGrid  = document.getElementById('prod-grid');

prodChips.innerHTML = CONVS.map(c => `
  <button class="prod-chip min-h-[48px] px-5 rounded-full font-semibold text-[15px]" data-id="${c.id}" aria-pressed="false" onclick="prodFilter('${c.id}')">${c.label}</button>`).join('');

const prodPlaceholder = `
  <div class="rounded-[18px] border border-white/70 bg-white/95 px-6 py-10 text-center shadow-[0_10px_30px_rgba(120,40,0,.18)]">
    <div aria-hidden="true" class="mx-auto mb-3 w-12 h-12 rounded-full bg-[#FDEADF] text-laranja-acao flex items-center justify-center">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
    </div>
    <p class="text-[18px] font-semibold text-grafite">Toque no seu convênio acima para ver os produtos.</p>
    <p class="text-[15px] text-[#6B6560] mt-1">Mostramos só o que é do seu interesse — sem rolar a lista inteira.</p>
  </div>`;

function prodRenderConv(id){
  const c = byId(id);
  prodGrid.innerHTML = `
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${c.prods.map(p => `
        <div class="flex flex-col gap-3.5 rounded-[16px] border border-areia-borda bg-white p-5 shadow-[0_2px_10px_rgba(43,42,39,.05)] h-full">
          ${mediaDiamond(c, 68)}
          <div>
            <div class="text-[12px] font-bold uppercase tracking-wide text-laranja-acao mb-1">${c.label}</div>
            <div class="text-[18px] font-bold text-grafite leading-snug">${p.n}</div>
            <div class="text-base leading-[1.6] text-[#6B6560] mt-1">${p.d}</div>
          </div>
          ${waCta(p.msg, 'Quero saber', 'wa_prod_' + c.id, true)}
        </div>`).join('')}
    </div>`;
}

function prodFilter(id){
  prodChips.querySelectorAll('.prod-chip').forEach(b => {
    const on = b.dataset.id === id;
    b.classList.toggle('is-on', on);
    b.setAttribute('aria-pressed', on);
  });
  prodRenderConv(id);
}

// estado inicial: nenhum produto, só o convite
prodGrid.innerHTML = prodPlaceholder;
```

---

## 6. Acessibilidade (`ui-rules §2`)
- Nome do produto ≥ 18px; descrição ≥ 16px (`text-base`), `line-height` ≥ 1.6.
- Chips e CTAs com altura ≥ **48px**; foco visível (contorno grafite).
- `role="group"` + `aria-label` no contêiner de chips; `aria-pressed` reflete o selecionado.
- `aria-live="polite"` na grade → leitor de tela anuncia os produtos ao aparecerem.
- Adornos (losango, ícone do aviso) com `aria-hidden="true"`.
- Contraste alto: cards brancos sobre laranja; texto grafite sobre branco; CTA branco sobre laranja.
- Sem dependência de movimento; respeita `prefers-reduced-motion` (transições curtas/none).

---

## 7. Responsividade (`ui-rules §6`)
- **Mobile (<768px):** chips quebram em linhas (`flex-wrap`); grade 1 coluna.
- **≥640px:** grade 2 colunas (`sm:grid-cols-2`). **≥1024px:** 3 colunas (`lg:grid-cols-3`).
- Cards de altura uniforme (`h-full` + CTA `mt-auto`).
- Testar em 360 / 768 / 1280px.

---

## 8. Integração — cuidados obrigatórios
1. **Não remover** `toggleAcord()` nem `.ac-item/.ac-chev/.ac-body` — reusados pelo **FAQ** (`#faq`).
2. **`trackWA` em todo CTA** (GA4 + Clarity) — rótulo `wa_prod_{conv.id}`. (O preview omitiu o tracking; **reinserir** ao portar.)
3. **`CONVS` é fonte única** — reutilizar; não duplicar. Os campos `tag`/`cmsg` continuam no array (mesmo que o card use só `prods[]`).
4. **Âncora `#produtos`** preservada (menu/footer apontam para ela).
5. Conferir que nenhuma referência órfã à vitrine (`prod-rail`, `prod-detail`, `renderDetail`, `prodIo`, `setActive`, `pick`) permanece no arquivo.

---

## 9. Critérios de aceite
- [ ] Vitrine (`#prod-rail`/`#prod-detail`) removida; mosaico filtrado no lugar, dentro de `#produtos`.
- [ ] Título "Nossas soluções"; subtítulo atualizado.
- [ ] Estado inicial **sem produtos**, com aviso; produtos aparecem só ao tocar num convênio (apenas os dele); sem "Todos".
- [ ] Cards com **losango** no topo (slot de mídia recortado, pronto para `<img>`), etiqueta do convênio, nome, descrição e CTA WhatsApp full-width.
- [ ] CTAs Laranja Ação com `trackWA('wa_prod_{id}')`.
- [ ] `role="group"`/`aria-label`, `aria-pressed`, `aria-live`, foco visível; corpo ≥16px; alvos ≥48px.
- [ ] Responsivo (1/2/3 colunas); `prefers-reduced-motion` ok.
- [ ] FAQ (`toggleAcord`) e âncora `#produtos` sem regressão; nenhuma sobra da vitrine.

---

## 10. Fora de escopo
- Imagens reais dentro dos losangos (TODO futuro — a estrutura já fica pronta, §5).
- Troca dos ícones dos convênios (`conv.icon`).
- Outras seções (Como funciona, FAQ, Filiais).
