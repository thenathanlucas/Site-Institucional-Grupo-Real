# pages.md — Mapeamento completo do site Grupo Real

> **Regenerado em 2026-06-10.** Acumula: reordenação v2 (`docs/body-reorder-spec.md`), SEO/JSON-LD (`docs/seo-tracking-spec.md`), "Como funciona" v4 (`docs/comofunciona-spec.md`) e mosaico filtrado de Produtos (`docs/nossas-solucoes-spec.md`). Reflete exatamente o que está no ar **agora**.
> Predecessor: reestruturação v1 concluída em 2026-06-03 (arquivada em `docs/archive/`).

---

## Meta / Head

| Item | Valor |
|------|-------|
| `<title>` | Grupo Real — Empréstimo Consignado |
| `meta description` | Grupo Real — Empréstimo consignado em Bangu e Realengo. Atendimento presencial, sem burocracia. |
| `og:title` | Quem já fez com a gente, aprovou! — Grupo Real |
| `og:description` | Crédito consignado com atendimento rápido, sem enrolação e com muito respeito. |
| `og:type` | website |
| `og:url` / `canonical` | `https://www.gruporealintermediacao.com.br/` |
| `og:image` | `https://www.gruporealintermediacao.com.br/assets/og/grupo-real-og.jpg` (1200×630, com `og:image:alt`) |
| `twitter:card` | summary_large_image (+ `twitter:title/description/image` espelhando os og:) |
| JSON-LD | 2 blocos no `<head>`: `FinancialService`/`LocalBusiness` (2 filiais, telefones, horários) e `FAQPage` (10 perguntas do `#faq`) |
| Favicon | `assets/logo/grupo-real-icon.svg` (SVG externo) |
| Fontes | **Bitter** (títulos do hero) · **Source Sans 3** (corpo do hero/cards) · **Plus Jakarta Sans** (corpo do restante) — via Google Fonts |
| Analytics | Google Analytics 4 → `G-RJH4XR0J4H` |
| Heatmap | Microsoft Clarity → `wx5l1wztnj` |
| Embed externo | `instagram.com/embed.js` (async defer) |

### Design tokens (tailwind.config inline)

**Cores:** `ambar #D98324` · `areia #F4F1EA` · `areia-borda #E8E3D9` · `areia-escura #E5DFD3` · `grafite #2B2A27` · `cafe #2B1D14` · `cafe-claro #3A2A1E` · `laranja-acao #E8501A` · `laranja-acao-d #C2410C` · `verde-wa #16A34A` · `verde-hi #17A24B` · `areia-nav #FDFAF5` · `ink-nav #241F1A` · `ink-nav-sub #6F5648` · `card-ink #2B2A27` · `card-sub #7A756C` · `hero-eyebrow #FFE3CC` · `amber #D98324`

**Fontes:** `display`/`body` = Plus Jakarta Sans · `bitter` = Bitter · `source` = Source Sans 3
**Radius:** `card 8px` · `btn 6px` · `img 12px`
**Shadow:** `card` · `wa` · `dc` · `hero` · `cardwarm` · `cardwarmh`

---

## 1. Navbar

**Comportamento:** `sticky top-0 z-[200]`, fundo `rgba(253,250,245,0.9)` + `backdrop-blur-md`, borda inferior sutil.

- **Logo:** `assets/logo/grupo-real-mark.svg` + texto **"Grupo Real"** (fonte Bitter, `ink-nav`).
- **Campo de busca** (visível só em `≥768px`): input "Busque em nosso site" — pill cinza claro.
- **Links desktop** (`≥768px`): `Produtos #produtos` · `Filiais #filiais` · `Quem somos #sobre`. Hover → `laranja-acao`.
- **Sem botão WhatsApp** na navbar.
- **Mobile:** hambúrguer animado (3 linhas → X) + drawer com os mesmos 3 links.

---

## 2. Hero + Coverflow

**ID:** `#topo` | **Fundo:** `.hero-orange` (gradiente laranja) + camadas de profundidade.

### TitleBlock (centralizado)
- **Eyebrow:** `• Correspondente Bancário` (cor `#FFE3CC`, caixa alta).
- **H1** (Bitter, branco): "Escolha o crédito **certo** pra você" — "certo" em `<span>` com fundo Verde Confiança `#17A24B`, itálico.
- **Subtítulo:** "Um consultor analisa seu convênio e mostra as condições reais — sem pressão, sem letra miúda escondida."

### Coverflow (carrossel 3D, JS vanilla)
5 cards brancos com painel laranja, setas prev/next, dots, swipe touch, drag mouse e setas de teclado.

| # | Tag | Título | Parcela | trackWA |
|---|-----|--------|---------|---------|
| 1 | CLT | Empréstimo do Trabalhador | R$ 142 | `wa_deck_clt` |
| 2 | INSS | Empréstimo Consignado | R$ 245 | `wa_deck_inss` |
| 3 | SIAPE | Empréstimo Federal Civil | R$ 340 | `wa_deck_siape` |
| 4 | Cartão | Empréstimo no Cartão de Crédito | até 12x | `wa_deck_cartao` |
| 5 | Militar | Empréstimo Militares | R$ 198 | `wa_deck_militar` |

### Faixa de selos
`+20 anos` · `2 filiais` · `Autorizado` (Banco Central do Brasil).

> ✅ Navbar e Hero estão **aprovados pelo cliente** — fora de escopo de mudanças.

---

# CORPO DO SITE (ordem real atual)

## 3. Como Funciona

**ID:** `#como-funciona` | **Fundo:** areia.
- **Eyebrow:** "Simples e sem burocracia" · **H2:** "Como **funciona**"
- **Subtítulo:** "Do primeiro \"oi\" até o dinheiro na conta, você sempre fala com uma pessoa de verdade."
- **Trilha zigzag (v4):** 4 cards alternados (esq/dir no desktop via `md:self-start`/`md:self-end`, empilhados no mobile), fundo creme quente, selo numerado laranja com anel branco e **losango SVG temático** (`assets/losangos/svg/losango-N-*.svg`), ligados por linha conectora tracejada decorativa (`aria-hidden`).

| # | Rótulo | Título | Apoio |
|---|--------|--------|-------|
| 1 | Atendimento | Você fala com a gente | Manda uma mensagem no WhatsApp ou liga. Rápido e sem compromisso. |
| 2 | Análise | A gente te entende | Um especialista entende o que você precisa e encontra a melhor solução. |
| 3 | Proposta | Você vê a melhor opção | A gente mostra a parcela que cabe no seu bolso, sem pegadinha. |
| 4 | Liberação | O dinheiro cai na conta | Com tudo certo, o crédito é depositado direto na sua conta. |

> ✅ Pendência de conteúdo resolvida. Spec/histórico: `docs/comofunciona-spec.md`.

## 4. Produtos / Balcão de soluções ("Como podemos te ajudar?")

**ID:** `#produtos` | **Fundo (revisado 2026-06-10):** seção **dividida** — **faixa-título laranja** (`.prod-section`, mesma fórmula do hero, com vinheta + 2 losangos-textura `aria-hidden`; scrim removido) contendo só eyebrow/H2/subtítulo, e **corpo branco** (`bg-white`) com o balcão + faixa de convênios.
- **Eyebrow:** "Soluções financeiras" (creme) · **H2:** "Como podemos te **ajudar**?" (branco, destaque em grafite)
- **Subtítulo:** "Toque na sua situação — a gente cuida do resto no WhatsApp."
- **Balcão de soluções** (substituiu o mosaico filtrado por convênio em 2026-06-10): render estático via array `SOLUCOES` em `#sol-lista`, **layout L2 "balcão em linhas"** — uma solução por linha, sem filtro prévio. Cada linha (`.sol-tile`, **branca** com borda `areia-borda 1.5px` + sombra quente, hover lift no desktop — o vidro fosco saiu junto com o fundo laranja do corpo): **losango laranja com aura** (`solDiamond`, 76px) contendo **ilustração SVG de traço fino branco** (74% do losango; desenhos inline em `ILLOS`, slot pronto para `<img>`), **manchete-pergunta** 19px ("Sua parcela está pesando?"), resumo 16px `#6B6560` + etiqueta do nome da solução, e CTA **"Quero saber"** (`trackWA('wa_sol_{id}')`).
- **Faixa "Atendemos"** (`#sol-convs`, sobre o corpo branco): rótulo `#7A756C`, 7 selos pêssego `.conv-badge` com os labels dos convênios (derivados do `CONVS`, que **permanece como fonte de dados**) + link laranja "Não achou o seu? Pergunta pra gente" (`wa_sol_outro_convenio`).
- Spec: `docs/balcao-solucoes-spec.md` (supersede `nossas-solucoes-spec.md`, que documenta o fallback).

| Solução | Manchete (pergunta) | Tracking |
|---------|---------------------|----------|
| Empréstimo | Precisando de um dinheiro? | `wa_sol_emprestimo` |
| Portabilidade | Sua parcela está pesando? | `wa_sol_portabilidade` |
| Refinanciamento | Já tem empréstimo e precisa de mais? | `wa_sol_refin` |
| Antecipação FGTS | Seu FGTS está parado? | `wa_sol_fgts` |
| Cartão (Consignado + Benefício) | Quer um cartão? | `wa_sol_cartao` |

> **5 soluções por situação** — o convênio deixou de ser filtro (o atendente qualifica no WhatsApp).

## 5. Bancos Parceiros

**ID:** `#bancos` | **Fundo:** **areia** (faixa compacta, sem bordas).
- **H2:** "Bancos parceiros" · número **"30+"** em destaque.
- **CTA:** "Verificar meu banco" (laranja) → WhatsApp, `trackWA('wa_bancos')`.

## 6. Onde Estamos (Filiais)

**ID:** `#filiais` | **Fundo:** branco, borda-topo `laranja-acao` (3px).
- **Eyebrow:** "Onde estamos" · **H2:** "Nossas **filiais**"

| | Matriz — Realengo | Filial — Bangu |
|---|---|---|
| Endereço | Av. Santa Cruz, 1028 — Realengo, RJ | Rua Professor Clemente Ferreira, 1764, loja c — Bangu, RJ |
| Horário | Seg–Qui: 08h–18h · Sex: 09h–18h | Seg–Qui: 08h–18h · Sex: 09h–18h |
| Telefone | [(21) 96478-1371](tel:+5521964781371) ✅ clicável | [(21) 98888-3917](tel:+5521988883917) ✅ clicável |
| Maps | Link direto | Link direto |

> Placeholders de foto: gradiente `from-cafe to-cafe-claro` com o nome do bairro (sem foto real ainda).

## 7. Depoimentos

**ID:** `#depoimentos` | **Fundo:** areia.
- **Eyebrow:** "Quem já fez, aprovou" · **H2:** "O que dizem nossos **clientes**"
- 3 mockups de celular WhatsApp (balões reconstruídos com conversas reais de exemplo).
- Rodapé: "Depoimentos reais de clientes. Nomes abreviados para privacidade."

> ⏳ Pendência: trocar balões por prints reais (`assets/depoimentos/dep-N.png`) quando o cliente fornecer.

## 8. Quem Somos

**ID:** `#sobre` | **Fundo:** `cafe` (escuro), grid 2 colunas (texto + foto).
- **Eyebrow:** "Quem somos" · **H2:** "O Grupo **Real**"
- Lead: "...de **humano para humano**, com transparência e respeito."
- **4 pilares:** Autorizado pelo BC · 2 filiais físicas · Múltiplos bancos · Atendimento especializado.
- Foto (Unsplash) com caption "Zona Oeste do Rio de Janeiro · Desde 2012".
- Tags de convênios: CLT · FGTS · INSS · SIAPE · Forças Armadas · Governos · Prefeituras.

## 9. FAQ

**ID:** `#faq` | **Fundo:** areia.
- **Eyebrow:** "Tire suas dúvidas" · **H2:** "Perguntas **frequentes**"
- 10 itens de acordeão (reusa `.ac-item` / `toggleAcord()`).
- Mensagem antifraude obrigatória: "**Não. Nunca cobramos nada adiantado.**"

> ⏳ Pendência: cliente valida as 10 respostas (rascunhos implementados, marcados `[confirmar]` no spec).

## 10. Instagram

**ID:** `#instagram` | **Fundo:** branco (bordas topo/base).
- **Eyebrow:** "Nos acompanhe" · **H2:** "Visite nosso **Instagram**"
- Embed: post `/p/DIR3GfeReiI/` (depoimentos via WhatsApp).
- Link: "@gruporealintermediacao".

## 11. Footer

**Fundo:** `cafe`.
- Logo PNG (`assets/logo/logo-grupo-real.png`, 120px, redondo) + "Grupo Real" + tagline.
- **4 colunas:** Produtos (CLT·INSS·FGTS·SIAPE → `#produtos`) · Filiais (Bangu·Realengo → `#filiais`) · Empresa (Como funciona → `#como-funciona` · Sobre nós → `#sobre` · Depoimentos → `#depoimentos` · Dúvidas → `#faq`) · Contato (Falar com consultor → WhatsApp · Instagram · E-mail).
- **Legal:** Correspondente bancário Res. 4.935/2021 BC · CNPJ 15.191.039/0001-00 · Grupo Real Intermediação LTDA - ME · © 2026 · [Política de Privacidade](privacidade.html).

## 12. WhatsApp Flutuante

`fixed` canto inferior direito, círculo verde `#25D366`, 58×58px. Link global → WhatsApp, `trackWA('wa_flutuante')`.

---

## Resumo de Seções (ordem real)

| # | Seção | ID | Fundo | CTA |
|---|-------|----|-------|-----|
| 1 | Navbar | — | areia-nav | — |
| 2 | Hero + Coverflow | `#topo` | laranja | WhatsApp por card |
| 3 | Como funciona | `#como-funciona` | areia | — (scaffold) |
| 4 | Balcão de soluções | `#produtos` | **laranja (faixa-título) + branco (corpo)** | WhatsApp por solução |
| 5 | Bancos Parceiros | `#bancos` | **areia** | WhatsApp |
| 6 | Onde Estamos (Filiais) | `#filiais` | branco | Google Maps + `tel:` |
| 7 | Depoimentos | `#depoimentos` | areia | — |
| 8 | Quem Somos | `#sobre` | café | — |
| 9 | FAQ | `#faq` | areia | — |
| 10 | Instagram | `#instagram` | branco | Link Instagram |
| 11 | Footer | — | café | WhatsApp (consultor) |
| 12 | WhatsApp Flutuante | — | — | WhatsApp (global) |

**Ritmo de fundos:** areia → **laranja+branco** (Produtos: faixa-título laranja, corpo branco) → areia → branco → areia → café → areia → branco → café. Alternância limpa, sem dois claros idênticos colados (por isso o corpo de Produtos é **branco**, não areia — Bancos logo abaixo é areia); a faixa-título laranja mantém o eco do hero.

---

## Notas Técnicas

| Item | Detalhe |
|------|---------|
| Paleta | Laranja `#E8501A` · Café Profundo `#2B1D14` · Areia `#F4F1EA` · Verde Confiança `#17A24B` (oliva e coral **descontinuados**) |
| Tipografia | Hero: **Bitter** + **Source Sans 3** · Corpo: **Plus Jakarta Sans** |
| Breakpoint principal | `768px` (`md`) |
| Coverflow | IIFE JS vanilla (sem React) |
| Produtos (Balcão) | Render estático via array `SOLUCOES` (5 soluções) → `#sol-lista` + faixa `#sol-convs`; ilustrações inline `ILLOS` + `solDiamond`; `CONVS` mantido só como fonte de labels; rótulos `wa_sol_{id}` + `wa_sol_outro_convenio` |
| Acordeão FAQ | HTML estático, reusa `toggleAcord()` e `.ac-item` |
| Tracking WhatsApp | `trackWA(label)` → GA4 + Clarity |
| WhatsApp número | `5521986862308` |
| Instagram | `@gruporealintermediacao` |
| GA4 / Clarity | `G-RJH4XR0J4H` / `wx5l1wztnj` |
| CSS mockup depoimentos | `.zap-phone` / `.zap-screen` / `.zap-bubble` / `.zap-in` / `.zap-out` |
