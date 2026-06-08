# Spec — Seção "Como funciona" (preenchimento + alinhamento à referência)

> **Objetivo:** transformar a seção `#como-funciona` no layout inspirado na imagem de referência `assets/comofunciona.png`, **mas alinhado à identidade laranja da marca** e às `docs/ui-rules.md` / `docs/brand.md`.
> **Arquivo único a editar:** `site_inst.html` (bloco da seção em ~linhas 656–751). É um HTML único com Tailwind via CDN (config inline) — **não há build**.
> **Revisão 2026-06-08 (decisão do cliente):** o número grande em **contorno vazado** (`diff-num`) foi **reprovado**. Passamos por iterações (selo circular → grid de cards → estilo "how it works" alternado) até fechar na **v4** (mockups em `docs/comofunciona-howitworks-v4.html`).
> **Status atual:** ✅ **Implementado no `site_inst.html` (v4).** Layout de **linha do tempo alternada (zigzag)** com 4 cards, losangos com ícone temático, linha conectora "desengonçada" ligando etapa→etapa, e acabamento (fundo quente, brilho/anel no losango, rótulo da fase, hover).
> **Mockups de referência (histórico das iterações, fora da entrega):** `docs/comofunciona-mockups.html` (3 estilos A/B/C), `docs/comofunciona-howitworks.html` (v1), `-v2` (timeline central), `-v3` (cards conectados), `-v4` (final). A imagem que inspirou o estilo final: `assets/howitworks_example.PNG`.

---

## 1. Leitura da referência (`assets/comofunciona.png`)

A imagem mostra:
1. Eyebrow "SIMPLES E SEM BUROCRACIA" + título "Como **funciona**" (palavra destacada colorida).
2. **4 cards** em linha, cada um com:
   - borda superior colorida (top-border de destaque);
   - indicador de passo (01–04) — na referência é número grande; **na nossa versão é um selo circular preenchido** (ver §4 Tarefa C / Revisão);
   - um **ícone de balão de conversa** com **mini-avatares** no canto superior direito (reforço de "quem responde é uma pessoa");
   - título curto em negrito + 1 linha de apoio.
3. Uma **linha conectora curva** (tracejada) ligando os 4 cards, sugerindo um fluxo/jornada — aparece nos vãos entre os cards.

> ⚠️ **Decisão de cor (fechada) — alinhamento de marca obrigatório:** a referência usa **verde** como cor dominante, mas pelo `ui-rules.md §1` o verde foi **descontinuado** como cor de marca (sobrevive só como "Verde Confiança" `#17A24B` em WhatsApp/selos). Regra desta seção:
> - **Estrutura toda em laranja/âmbar** (filete dos cards, selo circular do passo, linha conectora curva, palavra destacada do título, ícone de balão dos passos 02–04). A seção tem que ler como "parte da loja Grupo Real".
> - **Verde Confiança `#17A24B` aparece em UM lugar só:** o ícone/balão do **WhatsApp no passo 01**, porque ali o verde *significa* "é por aqui que você fala no WhatsApp" — exatamente o papel que a regra reserva pra ele. Isso entrega a familiaridade do público idoso **sem** quebrar a paleta.
> - **Proibido:** pintar cards inteiros de verde, fundo verde, ou usar verde como cor decorativa genérica. Verde fora do balão do passo 01 = fora do padrão.

---

## 2. Conteúdo (texto final — PT-BR)

Texto reescrito para ser **simples, direto e intuitivo** — o cliente idoso entende só de bater o olho, sem precisar raciocinar (`brand.md §3`). Frases curtas, voz ativa, linguagem do dia a dia, sem jargão financeiro. Cada passo = título curto (uma ação clara) + 1 linha de apoio bem objetiva. Tom da marca mantido (`brand.md §5/§6`: humano, sem promessa exagerada, sem urgência).

| # | Título (`<h3>`) | Apoio (`<p>`) |
| :- | :-- | :-- |
| 01 | Você fala com a gente | Manda uma mensagem no WhatsApp ou liga. É rápido e sem compromisso. |
| 02 | A gente te escuta | Um especialista entende o que você precisa e cuida de toda a papelada. |
| 03 | Você vê a melhor opção | A gente mostra a parcela que cabe no seu bolso, sem pegadinha. |
| 04 | O dinheiro cai na conta | Com tudo certo, o crédito é depositado direto na sua conta. |

> **Por que esse texto:** títulos viraram **ações em 1ª/2ª pessoa** ("Você fala", "A gente te escuta") em vez de rótulos abstratos ("Avaliamos as opções"), porque o idoso lê como uma conversa, não como etapa de processo. "Papelada", "pegadinha", "cai na conta", "sem compromisso" são palavras do dia a dia que tranquilizam e quebram objeção (medo de burocracia, medo de golpe) sem precisar explicar.

**Subtítulo da seção** (preencher o `<p>` vazio da linha 660, hoje `<!-- Subtítulo a definir pelo cliente -->`):

> Do primeiro "oi" até o dinheiro na conta, você sempre fala com uma pessoa de verdade.

*(Tom anti-fraude/humanizado, curto. Se o cliente preferir outro texto, manter ≤2 linhas.)*

---

## 3. Tokens e classes a usar (já existentes no projeto)

Definidos no `<head>` (Tailwind config inline) e no `<style>`:

- `laranja-acao` = `#E8501A` (hover `laranja-acao-d` `#C2410C`) — destaque/realce.
- `ambar` = `#D98324` — eyebrow e detalhes de apoio.
- `bg-areia` (fundo da seção) / `areia-borda` `#E8E3D9` (divisórias).
- `grafite` (títulos) / `#6B6560` (texto de apoio).
- ~~`.diff-num` (número contornado âmbar)~~ — **descontinuado nesta seção** (reprovado, ver Revisão). Substituído pelo **selo circular**: `w-12 h-12 rounded-full bg-laranja-acao/[.12]` com número `text-laranja-acao` sólido.
- `rounded-card`, `shadow-card`, `font-body` (Bitter, títulos), `bg-ambar/40` (avatar).

**Não criar tokens novos.** Se precisar de cor pontual, usar arbitrary value Tailwind (`text-[#...]`) seguindo a paleta acima.

---

## 4. Implementação final (v4) — `site_inst.html`

> **Estrutura:** trilha vertical alternada (zigzag). Container `max-w-[960px] mx-auto flex flex-col`. Cada etapa é um wrapper `self-center md:self-start` (ímpares) / `md:self-end` (pares), `md:max-w-[480px]`. Entre as etapas, um **SVG conector** decorativo. Tokens novos de sombra adicionados na config: `cardwarm` / `cardwarmh`. CSS `.step-card` (hover lift desktop) no `<style>`.

### Card de etapa
- `step-card relative rounded-[20px] shadow-cardwarm hover:shadow-cardwarmh border border-areia-borda p-6 md:p-8 flex items-center gap-5 md:gap-6`, fundo `linear-gradient(140deg,#fff,#FBF6EF)` (creme quente).
- **Selo do número:** círculo `bg-laranja-acao` texto branco, `ring-[3px] ring-white`, no canto sup. esquerdo (`-top-3.5 -left-3.5`). É o marcador da etapa. **Nunca** voltar ao número vazado (`diff-num`).
- **Losango (ícone temático):** quadrado `rotate-45 rounded-[22px]`, ~72px (mobile) / 88px (desktop), com **brilho** (camada `blur` atrás) + **anel interno** fino + borda branca. Dentro, ícone `aria-hidden`:
  - **Passo 01:** WhatsApp em **Verde Confiança `#17A24B`** (gradiente verde) — único ponto verde da seção.
  - **Passos 02–04:** ícone em `laranja-acao` (gradiente âmbar/laranja claro). Ícones: 02 = atendimento (fone), 03 = lupa (melhor opção), 04 = cédula (dinheiro).
- **Texto:** rótulo da fase (`text-[11px] uppercase tracking-[.14em] text-ambar`: Atendimento/Análise/Proposta/Liberação) + `<h3>` (`text-xl md:text-[23px]`) + `<p>` (`text-base md:text-[17px] leading-[1.65] text-[#5f5a54]`).

### Linha conectora "desengonçada" (liga etapa → etapa)
- Um `<svg>` entre cada par de cards, `aria-hidden pointer-events-none`. **Desktop:** `viewBox 0 0 960 130 preserveAspectRatio="none"`, path tracejado irregular (`stroke-dasharray="2 13"`, `vector-effect="non-scaling-stroke"` p/ não distorcer), `stroke #E8501A` op .4, com **pontinhos** (`<circle>`) nas pontas, alternando inclinação (1→2 desce p/ direita, 2→3 p/ esquerda…). **Mobile:** SVG vertical curtinho centralizado. Liga **os cards (etapas)**, não os losangos.

### Acabamento ("charme")
Fundo quente nos cards + **sombra alaranjada** (`cardwarm`), losango com brilho/anel, selo com anel branco, pontos de conexão na linha, e **hover lift** (`translateY(-5px)`, desktop). Decisão de cliente: foi o que deu "charme pra cativar".

---

## 5. Acessibilidade (não negociável — `ui-rules.md §2`, público idoso)

- Parágrafos **≥16px** (corpo subiu p/ `text-[17px]` no desktop) e `line-height ≥1.6` (`1.65`). Manter.
- Todo adorno (losango, ícones, linhas conectoras, brilho) com `aria-hidden="true"`; conectores também `pointer-events-none`.
- A ordem de leitura (selo/número → rótulo → título → texto) permanece lógica no DOM; no mobile os cards empilham na ordem 1→2→3→4.
- Contraste: texto de apoio reforçado p/ `#5f5a54` sobre fundo claro — OK.
- Hover é só elevação decorativa (não essencial). Animação leve; aceitável sem `prefers-reduced-motion` por ser sutil, mas pode ser refinado depois.

---

## 6. Responsivo (`ui-rules.md §6`)

- **Mobile (`<768px`):** cards centralizados e empilhados (`self-center`, `w-full md:max-w-[480px]`); conector vira SVG vertical curtinho; losango + texto lado a lado dentro do card.
- **Desktop (`≥768px`):** trilha **alternada** (`md:self-start` / `md:self-end`); conector horizontal "desengonçado" com pontas; hover lift ativo.
- Testar em 360px, 768px e 1280px.

---

## 7. Critérios de aceite

- [x] 4 passos preenchidos com os textos da §2 + subtítulo da seção preenchido.
- [x] Visual fiel à referência **porém em laranja/âmbar** (zero verde novo, exceto o balão WhatsApp do passo 01).
- [x] **Selo circular preenchido** no lugar do número vazado (`diff-num` reprovado).
- [x] Filete superior laranja + card separado com cantos arredondados e sombra suave.
- [x] Balão de conversa + mini-avatares discretos, decorativos, `aria-hidden`.
- [x] Linha conectora **curva** visível no desktop, oculta no mobile, decorativa.
- [x] Acessibilidade preservada (≥16px, contraste, aria-hidden nos adornos).
- [x] Sem novos tokens; só classes/cores já existentes no projeto.
- [ ] Renderiza bem em 360 / 768 / 1280px. *(conferir no navegador)*

---

## 8. Fora de escopo

- Reordenar a seção no corpo do site (ver `docs/body-reorder-spec.md`).
- Fotos reais de consultores (ficam em Filiais / Cartão do Consultor).
- Qualquer JS — esta seção é estática.
