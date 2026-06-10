---
name: frontend-ui-engineering
description: Constrói UI com qualidade de produção no site institucional do Grupo Real. Usar sempre que for criar ou modificar seções, componentes visuais, layouts ou interações em site_inst.html (ou mockups em docs/) — para o resultado parecer trabalho de engenheiro frontend sênior, não "gerado por IA".
---

# Frontend UI Engineering — Grupo Real

> Adaptado de [addyosmani/agent-skills → frontend-ui-engineering](https://github.com/addyosmani/agent-skills/tree/main/skills/frontend-ui-engineering) para este projeto: **HTML único + Tailwind via CDN + JS vanilla, sem build, sem React**. Fontes canônicas: `docs/ui-rules.md` (design system) · `docs/brand.md` (marca/público) · `docs/pages.md` (mapa do que está no ar).

## Visão geral

O objetivo é uma interface com sensibilidade de design genuína, não defaults algorítmicos. Público: **idosos, aposentados e pensionistas** — acessibilidade e clareza não são polimento, são requisito do negócio (nada pode parecer golpe ou dinheiro fácil).

## Quando usar

- Criar nova seção, componente ou página (`site_inst.html`, `privacidade.html`, mockups em `docs/`).
- Modificar interface existente (layout, cor, tipografia, interação).
- Corrigir problemas visuais ou de UX.

⛔ Antes de editar: **gate de aprovação do `CLAUDE.md`** (apresentar a mudança e aguardar o check do Nathan). Depois de editar: **rodar `/sync-docs`**.

## Arquitetura (no lugar de "component architecture" React)

- **Uma seção = um bloco `<section id="...">`** com comentário-cabeçalho `<!-- ═══ NOME ═══ -->`. Mover/editar = recortar o bloco inteiro; nunca reescrever o arquivo de ponta a ponta (o JS do coverflow e o array `CONVS` são frágeis).
- **CSS:** utilitários Tailwind inline primeiro; o bloco `<style>` residual só recebe o que não tem equivalente limpo no Tailwind (prefixos por seção: `.cf-*`, `.prod-*`, `.zap-*`, `.step-card`).
- **Tokens:** só os do `tailwind.config` inline. **Não criar tokens novos** sem aprovação; cor pontual via arbitrary value seguindo a paleta.
- **Dados desacoplados da apresentação:** `CONVS` é a fonte única de convênios/produtos — renderização via JS. Nunca duplicar o array nem hardcodar produto no HTML.
- **Helpers reutilizáveis:** `trackWA()`, `waCta()`, `convIcon()`, `mediaDiamond()`, `toggleAcord()`, `waLink()`. Reusar antes de criar novo.

## Estado e interatividade (no lugar de "state management" React)

Mínimo viável, JS vanilla:
- **Toggle de classe CSS** para abrir/fechar (`.open`, `.is-on`) — padrão do acordeão FAQ e dos chips.
- **Render por template string** a partir de `CONVS` — padrão do mosaico de produtos.
- **Sem bibliotecas, sem framework, sem build.** Se a interação pedir mais que isso, questionar o requisito antes de importar qualquer coisa.
- Todo CTA de conversão carrega `onclick="trackWA('rotulo')"` (GA4 + Clarity). Remover tracking = bug.

## Padrões de "cara de IA" a eliminar (adaptado à marca)

| Padrão genérico | Aqui no Grupo Real |
|---|---|
| Roxo/índigo default | Paleta da marca: Laranja Vibrante (fundos de impacto), Laranja Ação `#E8501A` (CTAs), Café `#2B1D14` (superfície escura), Areia `#F4F1EA` |
| Gradientes em excesso | Só os gradientes oficiais (fórmula do `.hero-orange`/`.prod-section`) e os dos cards aprovados |
| Verde decorativo | Verde **só** como Verde Confiança `#17A24B` (selos/WhatsApp) ou `#25D366` (botão flutuante). Verde como cor genérica = fora do padrão |
| Border-radius no máximo | Escala do projeto: `card 8px` · `btn 6px` · `img 12px` (cards premium aprovados: 16–20px) |
| Copy placeholder / inventada | **Nunca inventar** conteúdo, número, taxa, prazo ou depoimento (`brand.md §6` — anti-golpe). Conteúdo novo = pedir ao Nathan |
| Sombras pesadas | Tokens existentes (`shadow-card`, `cardwarm`, `hero`…) — sutis e quentes |
| Padding uniforme gigante | Escala do projeto: seções `py-16 md:py-[100px]`, cards 24/32px |
| Reintroduzir o descontinuado | `oliva`, `coral` e o número vazado `diff-num` foram **reprovados** — não voltar |

## Tipografia

- **H1/H2:** Bitter (ou `font-body` Plus Jakarta nos títulos de seção, como já está) — um único `<h1>` (hero); `<h2>` por seção; hierarquia sem pulos.
- **Corpo:** Source Sans 3 / Plus Jakarta. **Parágrafo de leitura nunca < 16px, `line-height` ≥ 1.6.** Micro-rótulos (tags, eyebrows, disclaimers) podem ser menores.
- Regra prática: "é frase que o cliente precisa ler para entender o serviço?" → ≥16px. "É etiqueta/carimbo?" → pode ser menor.

## Acessibilidade (WCAG 2.1 AA — não negociável, público idoso)

- **Teclado:** tudo interativo navegável por Tab; elementos custom com `role`, `tabindex` e handler de tecla; `:focus-visible` visível (contorno contrastante).
- **ARIA:** `aria-label` em controles sem texto; semântica nos padrões existentes (`aria-pressed` nos chips, `aria-live` na grade, `role="group"`).
- **Adornos** (losangos, conectores SVG, clarões, vinhetas): `aria-hidden="true"` + `pointer-events:none`.
- **Alvos de toque ≥ 48px** (`min-h-[48px]`).
- **Contraste 4.5:1** texto normal, 3:1 texto grande; estado nunca indicado só por cor.
- **`prefers-reduced-motion`:** reduzir/zerar transform e usar `scrollIntoView` `auto`.
- **Estados significativos:** nada de tela vazia muda — seguir o padrão do placeholder do `#prod-grid` (ícone + mensagem + instrução de recuperação).

## Responsivo

Mobile-first (público acessa massivamente via celular). Breakpoint principal `768px`. Testar em **320/360 · 768 · 1024 · 1280px** — e **nunca** permitir scroll horizontal.

## Racionalizações que não colam aqui

| Desculpa | Realidade |
|---|---|
| "Acessibilidade depois" | O público-alvo É o caso de acessibilidade; sem ela o site falha na função |
| "Responsivo depois" | Refazer custa 3× mais; o tráfego é mobile |
| "É só um mockup" | Mockups em `docs/` viram a referência canônica das specs |
| "Texto de exemplo por enquanto" | Texto inventado em site financeiro = risco de parecer fraude |
| "Cara de IA serve por ora" | A marca é boutique; genérico destrói o posicionamento |

## Red flags (parar e corrigir)

- Cor fora do `tailwind.config` / token novo sem aprovação
- Reescrita do arquivo inteiro em vez de edição cirúrgica
- CTA sem `trackWA` · parágrafo de leitura < 16px · alvo < 48px
- Verde decorativo · `oliva`/`coral`/`diff-num` de volta
- Conteúdo (texto, número, depoimento) inventado
- Adorno sem `aria-hidden` · scroll horizontal em qualquer largura

## Checklist de verificação (antes de reportar como pronto)

- [ ] Zero erros no console ao carregar
- [ ] Navegação completa por teclado (Tab + Enter/Espaço; setas onde houver padrão)
- [ ] Leitor de tela entende a estrutura (headings, labels, live regions)
- [ ] Responsivo em 320/360, 768, 1024, 1280px — sem scroll horizontal
- [ ] Estados vazio/erro implementados onde há conteúdo dinâmico
- [ ] Conformidade com `ui-rules.md` (paleta, tipografia ≥16px, radius, sombras, espaçamento)
- [ ] `prefers-reduced-motion` respeitado
- [ ] Coverflow, acordeão FAQ e mosaico de produtos sem regressão
- [ ] `/sync-docs` executado e docs atualizados
