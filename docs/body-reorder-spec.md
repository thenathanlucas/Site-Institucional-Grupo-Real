# SPEC DE EXECUÇÃO — Reordenação do corpo do site (v2)

> **Status:** ✅ **CONCLUÍDA** em 2026-06-03. Todas as tarefas aplicadas em `site_inst.html`.
> **Predecessor:** `docs/archive/body-restructure-spec-CONCLUIDO-2026-06-03.md` (reestruturação anterior — **concluída**, arquivada). Este spec parte do estado **já no ar** após aquela.
> **Escopo desta tarefa:** apenas **reordenar** seções do corpo + **remover 2 seções** + **mover Depoimentos** + limpeza decorrente (links de footer, ritmo de fundos) + **atualizar os .md de contexto**.
> **Arquivo único editado (HTML):** `site_inst.html` (raiz). **Stack:** HTML + Tailwind CDN + JS vanilla. **NÃO** usar React/build.
> **Fontes canônicas:** `docs/ui-rules.md` (design system) · `docs/brand.md` (marca/público) · `docs/pages.md` (mapa do estado atual).
> **Princípio:** nenhum conteúdo novo, nenhuma cor/fonte/componente fora do design system. Mover = recortar a `<section>` inteira e colar na nova posição.

---

## ⛔ NÃO MEXER (fora de escopo — aprovado pelo cliente)

| Bloco | Localização aproximada (HTML atual) |
|-------|-------------------------------------|
| `<head>` + tailwind.config + `<style>` | ~1–264 |
| Navbar (`<nav sticky>`) | ~271–333 |
| Hero + Coverflow (`#topo`) | ~337–530 |
| IIFE do Coverflow (JS) | ~1136+ |
| `toggleMenu()` · `trackWA()` · array `CONVS` + acordeão + `toggleAcord()` | bloco `<script>` final |
| Botão WhatsApp flutuante | ~1130–1134 |

> Os links da **navbar** (`#produtos`, `#filiais`, `#sobre`) continuam **válidos** após a reordenação — todos os destinos permanecem. Navbar **não muda**.
> O acordeão de convênios é **gerado por JS em `#acord`** — ao mover `#produtos`, mova só o HTML da `<section id="produtos">`; o JS continua achando `#acord`.

---

## 🎯 NOVA ORDEM DO CORPO (alvo)

Ordem completa definida pelo cliente: **navbar → hero → como funciona → produtos → bancos → onde estamos → quem somos → faq → instagram**, com **Depoimentos logo após "Onde estamos"**.

| # | Seção | ID | Ação | Fundo alvo |
|---|-------|----|------|-----------|
| — | Navbar | — | **intocável** | areia-nav |
| — | Hero + Coverflow | `#topo` | **intocável** | laranja |
| 1 | Como funciona | `#como-funciona` | **manter** (já existe, scaffold) | areia |
| 2 | Escolha seu convênio | `#produtos` | **manter** | branco |
| 3 | 30+ Bancos parceiros | `#bancos` | **mover** p/ cá + **mudar fundo p/ areia** (ver Tarefa 5) | **areia** ⚠️ |
| 4 | Onde estamos (Filiais) | `#filiais` | **mover** p/ cá | branco |
| 5 | Depoimentos | `#depoimentos` | **mover** p/ logo após Filiais | areia |
| 6 | Quem somos | `#sobre` | **manter** | café (escuro) |
| 7 | FAQ | `#faq` | **mover** p/ cá (antes do Instagram) | areia |
| 8 | Instagram | `#instagram` | **manter** (vai p/ o fim do corpo) | branco |
| — | Footer | — | **limpar links** (Tarefa 6) | café |
| — | WhatsApp flutuante | — | **intocável** | — |

### ❌ Remoções (confirmadas pelo cliente)
- **Diferenciais** (`<section id="sobre-nos">`, ~660–699) → **remover por completo.**
- **Contato / CTA final** (`<section id="contato">`, ~991–1048) → **remover por completo.**

### Ritmo de fundos (após mudanças)
`como-funciona` areia → `produtos` branco → `bancos` **areia** → `filiais` branco → `depoimentos` areia → `sobre` café → `faq` areia → `instagram` branco → footer café.
✅ Alternância limpa, sem dois claros idênticos colados. **A única mudança de cor é Bancos branco→areia** (Tarefa 5).

---

## ✅ FILA DE EXECUÇÃO (checklist na ordem)

- [ ] **Tarefa 1** — Remover `#sobre-nos` (Diferenciais) e `#contato` (CTA final)
- [ ] **Tarefa 2** — Reordenar as seções restantes para a nova ordem
- [ ] **Tarefa 3** — Posicionar Depoimentos logo após Filiais
- [ ] **Tarefa 4** — Migrar telefones `tel:` (de `#contato` removido) para `#filiais`
- [ ] **Tarefa 5** — Bancos: trocar fundo branco→areia (ritmo) e remover `border-t/b`
- [ ] **Tarefa 6** — Footer: remover/realocar links de `#sobre-nos` e `#contato`
- [ ] **Tarefa 7** — Atualizar `docs/pages.md` (regenerar mapa)
- [ ] **Tarefa 8** — Atualizar `docs/ui-rules.md` (§8.D Contato removido)
- [ ] **Tarefa 9** — QA final

---

## Tarefa 1 — Remover Diferenciais e Contato

1. **Diferenciais:** apagar o comentário `<!-- DIFERENCIAIS -->` + a `<section ... id="sobre-nos">…</section>` inteira (~660–699).
2. **Contato:** apagar o comentário `<!-- CONTATO -->` + a `<section ... id="contato">…</section>` inteira (~991–1048).
3. **Antes de apagar o Contato**, copiar para a Tarefa 4 os dois links `tel:` que existem só ali:
   - Matriz/Realengo → `tel:+5521964781371` (exibe `(21) 96478-1371`)
   - Filial/Bangu → `tel:+5521988883917` (exibe `(21) 98888-3917`)

> **Consequência aceita pelo cliente:** o site perde o **CTA final de fechamento** ("Pronto para conversar com um especialista?") e o bloco de cartões de contato escuro. Os caminhos de contato remanescentes são: botão **WhatsApp flutuante** (global), CTAs de WhatsApp em **Bancos** e nos **cards de convênio**, telefones/Maps em **Filiais** (ver Tarefa 4) e a coluna **Contato do footer**. Se no futuro o cliente quiser reintroduzir um fechamento, recuperar do arquivo `docs/archive/body-restructure-spec-CONCLUIDO-2026-06-03.md` (Tarefa 8).

---

## Tarefa 2 — Reordenar as seções restantes

Recortar e recolar `<section>` inteiras (com o comentário-cabeçalho `<!-- … -->` de cada uma) para atingir esta sequência exata **entre o fim do Hero (`</section>` do `#topo`) e o início do Footer**:

```
#como-funciona  (areia)
#produtos       (branco)
#bancos         (areia — ver Tarefa 5)
#filiais        (branco)
#depoimentos    (areia — ver Tarefa 3)
#sobre          (café)
#faq            (areia)
#instagram      (branco)
```

> Mover blocos inteiros; **não** reescrever o conteúdo interno (exceto os ajustes pontuais das Tarefas 4 e 5). Conferir que cada `<section>` abre e fecha corretamente após o recorte (contagem balanceada — ver QA).

---

## Tarefa 3 — Depoimentos após Filiais

A `<section id="depoimentos">` (~722–788) vai **imediatamente após** a `<section id="filiais">` e **antes** de `#sobre`. Não alterar o conteúdo interno (3 mockups de celular continuam como estão — balões reconstruídos; trocar por prints reais é pendência separada, ver "Pendências").

---

## Tarefa 4 — Migrar telefones `tel:` para `#filiais`

Hoje, em `#filiais`, os telefones são **texto puro** dentro de `<span>` (não clicáveis). Como `#contato` (que tinha os `tel:`) será removido, tornar os telefones de `#filiais` **clicáveis** para preservar acessibilidade do público idoso (que prefere ligar).

No card **Realengo** (~561–564): trocar o `<span>(21) 96478-1371</span>` por:
```html
<a href="tel:+5521964781371" class="hover:text-laranja-acao transition-colors">(21) 96478-1371</a>
```
No card **Bangu** (~591–594): trocar o `<span>(21) 98888-3917</span>` por:
```html
<a href="tel:+5521988883917" class="hover:text-laranja-acao transition-colors">(21) 98888-3917</a>
```
Manter a estrutura do `flex`/ícone ao redor; só o nó do número vira `<a tel:>`. Sem sublinhado herdado quebrar o layout (`no-underline` se necessário).

---

## Tarefa 5 — Bancos: fundo areia + sem bordas de faixa

Para evitar **três fundos brancos colados** (Produtos → Bancos → Filiais), mudar `#bancos` de branco para **areia**.

Na `<section ... id="bancos">` (~704):
- Trocar `bg-white` → `bg-areia`.
- Remover `border-t border-b border-areia-borda` (a borda de faixa fazia sentido sobre branco; sobre areia entre dois brancos ela é redundante). Manter o resto das classes (paddings) iguais.

> Esta é a **única** alteração de cor do spec. Se o cliente exigir reordenação 100% pura (sem tocar cor), pular esta tarefa e aceitar 3 seções claras seguidas — mas o recomendado é aplicar (mantém a regra de ritmo do `ui-rules.md` §5).

---

## Tarefa 6 — Footer: limpar links órfãos

No footer (~1099–1116), dois links passam a apontar para seções inexistentes:

1. **Coluna "Empresa"** (~1102): **remover** a `<li>` do link `#sobre-nos` ("Diferenciais"). Manter Como funciona, Sobre nós, Depoimentos, Dúvidas (FAQ).
2. **Coluna "Contato"** (~1111): o link `#contato` ("Falar com consultor") fica órfão. **Reapontar** para o WhatsApp (mantém a função do label):
   ```html
   <li><a href="https://wa.me/5521986862308?text=Olá!+Gostaria+de+falar+com+um+consultor+do+Grupo+Real."
          target="_blank" rel="noopener" onclick="trackWA('wa_footer_consultor')"
          class="text-[13px] text-areia/35 no-underline transition-colors duration-200 hover:text-laranja-acao">Falar com consultor</a></li>
   ```
   (Alternativa: simplesmente remover a `<li>`. Preferir reapontar — não custa e preserva o caminho de conversão.)
3. **Não mexer** no bloco legal (CNPJ, Resolução, copyright, link `privacidade.html`).

---

## Tarefa 7 — Atualizar `docs/pages.md`

Regenerar o mapa para refletir a nova ordem. Especificamente:
- **Remover** as seções "Diferenciais" e "Contato" do documento.
- **Reordenar** as entradas: Como funciona → Produtos → Bancos → Filiais → Depoimentos → Quem somos → FAQ → Instagram.
- Atualizar a tabela **"Resumo de Seções (ordem real)"** com a nova ordem, IDs e fundos (Bancos = areia).
- Atualizar a nota de ritmo de fundos.
- Manter o cabeçalho com data de regeneração e um aviso de que reflete o estado pós-reordenação (apontar este spec).

---

## Tarefa 8 — Atualizar `docs/ui-rules.md`

- **§8.D "CTA final / Contato":** descreve a seção `#contato` que foi **removida**. Marcar como **descontinuada** (ou remover a subseção), com nota curta: *"Bloco de CTA final removido na reordenação de 2026-06-03; energia de fechamento delegada ao WhatsApp flutuante + CTAs de Bancos/convênios. Histórico no archive."*
- **§7.B "Bloco de Segurança":** continua válido (refere `#filiais`); apenas confirmar que segue coerente — agora `#filiais` também concentra os telefones `tel:` (Tarefa 4).
- Não há componente "Diferenciais" nomeado para remover; nenhum outro ajuste necessário.
- `docs/brand.md`: **sem alteração** (não descreve ordem de seções).

---

## Tarefa 9 — QA final

- [ ] **Contagem de `<section>`:** 8 no corpo (`#como-funciona`, `#produtos`, `#bancos`, `#filiais`, `#depoimentos`, `#sobre`, `#faq`, `#instagram`) + hero. Zero ocorrência de `id="sobre-nos"` e `id="contato"` no HTML.
- [ ] **Ordem visual** confere com a tabela da "Nova ordem".
- [ ] **Âncoras:** navbar (`#produtos`, `#filiais`, `#sobre`) e footer rolam para seções existentes. Nenhum link aponta para `#sobre-nos` ou `#contato`.
- [ ] **Acordeões:** convênios (`#produtos`) e FAQ (`#faq`) abrem/fecham (mesmo `toggleAcord`).
- [ ] **Ritmo de fundos:** sem dois claros idênticos colados (Bancos = areia).
- [ ] **Telefones:** ambos `tel:` clicáveis em `#filiais`.
- [ ] **Responsivo:** 320/375/768/1024/1280, sem scroll horizontal; mockups de depoimento com swipe no mobile.
- [ ] **Intacto:** navbar, hero, coverflow, `CONVS`, botão flutuante, JS inalterados.
- [ ] **Tokens:** zero `oliva`/`coral`; só tokens do `tailwind.config`.
- [ ] **MDs:** `pages.md` e `ui-rules.md` atualizados; `body-restructure-spec.md` original já arquivado.

---

## Pendências herdadas (não bloqueiam — continuam abertas do spec anterior)

| # | Pendência | Onde | Como resolver |
|---|-----------|------|---------------|
| 1 | Conteúdo dos 4 passos do "Como funciona" | `#como-funciona` | Preencher as 4 `<h3>`/`<p>` com placeholder |
| 2 | Prints reais dos depoimentos (dados borrados) | `#depoimentos` | Criar `assets/depoimentos/dep-N.png` e trocar balões por `<img>` |
| 3 | Validar as 10 respostas do FAQ | `#faq` | Revisar texto marcado `[confirmar]` |
| 4 | Fotos reais das filiais | `#filiais` | Trocar gradient placeholder por `<img>` da fachada |
| 5 | Subtítulo do "Como funciona" | `#como-funciona` | Editar o `<p>` do cabeçalho |

> `privacidade.html` já existe (criado em 2026-06-03) e o footer já o referencia — pendência anterior **resolvida**.
