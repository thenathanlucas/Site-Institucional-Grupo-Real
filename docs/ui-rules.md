# UI Rules & Design System — Grupo Real
> **Objetivo:** Definir as regras visuais e diretrizes do frontend para o site institucional do Grupo Real, garantindo o equilíbrio entre autoridade nacional e o acolhimento do atendimento humano.
> **Conceito:** Boutique de Crédito Segura (Estabilidade, Tradição e Proximidade).

---

## 1. Paleta de Cores (Design Tokens)

Estas cores devem ser usadas para guiar o usuário de forma intuitiva, mantendo um tom acolhedor e corporativo. O azul foi completamente descontinuado.

| Elemento | Nome | Código Hex | Uso Principal no Frontend |
| :--- | :--- | :--- | :--- |
| **Primária** | Oliva Fechado | `#1E2E22` | Cabeçalhos, títulos principais, rodapé e blocos institucionais de peso. |
| **Destaque (CTA)** | Coral Logo | `#FF5722` | Botões de conversão e ações humanas ("Falar com Consultor"). |
| **Suporte** | Âmbar / Ouro | `#D98324` | Links importantes, selos de segurança e marcadores de listas. |
| **Fundo Predominante**| Areia Conforto | `#F4F1EA` | Fundo geral da página. Evita a frieza do branco hospitalar. |
| **Texto Base** | Grafite Escuro | `#2B2A27` | Leitura de textos longos, parágrafos e legendas. |
| **Fundo Secundário** | Off-White Puro | `#FFFFFF` | Fundos de cartões (cards), tabelas de simulação ou depoimentos. |

---

## 2. Tipografia

A tipografia deve misturar a autoridade de uma marca nacional com a legibilidade necessária para o público do consignado (Aposentados e Pensionistas).

*   **Títulos principais (H1, H2):** 
    *   **Família:** `Playfair Display`, `Georgia` ou serifada equivalente do sistema.
    *   **Peso:** Bold (700)
    *   **Propósito:** Passa a ideia de tradição, cartório e solidez de banco tradicional.
*   **Subtítulos e Textos Auxiliares (H3, H4, Labels):** 
    *   **Família:** `Plus Jakarta Sans`, `Inter` ou `Helvetica`.
    *   **Peso:** Semi-Bold (600) ou Medium (500).
*   **Corpo do Texto (Parágrafos):** 
    *   **Família:** `Inter`, `Arial` ou sem-serifa equivalente de alta leitura.
    *   **Peso:** Regular (400).
    *   **Regra de Acessibilidade:** Nunca usar tamanho menor que `16px` para parágrafos. Linhas de texto com altura (`line-height`) de no mínimo `1.6`.

---

## 3. Sombras (Shadows)

As sombras devem ser suaves e orgânicas, simulando elementos reais flutuando sobre o fundo areia macio, sem o visual artificial das fintechs.

*   **Sombra de Cartão (Card Shadow):** `box-shadow: 0px 4px 20px rgba(43, 42, 39, 0.04);` (Sombra extremamente sutil utilizando o Grafite Escuro).
*   **Sombra de Botão Flutuante (WhatsApp):** `box-shadow: 0px 8px 24px rgba(255, 87, 34, 0.2);` (Sombra em tom Coral, gerando brilho sutil para atrair cliques).

---

## 4. Bordas (Radii)

Para manter a estética acolhedora de uma loja física, os cantos retos do ambiente corporativo frio devem ser ligeiramente suavizados.

*   **Borda Padrão (Componentes/Cartões):** `border-radius: 8px;`
*   **Borda de Botões principais:** `border-radius: 6px;` (Mantém um pouco da firmeza institucional).
*   **Imagens de Fachadas e Consultores:** `border-radius: 12px;` (Suaviza o rosto das pessoas).

---

## 5. Espaçamento (Spacing Scale)

Foco no "respiro" visual. Seções apertadas transmitem desespero de venda. O Grupo Real vende consultoria qualificada.

*   **Margem entre seções (Desktop):** `80px` a `120px` (Garante que a leitura não seja cansativa).
*   **Espaçamento interno de Cartões (Padding):** `24px` ou `32px`.
*   **Margem interna de inputs/formulários:** `16px` vertical e horizontal.

---

## 6. Comportamento Responsivo

*   **Mobile-First para Atendimento:** O público que busca empréstimos de outros estados acessa massivamente via celular. O botão do WhatsApp deve estar fixo na parte inferior direita da tela em telas menores que `768px`.
*   **Breakpoints:**
    *   `sm`: `640px` (Celulares na horizontal)
    *   `md`: `768px` (Tablets — transição para layout de duas colunas)
    *   `lg`: `1024px` (Desktop Padrão)
    *   `xl`: `1280px` (Monitores Grandes)

---

## 7. Componentes Padrão (UI Elements)

### A. O Botão de Conversão Humana (CTA Principal)
*   **Fundo:** `#FF5722` (Coral)
*   **Texto:** `#FFFFFF` (Branco) — Peso: Bold (700)
*   **Efeito Hover:** Escurecer para `#E64A19` com transição suave (`transition: all 0.3s ease`).
*   **Texto sugerido:** "Iniciar Atendimento com Consultor Especialista"

### B. O Bloco de Segurança (Quebra de Objeção)
*   **Fundo:** `#FFFFFF` (Off-White Puro), destacado do fundo areia.
*   **Conteúdo:** Grade de duas colunas mostrando a foto real da filial 1 e filial 2, acompanhado do endereço físico completo e telefone fixo de cada uma. Deve ficar posicionado logo abaixo da primeira dobra do site.

### C. Cartão do Consultor (Humanização)
*   **Estrutura:** Foto profissional em alta qualidade do atendente, nome completo, cargo (Ex: *Consultor Sênior de Crédito*) e o slogan: *"Especialista em encontrar o melhor cenário para você"*.
*   **Borda:** `1px solid #FAF1EA` para delimitar de forma sutil.