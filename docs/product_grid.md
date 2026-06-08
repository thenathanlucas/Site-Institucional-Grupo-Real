# Contexto do Projeto: Redesign da Seção de Produtos — Grupo Real

Você é um Engenheiro de Frontend Sênior e Especialista em UI/UX. Sua tarefa é criar/gerar o layout visual (pode ser em HTML estruturado com Tailwind CSS) para a seção de **Produtos/Convênios** do site institucional do Grupo Real, focando estritamente em uma abordagem **Mobile-First** (telas de até 375px de largura)[cite: 2, 3].

## 1. O Problema Atual
A seção atual usa um acordeão vertical tradicional que esconde os produtos dentro de gavetas rígidas[cite: 2]. Para o público-alvo (majoritariamente idosos, aposentados e pensionistas), esse padrão é cansativo, burocrático e gera atrito cognitivo[cite: 1]. Precisamos de algo visualmente atraente ("Boutique de Crédito"), limpo, espaçado e fácil de usar no celular[cite: 1, 3].

## 2. Diretrizes de Design (Design Tokens)
Você deve respeitar estritamente a paleta de cores e tipografia da marca[cite: 3]:

*   **Cores:**
    *   Fundo Principal Claro: Areia (`#F4F1EA`) ou Branco (`#FFFFFF`)[cite: 3]
    *   Texto Principal: Grafite Escuro (`#2B2A27`)[cite: 3]
    *   Destaque/CTA Principal: Laranja Ação (`#E8501A`, hover: `#C2410C`)[cite: 3]
    *   WhatsApp/Selos: Verde Confiança (`#17A24B` ou oficial `#25D366`)[cite: 3]
*   **Tipografia:**
    *   Títulos principais (H2): `Bitter` (Slab Serif robusta, passa solidez)[cite: 3]
    *   Textos de apoio e Botões: `Source Sans 3` ou `Plus Jakarta Sans`[cite: 2, 3]
*   **Regra de Acessibilidade (Crucial para Idosos):**
    *   Tamanho mínimo de texto para parágrafos: `16px` (`text-base` no Tailwind)[cite: 3].
    *   Altura de linha (`line-height`) generosa: no mínimo `1.6`[cite: 3].
    *   Alvos de toque (botões e cards clicáveis) grandes: mínimo de `48px` de altura[cite: 3].

## 3. O Conteúdo (Dados da Seção)
A estrutura deve comportar os seguintes convênios e seus respectivos subprodutos[cite: 2]:
1.  **INSS (5 produtos):** Empréstimo Consignado, Portabilidade, Refinanciamento, Cartão Consignado, Cartão Benefício[cite: 2].
2.  **CLT (2 produtos):** Empréstimo Consignado CLT, Portabilidade CLT[cite: 2].
3.  **FGTS (1 produto):** Antecipação Saque-Aniversário[cite: 2].
4.  **SIAPE (5 produtos):** Empréstimo Consignado, Refinanciamento, Portabilidade, Cartão Consignado, Cartão Benefício[cite: 2].
5.  **Forças Armadas (2 produtos):** Empréstimo Consignado, Refinanciamento[cite: 2].
6.  **Governos (3 produtos):** Empréstimo Consignado, Cartão Consignado, Cartão Benefício[cite: 2].
7.  **Prefeituras (3 produtos):** Empréstimo Consignado, Cartão Consignado, Cartão Benefício[cite: 2].

---

## Sua Missão
Gere a estrutura visual (mockup em código ou representação de interface clara) para as **3 opções de layouts Mobile-First** descritas abaixo, permitindo que o cliente avalie a melhor experiência de uso:

### Opção 1: O Seletor de Perfil Humano (Foco em Acessibilidade)
*   **UX:** O idoso não escolhe por sigla técnica[cite: 1]. A seção começa com uma pergunta: *"Quem é você?"*[cite: 3]. Mostra 4 botões/cards gigantes empilhados: "Sou Aposentado/Pensionista", "Trabalho de Carteira Assinada", "Sou Servidor Público", "Sou Militar"[cite: 1]. Ao tocar em um perfil, a lista de produtos correspondente se expande organicamente logo abaixo, com cards grandes e botões destacados com o texto "Iniciar Atendimento"[cite: 3].

### Opção 2: Grid "Boutique" com Painel de Foco (Estética Premium)
*   **UX:** Apresenta os convênios organizados em um grid de 2 colunas muito limpo (cards brancos com cantos arredondados de 8px e sombras suaves sobre o fundo areia)[cite: 3]. Cada card exibe o nome do convênio, um ícone e a quantidade de produtos[cite: 2, 3]. Ao tocar em um convênio (Ex: INSS), abre-se uma folha/painel inferior (Bottom Sheet, padrão mobile nativo) contendo apenas os produtos daquela categoria, isolando as distrações[cite: 3].

### Opção 3: Hub de Abas Superiores Deslizantes (Estética Plataforma)
*   **UX:** No topo da seção, logo abaixo do H2 "Nossos Produtos", exibe uma barra horizontal de "pílulas" (chips/tabs) contendo os 7 convênios[cite: 2, 3]. Essa barra aceita rolagem lateral por arrasto (overflow-x-scroll)[cite: 3]. A primeira aba ativa fica destacada em Laranja Ação[cite: 3]. Conforme o usuário toca ou desliza as abas, a lista vertical abaixo atualiza instantaneamente com os cards dos produtos da categoria selecionada[cite: 3].

---
Por favor, gere os exemplos focando na fidelidade visual mobile.