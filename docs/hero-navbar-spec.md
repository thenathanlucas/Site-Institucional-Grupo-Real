# SPEC DE EXECUÇÃO — Novo Hero + Navbar (Laranja / Coverflow)

> **Para o agente executor.** Implemente exatamente este spec.
> **Arquivo único editado:** `site_inst.html` (raiz). **Stack:** HTML + Tailwind CDN + JS vanilla. **NÃO** usar React.
> **Escopo de cor:** ⚠️ **ATUALIZADO** — a paleta laranja agora vale em **todo o site** (ver "Fase 6" abaixo). O verde-oliva foi descontinuado; superfícies escuras usam **Café Profundo `#2B1D14`**.
> **Fonte do design:** `docs/components/hifi-core.jsx` + `docs/components/hifi-app.jsx` (protótipo React, só referência). Tokens canônicos em `docs/ui-rules.md`.

## Decisões já fechadas (não reabrir)
- O carrossel **coverflow** vira o centro do hero e **substitui** o "deck carousel" atual (`#topo`, linhas ~339-519) **e** o hero de texto atual (~521-563).
- ~~Paleta laranja só no topo; demais seções continuam verdes.~~ **Revertido** → padronização aplicada no site inteiro (Fase 6).
- Fontes: **Bitter** (títulos) + **Source Sans 3** (corpo) no hero, mantendo Plus Jakarta Sans no resto.
- Navbar: **remover** botão WhatsApp e **não** colocar barra de busca. **Manter** hambúrguer + drawer mobile (o WhatsApp flutuante já cobre conversão no mobile).
- Card CTA: botão laranja com seta, label "Consultar já".
- Logo: manter o SVG GR inline atual (não depender de `logo-gr.png`).

---

## Fase 0 — Assets e fontes
1. Criar `assets/` na **raiz** e copiar:
   - `docs/references/assets/money-bundle.png`
   - `docs/references/assets/carteira-trabalho.png`
   - `notas-leque.png` está ausente → **fallback:** no card CLT usar `money-bundle.png` esmaecido atrás da carteira.
2. `<head>`: trocar link Google Fonts para incluir **Bitter** (`500;600;700` + itálico) e **Source Sans 3** (`400;500;600;700`); manter Plus Jakarta Sans.
3. `tailwind.config` (≈linhas 38-74): ADICIONAR (sem remover os verdes):
   - Cores: `laranja-acao #E8501A`, `laranja-acao-d #B23C0E`, `verde-wa #16A34A`, `verde-hi #17A24B`, `areia-nav #FDFAF5`, `ink-nav #241F1A`, `ink-nav-sub #6F5648`, `card-ink #2B2A27`, `card-sub #7A756C`, `hero-eyebrow #FFE3CC`, `amber #D98324`.
   - Famílias: `bitter: ['Bitter','Georgia','serif']`, `source: ['"Source Sans 3"','system-ui','sans-serif']`.

## Fase 1 — Navbar (substitui ~267-337)
- Manter: `<nav sticky>`, logo SVG GR atual, `toggleMenu`, drawer mobile, âncoras reais.
- Visual: `background: rgba(253,250,245,0.9)` + `backdrop-blur-md`, borda inferior `rgba(43,42,39,0.10)`. Nome "Grupo Real" em **Bitter** `#241F1A`. Links `#6F5648`, hover `#E8501A`.
- Remover botão "Falar agora". Não adicionar busca.
- Links: `Produtos #produtos` · `Filiais #filiais` · `Quem somos #sobre`.
- Mobile: logo (esq) + hambúrguer (dir); drawer areia, tap target ≥48px.

## Fase 2 — Hero laranja (substitui ~339-563)
Uma `<section id="topo">` contendo:
- `.hero-orange` no `<style>`:
  `background: radial-gradient(110% 82% at 50% -2%, #FF8A3D 0%, rgba(255,138,61,0) 60%), linear-gradient(158deg,#FB6516 0%,#ED4A05 50%,#CE3A00 100%);`
- TitleBlock centralizado (`max-w-[680px]`):
  - eyebrow `#FFE3CC` uppercase: `• Correspondente Bancário`
  - H1 **Bitter** branco `clamp(30px,4.4vw,46px)` lh 1.08: **Escolha o crédito `certo` pra você** — "certo" em `<span>` `background:#17A24B; color:#fff; border-radius:8px; font-style:italic; padding:0 .22em`.
  - subtítulo `rgba(255,247,240,0.92)` `clamp(15px,1.6vw,17px)`: "Um consultor analisa seu convênio e mostra as condições reais — sem pressão, sem letra miúda escondida."
- Carrossel (Fases 3-4): palco + setas prev/next + dots.
- Faixa de selos sobre o laranja (texto claro): `+20 anos` · `2 filiais` · `Autorizado Banco Central`.
- Borda/sombra inferior separando do bloco Filiais (verde).

## Fase 3 — Cards (5 cards brancos)
Card **340×452**, `radius:16px`, `bg:#fff`, borda `rgba(43,42,39,.10)`, sombra `0 18px 50px rgba(43,42,39,.18),0 4px 12px rgba(43,42,39,.08)`.
- Painel superior (h 224) `linear-gradient(155deg,#E8501A,#B23C0E)`, `overflow:hidden`:
  - `<img>` da arte rotacionada/posicionada (ver `Money`/`CltArt` em hifi-core.jsx): CLT → `carteira-trabalho.png`; demais → `money-bundle.png`.
  - gradiente legibilidade `linear-gradient(to top, rgba(0,0,0,.45), transparent 58%)`.
  - Tag pílula `rgba(255,255,255,.14)` borda `.28`, texto `#FFF3E9`, topo-esq.
  - Título Bitter `#FFF3E9` com `text-shadow`, base-esq, `white-space:pre-line`.
- Info: descrição `#7A756C` 15px/1.5 → Badge ("Parcelas a partir de" `#7A756C` 11px + valor **Bitter `#E8501A` 26px**) + botão CTA laranja `#E8501A` com seta ("Consultar já"), `box-shadow:0 8px 22px rgba(232,80,26,.34)` → divisória → disclaimer fino.

Conteúdo (protótipo + dados reais; links wa.me já existem nas linhas 384/413/442/471/500):

| # | Tag | Nome (\n = 2 linhas) | Parcela | Arte | trackWA |
|---|-----|----------------------|---------|------|---------|
| 1 | CLT | Empréstimo do\nTrabalhador | R$ 142 | carteira | wa_deck_clt |
| 2 | INSS | Empréstimo\nConsignado | R$ 245 | money | wa_deck_inss |
| 3 | SIAPE | Empréstimo\nFederal Civil | R$ 340 | money | wa_deck_siape |
| 4 | Cartão | Empréstimo no\nCartão de Crédito | até 12x | money | wa_deck_cartao |
| 5 | Militar | Empréstimo\nMilitares | R$ 198 | money | wa_deck_militar |

## Fase 4 — Coverflow (JS vanilla, substitui IIFE ~916-980)
Palco interno `width:1000`, escala `rf = min(1,(largura-24)/1000)`, `perspective:1500`. Por card `off = i - active`:
```
off 0   → x:0       sc:1.00 ry:0    op:1    z:30
off ±1  → x:±210.8  sc:0.84 ry:∓16  op:0.82 z:20   (CARD_W*0.62)
off ±2  → x:±360.4  sc:0.66 ry:∓22  op:0.42 z:10   (CARD_W*1.06)
off ≥±3 → x:±476    sc:0.55 ry:∓26  op:0    z:0    pointer-events:none
transform: translate(-50%,-50%) translateX(x) scale(sc) rotateY(ry)
transition: transform .5s cubic-bezier(.22,.61,.36,1), opacity .5s
```
Manter: setas, dots (ativo = barra branca 26px), swipe touch, drag mouse, setas de teclado, recálculo em resize/load/`fonts.ready`. Clique em card lateral → vira ativo.

## Fase 5 — Limpeza + QA
- Remover CSS órfão do deck antigo: `.dc*` (~126-258), `.deck-section-accent`, `.deck-track`, `.ddot` (se substituído).
- A11y: `:focus-visible` em setas/dots; `@media (prefers-reduced-motion: reduce)` → só fade (sem rotateY/scale); `aria-label` nos controles; `alt` nas artes.
- Responsivo: testar 320/375/768/1024/1280; card central quase full-width no mobile, vizinhos "espiando"; **sem scroll horizontal**.
- Confirmar que seções verdes seguem intactas e âncoras funcionam.

## Pendências menores (defaults definidos)
- `notas-leque.png` ausente → fallback money esmaecido no CLT.
- Label CTA "Consultar já" (trocável para "Falar com consultor").

---

## Fase 6 — Padronização da paleta no site inteiro (CONCLUÍDA)
> Reverte a regra "laranja só no hero". Todo o corpo do site foi alinhado ao `docs/ui-rules.md`. **Sem alterar conteúdo** (textos/links/números/estrutura intactos) — só cor, sombra, borda.

**Tokens (`tailwind.config`):**
- ADICIONADOS: `cafe #2B1D14`, `cafe-claro #3A2A1E`, `boxShadow.hero`.
- ALTERADOS: `laranja-acao-d` `#B23C0E`→`#C2410C` (hover canônico); `boxShadow.card` opacidade `0.06`→`0.04`.
- REMOVIDOS (descontinuados, sem uso): `oliva`, `oliva-meio`, `oliva-claro`, `coral`, `coral-dark`.

**Mapa de substituição aplicado no corpo do site:**
| Antigo | Novo | Onde |
|---|---|---|
| `text-oliva` | `text-grafite` | Todos os títulos sobre fundo claro |
| `bg-oliva` / `bg-grafite` | `bg-cafe` | Seções escuras (Quem somos, Banner humano, Footer) |
| `from-oliva to-oliva-claro` | `from-cafe to-cafe-claro` | Placeholders de foto das filiais |
| `border-2 border-oliva` | `border-2 border-laranja-acao` | Caixa "30+ Bancos" |
| `stroke-oliva` | `stroke-grafite` | Ícones do acordeão de convênios |
| `hover:border-oliva hover:text-oliva` | `hover:border-laranja-acao hover:text-laranja-acao` | Botões outline (Maps, Instagram) |
| `text-coral` / `hover:text-coral` | `text-laranja-acao` | Realces (`<span>`, `+`, `<strong>`), links do footer |
| `bg-coral` / `bg-coral/[.12]` | `bg-laranja-acao` | CTAs principais filled + chips de ícone |
| `hover:bg-coral-dark` | `hover:bg-laranja-acao-d` | Hover dos CTAs |
| `border-coral` / `border-coral/[.2]` | `border-laranja-acao` | Borda-topo de Filiais + chips |
| `stroke-coral` | `stroke-laranja-acao` | Ícones da seção Quem somos |

**CTAs:** misto por hierarquia (ver `ui-rules.md §7`) — principais em laranja, "WhatsApp"/selos em Verde Confiança, outline com hover laranja.

**Verde Confiança:** faixa de selos do hero ganhou borda-topo `border-verde-hi/30`; botão flutuante e pílula "certo" mantêm verde.

**Sombreamento do hero:** camadas `.hero-vignette` + `.hero-scrim` (decorativas, `aria-hidden`, `z-0`) e classe `shadow-hero` na `<section>`; conteúdo elevado a `z-10`. Detalhe em `ui-rules.md §3`.

> Para padronizar **novas páginas/HTML**: aplicar este mesmo mapa + `ui-rules.md` como fonte canônica. Nunca reintroduzir `oliva`/`coral`.
