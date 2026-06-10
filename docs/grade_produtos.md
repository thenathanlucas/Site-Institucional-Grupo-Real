# Spec — Refino UI/UX da Seção de Produtos (Convênios) sobre fundo laranja

> **Status:** ⚠️ **SUPERSEDED** — implementado em 2026-06-09, mas a vitrine foi depois **substituída pelo mosaico filtrado** (`docs/nossas-solucoes-spec.md`). A **decisão de fundo laranja + paleta** (§2) permanece válida na seção atual. Mantido como histórico; **não implementar**.
> **Arquivo editado:** `site_inst.html` (HTML único, Tailwind via CDN, sem build).
> **Base anterior:** a vitrine fluida "Opção 5" (ver `docs/product_grid-spec.md`) — esta spec **evolui** aquela, não a substitui.
> **Origem:** rascunho inicial pedia genericamente um refino + cor de marca. Esta versão corrige os desvios do rascunho (cor fora da paleta, perda de dados, sem tracking) e registra a decisão de **fundo laranja** com a paleta complementar.

---

## 1. Objetivo
Transformar a seção `#produtos` numa **vitrine boutique sobre fundo laranja vibrante**, espelhando o hero (`ui-rules §1`: laranja de marca + cards claros flutuando para contraste). Mantém alta conversão e **acessibilidade para o público idoso**, e adiciona semântica de abas (ARIA).

---

## 2. Decisão de cor — fundo laranja + paleta complementar

> ⚠️ **Não usar `#FF6B00`** (estava no rascunho): fora da marca. As cores são os tokens oficiais (`ui-rules §1`, `tailwind.config` do arquivo).

| Papel na seção | Cor / token | Justificativa |
| :--- | :--- | :--- |
| **Fundo da seção** (`.prod-section`) | Laranja Vibrante: `radial-gradient(#FF8A3D)` + `linear-gradient(160deg,#FB6516→#ED4A05→#CE3A00)` | mesma fórmula do `.hero-orange`; "bookend" de marca com o hero |
| **Cards inativos** (`.prod-card`) | Branco `#FFFFFF`, borda `rgba(255,255,255,.6)`, sombra quente `0 6px 18px rgba(120,40,0,.15)` (hover sobe pra `.22`) | cards claros flutuam sobre o laranja (princípio de marca), texto grafite = contraste alto |
| **Card ativo** (`.prod-card.is-active`) | Branco `#fff` + **anel laranja** (`box-shadow 0 0 0 2px #E8501A`) + sombra `0 22px 44px rgba(120,40,0,.32)`; chip do ícone vira laranja `#FB6516→#ED4A05` (ícone branco); nome/contagem `#C2410C` | inativo e ativo são brancos → o ativo se diferencia por **anel + chip laranja + lift + sombra**, sem introduzir cor escura |
| **Painel de detalhe** (`#prod-detail`) | Creme `linear-gradient(165deg,#FFFFFF,#FFF4EA)` + clarão radial quente sutil + borda `white/70` + sombra em 2 camadas `0 30px 70px rgba(120,40,0,.28), 0 8px 22px (.14)` | painel claro flutuando (boutique arejada); raio `24px` |
| **Produtos no painel** | Cards brancos `#fff`, borda `areia-borda #E8E3D9`, sombra sutil `0 2px 10px rgba(43,42,39,.05)`; nome grafite, descrição `#6B6560` | legível, leve, hover com leve elevação quente |
| **Losango herói** | Laranja vibrante sólido `#FB6516→#ED4A05` + aura blur, ícone branco | pop de cor sobre o creme; mantém o destaque do convênio |
| **Selo de confiança** | Verde Confiança `#17A24B` | único toque complementar (verde ~complementar do laranja), só no selo "Atendimento no WhatsApp" |
| **CTAs** | Laranja Ação `#E8501A` (hover `#C2410C`) | sobre cards/painel claros = contraste ótimo (`ui-rules §7`) |
| **Header sobre laranja** | H2 branco + palavra-destaque em **grafite** `#2B2A27` (`text-grafite`); eyebrow cream `#FFE3CC` (`.eyebrow-white`); subtítulo `rgba(255,247,240,.92)` | destaque em grafite = neutro/crisp, alto contraste, sem o "barro" do marrom sobre laranja |

---

## 3. Acessibilidade (A11y) — `ui-rules §2`, público idoso

### Semântica de abas (ARIA) — incremento principal
- `#prod-rail` → `role="tablist"` + `aria-label="Escolha seu convênio"`.
- Cada card → `<button role="tab" id="prodtab-{id}" aria-selected aria-controls="prod-detail">`, com **roving tabindex** (`0` no ativo, `-1` nos demais).
- `#prod-detail` → `role="tabpanel" tabindex="0" aria-live="polite"`, com `aria-labelledby` apontando para a aba ativa (atualizado em `setActive`).
- **Teclado:** ←/→ navegam e selecionam, `Home`/`End` vão ao primeiro/último; foco acompanha a aba.
- **Foco visível:** `.prod-card:focus-visible { outline:3px solid #fff; outline-offset:3px }` (anel branco legível sobre o laranja).

### Demais regras
- Contraste: branco/bege sobre café e grafite sobre branco = alto. Café e branco sobre o laranja passam AA para texto grande (H2). O subtítulo em branco sobre laranja segue o **mesmo padrão já aceito do hero** (linha instrucional curta; o conteúdo crítico — produtos — fica no painel café de alto contraste).
- Corpo ≥ 16px, `line-height` ≥ 1.55; alvos de toque ≥ 48px (CTAs `min-h-[48px]`).
- Adornos (clarão radial, losango herói, dica "deslize") com `aria-hidden="true"`.
- `prefers-reduced-motion`: sem transform/lift; crossfade reduzido; `scrollIntoView` em `auto`.

---

## 4. Estrutura de dados — **preservar `CONVS` rico**

> ⚠️ **Não achatar** para um único `title/desc` por convênio (estava no rascunho): isso apagaria a lista de produtos.

Cada convênio mantém: `id`, `label`, `tag`, `cmsg`, `icon`, e **`prods[]`** (cada produto com `n`, `d`, `msg`). Fonte única (não duplicar o array).

---

## 5. Responsividade — `ui-rules §6`
- **Mobile (<768px):** vitrine desliza (`overflow-x:auto`), `scroll-snap-type:x mandatory` + `scroll-snap-align:center`, scrollbar oculta (`.no-bar`); painel empilhado (1 coluna); dica "deslize para ver todos →".
- **Desktop (≥768px):** mantém a **vitrine fluida deslizante com auto-seleção** (decisão "Opção 5" aprovada — *não* trocar por linha estática); painel em 2 colunas (losango+CTA / grade de produtos).
- Testar em 360 / 768 / 1280px.

---

## 6. Interação (JS vanilla, já no `<script>`)
- `IntersectionObserver` (root = rail, `rootMargin 0px -42%`) auto-seleciona o card central ao deslizar.
- `pick(id)`: centraliza (`scrollIntoView`) + `setActive`.
- `setActive(id)`: dedupe, alterna `.is-active` + `aria-selected` + `tabindex`, atualiza `aria-labelledby`, crossfade via classe `.swap` (240ms no CSS).
- **CTAs dinâmicos** para `5521986862308` com mensagem por produto (`p.msg`) e por convênio (`c.cmsg`), **todos com `trackWA(...)`** (GA4 + Clarity) — rótulos `wa_prod_{id}` e `wa_conv_{id}`. **Não remover o tracking.**

---

## 7. Integração — cuidados mantidos
- `toggleAcord()` e as classes `.ac-item/.ac-chev/.ac-body` **intactas** (reusadas pelo FAQ `#faq`).
- Âncora `#produtos` preservada (menu/footer).

---

## 8. Critérios de aceite
- [x] Seção `#produtos` com fundo laranja (`.prod-section`), header em cores claras legíveis.
- [x] Cards inativos brancos; card ativo branco com anel/chip laranja; painel creme claro com produtos em cards brancos.
- [x] Selo verde inline; CTAs Laranja Ação com `trackWA`.
- [x] `role="tablist"/"tab"/"tabpanel"`, `aria-selected`, roving tabindex, navegação por teclado, foco visível.
- [x] `CONVS` rico preservado (`prods[]`), sem `#FF6B00`.
- [x] Responsivo (mobile desliza, desktop 2 colunas); `prefers-reduced-motion` respeitado.
- [x] FAQ (`toggleAcord`) sem regressão.
