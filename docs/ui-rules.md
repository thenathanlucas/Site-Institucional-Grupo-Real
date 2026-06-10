# UI Rules & Design System — Grupo Real
> **Objetivo:** Definir as regras visuais e diretrizes do frontend para o site institucional do Grupo Real, garantindo o equilíbrio entre autoridade nacional e o acolhimento do atendimento humano.
> **Conceito:** Boutique de Crédito Segura (Estabilidade, Tradição e Proximidade). Hero de **laranja vibrante** como cor de marca, com cards claros flutuando para máximo contraste e foco no produto.

---

## 1. Paleta de Cores (Design Tokens)

Direção de marca **Laranja Forte (vibrante)**: o fundo do hero é uma cor de destaque saturada que domina a tela e cria energia, enquanto os cards permanecem claros para contraste e foco no produto. O **azul** e o antigo **verde-oliva** (`#1E2E22`) foram completamente descontinuados como cores de marca/superfície — o verde sobrevive **apenas** como "Verde Confiança" (WhatsApp/selos). A paleta abaixo é aplicada em **todo o site** (não só no hero).

| Elemento | Nome | Código Hex | Uso Principal no Frontend |
| :--- | :--- | :--- | :--- |
| **Marca / Fundo Hero** | Laranja Vibrante | gradiente `#FB6516 → #ED4A05 → #CE3A00` (clarão radial `#FF8A3D`) | Fundo do hero e seções de impacto. Cor de destaque que chama atenção. |
| **Destaque (CTA)** | Laranja Ação | `#E8501A` | Botões de conversão, parcela em destaque, realces (`<span>`/`+`/`<strong>`) e tags. Hover escurece para `#C2410C`. |
| **Sucesso / WhatsApp** | Verde Confiança | `#17A24B` | Pílula de destaque no título, ações rotuladas "WhatsApp" e selos de segurança/confiança. |
| **Superfície Escura** | Café Profundo | `#2B1D14` (apoio interno `#3A2A1E`) | Fundo de seções escuras (Quem somos, Banner humano, Footer). **Substitui o verde-oliva descontinuado.** Texto em branco; realces em Laranja Ação. |
| **Card / Fundo Secundário** | Off-White Puro | `#FFFFFF` | Fundo dos cards de produto flutuando sobre o laranja. |
| **Fundo de Seção Clara** | Areia | `#F4F1EA` (borda `#E8E3D9`) | Fundo padrão de seções claras do corpo do site. |
| **Navbar** | Off-White Areia | `#FDFAF5` (sobre laranja, com blur) | Barra de navegação clara para contraste com o hero. |
| **Texto sobre Card / Claro** | Grafite Escuro | `#2B2A27` (apoio `#7A756C` e `#6B6560`) | Títulos, parágrafos e legendas sobre fundos claros (cards, areia, branco). |
| **Texto sobre Hero / Escuro** | Branco | `#FFFFFF` (apoio `rgba(255,247,240,.92)`, eyebrow `#FFE3CC`) | Título e subtítulo sobre fundo laranja ou Café Profundo. |
| **Suporte** | Âmbar / Ouro | `#D98324` | Eyebrows, marcadores secundários e detalhes de apoio. |
| **Tinta da Navbar** | Grafite Quente | `#241F1A` (apoio `#6F5648`) | Logo, nome e links na barra clara. |

---

## 2. Tipografia

A tipografia deve misturar a autoridade de uma marca nacional com a legibilidade necessária para o público do consignado (Aposentados e Pensionistas).

*   **Títulos principais (H1, H2):** 
    *   **Família:** `Bitter`, `Georgia` ou serifada equivalente do sistema.
    *   **Peso:** Bold (700)
    *   **Propósito:** Slab serif robusta — passa tradição, cartório e solidez de banco, com ótima legibilidade em corpos grandes.
*   **Subtítulos e Textos Auxiliares (H3, H4, Labels):** 
    *   **Família:** `Source Sans 3`, `Helvetica` ou sem-serifa equivalente.
    *   **Peso:** Semi-Bold (600) ou Medium (500).
*   **Corpo do Texto (Parágrafos):** 
    *   **Família:** `Source Sans 3`, `Arial` ou sem-serifa equivalente de alta leitura.
    *   **Peso:** Regular (400).
    *   **Regra de Acessibilidade:** Nunca usar tamanho menor que `16px` para parágrafos. Linhas de texto com altura (`line-height`) de no mínimo `1.6`. Público idoso (aposentados e pensionistas): priorize sempre corpos grandes.

---

## 3. Sombras (Shadows)

As sombras devem ser suaves e orgânicas, simulando elementos reais flutuando sobre o fundo areia macio, sem o visual artificial das fintechs.

*   ~~**Sombra de Cartão (Card Shadow):** `box-shadow: 0px 4px 20px rgba(43, 42, 39, 0.04);` (Sombra extremamente sutil)~~ → **Revisado em 2026-06-10 (pedido do cliente): cards de conteúdo usam o padrão "vidro premium"** — classe `.card-glass` (e equivalentes `.sol-tile`/`.cf-card`): fundo `rgba(255,255,255,.86)` (~86% opaco), `backdrop-filter: blur(10px)`, **sombra forte em 2 camadas** `0 18px 44px rgba(43,42,39,.16), 0 6px 16px rgba(43,42,39,.10)` (hover: `0 26px 56px (.22)`). Textos de apoio dentro de cards escurecidos para alto contraste: `#524C45` (≈8:1 sobre branco) / `#4A453F`. O token `shadow-card` segue existindo para usos menores (selos, botões).
*   **Sombra de Botão Flutuante (WhatsApp):** `box-shadow: 0px 8px 24px rgba(255, 87, 34, 0.2);` (tom de brilho **legado** — o coral foi descontinuado como cor de marca, mas este valor RGBA permanece **apenas** como brilho sutil do botão flutuante para atrair cliques; não é cor de marca).

### Sombreamento do Hero (profundidade)
O hero laranja recebe **camadas de profundidade decorativas** (`aria-hidden`, `pointer-events:none`) para "aterrar" os cards flutuantes e melhorar a experiência. Quatro peças (4ª adicionada em 2026-06-10):
1.  **Vinheta de foco (`.hero-vignette`):** poço radial de sombra atrás dos cards + leve brilho quente no topo + escurecimento sutil das bordas, puxando o olho ao centro.
2.  **Scrim inferior (`.hero-scrim`):** gradiente escuro na base (`rgba(74,18,0,0)→.32`) que suaviza a transição do laranja para a seção clara seguinte.
3.  **Sombra de seção (`shadow-hero`):** `0 24px 48px -16px rgba(120,40,0,0.45), 0 6px 16px rgba(40,12,0,0.18)` — faz o hero "pairar" sobre o restante do site.
4.  **Doodles dinheiro/segurança (`.hd-item`):** 6 SVGs em traço fino branco (escudo-check, cadeado, moeda-cifrão, nota, pilha de moedas, losango) com opacidade base 0.16–0.22, no topo do hero. **Parallax de queda:** ao rolar, descem (`translateY` × `data-speed` 0.3–0.6) e desvanecem até sumir (~560px). JS com `requestAnimationFrame` + scroll passivo; **anulado em `prefers-reduced-motion`** (ficam estáticos).

> Conteúdo real do hero fica em `z-10`; as camadas em `z-0`. As três primeiras são estáticas; a 4ª respeita `prefers-reduced-motion`.

---

## 4. Bordas (Radii)

Para manter a estética acolhedora de uma loja física, os cantos retos do ambiente corporativo frio devem ser ligeiramente suavizados.

*   **Borda Padrão (Componentes/Cartões):** `border-radius: 8px;`
*   **Borda de Botões principais:** `border-radius: 6px;` (Mantém um pouco da firmeza institucional).
*   **Imagens de Fachadas e Consultores:** `border-radius: 12px;` (Suaviza o rosto das pessoas).

---

## 5. Espaçamento (Spacing Scale)

Foco no "respiro" visual. Seções apertadas transmitem desespero de venda. O Grupo Real vende consultoria qualificada.

*   **Margem entre seções (Desktop):** `80px` a `120px` (Garante que a leitura não seja cansativa).
*   **Espaçamento interno de Cartões (Padding):** `24px` ou `32px`.
*   **Margem interna de inputs/formulários:** `16px` vertical e horizontal.

---

## 6. Comportamento Responsivo

*   **Mobile-First para Atendimento:** O público que busca empréstimos de outros estados acessa massivamente via celular. O botão do WhatsApp deve estar fixo na parte inferior direita da tela em telas menores que `768px`.
*   **Breakpoints:**
    *   `sm`: `640px` (Celulares na horizontal)
    *   `md`: `768px` (Tablets — transição para layout de duas colunas)
    *   `lg`: `1024px` (Desktop Padrão)
    *   `xl`: `1280px` (Monitores Grandes)

---

## 7. Componentes Padrão (UI Elements)

### A. O Botão de Conversão Humana (CTA Principal)
*   **Fundo:** `#E8501A` (Laranja Ação)
*   **Texto:** `#FFFFFF` (Branco) — Peso: Bold (700)
*   **Efeito Hover:** Escurecer para `#C2410C` com transição suave (`transition: all 0.3s ease`).
*   **Texto sugerido:** "Iniciar Atendimento com Consultor Especialista"

#### Regra de cor dos CTAs — **misto por hierarquia**
Os botões do corpo do site obedecem à hierarquia, não ao destino do link:
*   **CTA principal de cada seção (filled):** **Laranja Ação `#E8501A`** (hover `#C2410C`), mesmo quando abre o WhatsApp. Ex.: "Falar com a equipe", "Verificar meu banco", "Quero" (acordeão), "Consultar já" (coverflow).
*   **Ação rotulada "WhatsApp" / selo de confiança:** **Verde Confiança `#17A24B`** para realces *inline* — pílula de destaque do título e faixa de selos do hero. **Exceção:** o **botão flutuante** de WhatsApp usa o **verde oficial do WhatsApp `#25D366`** (reconhecimento imediato — importante para o público idoso). *(Se preferir unificar com a marca, troque o botão flutuante para `#17A24B`.)*
*   **Ação secundária (outline):** borda/texto neutros (`#2B2A27`), **hover** vira Laranja Ação. Ex.: "Abrir no Google Maps", link do Instagram.

### B. O Bloco de Segurança (Quebra de Objeção)
*   **Fundo:** `#FFFFFF` (Off-White Puro), destacado do fundo areia.
*   **Conteúdo:** Grade de duas colunas mostrando a foto real da filial 1 e filial 2, acompanhado do endereço físico completo e telefone fixo de cada uma. Deve ficar posicionado logo abaixo da primeira dobra do site.

### C. Cartão do Consultor (Humanização)
*   **Estrutura:** Foto profissional em alta qualidade do atendente, nome completo, cargo (Ex: *Consultor Sênior de Crédito*) e o slogan: *"Especialista em encontrar o melhor cenário para você"*.
*   **Borda:** `1px solid #FAF1EA` para delimitar de forma sutil.

---

## 8. Componentes do corpo do site (reestruturação UI/UX)

> Novos blocos definidos na reestruturação v1. Build detalhado em `docs/archive/body-restructure-spec-CONCLUIDO-2026-06-03.md`. Todos seguem as regras de acessibilidade da §2 (corpo ≥16px, `line-height` ≥1.6, alvos de toque ≥48px).

### A. Passos "Como funciona" (v4 — trilha zigzag)
*   **Layout:** 4 cards em trilha vertical **alternada** (esq/dir no desktop via `md:self-start`/`md:self-end`, empilhados no mobile), ligados por linha conectora SVG tracejada decorativa (`aria-hidden`).
*   **Cada passo:** selo circular **preenchido** `bg-laranja-acao` com anel branco (o número vazado `diff-num` foi **reprovado pelo cliente** — não reutilizar), **losango SVG temático** (`assets/losangos/svg/`), rótulo da fase em âmbar, título curto (`font-bold text-grafite`) e 1 linha de apoio.
*   **Objetivo UX:** reduzir o medo do processo — linguagem de "bater o olho", deixando claro que **quem responde é uma pessoa**, não um robô.
*   Spec completa e conteúdo final: `docs/comofunciona-spec.md`.

### B. Depoimentos — Mockup de celular (WhatsApp)
*   **Conceito:** moldura de celular exibindo a conversa real de WhatsApp do cliente (autenticidade = anti-golpe).
*   **Moldura (`.zap-phone`):** largura ~288px, bezel escuro `#1f1b18`, `border-radius:40px`, sombra `dc`.
*   **Tela (`.zap-screen`):** fundo `#ECE5DD`; topo verde `#075E54` (nome do contato + avatar); corpo com balões `.zap-in` (recebido, `#fff`, esquerda) e `.zap-out` (enviado, `#DCF8C6`, direita), horário em `#7A756C 10px`.
*   **Duas opções de conteúdo:** (A) **print real** dentro da moldura via `<img>` — preferida pela autenticidade, **exige redigir/borrar dados sensíveis (nome completo, telefone)**; (B) balões reconstruídos com o **texto fiel** da conversa — mais legível para idosos. Em ambos: rótulo "depoimento real de cliente" + primeiro nome + convênio.
*   **Nunca inventar depoimentos** — viola o valor anti-golpe da marca.

### C. FAQ (acordeão)
*   **Reuso:** usa as classes/CSS já existentes do acordeão de convênios (`.ac-item`, `.ac-item.open .ac-chev`, `.ac-body`) e a função `toggleAcord()`.
*   **Item:** pergunta em `font-semibold text-grafite` + chevron animado; resposta em `text-[#6B6560]` ≥16px.
*   **Tom:** respostas conservadoras, alinhadas a `brand.md` (sem promessa exagerada, sem urgência). Mensagem antifraude obrigatória: **nunca cobramos nada adiantado**.

### D. CTA final / Contato
> ~~**Descontinuado na reordenação de 2026-06-03.**~~ Bloco `#contato` removido. Energia de fechamento delegada ao **WhatsApp flutuante** (global) + CTAs de `#bancos` e dos cards de convênio. Telefones das filiais migrados para `#filiais` como links `tel:` clicáveis. Histórico: `docs/archive/body-restructure-spec-CONCLUIDO-2026-06-03.md` (Tarefa 8).
