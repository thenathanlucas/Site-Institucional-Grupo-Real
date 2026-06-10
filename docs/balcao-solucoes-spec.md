# Spec (rascunho) — "Balcão de dúvidas": soluções por situação, não por convênio

> **Objetivo:** substituir a lógica da seção `#produtos` — em vez de o cliente se auto-classificar por sigla de convênio, a seção pergunta **"O que você precisa hoje?"** e apresenta as soluções pela **situação/dor** do cliente, com CTA WhatsApp direto. O convênio vira detalhe de qualificação (faixa discreta + atendente resolve na conversa).
> **Status:** ✅ **Implementado** em `site_inst.html` (2026-06-10) — **layout L2 "Balcão em linhas"** escolhido pelo Nathan; ilustrações ampliadas em +20% (SVG a 74% do losango) a pedido dele. Conferido no código; teste visual em 360/768/1280px recomendado.
> **Fallback combinado:** o mosaico filtrado anterior (`docs/nossas-solucoes-spec.md`, marcado SUPERSEDED) permanece documentado como fallback caso o Balcão seja revertido.
> **Arquivo:** `site_inst.html`, seção `#produtos` (âncora preservada).

---

## 1. Gatilho de venda da peça

Dor verdadeira nomeada (régua de persuasão ✅): o cliente sabe a própria situação ("a parcela pesa", "preciso de um dinheiro"), mas raramente sabe a sigla do convênio ou a diferença Portabilidade × Refinanciamento. A seção converte por **reconhecimento da situação** + **próximo passo sem fricção** (WhatsApp direto, mensagem já qualificada). Nenhuma promessa de resultado — só o que a loja de fato faz ("buscamos", "renegociamos", "trazemos").

---

## 2. Decisões fechadas (com o Nathan, 2026-06-10)

1. **Direção:** "Balcão de dúvidas" — cards de solução guiados por pergunta. Sem wizard/quiz, sem segundo passo.
2. **Pós-clique:** CTA **WhatsApp direto** por solução; o atendente qualifica o convênio na conversa. Produto aparece **1 vez** (não repete por convênio).
3. **Escopo:** **5 soluções** — Empréstimo Consignado, Portabilidade, Refinanciamento, Antecipação FGTS e **Cartão (Consignado + Benefício unificados)** — a diferença entre cartões é explicada pelo atendente.
4. **Convênios visíveis em tamanho menor:** faixa discreta "Atendemos: INSS · CLT · FGTS · SIAPE · Forças Armadas · Governos · Prefeituras" + convite "Não achou o seu? Pergunta pra gente." — auto-qualificação leve, **não é filtro**.
5. **Título da seção:** **"Como podemos te ajudar?"** (revisado em 2026-06-10 na fusão v2 — substitui "O que você precisa hoje?"; eyebrow "Soluções financeiras" mantido). Subtítulo: "Toque na sua situação — a gente cuida do resto no WhatsApp."
   **5b. CTA dos cards:** **"Quero saber"** (o rótulo "É o meu caso" foi testado no mockup e **recusado** pelo Nathan).
   **5c. Nome da solução de crédito:** **"Empréstimo"** genérico, não "Empréstimo Consignado" — a loja oferece empréstimo para CLT **além** do consignado (correção do Nathan, 2026-06-10).
6. **Referência visual:** **ilustrações SVG de traço fino branco dentro de losango laranja** (gradiente oficial `#FB6516→#ED4A05`) — "irmãs maiores" dos losangos já usados no site. Desenhadas inline (sem assets externos); se a direção vingar, Nathan decide se contrata ilustrador depois.
7. **Destino:** se aprovada no mockup, a seção **substitui** o miolo de `#produtos` (âncora preservada). O grid atual fica como fallback documentado.

## 3. Copy aprovada — **v3, manchetes em pergunta direta (2ª pessoa)** (aprovada em 2026-06-10. Nathan pode ajustar manualmente depois)

| Solução | Manchete (pergunta direta ao cliente) | Resuminho | Mensagem WhatsApp (sugestão) |
|---|---|---|---|
| Empréstimo | Precisando de um dinheiro? | Buscamos a menor taxa do seu perfil entre 30+ bancos. | "Olá! Quero fazer um empréstimo." |
| Portabilidade | Sua parcela está pesando? | Trazemos seu contrato de outro banco e buscamos condição melhor. | "Olá! Já tenho um empréstimo e quero saber sobre a Portabilidade." |
| Refinanciamento | Já tem empréstimo e precisa de mais? | Renegociamos seu contrato pra liberar um saldo novo. | "Olá! Quero saber sobre o Refinanciamento do meu contrato." |
| Antecipação FGTS | Seu FGTS está parado? | Você descobre quanto do saque-aniversário dá pra antecipar. | "Olá! Quero saber sobre a Antecipação do Saque-Aniversário FGTS." |
| Cartão (Consignado + Benefício) | Quer um cartão? | Consignado ou Benefício — mostramos qual serve melhor pra você. | "Olá! Quero saber sobre os cartões Consignado e Benefício." |

> Lógica anti-confusão: Portabilidade = "já tenho e pago caro" · Refinanciamento = "já tenho e quero mais" · Empréstimo = "não tenho e preciso". Título pergunta ("Como podemos te ajudar?") + cards perguntam direto ao cliente = a seção inteira vira conversa de balcão. Régua de persuasão: zero promessa de resultado; "30+ bancos" é fato já usado na seção Bancos.
>
> Histórico: v1 = perguntas longas ("Já tem empréstimo e a parcela pesa?") → v2 = 1ª pessoa, rascunho do Nathan ("Minha parcela está pesando") → **v3 = híbrido em pergunta direta** ("Sua parcela está pesando?"), escolhida pelo Nathan em 2026-06-10 ao notar que as perguntas tinham sumido na v2.

## 4. Dados / código (esboço — detalhar na implementação)

- Novo array `SOLUCOES` (`id`, `nome`, `manchete`, `resumo`, `msg`, `svg`) — **não** apagar `CONVS` (footer e faixa de convênios usam os labels; histórico preservado).
- Tracking novo: `trackWA('wa_sol_{id}')` — permite comparar conversão com os antigos `wa_prod_{conv}` no GA4/Clarity.
- Sem filtro/estado: a seção é estática (render simples), o que **reduz** JS em relação ao grid atual.

## 5. Estilo visual

> **Revisão (2026-06-10, pós-implementação):** Nathan pediu o **laranja só na faixa-título**. A seção foi dividida: faixa laranja (eyebrow/H2/subtítulo, com vinheta + losangos-textura; scrim removido) + **corpo branco** com o balcão. Consequência: ~~cards de vidro fosco~~ → **cards brancos** com borda `areia-borda 1.5px` + sombra quente (vidro não funciona sobre fundo claro). Corpo branco (não areia) por causa do ritmo de fundos — Bancos, logo abaixo, é areia.

- Faixa-título laranja (fórmula do hero) + vinheta/losangos-textura.
- Cards `.sol-tile` brancos, borda areia, sombra quente, hover lift.
- Tons da **placa C** (pêssego) nos selos `.conv-badge` da faixa de convênios.
- CTAs Laranja Ação `#E8501A` com `trackWA`; micro-interações existentes (hover lift, active scale).

## 6. Acessibilidade (`ui-rules §2`)

- Manchete ≥18px bold; resumo ≥16px, `line-height` ≥1.6; CTAs `min-h-[48px]`.
- Ilustrações/losangos `aria-hidden="true"`; contraste: grafite sobre vidro claro (conferir ≥4.5:1 no mockup).
- Sem dependência de interação para ver conteúdo (tudo visível de cara — melhor que o grid atual nesse quesito).
- `prefers-reduced-motion` respeitado.

## 7. Suposições e validação barata

- **Suposição:** o cliente se reconhece mais pela situação que pela sigla. → Validar: perguntar aos atendentes as *palavras* que os clientes usam na loja; ajustar manchetes com essa linguagem.
- **Suposição:** lead sem convênio elegível ainda é lead válido (confirmado pelo Nathan: "todo lead é válido").
- **Métrica:** comparar `wa_sol_*` vs histórico `wa_prod_*` no GA4 após publicar.

## 8. Escopo mínimo (MVP da seção)

Título-pergunta + 5 cards (losango-ilustração, manchete, resumo, CTA) + faixa de convênios. Nada mais.

## 9. Fora de escopo / Not Doing

- **Wizard/quiz multi-step** — fricção para idoso, cara de fintech (descartado na ideação).
- **Segundo passo de escolha de convênio** — decidido WhatsApp direto.
- **Repetir produto por convênio** — era o problema do modelo antigo.
- **Promessas de resultado** ("reduza sua parcela", "saia do vermelho") — viola `brand.md §6`.
- **Taxas/números/prazos** — nada inventado; só fatos já validados (30+ bancos, +20 anos).
- **Remover o grid atual do código antes da aprovação visual** — ele é o fallback.
- **Ilustrações contratadas** — só depois de a direção vingar (SVG inline serve de placeholder definitivo-provisório).

## 10. Plano de etapas (combinado)

- [x] Etapa 1 — decisões de direção (5 respostas do Nathan)
- [x] Etapa 2 — copy das dores validada
- [x] Etapa 3 — este rascunho de spec
- [x] Etapa 4 — mockup criado: `docs/balcao-solucoes-mockup.html` (3 layouts: L1 vitrine · L2 balcão em linhas · L3 pergunta em pílula; 5 ilustrações SVG traço branco no losango laranja)
- [x] Etapa 5 — iteração: copy v1→v2→v3 (perguntas diretas), SVGs +20%, **layout L2 escolhido**
- [x] Etapa 6 — decisão: **substitui `#produtos`** (mosaico antigo removido do código; documentado como fallback na spec SUPERSEDED)
- [x] Etapa 7 — implementado em 2026-06-10 + `/sync-docs`; métricas: comparar `wa_sol_*` vs histórico `wa_prod_*` no GA4 **após publicar** (pendente — site ainda não está no ar)

## 11. Critérios de aceite (para a futura implementação)

- [x] Seção responde "Como podemos te ajudar?" com as 5 soluções aprovadas, sem filtro prévio (layout L2, render estático via `SOLUCOES`).
- [x] Cards `.sol-tile` (vidro fosco): losango laranja com ilustração branca de traço fino (`aria-hidden`, 74% do losango), manchete-pergunta, resumo, CTA "Quero saber" com `trackWA('wa_sol_{id}')`.
- [x] Faixa de convênios discreta (`.conv-badge`, labels derivados do `CONVS`) + link "Não achou o seu? Pergunta pra gente" (`wa_sol_outro_convenio`).
- [x] Copy v3 idêntica à tabela §3 — régua de persuasão respeitada.
- [x] Âncora `#produtos`, menu e footer sem regressão; FAQ (`toggleAcord`) intacto; zero órfãos do grid antigo (`prod-chip`/`prod-tile`/`prod-grid`/`prodFilter`/`mediaDiamond`/`convHeader`/`pg-in` removidos; `CONVS` mantido como fonte de dados).
- [x] A11y §6 completa (conferido no código); responsivo 360/768/1280 — **teste visual recomendado**.
