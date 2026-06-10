# Regras do projeto — Site Institucional Grupo Real

## ⛔ Fluxo de aprovação obrigatório (regra do Nathan)

Antes de **alterar qualquer arquivo** deste projeto (HTML, CSS, JS, docs `.md`, assets):

1. **Apresentar primeiro** um resumo do que pretende mudar: quais arquivos, quais blocos/linhas e qual o conteúdo novo.
2. **Aguardar o check explícito** do Nathan ("pode implementar", "ok", etc.). Não presumir aprovação.
3. Só então aplicar as mudanças.

Vale também para edições pequenas. Exceções: arquivos que o próprio Nathan pedir para criar/alterar de forma explícita e direta na mesma mensagem, a manutenção da memória do agente e a sincronização de docs via `/sync-docs` (pré-aprovada, ver abaixo).

## 🔄 Pós-implementação obrigatório

Imediatamente depois de aplicar qualquer mudança aprovada em `site_inst.html`, `privacidade.html` ou `assets/`, **invocar a skill `/sync-docs`** para atualizar os `.md` afetados (`docs/pages.md`, specs, `ui-rules.md`…) e reportar o que foi sincronizado. Doc dessincronizado é considerado bug.

## 🎨 Trabalho de UI

Ao criar ou modificar qualquer interface (seções, componentes, layouts, mockups), **seguir a skill `/frontend-ui-engineering`** (padrões anti-"cara de IA", paleta da marca, a11y para público idoso, checklist de verificação).

## 💡 Ideias novas

Ideia nova ou vaga (nova seção, página, conteúdo, melhoria) → usar **`/idea-refine`** antes de gerar mockups ou tocar em código. A skill inclui a **régua de persuasão** (vender com urgência/necessidade reais, nunca fabricadas).

## Contexto rápido

- **Arquivo principal:** `site_inst.html` (HTML único + Tailwind CDN + JS vanilla, sem build). Vai virar `index.html` no deploy (Plesk).
- **Fontes canônicas:** `docs/ui-rules.md` (design system) · `docs/brand.md` (marca/público) · `docs/pages.md` (mapa do site no ar).
- **Público:** idosos/aposentados — acessibilidade alta (corpo ≥16px, alvos ≥48px, nada que pareça golpe).
- **Nunca** reescrever o arquivo inteiro: edições cirúrgicas (o JS do coverflow e o `CONVS` são frágeis).
- Nunca commitar/subir sem o Nathan pedir.
