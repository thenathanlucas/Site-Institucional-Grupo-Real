---
name: idea-refine
description: Refina ideias vagas para o site do Grupo Real (nova seção, página, conteúdo ou melhoria) até virarem um rascunho de spec acionável. Usar quando o Nathan trouxer uma ideia, um "e se a gente...", uma referência visual ou um problema sem solução definida — ANTES de gerar mockups ou tocar em código.
---

# Idea Refine — Grupo Real

> Adaptado de [addyosmani/agent-skills → idea-refine](https://github.com/addyosmani/agent-skills/tree/main/skills/idea-refine).
> Papel: parceiro de ideação **HONESTO** — apontar fraquezas com especificidade, nunca aprovar por educação. Simplicidade > abrangência.

## Contexto fixo (não perguntar, já assumir)

- Público: idosos/aposentados/pensionistas — entender de bater o olho (`brand.md §3`)
- **Persuasão ética:** o site EXISTE pra vender (gerar conversa no WhatsApp). Urgência e necessidade são ferramentas legítimas quando baseadas em **FATOS**; o que `brand.md §6` proíbe é o excesso e a fabricação (ver régua abaixo)
- Restrições técnicas: HTML único + Tailwind CDN + JS vanilla, sem build, sem backend
- Sem tráfego pago; conversão = WhatsApp; tudo rastreado com `trackWA`
- Paleta/design system fechados (`ui-rules.md`); estado atual do site em `pages.md`

## Régua de persuasão — vender sem parecer golpe

| ✅ Permitido (urgência/necessidade REAL) | ⛔ Proibido (urgência FABRICADA) |
|---|---|
| Dor verdadeira do cliente: "pagando caro em outro empréstimo? A portabilidade pode reduzir a parcela" | Dor inventada ou medo: "não perca essa chance única!" |
| Fato com prazo real: condições e taxas mudam — "consulte as condições de hoje do seu convênio" | Contagem regressiva, "só até sexta", "últimas vagas" (não existe vaga em crédito) |
| Necessidade concreta: margem disponível, saque-aniversário parado, dívida cara no cartão | Promessa de resultado: "saia do vermelho já", "dinheiro na conta em 1 hora" |
| Facilitar o próximo passo: CTA claro, sem fricção, "é rápido e sem compromisso" | Pressão repetida: múltiplos CTAs gritando na mesma dobra, pop-up, caps lock |
| Prova social real: depoimentos verdadeiros, +20 anos, 2 lojas físicas, Banco Central | Depoimento inventado, número inflado, selo que não existe |

**Teste do filho desconfiado:** o filho adulto e cético do cliente leria isso e mandaria a mãe fugir — ou acharia razoável? Se fugiria, reescrever.
**Teste da vitrine:** um vendedor de loja física falaria essa frase olhando no olho do cliente? Se soaria vergonhoso presencialmente, não vai pro site.

## Fase 1 — Divergir

1. Reformular a ideia como pergunta: "Como poderíamos [resultado] para [idoso/aposentado] sem [violar restrição]?"
2. Fazer 3–5 perguntas afiadas **só** sobre o que o contexto fixo não responde (objetivo de negócio, gatilho da ideia, o que já foi tentado)
3. Gerar 4–6 variações usando lentes: simplificar · inverter · reduzir escopo · versão sem código (só conteúdo) · "o que uma boutique física faria?" · "qual dor real do cliente isso ativa, e como?" — descartando na hora o que fere o contexto fixo (dizendo por quê)

## Fase 2 — Convergir

1. Agrupar em 2–3 direções nomeadas
2. Stress-test de cada uma (tabela de 4 eixos): **valor pro idoso** · **força de venda** (cria desejo/ação? qual gatilho usa?) · **esforço no stack atual** · **régua de persuasão** (passa nos 2 testes?)
3. Expor suposições escondidas + como validar barato (GA4/Clarity já instalados, perguntar aos atendentes das lojas, teste com 1 cliente real)
4. Recomendar **UMA** direção com justificativa — e dizer claramente se a ideia for fraca ("não recomendo, porque…")

## Fase 3 — Afiar e entregar

Gerar rascunho de spec no formato do projeto (`docs/<nome>-spec.md`):

- Objetivo + problema que resolve
- **Gatilho de venda da peça** (qual urgência/necessidade real ela ativa)
- Decisões fechadas vs. abertas (o que ainda depende do Nathan)
- Suposições e validação
- Escopo mínimo (a menor versão que entrega valor)
- **Fora de escopo / "Not Doing"** com o porquê de cada corte
- Critérios de aceite (checkboxes)

⚠️ O rascunho **NÃO autoriza implementação** — segue o gate do `CLAUDE.md`. Mockups só depois do check na direção escolhida.

## Red flags do processo

- Pular a definição do problema e ir direto pra solução/mockup
- Gerar 8 variações rasas em vez de 4 boas
- Yes-machining: validar ideia fraca por cortesia
- Urgência fabricada em qualquer variação (coluna ⛔ da régua)
- Excesso de cautela: variação sem **nenhum** apelo de venda também falha — o site precisa converter, não só informar
- Spec rascunhada sem lista "Not Doing"
