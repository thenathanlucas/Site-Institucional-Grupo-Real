# Spec — Seção "Produtos / Convênios" (substituir acordeão pela Vitrine fluida — Opção 5)

> **Objetivo:** trocar o acordeão vertical atual da seção `#produtos` por uma **vitrine horizontal deslizante** (Opção 5 aprovada), com seleção fluida do convênio e um painel de destaque ("spotlight" escuro) mostrando os produtos. Resolve o atrito do acordeão (gavetas rígidas) e dá mais destaque visual, mantendo acessibilidade para o público idoso.
> **Arquivo a editar:** `site_inst.html` (HTML único, Tailwind via CDN, **sem build**).
> **Referência canônica (mockup aprovado):** `docs/product_grid-refined.html` → **Opção 5**. Em caso de dúvida de marcação/CSS/JS, copiar de lá. O briefing original é `docs/product_grid.md`.
> **Status:** ⏳ a implementar. As decisões abaixo já foram **fechadas com o cliente** em iterações de mockup.

---

## 1. Decisões fechadas (cores, layout, comportamento)

- **Layout:** vitrine de cards de convênio com rolagem horizontal + `scroll-snap`. Abaixo, um **painel de detalhe** com 1 losango "herói" + nome do convênio + lista de produtos.
- **Fluidez (aprovada):** o convênio que cruza o **centro** da vitrine é selecionado automaticamente (via `IntersectionObserver`), sem precisar tocar. Tocar num card também seleciona e centraliza. A troca de conteúdo do painel usa **crossfade** (fade + leve deslize).
- **Cores / contraste (aprovado):**
  - **Card ativo da vitrine:** **Laranja Vibrante** `linear-gradient(135deg,#FB6516,#ED4A05)`, texto branco, sombra alaranjada forte, leve "lift" (escala). Cards inativos: brancos com borda `areia-borda`.
  - **Losango "herói" (1 por convênio selecionado):** laranja vibrante **sólido**, ícone branco, brilho. É o único losango da seção (não repetir losango em cada card nem em cada produto).
  - **Painel de detalhe = spotlight escuro:** fundo **Café Profundo** (`bg-cafe` `#2B1D14`) com clarão radial laranja decorativo. Nome do convênio em **branco** (Bitter).
  - **Cards de produto (dentro do painel escuro):** fundo **`bg-cafe-claro` `#3A2A1E`** (um tom acima do painel), nome branco, descrição em bege quente `#C9BBA8`, borda `rgba(255,255,255,.09)`. **Não usar branco** aqui (decisão do cliente: branco sobre o café "não conversa").
  - **CTAs:** sempre **Laranja Ação `#E8501A`** (hover `#C2410C`), mesmo abrindo WhatsApp (`ui-rules §7`). **Verde Confiança** `#17A24B` aparece só no **selo inline** "• Atendimento no WhatsApp".

---

## 2. Conteúdo / Dados — reaproveitar `CONVS`

A seção já é alimentada por um array `CONVS` no `<script>` (hoje renderiza o acordeão). **Reutilizar o mesmo array**, apenas **estendendo cada convênio com 2 campos** (já usados no mockup):

- `tag`: legenda humana curta (ex.: INSS → `'Aposentados e pensionistas'`, CLT → `'Carteira assinada'`, SIAPE → `'Servidor federal'`, etc.). Ajuda o idoso a se reconhecer sem decorar sigla.
- `cmsg`: mensagem WhatsApp de nível do convênio para o CTA "Falar sobre {label}" (ex.: `'Olá! Quero saber as opções de crédito para INSS.'`).

Os campos `id`, `label`, `icon`, `prods[]` (com `n`, `d`, `msg`) **permanecem**. Valores de `tag`/`cmsg` por convênio estão prontos no mockup `docs/product_grid-refined.html` — copiar de lá.

---

## 3. HTML — substituir o miolo da seção `#produtos`

Hoje (aprox.):
```html
<section class="bg-white ..." id="produtos">
  <div class="max-w-[1200px] mx-auto">
    <div class="eyebrow ...">Soluções financeiras</div>
    <h2 ...>Escolha seu <span class="text-laranja-acao">convênio</span></h2>
    <p ...>Toque no seu convênio ...</p>
    <div ... id="acord"></div>   <!-- ⬅ alvo da troca -->
  </div>
</section>
```

**Trocar** o `<div id="acord">` (e ajustar o subtítulo) pela estrutura da vitrine:
```html
<div id="prod-rail" class="prod-rail no-bar -mx-1 px-1"></div>
<div class="md:hidden text-center text-[12px] text-[#9A9590] -mt-2 mb-4">deslize para ver todos →</div>
<div id="prod-detail" class="prod-detail mt-4"></div>
```
- Manter `eyebrow` "Soluções financeiras" e o `<h2>`. Pode manter "Escolha seu convênio" ou usar "Nossas soluções" (mockup). Subtítulo: "Deslize e toque no seu convênio para ver os produtos disponíveis."
- **Seção continua `bg-white`** (alternância de fundos do site). Os cards inativos (brancos) têm borda + sombra para separar do branco; o painel escuro faz o spotlight. *(Se preferir, pode trocar o fundo da seção para `bg-areia` como no mockup — opcional.)*
- Usar prefixo `prod-` nas classes/IDs (em vez de `o5-` do mockup) para clareza no código final.

---

## 4. CSS — adicionar ao bloco `<style>` existente

Copiar do mockup (renomeando `o5-` → `prod-`). Essencial:
```css
.prod-rail { display:flex; gap:12px; overflow-x:auto; scroll-snap-type:x mandatory; padding:8px 2px 16px; scroll-padding:0 50%; }
.prod-card { flex:0 0 auto; width:130px; scroll-snap-align:center; background:#fff; border:1px solid #E8E3D9;
             border-radius:16px; padding:16px; text-align:left; cursor:pointer;
             transition:transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s, border-color .35s, background-color .35s; }
.prod-card .prod-ico { width:44px; height:44px; border-radius:13px; background:#F4F1EA; color:#2B2A27; display:flex; align-items:center; justify-content:center; transition:.35s; }
.prod-card .prod-name { display:block; font-weight:700; font-size:15px; color:#2B2A27; margin-top:11px; line-height:1.15; }
.prod-card .prod-count { display:block; font-size:12px; color:#9A9590; margin-top:3px; transition:.35s; }
.prod-card.is-active { border-color:transparent; background:linear-gradient(135deg,#FB6516,#ED4A05); box-shadow:0 18px 38px rgba(232,80,26,.42); transform:translateY(-6px) scale(1.04); }
.prod-card.is-active .prod-ico { background:rgba(255,255,255,.20); color:#fff; }
.prod-card.is-active .prod-name { color:#fff; }
.prod-card.is-active .prod-count { color:rgba(255,255,255,.85); font-weight:600; }
.prod-detail { transition:opacity .24s ease, transform .24s ease; }
.prod-detail.swap { opacity:0; transform:translateY(8px); }
@media (min-width:768px){ .prod-card { width:150px; } }

/* reduzir movimento p/ quem pede (ver §6) */
@media (prefers-reduced-motion: reduce){
  .prod-card, .prod-card.is-active { transition:none; transform:none; }
  .prod-detail { transition:opacity .15s ease; }
}
```
- `.no-bar` (esconder scrollbar) já pode existir; se não, adicionar.
- Café Profundo e Café Claro **não precisam de CSS novo**: usar tokens Tailwind já existentes `bg-cafe` / `bg-cafe-claro`. Gradiente laranja vibrante e clarão radial via `style="..."` inline (são gradientes, não há token).

---

## 5. JS — substituir o render do acordeão pela vitrine

No `<script>`, **localizar o bloco que renderiza o acordeão** (`const acordEl = ...; CONVS.forEach(...) { acordEl.appendChild(item); }`) e **substituir** pela lógica da Opção 5. Copiar do mockup:
- `convIcon`, `waCta` (com `trackWA`, ver §6), `prodRowDark`, `heroDiamond` (losango sólido vibrante).
- Render da `#prod-rail` (cards com `prod-card` / `prod-ico` / `prod-name` / `prod-count`).
- `renderDetail(id)` → painel `bg-cafe` + clarão + `heroDiamond` + nome branco + selo verde + CTA "Falar sobre {label}" (desktop) + grade de `prodRowDark`.
- `setActive(id)` (dedupe + crossfade via classe `swap`) e `pick(id)` (scrollIntoView center).
- `IntersectionObserver` com `root: #prod-rail`, `rootMargin:'0px -42% 0px -42%'` para ativar o card central.
- Estado inicial: ativar `CONVS[0]` e renderizar seu detalhe.

> **`prodRowDark`** (cards de produto no painel escuro):
> ```js
> const prodRowDark = p => `
>   <div class="flex items-center justify-between gap-3.5 rounded-card border p-4" style="background:#3A2A1E;border-color:rgba(255,255,255,.09)">
>     <div class="min-w-0">
>       <div class="text-[17px] font-bold text-white leading-snug">${p.n}</div>
>       <div class="text-base leading-[1.55] mt-0.5" style="color:#C9BBA8">${p.d}</div>
>     </div>
>     ${waCta(p.msg, 'Quero', `wa_prod_${current}`)}
>   </div>`;
> ```
> (ou usar `bg-cafe-claro` em vez do `style`).

---

## 6. Integração — cuidados obrigatórios

1. **NÃO remover `toggleAcord()` nem as classes `.ac-item` / `.ac-chev` / `.ac-body`.** O **FAQ** (`#faq`) reusa essas classes e função (`ui-rules §8C`). Remover **apenas** o render do acordeão de convênios e o container `#acord`.
2. **Tracking:** todo CTA precisa de `onclick="trackWA('...')"` (a função `trackWA` já existe — dispara GA4 + Clarity). Sugestão de rótulos: produtos → `wa_prod_${conv.id}`; CTA de convênio → `wa_conv_${conv.id}`. Embutir o `onclick` no helper `waCta`.
3. **`prefers-reduced-motion`:** além do CSS (§4), no JS usar `scrollIntoView({behavior: prefersReduced ? 'auto' : 'smooth', ...})`. Detectar com `window.matchMedia('(prefers-reduced-motion: reduce)').matches`.
4. **Fallback do `IntersectionObserver`:** todos os navegadores-alvo suportam; ainda assim, como `pick()` (clique) também seleciona, a vitrine funciona mesmo sem o auto-select por rolagem.
5. **`CONVS` é fonte única:** estender com `tag`/`cmsg` no array existente — **não duplicar** o array.
6. **Links do footer/menu** que apontam para `#produtos` continuam válidos (âncora preservada).

---

## 7. Acessibilidade (`ui-rules §2` — público idoso)

- Nomes de produto ≥ `17px`, descrições ≥ `16px` (`text-base`), `line-height` ≥ 1.55.
- Contraste: branco e bege `#C9BBA8` sobre `#2B1D14`/`#3A2A1E` = alto contraste (ok). CTA laranja sobre escuro = ok.
- Alvos de toque ≥ **48px**: CTAs `min-h-[48px]`; cards da vitrine têm área ampla.
- Adornos decorativos (clarão radial, losango) com `aria-hidden="true"`.
- A vitrine é navegável por toque/rolagem **e** por clique nos cards; ordem de leitura lógica.
- Movimento respeitando `prefers-reduced-motion` (§6.3).

---

## 8. Responsividade (`ui-rules §6`, mobile-first)

- **Mobile (<768px):** vitrine desliza; losango + nome centralizados no topo do painel; produtos empilhados (1 coluna); CTA "Falar sobre {label}" oculto (os CTAs por produto bastam); dica "deslize para ver todos →".
- **Desktop (≥768px):** painel vira **2 colunas** — coluna do losango-herói + nome + CTA do convênio à esquerda; grade de produtos à direita (`lg:grid-cols-2`). Cards da vitrine um pouco maiores.
- Testar em **360 / 768 / 1280px**.

---

## 9. Conformidade / correções de `ui-rules` (o `product_grid.md` tinha desvios)

- ✅ **CTA em Laranja Ação, não verde** (`§7`): o briefing sugeria botões em verde/WhatsApp; corrigido. Verde só no **selo inline** de confiança.
- ✅ **H2 em Bitter** (`§2`).
- ✅ **Cards 8px** (`rounded-card`) nos produtos; os cards da vitrine usam `16px` como escolha estética premium (aceitável; se quiser estrito, baixar para 8px).
- ✅ Café Profundo como superfície de impacto (`§1`).

---

## 10. TODO (pós-implementação, combinado com o cliente)

- **Trocar os ícones dos convênios** — o cliente não gostou dos atuais (`conv.icon`). Definir um set novo coerente e substituir os paths em `CONVS[].icon`. *(Não bloqueia a implementação.)*

---

## 11. Critérios de aceite

- [ ] Acordeão de convênios removido; vitrine fluida no lugar, dentro de `#produtos`.
- [ ] `CONVS` reutilizado e estendido com `tag`/`cmsg` (sem duplicar).
- [ ] Seleção automática ao deslizar (card central) + clique funcionando, com crossfade.
- [ ] Card ativo laranja vibrante; losango-herói laranja sólido; painel `bg-cafe`; produtos `bg-cafe-claro` (sem branco).
- [ ] CTAs laranja com `trackWA`; selo verde inline presente.
- [ ] `toggleAcord` e `.ac-item/.ac-chev/.ac-body` **intactos** (FAQ continua funcionando).
- [ ] Acessibilidade: ≥16px, alvos ≥48px, contraste ok, `aria-hidden` nos adornos, `prefers-reduced-motion` respeitado.
- [ ] Responsivo em 360 / 768 / 1280px (mobile empilhado, desktop 2 colunas).
- [ ] Sem regressão no menu/footer que apontam para `#produtos`.

---

## 12. Fora de escopo

- Troca dos ícones dos convênios (vira TODO — §10).
- Alterações em outras seções (Como funciona, FAQ, Filiais).
- Qualquer mudança no array de dados além de `tag`/`cmsg`.
