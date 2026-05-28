# pages.md — Mapeamento completo do site Grupo Real

> Gerado a partir da leitura do HTML atual. Reflete exatamente o que está no ar.

---

## Meta / Head

| Item | Valor |
|------|-------|
| `<title>` | Grupo Real — Empréstimo Consignado |
| `meta description` | Grupo Real — Empréstimo consignado em Bangu e Realengo. Atendimento presencial, sem burocracia. |
| `og:title` | Quem já fez com a gente, aprovou! — Grupo Real |
| `og:description` | Crédito consignado com atendimento rápido, sem enrolação e com muito respeito. |
| `og:type` | website |
| `og:image` | SVG inline (imagem de depoimentos gerada em código) |
| `twitter:card` | summary_large_image |
| Favicon | SVG inline com ícone "GR" laranja |
| Fontes | Fraunces (display) + Inter (corpo) via Google Fonts |
| Analytics | Google Analytics 4 → `G-RJH4XR0J4H` |
| Heatmap | Microsoft Clarity → `wx5l1wztnj` |
| Embed externo | `instagram.com/embed.js` (async defer) |

---

## 1. Navbar

**Comportamento:** `position: sticky` — fica fixo no topo ao rolar. Backdrop blur ativo.

### Logo
- SVG inline "GR" com fundo laranja `#E8501A` + border-radius 10px
- Texto: **"Grupo Real"** (negrito)
- Subtítulo: **"Empréstimo Consignado"** (visível só em `≥768px`)

### Links de navegação (visíveis apenas em desktop `≥768px`)
| Label | Âncora |
|-------|--------|
| Por que nós | `#sobre-nos` |
| Produtos | `#produtos` |
| Filiais | `#filiais` |
| Quem somos | `#sobre` |

### CTA (sempre visível)
- Botão verde, pill shape → **"Falar agora"** com ícone SVG do WhatsApp
- Link: `wa.me/5521986862308?text=Olá!+Vim+pelo+site...`
- Tracking: `gtag` + `clarity` via `trackWA('wa_hero')`

### Mobile
- Botão hambúrguer com animação (3 linhas → X)
- Drawer deslizante abaixo da nav com os 4 links
- Fecha ao clicar em qualquer link ou fora do menu

---

## 2. Hero

**ID:** `#topo` | **Background:** `var(--s50)` (pedra claro)
**Layout desktop:** grid 2 colunas (texto + foto)

### Coluna esquerda — Texto
- **Chip/badge:** `• CORRESPONDENTE BANCÁRIO` (laranja, caixa alta)
- **H1:** "20 anos ajudando você a tomar a *decisão certa*."
  - Fonte: Fraunces, `clamp(36px, 10vw, 56px)`
  - "decisão certa" em itálico laranja
- **Subtítulo:** "Cada simulação é feita por um consultor que conhece seu convênio. Análise honesta pelo WhatsApp — sem pressão, sem letra miúda."

### Botões
| Botão | Estilo | Destino |
|-------|--------|---------|
| "Iniciar minha simulação" | Verde sólido + ícone WhatsApp | `wa.me/5521986862308` (nova aba) |
| "Por que confiar em nós" | Outline cinza | `#sobre-nos` |

### Selos de credibilidade (3 itens)
| Número/Ícone | Label |
|---|---|
| +20 | anos de mercado |
| 2 | filiais físicas |
| ✓ | Correspondente Banco Central |

### Coluna direita — Foto
- Imagem: `images.unsplash.com/photo-1556742049-0cfed4f6a45d`
- Alt: "Atendimento ao cliente Grupo Real"
- `object-position: center 20%`
- Mobile: altura fixa 260px, sangra nas margens (`margin: 0 -20px`)
- Desktop: altura 100% (mín. 420px), border-radius topo

---

## 3. Bancos Parceiros

**Sem ID de âncora** | **Background:** gradiente laranja claro → branco
**Layout desktop:** grid 2 colunas (conteúdo + destaque numérico)

### Conteúdo (coluna esquerda)
- **Eyebrow:** "Cobertura financeira"
- **H2:** "Trabalhamos com **30+ Bancos**" (hi laranja)
- **Descrição:** Das maiores instituições às plataformas digitais. Se tem conta em banco, a gente intermedia.
- **Texto CTA:** "Não sabe se seu banco está na lista? **Sem problema.** Nos chame no WhatsApp..."
- **Botão:** "Verificar meu banco" verde com ícone WhatsApp → `wa.me/5521986862308?text=...elegivel...`

### Destaque (coluna direita)
- Card branco com borda laranja, border-radius 20px
- Número: **"30+"** (Fraunces, 64px, laranja)
- Label: "Bancos parceiros"

---

## 4. Diferenciais

**ID:** `#sobre-nos` | **Background:** branco

- **Eyebrow:** "Por que nos escolher"
- **H2:** "Uma empresa **real**, que você pode visitar"
- **Subtítulo:** "Nossas lojas ficam em Bangu e Realengo..."

### 4 cards de diferencial
| Nº | Título | Descrição |
|----|--------|-----------|
| 01 | Loja física | Duas filiais abertas de segunda a sexta. Sem chatbot, sem fila de e-mail. |
| 02 | Transparência total | Correspondente bancário autorizado. Condições mostradas antes de assinar. |
| 03 | Múltiplos bancos | Intermediamos com vários bancos parceiros para garantir a melhor taxa. |
| 04 | Sem burocracia | Nossa equipe cuida de tudo. Só traga os documentos. |

> Layout: coluna única (mobile) → linha horizontal com flex (desktop, bordas entre cards)

---

## 5. Banner Humano

**Sem ID de âncora** | **Background:** `var(--s900)` (pedra escuro)
**Layout desktop:** grid 2 colunas (foto esquerda + texto direita)

### Foto
- Imagem: `images.unsplash.com/photo-1573497620053-ea5300f94f21`
- Alt: "Atendimento presencial Grupo Real"
- `filter: brightness(.65)` | Mobile: altura 260px

### Texto
- **Eyebrow:** "Atendimento presencial" (branco opaco)
- **H2:** "Gente cuidando de *gente*" (branco, "gente" em laranja)
- **Subtítulo:** "Nossa equipe está aqui para explicar tudo com clareza, sem pressa e sem letras miúdas escondidas." (branco 60%)
- **Botão:** "Falar com a equipe" laranja sólido → `wa.me/5521986862308?text=...dúvida...`

---

## 6. Produtos / Convênios

**ID:** `#produtos` | **Background:** `var(--s50)`

- **Eyebrow:** "Soluções financeiras"
- **H2:** "Escolha seu **convênio**"
- **Subtítulo:** "Toque no seu convênio para ver os produtos disponíveis..."

### Acordeão de convênios (gerado dinamicamente por JavaScript)

Cada item tem: ícone SVG + label + contagem de produtos + chevron animado. Ao clicar, expande o grid de produtos.

| Convênio | Qtd | Produtos |
|----------|-----|---------|
| **CLT** | 2 | Empréstimo Consignado CLT · Portabilidade CLT |
| **FGTS** | 1 | Antecipação Saque-Aniversário |
| **INSS** | 5 | Empréstimo Consignado · Portabilidade · Refinanciamento · Cartão Consignado · Cartão Benefício |
| **Forças Armadas** | 2 | Empréstimo Consignado · Refinanciamento |
| **SIAPE** | 5 | Empréstimo Consignado · Refinanciamento · Portabilidade · Cartão Consignado · Cartão Benefício |
| **Governos** | 3 | Empréstimo Consignado · Cartão Consignado · Cartão Benefício |
| **Prefeituras** | 3 | Empréstimo Consignado · Cartão Consignado · Cartão Benefício |

> Total: **7 convênios · 21 produtos**

Cada produto tem: nome, descrição curta + botão **"Quero"** verde → WhatsApp com mensagem pré-preenchida específica por produto.

---

## 7. Filiais

**ID:** `#filiais` | **Background:** branco

- **Eyebrow:** "Onde estamos"
- **H2:** "Nossas **filiais**"
- **Subtítulo:** "Venha nos conhecer! Somos uma empresa com endereço físico..."

### Filial 01 — Realengo
| Campo | Dado |
|-------|------|
| Endereço | Av. Santa Cruz, 1028 — Realengo, Rio de Janeiro / RJ |
| Horário | Seg–Qui: 08h às 18h · Sex: 09h às 18h |
| Telefone | (21) 96478-1371 |
| Google Maps | Link direto para o endereço |

### Filial 02 — Bangu
| Campo | Dado |
|-------|------|
| Endereço | Rua Professor Clemente Ferreira, 1764, loja c — Bangu, Rio de Janeiro / RJ |
| Horário | Seg–Qui: 08h às 18h · Sex: 09h às 18h |
| Telefone | (21) 98888-3917 |
| Google Maps | Link direto para o endereço |

---

## 8. Sobre / Quem Somos

**ID:** `#sobre` | **Background:** `var(--s900)` (escuro)
**Layout desktop:** grid 2 colunas (texto esquerda + foto direita)

### Coluna esquerda — Texto
- **Eyebrow:** "Quem somos"
- **H2:** "O Grupo **Real**" ("Real" em laranja)
- **Lead:** "Somos um correspondente bancário autorizado, com presença física na Zona Oeste do Rio de Janeiro..."

#### 4 Pilares institucionais
| Ícone | Título | Descrição |
|-------|--------|-----------|
| Escudo | Autorizado pelo Banco Central | Resolução nº 4.935/2021. |
| Casa | 2 filiais físicas — Bangu e Realengo | Visita presencial, sai com tudo resolvido. |
| Cifrão | Parceria com múltiplos bancos | Melhor taxa entre vários bancos para o perfil. |
| Pessoas | Atendimento especializado | Orientação com atenção, sem pressa e sem letras miúdas. |

#### Tags de convênios (rodapé da seção)
`CLT` `FGTS` `INSS` `SIAPE` `Forças Armadas` `Governos` `Prefeituras`

### Coluna direita — Foto
- Imagem: `images.unsplash.com/photo-1521791136064-7986c2920216`
- Alt: "Equipe Grupo Real"
- `filter: brightness(.55)` + gradiente overlay escuro de baixo para cima
- **Caption sobreposta:**
  - Título: "Uma equipe que você pode confiar"
  - Sub: "Zona Oeste do Rio de Janeiro · Desde sempre"

---

## 9. Instagram

**ID:** `#instagram` | **Background:** `var(--s50)`

- **Eyebrow:** "Nos acompanhe"
- **H2:** "Visite nosso **Instagram**"
- **Subtítulo:** "Acompanhe nossos posts, veja dicas sobre crédito consignado..."
- **Embed:** Post do Instagram (`/p/DIR3GfeReiI/`) via `blockquote.instagram-media` + script oficial
- **Link:** Botão outline → `instagram.com/gruporealintermediacao/` — "@gruporealintermediacao"

---

## 10. Footer

**Background:** `var(--s900)` (escuro)

### Topo
- Logo: "Grupo Real" (texto branco)
- Tagline: "Empréstimo consignado com transparência e presença física na Zona Oeste do Rio de Janeiro."

### 4 colunas de links
| Coluna | Links |
|--------|-------|
| Produtos | CLT · INSS · FGTS · SIAPE → `#produtos` |
| Filiais | Bangu · Realengo → `#filiais` |
| Empresa | Diferenciais → `#sobre-nos` · Sobre nós → `#sobre` |
| Contato | WhatsApp → `wa.me/5521986862308` |

### Rodapé legal
- "Correspondente bancário nos termos da Resolução nº 4.935/2021 do Banco Central do Brasil."
- CNPJ: **15.191.039/0001-00**
- Razão social: Grupo Real Intermediação LTDA - ME
- Copyright: © 2026 Grupo Real. Todos os direitos reservados.

---

## 11. WhatsApp Flutuante

**Posição:** `fixed` — canto inferior direito (bottom: 20px, right: 20px)
- Botão circular verde (`#22C55E`), 58×58px
- Ícone SVG do WhatsApp branco (30px)
- `box-shadow` verde
- Link: `wa.me/5521986862308?text=Olá!+Vim+pelo+site...`
- Tracking: `trackWA('wa_flutuante')`
- Visível em **todas as seções** durante toda a rolagem

---

## Resumo de Seções

| # | Seção | ID | CTA |
|---|-------|----|-----|
| 1 | Navbar | — | WhatsApp |
| 2 | Hero | `#topo` | WhatsApp + âncora |
| 3 | Bancos Parceiros | — | WhatsApp |
| 4 | Diferenciais | `#sobre-nos` | — |
| 5 | Banner Humano | — | WhatsApp |
| 6 | Produtos / Convênios | `#produtos` | WhatsApp por produto |
| 7 | Filiais | `#filiais` | Google Maps |
| 8 | Sobre / Quem Somos | `#sobre` | — |
| 9 | Instagram | `#instagram` | Link Instagram |
| 10 | Footer | — | WhatsApp |
| 11 | WhatsApp Flutuante | — | WhatsApp (global) |

---

## Notas Técnicas

| Item | Detalhe |
|------|---------|
| Paleta | Laranja `#E8501A` · Verde `#22C55E` · Pedra `#1C1917` |
| Tipografia | Display: **Fraunces** · Corpo: **Inter** |
| Breakpoint principal | `768px` |
| Acordeão | Gerado por JavaScript (array `CONVS` com 7 convênios) |
| Tracking WhatsApp | Função `trackWA(label)` → GA4 + Clarity |
| WhatsApp número | `5521986862308` |
| Instagram handle | `@gruporealintermediacao` |
| GA4 | `G-RJH4XR0J4H` |
| Clarity | `wx5l1wztnj` |
