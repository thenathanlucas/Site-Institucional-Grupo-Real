---
name: sync-docs
description: Sincroniza os docs .md do projeto com o estado real de site_inst.html após uma alteração aprovada e implementada no código. Usar SEMPRE imediatamente após aplicar qualquer mudança em site_inst.html, privacidade.html ou assets/ — sem esperar o usuário pedir.
---

# Sincronizar documentação com o código

O `docs/pages.md` é o **mapa canônico do que está no ar** e as specs em `docs/` registram decisões e status. Toda mudança no código que não for refletida nos docs vira documentação mentirosa — pior que não ter doc.

## Quando usar
Imediatamente após implementar uma alteração **já aprovada pelo Nathan** em `site_inst.html`, `privacidade.html` ou `assets/`.

## Passo a passo

1. **Levante o que mudou:** use o diff da edição recém-feita (ou `git diff` se houver dúvida do escopo acumulado).

2. **Mapeie mudança → doc** com esta tabela:

| Mudou no código | Atualizar |
|---|---|
| Seção do corpo (ordem, remoção, adição, fundo, conteúdo, IDs) | `docs/pages.md`: seção correspondente + tabela "Resumo de Seções" + linha "Ritmo de fundos" |
| `<head>` (meta/SEO, JSON-LD, fontes, analytics, embeds) | `docs/pages.md` §Meta/Head · status em `docs/seo-tracking-spec.md` |
| `tailwind.config` inline (cores, sombras, radius, fontes) | `docs/pages.md` §Design tokens · `docs/ui-rules.md` §1–§4 |
| Componentes/visual (CTAs, cards, hierarquia de cor, a11y) | `docs/ui-rules.md` §7–§8 |
| Seção coberta por spec própria (`comofunciona-spec.md`, `nossas-solucoes-spec.md`, `hero-navbar-spec.md`…) | Status, checkboxes e detalhes da spec. Se uma abordagem foi **substituída**: marcar a spec antiga com `⚠️ SUPERSEDED` apontando a nova |
| Tracking (`trackWA` labels), número WhatsApp, telefones, endereços, horários | `docs/pages.md` §Notas Técnicas e §Filiais |
| Marca, público, tom de voz, posicionamento | `docs/brand.md` |
| Stack, build, deploy, arquivos novos na raiz | `docs/hospedagem.md` |

3. **Regras de edição dos docs:**
   - Edições **cirúrgicas** (tool Edit) — nunca reescrever o arquivo inteiro.
   - Datas sempre **absolutas** (ex.: 2026-06-10). Atualizar a linha "Regenerado em …" do `pages.md` quando ele for tocado.
   - Spec concluída → `✅` + data de verificação. Spec substituída → `⚠️ SUPERSEDED` + ponteiro (nunca apagar; histórico vale ouro).
   - Pendências: marcar as resolvidas como `✅` e registrar as novas que a mudança criou.
   - O que eu **não conferi no navegador**, anotar como "conferido no código; teste visual recomendado".

4. **Reporte ao Nathan**, no fim do turno, a lista exata de arquivo → o que mudou em cada um.

## Autorização
A sincronização que **apenas reflete** uma mudança de código já aprovada está **pré-aprovada** (combinado em 2026-06-10) — aplicar direto e reportar. Qualquer edição de doc **além** disso (reorganizar spec, mudar decisão, apagar conteúdo) volta para o gate de aprovação do `CLAUDE.md`.
