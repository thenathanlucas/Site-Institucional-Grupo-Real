# SPEC DE EXECUÇÃO — Reestruturação do corpo do site (UI/UX)

> **Status:** ✅ **CONCLUÍDA** em 2026-06-03. Todas as tarefas aplicadas em `site_inst.html`.
> **Pendências do cliente** listadas na seção final deste arquivo.
> **Arquivo único editado:** `site_inst.html` (raiz). **Stack:** HTML + Tailwind CDN + JS vanilla. **NÃO** usar React, build tools ou frameworks.
> **Fontes canônicas:** `docs/ui-rules.md` (design system) · `docs/brand.md` (marca/público) · `docs/pages.md` (mapa do estado atual).
> **Princípio de estilo:** todo bloco novo deve **imitar os padrões já existentes** no corpo do site (mesmas classes Tailwind, tokens, eyebrow/section-title, botões). Não introduzir cores, fontes ou componentes fora do design system.

---

## ⛔ NÃO MEXER (fora de escopo — aprovado pelo cliente)

Estes blocos estão prontos. Não alterar marcação, estilo, JS nem conteúdo:

| Bloco | Localização aproximada (arquivo atual) |
|-------|-----------------------------------------|
| `<head>` + tailwind.config + `<style>` | ~1–264 (você **pode adicionar** CSS novo no fim do `<style>`) |
| Navbar (`<nav sticky>`) | ~271–313 |
| Hero + Coverflow (`#topo`) | ~318–511 |
| IIFE do Coverflow (JS) | ~865–970 |
| `toggleMenu()` | ~973–986 |
| `trackWA()` | ~989–996 |
| Array `CONVS` + geração do acordeão + `toggleAcord()` | ~999–1102 |
| Botão WhatsApp flutuante | ~857–861 |

> O acordeão de convênios é **gerado por JS em `#acord`** — ao mover a seção Produtos, **mova apenas o HTML do contêiner** (a `<section id="produtos">`); o JS continua funcionando porque busca por `#acord`.

---

## 🎯 NOVA ORDEM DO CORPO (alvo)

Substituir o corpo atual (da `<section id="filiais">` até a `<section id="instagram">`) por esta sequência. Footer e WhatsApp flutuante permanecem após.

| # | Seção | ID | Ação | Fundo |
|---|-------|----|------|-------|
| 1 | Filiais + confiança | `#filiais` | **manter** (ajuste menor: Realengo → "Matriz") | branco |
| 2 | Como funciona | `#como-funciona` | 🆕 **scaffold sem conteúdo** | areia |
| 3 | Escolha seu convênio | `#produtos` | **mover para cá** (sobe) | branco |
| 4 | Por que o Grupo Real | `#sobre-nos` | **manter** (Diferenciais) | areia |
| 5 | 30+ Bancos parceiros | `#bancos` | **transformar em faixa enxuta** | branco |
| 6 | Depoimentos | `#depoimentos` | 🆕 **novo** (mockup de celular) | areia |
| 7 | Quem somos | `#sobre` | **manter + absorver** o Banner Humano | café (escuro) |
| 8 | Instagram | `#instagram` | **manter** | branco |
| 9 | FAQ | `#faq` | 🆕 **novo** (reusa acordeão) | areia |
| 10 | CTA final / Contato | `#contato` | 🆕 **novo** | café ou laranja |
| 11 | Footer | — | **ajustar** (link LGPD + âncoras) | café |

**Remoções:** a seção "Banner Humano" standalone (sem id, ~633–648) é **removida** — sua mensagem e CTA migram para `#contato` (#10).

**Ritmo de fundos** (alternância intencional): branco → areia → branco → areia → branco → areia → **café** → branco → areia → **café** → café. Sem dois claros idênticos colados.

---

## ✅ FILA DE EXECUÇÃO (checklist na ordem)

- [x] **Tarefa 0** — Pré-requisitos de assets/decisões — _decisões confirmadas pelo cliente_
- [x] **Tarefa 1** — Reordenar: mover `#produtos` para cima; remover Banner Humano standalone
- [x] **Tarefa 2** — `#filiais`: renomear Realengo "Filial 01" → "Matriz", Bangu "Filial 02" → "Filial"
- [x] **Tarefa 3** — `#como-funciona`: scaffold criado (4 passos com placeholders comentados)
- [x] **Tarefa 4** — `#bancos`: convertida para faixa compacta horizontal com ID novo
- [x] **Tarefa 5** — `#depoimentos`: criada com 3 mockups de celular WhatsApp (balões reconstruídos)
- [x] **Tarefa 6** — `#sobre`: lead atualizado com "de humano para humano"; Banner Humano removido
- [x] **Tarefa 7** — `#faq`: acordeão de 10 perguntas criado (reusa `toggleAcord` e classes `.ac-item`)
- [x] **Tarefa 8** — `#contato`: CTA final + 2 cartões de filial com telefones `tel:` clicáveis
- [x] **Tarefa 9** — Footer: 5 novos links em "Empresa" + "Falar com consultor" + link `privacidade.html`
- [x] **Tarefa 10** — CSS `.zap-*` adicionado ao `<style>` (mockup de celular WhatsApp)
- [x] **Tarefa 11** — QA: 11 `<section>` balanceadas · sem tokens oliva/coral · `#acord` presente · hero intacto

---

## Tarefa 0 — Pré-requisitos

1. **Depoimentos (assets):** criar pasta `assets/depoimentos/`. O cliente fornecerá **prints reais** de conversas do WhatsApp (`dep-1.png`, `dep-2.png`, ...) **com dados sensíveis borrados** (nome completo, telefone). Se os prints ainda não existirem, **deixar `<img>` com `src` placeholder comentado** e seguir — não bloquear.
2. **Decisões já tomadas:**
   - "Como funciona" entra **sem conteúdo** (scaffold) — o cliente preenche depois.
   - Realengo passa a ser rotulado **"Matriz"**.
   - Botão flutuante de WhatsApp permanece `#25D366` (não alterar).
3. **Conteúdo do FAQ:** usar os rascunhos da Tarefa 7 (marcados `[confirmar]`) — são rascunhos a validar com o cliente, mas podem ser implementados como estão.

---

## Tarefa 1 — Reordenar e remover

1. **Mover** a `<section id="produtos">` inteira (~677–684) para **logo após** a nova seção `#como-funciona` (antes de `#sobre-nos`).
2. **Remover** o bloco "Banner Humano" standalone (a `<div class="bg-cafe ... md:grid-cols-2">`, ~633–648). Guardar mentalmente o texto/CTA → reaproveitado na Tarefa 8.
3. Conferir que `#sobre-nos` (Diferenciais) fica **depois** de `#produtos`.

> Resultado parcial da ordem: `#filiais` → `#como-funciona` → `#produtos` → `#sobre-nos` → (Bancos) → (Depoimentos) → `#sobre` → `#instagram` → (FAQ) → (Contato) → footer.

---

## Tarefa 2 — `#filiais`: Realengo vira "Matriz"

No card da filial de Realengo (~531–532):
- Trocar `<div class="text-[10px] ...">Filial 01</div>` → **`Matriz`**.
- Manter Bangu como `Filial 01` **ou** `Filial — Bangu` (preferir só "Filial"). Sugerido: Realengo = "Matriz", Bangu = "Filial".
- (Opcional) Adicionar no eyebrow/sub da seção uma frase de confiança curta: *"Empresa real, com endereço que você pode visitar"* — sem inflar.

---

## Tarefa 3 — `#como-funciona` (scaffold SEM conteúdo)

Inserir **após** `#filiais`. Mesmo padrão de cabeçalho das outras seções. Conteúdo dos passos fica como placeholder comentado (o cliente preenche).

```html
<!-- ═══════════════════════
     COMO FUNCIONA  (conteúdo a definir pelo cliente)
     ═══════════════════════ -->
<section class="bg-areia py-16 px-5 md:py-[100px] md:px-12" id="como-funciona">
  <div class="max-w-[1200px] mx-auto">
    <div class="eyebrow inline-flex items-center gap-2 text-[11px] font-semibold tracking-[.12em] uppercase text-ambar mb-3.5">Simples e sem burocracia</div>
    <h2 class="section-title font-body font-bold leading-[1.2] tracking-[-0.3px] text-grafite mb-4">Como <span class="text-laranja-acao">funciona</span></h2>
    <p class="text-base leading-[1.75] text-[#6B6560] max-w-[520px]"><!-- [SUBTÍTULO A DEFINIR] --></p>

    <!-- 4 passos — CONTEÚDO A DEFINIR PELO CLIENTE -->
    <div class="mt-11 grid grid-cols-1 md:grid-cols-4 gap-px bg-areia-borda border border-areia-borda rounded-card overflow-hidden">
      <!-- Repetir 4x: -->
      <div class="bg-white p-7 px-6 flex md:flex-col gap-5 items-start md:border-r md:border-areia-borda last:md:border-r-0">
        <div class="diff-num font-body text-[42px] font-bold text-transparent leading-none shrink-0 w-11 tracking-[-1px]">01</div>
        <div>
          <h3 class="text-base font-bold text-grafite mb-1.5 font-body"><!-- [TÍTULO PASSO 1] --></h3>
          <p class="text-[15px] text-[#6B6560] leading-[1.7]"><!-- [DESCRIÇÃO PASSO 1] --></p>
        </div>
      </div>
      <!-- passos 02, 03, 04 idem -->
    </div>
  </div>
</section>
```

> Não preencher os passos. Deixar os comentários `[...]` para o cliente. Manter a estrutura visual igual à seção Diferenciais (reuso de `.diff-num`).

---

## Tarefa 4 — `#bancos`: faixa compacta

Substituir a seção "Bancos Parceiros" atual (~653–672) por uma **faixa enxuta** (sem o card gigante "30+" em 2 colunas pesadas). Manter o CTA e o `trackWA('wa_bancos')`.

```html
<!-- ═══════════════════════
     BANCOS PARCEIROS (faixa compacta)
     ═══════════════════════ -->
<section class="bg-white py-12 px-5 md:py-16 md:px-12 border-t border-b border-areia-borda" id="bancos">
  <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    <div class="flex items-center gap-5">
      <div class="font-body text-[56px] md:text-[64px] font-bold text-grafite leading-none tracking-[-2px] shrink-0">30<span class="text-laranja-acao">+</span></div>
      <div>
        <h2 class="font-body text-[22px] md:text-[26px] font-bold text-grafite leading-tight mb-1">Bancos parceiros</h2>
        <p class="text-[15px] text-[#6B6560] leading-[1.6] max-w-[460px]">Buscamos a melhor taxa do seu perfil entre dezenas de bancos. Não sabe se o seu está na lista? A gente verifica com você.</p>
      </div>
    </div>
    <a href="https://wa.me/5521986862308?text=Olá!+Gostaria+de+saber+se+meu+banco+é+elegível+para+empréstimo+consignado+com+o+Grupo+Real."
       target="_blank" rel="noopener" onclick="trackWA('wa_bancos')"
       class="inline-flex items-center justify-center gap-2.5 bg-laranja-acao text-white font-body text-[15px] font-bold py-[15px] px-[26px] rounded-btn no-underline transition-all duration-300 hover:bg-laranja-acao-d hover:-translate-y-px active:scale-[.98] shrink-0">
      <!-- reusar o mesmo SVG do WhatsApp já presente em outras seções -->
      Verificar meu banco
    </a>
  </div>
</section>
```

Posicionar **após** `#sobre-nos` (Diferenciais).

---

## Tarefa 5 — `#depoimentos` (mockup de celular)

Inserir **após** `#bancos`. Cabeçalho padrão + grade de "celulares" com a conversa real. **Default: opção A (print real dentro da moldura)** — mais autêntico. Se não houver prints ainda, deixar `<img>` comentado e renderizar 1 exemplo com balões (opção B) como referência visual.

```html
<!-- ═══════════════════════
     DEPOIMENTOS
     ═══════════════════════ -->
<section class="bg-areia py-16 px-5 md:py-[100px] md:px-12" id="depoimentos">
  <div class="max-w-[1200px] mx-auto">
    <div class="text-center mb-10">
      <div class="eyebrow inline-flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[.12em] uppercase text-ambar mb-3.5">Quem já fez, aprovou</div>
      <h2 class="section-title font-body font-bold leading-[1.2] tracking-[-0.3px] text-grafite mb-4">O que dizem nossos <span class="text-laranja-acao">clientes</span></h2>
      <p class="text-base leading-[1.7] text-[#6B6560] max-w-[480px] mx-auto">Conversas reais de quem foi atendido pela nossa equipe. Sem roteiro, sem ator.</p>
    </div>

    <div class="flex gap-6 overflow-x-auto md:overflow-visible md:justify-center pb-4 snap-x">
      <!-- Repetir por depoimento. OPÇÃO A (print real): -->
      <figure class="snap-center shrink-0 flex flex-col items-center gap-3">
        <div class="zap-phone">
          <div class="zap-screen">
            <!-- <img src="assets/depoimentos/dep-1.png" alt="Depoimento de cliente via WhatsApp" class="w-full h-full object-cover"/> -->
            <!-- OPÇÃO B (balões reconstruídos com texto FIEL da conversa): -->
            <div class="zap-top">
              <div class="zap-avatar">GR</div>
              <div class="leading-tight"><div class="text-[13px] font-semibold">Grupo Real</div><div class="text-[10px] opacity-80">online</div></div>
            </div>
            <div class="zap-body">
              <div class="zap-bubble zap-in">[mensagem recebida do cliente]<span class="zap-time">09:14</span></div>
              <div class="zap-bubble zap-out">[resposta da equipe]<span class="zap-time">09:15</span></div>
            </div>
          </div>
        </div>
        <figcaption class="text-[13px] text-[#6B6560] text-center">— <strong class="text-grafite font-semibold">[Primeiro nome]</strong>, [convênio]</figcaption>
      </figure>
      <!-- + 2 a 3 depoimentos -->
    </div>
  </div>
</section>
```

> **Regra:** usar **texto/print 100% real** (anti-golpe). Não fabricar conversas. Borrar dados sensíveis nos prints.

---

## Tarefa 6 — `#sobre`: absorver o Banner Humano

Manter a seção "Quem somos" (`#sobre`, ~689–760). Incorporar a mensagem emocional do antigo Banner Humano ("Gente cuidando de gente") como um **reforço dentro do lead** ou logo abaixo do H2 — sem criar outra seção escura separada. Não duplicar a foto/CTA (o CTA forte fica em `#contato`).

---

## Tarefa 7 — `#faq` (reusa o acordeão existente)

Inserir **após** `#instagram`. Reusar as classes `.ac-item` / `.ac-chev` / `.ac-body` e a função `toggleAcord(this)` que **já existem**. Construir itens estáticos em HTML (não precisa de JS novo).

```html
<!-- ═══════════════════════
     FAQ
     ═══════════════════════ -->
<section class="bg-areia py-16 px-5 md:py-[100px] md:px-12" id="faq">
  <div class="max-w-[820px] mx-auto">
    <div class="text-center mb-10">
      <div class="eyebrow inline-flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[.12em] uppercase text-ambar mb-3.5">Tire suas dúvidas</div>
      <h2 class="section-title font-body font-bold leading-[1.2] tracking-[-0.3px] text-grafite mb-4">Perguntas <span class="text-laranja-acao">frequentes</span></h2>
    </div>
    <div class="flex flex-col gap-px bg-areia-borda border border-areia-borda rounded-card overflow-hidden">
      <!-- Repetir por pergunta: -->
      <div class="ac-item">
        <button class="w-full bg-white border-0 py-5 px-6 flex items-center justify-between cursor-pointer text-left font-body transition-colors duration-200 hover:bg-[#FDFCFA]" onclick="toggleAcord(this)">
          <span class="text-[16px] font-semibold text-grafite pr-4">[PERGUNTA]</span>
          <svg class="ac-chev w-5 h-5 stroke-[#9A9590] fill-none stroke-2 transition-transform duration-[250ms] shrink-0" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="ac-body hidden bg-areia border-t border-areia-borda px-6 py-5">
          <p class="text-base text-[#6B6560] leading-[1.7]">[RESPOSTA]</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Conteúdo do FAQ (rascunho — `[confirmar]` com o cliente, mas pode implementar):**

1. **O Grupo Real é um banco? É confiável?** — Somos um correspondente bancário **autorizado** pelo Banco Central (Resolução nº 4.935/2021), com **2 lojas físicas** que você pode visitar em Bangu e Realengo. Intermediamos seu crédito com bancos parceiros. `[confirmar]`
2. **Preciso pagar alguma coisa adiantado para liberar o empréstimo?** — **Não. Nunca cobramos nada adiantado.** Se alguém pedir um pagamento "para liberar" o crédito, é golpe. Nosso atendimento é gratuito. `[confirmar]`
3. **O atendimento e a simulação têm custo?** — Não. Conversar com um consultor e simular é **gratuito e sem compromisso**. `[confirmar]`
4. **Quem pode contratar?** — Aposentados e pensionistas do INSS, trabalhadores CLT, servidores públicos (SIAPE, governos, prefeituras) e militares. Fale com a gente para confirmar o seu convênio. `[confirmar]`
5. **Quais documentos eu preciso?** — Em geral RG/CPF e os dados do seu benefício ou convênio. O consultor informa exatamente o que levar antes de você sair de casa. `[confirmar]`
6. **O que é "empréstimo consignado"?** — É o crédito com **desconto direto na folha/benefício**, o que costuma garantir taxas menores que as de outras modalidades. `[confirmar]`
7. **Posso resolver tudo pelo WhatsApp ou preciso ir à loja?** — Você escolhe. Atendemos pelo WhatsApp **e** presencialmente em Bangu e Realengo. `[confirmar]`
8. **Em quanto tempo o dinheiro cai?** — Depende do banco e do convênio. O consultor informa o prazo real **antes** de você fechar. `[confirmar]`
9. **Como sei a taxa e o CET?** — Mostramos **todas as condições (taxa, prazo e CET) antes de você assinar qualquer coisa.** Transparência é regra aqui. `[confirmar]`
10. **Vocês atendem quem é de outro estado?** — Sim, pelo WhatsApp conseguimos atender clientes de outras regiões. `[confirmar]`

---

## Tarefa 8 — `#contato` (CTA final / fechamento)

Inserir **após** `#faq`, antes do footer. Consolida todos os caminhos de contato. Reaproveitar a headline emocional do Banner Humano ("Gente cuidando de gente") e o CTA `trackWA('wa_humano')`.

```html
<!-- ═══════════════════════
     CTA FINAL / CONTATO
     ═══════════════════════ -->
<section class="bg-cafe text-areia/70 py-16 px-5 md:py-[100px] md:px-12" id="contato">
  <div class="max-w-[1200px] mx-auto">
    <div class="max-w-[620px] mb-10">
      <div class="eyebrow-white eyebrow inline-flex items-center gap-2 text-[11px] font-semibold tracking-[.12em] uppercase text-areia/40 mb-3.5">Fale com a gente</div>
      <h2 class="section-title font-body font-bold leading-[1.2] tracking-[-0.3px] text-white mb-4">Pronto para conversar com um <span class="text-laranja-acao">especialista</span>?</h2>
      <p class="text-base leading-[1.75] text-areia/55 mb-7">Sem pressa, sem letra miúda. Um consultor analisa seu caso e explica tudo de humano para humano.</p>
      <a href="https://wa.me/5521986862308?text=Olá!+Gostaria+de+falar+com+um+consultor+do+Grupo+Real."
         target="_blank" rel="noopener" onclick="trackWA('wa_contato')"
         class="inline-flex items-center justify-center gap-2.5 bg-laranja-acao text-white font-body text-[15px] font-bold py-[15px] px-[26px] rounded-btn no-underline transition-all duration-300 hover:bg-laranja-acao-d hover:-translate-y-px active:scale-[.98]">
        <!-- SVG WhatsApp --> Falar no WhatsApp
      </a>
    </div>

    <!-- Cartões de contato por filial (telefone + horário + maps) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <!-- Matriz Realengo: nome, endereço, (21) 96478-1371, horário, link Maps -->
      <!-- Filial Bangu: nome, endereço, (21) 98888-3917, horário, link Maps -->
    </div>
  </div>
</section>
```

Preencher os 2 cartões reaproveitando os dados de `#filiais` (endereço, telefone, horário, link Maps). Telefones como `tel:` clicáveis (acessibilidade para idosos que preferem ligar).

---

## Tarefa 9 — Footer

1. **Adicionar link de Política de Privacidade / LGPD** na coluna "Empresa" ou numa linha no rodapé legal: `<a href="privacidade.html">Política de Privacidade</a>`.
   - Se a página ainda não existir, apontar para `#` e **avisar o cliente** que falta criar `privacidade.html` (uso de GA4 + Clarity exige aviso de privacidade/cookies).
2. **Atualizar âncoras** da coluna "Empresa": adicionar `Como funciona → #como-funciona`, `Depoimentos → #depoimentos`, `Dúvidas → #faq`, `Contato → #contato`.
3. Não mexer no bloco legal (CNPJ, Resolução, copyright).

---

## Tarefa 10 — CSS novo (adicionar no fim do `<style>`)

```css
/* ─── Depoimentos: mockup de celular (WhatsApp) ─── */
.zap-phone{ width:288px; background:#1f1b18; border-radius:40px; padding:12px;
  box-shadow:0 18px 48px rgba(30,46,34,.16); flex-shrink:0; }
.zap-screen{ background:#ECE5DD; border-radius:28px; overflow:hidden;
  display:flex; flex-direction:column; height:520px; }
.zap-top{ background:#075E54; color:#fff; display:flex; align-items:center; gap:10px; padding:12px 14px; }
.zap-avatar{ width:34px; height:34px; border-radius:50%; background:#25D366; color:#fff;
  display:flex; align-items:center; justify-content:center; font-weight:700; font-size:13px; flex-shrink:0; }
.zap-body{ flex:1; overflow-y:auto; padding:16px 12px; display:flex; flex-direction:column; gap:8px; }
.zap-bubble{ max-width:82%; padding:8px 11px; border-radius:10px; font-size:14px; line-height:1.45;
  box-shadow:0 1px 1px rgba(0,0,0,.08); position:relative; }
.zap-in{ align-self:flex-start; background:#fff; color:#2B2A27; border-top-left-radius:2px; }
.zap-out{ align-self:flex-end; background:#DCF8C6; color:#1f2c1f; border-top-right-radius:2px; }
.zap-time{ display:block; font-size:10px; color:#7A756C; margin-top:3px; text-align:right; }
```

> Os "passos" do `#como-funciona` reusam `.diff-num` (já existe) — não precisa de CSS novo para eles.

---

## Tarefa 11 — QA final

- [ ] **Âncoras:** todos os `#como-funciona`, `#produtos`, `#sobre-nos`, `#bancos`, `#depoimentos`, `#sobre`, `#instagram`, `#faq`, `#contato` rolam corretamente (links do footer + navbar existentes).
- [ ] **Acordeões:** convênios (`#produtos`) **e** FAQ funcionam (abre/fecha, chevron gira). Conferir que o FAQ não quebra o `toggleAcord` dos convênios.
- [ ] **Responsivo:** testar 320 / 375 / 768 / 1024 / 1280. Sem **scroll horizontal**. Mockups de celular: 1 visível + swipe no mobile; centralizados no desktop.
- [ ] **Acessibilidade (público idoso):** corpo ≥16px e `line-height` ≥1.6 nas seções novas; contraste ok; alvos de toque ≥48px; `alt` em toda imagem; telefones como `tel:`.
- [ ] **Tokens:** zero uso de `oliva`/`coral`; só tokens do `tailwind.config`. Cores conforme `ui-rules.md`.
- [ ] **CTAs:** principais em `laranja-acao` (hover `laranja-acao-d`); flutuante WhatsApp intacto.
- [ ] **trackWA:** novos CTAs com labels (`wa_bancos`, `wa_contato`, etc.); manter os existentes.
- [ ] **Intacto:** navbar, hero, coverflow, CONVS e botão flutuante inalterados.

---

## Pendências para o cliente

> Estas pendências não bloquearam a implementação — o site está no ar sem elas. Cada item abaixo é independente e pode ser feito a qualquer momento.

| # | Pendência | Onde aparece no site | Como resolver |
|---|-----------|----------------------|---------------|
| 1 | **Conteúdo dos 4 passos** do "Como funciona" | `#como-funciona` (linha ~610 do HTML) | Editar as 4 `<h3>` e `<p>` com placeholder `<!-- Passo N -->` |
| 2 | **Prints reais dos depoimentos** (WhatsApp) com dados sensíveis borrados | `#depoimentos` — hoje usa balões de exemplo | Criar `assets/depoimentos/dep-1.png` etc. e trocar os balões por `<img src="assets/depoimentos/dep-N.png">` dentro de `.zap-screen` |
| 3 | **Validar as 10 respostas do FAQ** | `#faq` — marcadas com `[confirmar]` no spec, já implementadas como rascunho | Revisar texto e confirmar (ou editar) cada resposta diretamente no HTML |
| 4 | **`privacidade.html`** (LGPD/cookies) | Link no footer (aponta para `privacidade.html`) | Criar o arquivo — plano aprovado pelo cliente em 2026-06-03 |
| 5 | **Fotos reais das filiais** | `#filiais` — hoje gradient placeholder `from-cafe to-cafe-claro` | Adicionar `<img>` com foto da fachada dentro do `<div class="h-[180px]...">` de cada filial |
| 6 | **Subtítulo do "Como funciona"** | `#como-funciona` — `<!-- Subtítulo a definir pelo cliente -->` | Editar o `<p>` do cabeçalho da seção |
