# SEO + Tracking + A11y — spec de execução

> ## ✅ STATUS (verificado contra o HTML em 2026-06-10)
> - **§1 SEO:** ✅ implementado — `canonical`, `og:url`, `og:image` (+width/height/alt), tags `twitter:` e os **2 blocos JSON-LD** (`FinancialService`/`LocalBusiness` + `FAQPage`) estão no ar.
> - **§3 Como Funciona:** ✅ resolvido — preenchido pela v4 (`docs/comofunciona-spec.md`), com copy final aprovada (diferente do rascunho daqui).
> - **§4 e §5 A11y:** ✅ atendidos — corpos ≥15–16px nos textos de leitura e `min-h-[48px]` nos CTAs/links verificados no HTML.
> - **§2 Instagram embed:** ❌ não movido — segue no `<head>` (funciona; era cosmético/opcional).
> - **§6 Antifraude global:** não aplicado — mantido só no FAQ, conforme a própria recomendação.

> ## ⚠️ GATE DE CONFIRMAÇÃO — OBRIGATÓRIO
> **Antes de editar QUALQUER arquivo, o agente deve PARAR e pedir a confirmação final do usuário (Nathan).**
> Fluxo exigido:
> 1. Ler este spec inteiro + os arquivos-alvo, sem editar nada.
> 2. Apresentar ao usuário um **resumo do diff que pretende fazer** (quais blocos, quais linhas, qual conteúdo novo) — incluindo o texto exato do JSON-LD e dos passos da §3.
> 3. **Aguardar o "pode implementar" explícito do usuário.** Não presumir aprovação.
> 4. Só então aplicar, **um bloco por vez** (§1 → §4 → §5 → §3 → §2), mostrando o resultado e confirmando antes de seguir para o próximo bloco.
> 5. Os pontos com BLOQUEIO (copy de "Como Funciona", domínio canônico) exigem confirmação do conteúdo **antes** de escrever, não depois.
> Nunca commitar nem subir ao servidor sem o usuário pedir.

> **Arquivo-alvo:** `site_inst.html` (NÃO existe `index.html`).
> **Regra de ouro:** edições **cirúrgicas** (Edit pontual). **NÃO reescrever o arquivo inteiro** — o JS do coverflow (IIFE, ~1035-1140) e do acordeão (`CONVS`, ~1169-1272) são frágeis e não devem ser tocados. Reescrita de ponta a ponta = risco de regressão silenciosa. Proibido.
> **Base de regras:** `docs/ui-rules.md` §2 (a11y) e §7 (CTAs), `docs/brand.md` §6 (o que evitar).

---

## 0. Já satisfeito — NÃO mexer (verificado em 2026-06-08)

GA4 async ✅ · Clarity async ✅ · scripts custom no fim do body ✅ · `#1E2E22` não existe (só comentário) ✅ · verde inline + flutuante `#25D366` ✅ · `tel:` Bangu/Realengo ✅ · CNPJ + Res. 4.935/2021 no footer ✅ · antifraude em negrito no FAQ ✅ · blockquote/permalink Instagram limpos ✅. **Não tocar nesses pontos.**

---

## 1. Bloco SEO (o que realmente move SEO — ALTA prioridade, ausente hoje)

### 1.1 Completar meta tags sociais (no `<head>`, junto das og: existentes, ~linhas 9-12)
- Adicionar `<link rel="canonical" href="https://www.gruporealintermediacao.com.br/"/>` (confirmar domínio final com o cliente antes).
- Adicionar `<meta property="og:url" content="https://www.gruporealintermediacao.com.br/"/>`.
- Adicionar `<meta property="og:image" content="https://<domínio>/assets/og/grupo-real-og.jpg"/>` + `<meta property="og:image:width" content="1200"/>` + `<meta property="og:image:height" content="630"/>` + `<meta property="og:image:alt" content="Grupo Real — Escolha o crédito certo pra você"/>`. **Imagem JÁ existe:** `assets/og/grupo-real-og.jpg` (1200×630, gerada em 2026-06-08, aprovada pelo cliente). Só falta a URL absoluta = domínio final + esse caminho.
- Adicionar `<meta name="twitter:title" ...>`, `<meta name="twitter:description" ...>`, `<meta name="twitter:image" ...>` espelhando os og:.

### 1.2 JSON-LD — maior ganho de SEO (adicionar no fim do `<head>`)
Dois blocos `<script type="application/ld+json">`:

**a) `FinancialService` / `LocalBusiness`** com `name` "Grupo Real Intermediação", `@type` adicional, as **2 filiais** como `address`/`branch` (Realengo: Av. Santa Cruz, 1028; Bangu: R. Prof. Clemente Ferreira, 1764 loja c), `telephone` (+5521964781371 / +5521988883917), `openingHours` (Seg–Qui 08–18, Sex 09–18), `areaServed` Rio de Janeiro/Zona Oeste, `url` e `sameAs` (Instagram). Dados vêm de `pages.md` §6.

**b) `FAQPage`** montado a partir dos **10 itens já existentes** do `#faq` (perguntas/respostas reais, linhas ~836-925). Alto potencial de rich result. Copiar o texto fielmente — **não inventar** Q&A novas.

> Manter o JSON consistente com o HTML visível (Google penaliza divergência).

### 1.3 (Opcional, nível servidor) `robots.txt` + `sitemap.xml`
Arquivos separados na raiz do Plesk. Fora do `site_inst.html`. Listar só se o cliente quiser.

---

## 2. Instagram embed.js — reposicionar (BAIXA prioridade, cosmético)

Hoje está no `<head>` (linha 35) como `https://www.instagram.com/embed.js` com `async defer` — **já funciona**. O manual/prompt pede antes de `</body>`.
- Ação: **mover** (não duplicar) para imediatamente antes de `</body>` como `<script async src="https://www.instagram.com/embed.js"></script>`.
- Manter `https://` (o `//` protocolo-relativo do prompt é legado). **Garantir uma única instância** — duplicar = embed carrega 2×.
- Se preferir não arriscar, pode deixar onde está; é melhoria marginal.

---

## 3. "Como Funciona" — preencher os 4 passos (MÉDIA — tem BLOQUEIO de conteúdo)

Estado: estrutura `diff-num` já pronta e correta (linhas 541-570), mas com placeholders comentados (`<!-- Passo N -->`) e subtítulo vazio (linha 540). `pages.md` §3 marca como **pendência de conteúdo do cliente**.
- **BLOQUEIO:** copy não foi aprovada. `brand.md` §6 proíbe inventar/parecer propaganda. **Não inventar números, prazos ou promessas.**
- Ação permitida: remover os comentários e inserir copy **genérica, factual e conservadora**, marcada como rascunho. Sugestão segura (validar com cliente):
  1. **Fale com a gente** — Chame no WhatsApp ou visite uma loja. Quem responde é uma pessoa.
  2. **Analisamos seu convênio** — Verificamos suas condições reais, sem compromisso.
  3. **Simulação transparente** — Você vê taxa, prazo e CET antes de decidir.
  4. **Contratação tranquila** — Só fecha se gostar. Sem pegadinha, sem letra miúda.
- Preencher também o subtítulo (linha 540) com 1 linha no mesmo tom.
- Manter o `<p>` de descrição em `text-base` (ver §4).

---

## 4. Acessibilidade — tamanho de fonte (MÉDIA — exige julgamento, NÃO blanket)

`ui-rules.md` §2: **parágrafos de leitura** nunca < 16px, `line-height` ≥ 1.6. **Atenção:** há 79 usos de `text-[10–15px]`, mas a maioria é **micro-rótulo legítimo** (tags, timestamps, eyebrows, disclaimers, labels de selo) — **esses ficam como estão**.
- Corrigir apenas **parágrafos de corpo real**:
  - `#como-funciona`: descrições dos passos `text-[15px]` (linhas 546,553,560,567) → `text-base` + `leading-relaxed`.
  - `#filiais`: linhas de endereço `text-[14px]` (628-668) → avaliar subir p/ `text-[15px]`/`text-base` (são informação que o idoso precisa ler).
  - `#produtos` (acordeão): descrição do produto `text-[13px]` (linha 1254) → `text-[15px]` no mínimo.
- **Não** mexer em: `cf-disclaimer`, `cf-tag`, `zap-time`, eyebrows, labels de selo do hero, micro-copy do footer legal.
- Regra para o executor: "é uma frase que o cliente precisa ler para entender o serviço?" → ≥16px. "é etiqueta/carimbo/aviso fino?" → deixa.

---

## 5. Acessibilidade — alvos de toque ≥48px mobile (MÉDIA)

`ui-rules.md` §2. Botões/links abaixo de 48px de altura no mobile:
- Acordeão de convênios, botão "Quero" (`py-[9px]`, ~linha 1256) → adicionar `min-h-[48px] items-center`.
- "Abrir no Google Maps" (filiais, `py-[11px]`, linhas 641/671) → `min-h-[48px]`.
- Link do Instagram (`py-3`, linha 942) e CTA coverflow (`.cf-cta`, `padding:12px 20px`) → garantir 48px.
- Drawer mobile já tem `min-h-[48px]` ✅ — usar de referência.
- Cuidado: não inflar botões no desktop a ponto de quebrar layout do coverflow; preferir `min-h` que só "puxa" quando necessário.

---

## 6. Antifraude "ao longo da página" (BAIXA / opcional)

Hoje a mensagem está só no FAQ. O prompt sugere reforço global. **`brand.md` §6 alerta contra excesso de urgência/CTAs apelativos** — então **não espalhar**. No máximo: 1 pílula inline discreta de reforço (`Verde Confiança #17A24B`, estilo selo) perto de `#bancos` ou na faixa de selos do hero. Manter o FAQ como local principal. Se em dúvida, **não fazer** — está adequado.

---

## Ordem sugerida de execução
1. §1 (SEO real — maior valor) → 2. §4 e §5 (a11y, regras objetivas) → 3. §3 (Como Funciona, depende de copy) → 4. §2 (Instagram, cosmético) → 5. §6 (opcional).

## Checagem final (antes de subir ao Plesk)
- [ ] Coverflow ainda funciona (setas, swipe, dots) — JS intocado.
- [ ] Acordeão convênios + FAQ abrem/fecham.
- [ ] JSON-LD válido (testar no Rich Results Test) e coerente com o HTML.
- [ ] Nenhuma tag de tracking duplicada; Instagram embed.js em instância única.
- [ ] Diff revisado linha a linha (nada de rewrite cego).
