# pages.md — Mapeamento completo do site Grupo Real

> **Regenerado em 2026-06-03** após a reordenação v2 (`docs/body-reorder-spec.md`). Reflete exatamente o que está no ar **agora**.
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
| `twitter:card` | summary_large_image |
| `og:image` | **Ausente** |
| Favicon | `assets/logo/grupo-real-icon.svg` (SVG externo) |
| Fontes | **Bitter** (títulos do hero) · **Source Sans 3** (corpo do hero/cards) · **Plus Jakarta Sans** (corpo do restante) — via Google Fonts |
| Analytics | Google Analytics 4 → `G-RJH4XR0J4H` |
| Heatmap | Microsoft Clarity → `wx5l1wztnj` |
| Embed externo | `instagram.com/embed.js` (async defer) |

### Design tokens (tailwind.config inline)

**Cores:** `ambar #D98324` · `areia #F4F1EA` · `areia-borda #E8E3D9` · `areia-escura #E5DFD3` · `grafite #2B2A27` · `cafe #2B1D14` · `cafe-claro #3A2A1E` · `laranja-acao #E8501A` · `laranja-acao-d #C2410C` · `verde-wa #16A34A` · `verde-hi #17A24B` · `areia-nav #FDFAF5` · `ink-nav #241F1A` · `ink-nav-sub #6F5648` · `card-ink #2B2A27` · `card-sub #7A756C` · `hero-eyebrow #FFE3CC` · `amber #D98324`

**Fontes:** `display`/`body` = Plus Jakarta Sans · `bitter` = Bitter · `source` = Source Sans 3
**Radius:** `card 8px` · `btn 6px` · `img 12px`
**Shadow:** `card` · `wa` · `dc` · `hero`

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
- 4 passos numerados (grid horizontal desktop / empilhados mobile) — **conteúdo a preencher pelo cliente** (placeholders comentados).

> ⏳ Pendência: cliente precisa fornecer conteúdo dos 4 passos + subtítulo da seção.

## 4. Produtos / Convênios

**ID:** `#produtos` | **Fundo:** branco.
- **Eyebrow:** "Soluções financeiras" · **H2:** "Escolha seu **convênio**"
- **Acordeão** gerado por JS (array `CONVS`) → `#acord`.

| Convênio | Qtd | Produtos |
|----------|-----|---------|
| CLT | 2 | Empréstimo Consignado CLT · Portabilidade CLT |
| FGTS | 1 | Antecipação Saque-Aniversário |
| INSS | 5 | Empréstimo Consignado · Portabilidade · Refinanciamento · Cartão Consignado · Cartão Benefício |
| Forças Armadas | 2 | Empréstimo Consignado · Refinanciamento |
| SIAPE | 5 | Empréstimo Consignado · Refinanciamento · Portabilidade · Cartão Consignado · Cartão Benefício |
| Governos | 3 | Empréstimo Consignado · Cartão Consignado · Cartão Benefício |
| Prefeituras | 3 | Empréstimo Consignado · Cartão Consignado · Cartão Benefício |

> Total: **7 convênios · 21 produtos.**

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
- Logo SVG (losangos G+R) + "Grupo Real" + tagline.
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
| 4 | Produtos / Convênios | `#produtos` | branco | WhatsApp por produto |
| 5 | Bancos Parceiros | `#bancos` | **areia** | WhatsApp |
| 6 | Onde Estamos (Filiais) | `#filiais` | branco | Google Maps + `tel:` |
| 7 | Depoimentos | `#depoimentos` | areia | — |
| 8 | Quem Somos | `#sobre` | café | — |
| 9 | FAQ | `#faq` | areia | — |
| 10 | Instagram | `#instagram` | branco | Link Instagram |
| 11 | Footer | — | café | WhatsApp (consultor) |
| 12 | WhatsApp Flutuante | — | — | WhatsApp (global) |

**Ritmo de fundos:** areia → branco → **areia** → branco → areia → café → areia → branco → café. Alternância limpa, sem dois claros idênticos colados.

---

## Notas Técnicas

| Item | Detalhe |
|------|---------|
| Paleta | Laranja `#E8501A` · Café Profundo `#2B1D14` · Areia `#F4F1EA` · Verde Confiança `#17A24B` (oliva e coral **descontinuados**) |
| Tipografia | Hero: **Bitter** + **Source Sans 3** · Corpo: **Plus Jakarta Sans** |
| Breakpoint principal | `768px` (`md`) |
| Coverflow | IIFE JS vanilla (sem React) |
| Acordeão convênios | Gerado por JS (array `CONVS`, 7 convênios) → `#acord` |
| Acordeão FAQ | HTML estático, reusa `toggleAcord()` e `.ac-item` |
| Tracking WhatsApp | `trackWA(label)` → GA4 + Clarity |
| WhatsApp número | `5521986862308` |
| Instagram | `@gruporealintermediacao` |
| GA4 / Clarity | `G-RJH4XR0J4H` / `wx5l1wztnj` |
| CSS mockup depoimentos | `.zap-phone` / `.zap-screen` / `.zap-bubble` / `.zap-in` / `.zap-out` |
