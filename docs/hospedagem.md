# Hospedagem & Deploy — Grupo Real

> Documento de referência para publicar o site institucional (`site_inst.html`) no **Plesk**.
> Criado em 2026-06-08. Site **ainda não publicado** — este doc é o plano de subida.

---

## 1. A plataforma: o que é o Plesk

**Plesk** é um painel de controle de hospedagem (concorrente do cPanel) que roda em cima de um servidor Linux (Apache + nginx) ou Windows (IIS). Ele dá uma interface web pra gerenciar:

- **Domínios e subdomínios** — apontar `gruporealintermediacao.com.br` para a pasta do site.
- **Document root** — a pasta pública servida na web. No Plesk/Linux costuma ser `httpdocs/` (ou `httpsdocs/`); no Windows/IIS, também `httpdocs`.
- **Arquivos** — File Manager (upload pelo navegador) ou **FTP/SFTP**.
- **SSL/HTTPS** — emissão grátis de certificado **Let's Encrypt** em poucos cliques.
- **E-mail, DNS, banco de dados, PHP** — nada disso é necessário aqui (o site é estático), exceto DNS/SSL.

> **Importante:** este site é **100% estático** (HTML + CSS + JS no navegador). Não precisa de PHP, Node nem banco de dados no servidor. Qualquer plano Plesk básico hospeda sem problema.

---

## 2. Dados do ambiente (preencher quando contratar)

| Item | Valor |
|------|-------|
| Domínio final | `???` (provável: `gruporealintermediacao.com.br`) |
| Provedor/Plesk URL | `???` (ex.: `https://meuservidor:8443`) |
| Sistema do servidor | `???` (Linux + Apache/nginx **ou** Windows/IIS) |
| Document root | `httpdocs/` (confirmar no painel) |
| Acesso de arquivos | FTP/SFTP host, usuário, porta `???` |
| Certificado SSL | Let's Encrypt (a emitir) |

---

## 3. Passo a passo de publicação

1. **Renomear o arquivo principal:** `site_inst.html` → **`index.html`**. O servidor serve `index.html` automaticamente na raiz do domínio. Sem isso, o usuário teria que digitar `/site_inst.html` na URL. *(Manter `privacidade.html` como está.)*
2. **Subir os arquivos** para `httpdocs/`, preservando a estrutura de pastas:
   - `index.html`, `privacidade.html`
   - `assets/` inteira (logo, imagens, `og/`)
3. **Emitir SSL** (Plesk → SSL/TLS Certificates → Let's Encrypt). Marcar "redirect HTTP → HTTPS".
4. **Definir documento padrão** como `index.html` (geralmente automático).
5. **Testar** o domínio: hero carrega, coverflow desliza, acordeão abre, WhatsApp flutuante aparece, links `tel:` funcionam no celular.
6. **Validar** og:image colando o link em um chat de WhatsApp e no [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) + JSON-LD no [Rich Results Test](https://search.google.com/test/rich-results).

### Caching e headers (recomendado — `.htaccess` no Apache/Plesk-Linux)
Criar `httpdocs/.htaccess` para cache de assets e segurança básica:
```apache
# Cache de assets estáticos (imagens, fontes)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png  "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css   "access plus 1 month"
</IfModule>
# Compressão
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml
</IfModule>
# Segurança básica
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```
> Se o Plesk for **Windows/IIS**, o equivalente vai em `web.config` — pedir ajuda na hora.

---

## 4. Avaliação da stack atual

**Veredito geral:** a stack está **adequada** para um site institucional. HTML estático + JS vanilla + Tailwind é exatamente o perfil certo: rápido, sem build complexo, fácil de hospedar em qualquer Plesk, e ótimo para SEO (o conteúdo já vem pronto no HTML). Não há over-engineering — não precisa de React, Next, banco nem servidor de aplicação. **Mantém-se.**

| Camada | Hoje | Avaliação |
|--------|------|-----------|
| Marcação | HTML único estático | ✅ Ideal para institucional |
| Estilo | **Tailwind via CDN** (`cdn.tailwindcss.com`) | ⚠️ Ver melhoria #1 (CDN não é pra produção) |
| JS | Vanilla (coverflow, acordeão, hambúrguer) | ✅ Leve, sem dependências |
| Fontes | Google Fonts (CDN) | 🟡 OK; self-host melhora privacidade/velocidade |
| Analytics | GA4 + Clarity | ✅ Adequado |
| Hospedagem | Plesk estático | ✅ Suficiente |

---

## 5. Melhorias recomendadas (por prioridade)

### 🔴 Alta — fazer antes de divulgar o site

1. **Trocar o Tailwind CDN por CSS compilado.** O `cdn.tailwindcss.com` é o **Tailwind Play CDN**, que a própria Tailwind avisa **não usar em produção**: ele baixa um compilador JS de ~centenas de KB e gera o CSS no navegador do visitante, causando *flash* de página sem estilo (FOUC) e atraso na renderização — ruim para o público idoso e para o SEO/Core Web Vitals.
   - **Solução:** rodar o **Tailwind CLI uma vez** para gerar um `assets/style.css` minificado (só as classes usadas, ~10–20KB) e trocar o `<script src="cdn.tailwindcss.com">` por `<link rel="stylesheet" href="assets/style.css">`. O bloco `tailwind.config` inline vira um `tailwind.config.js`. Continua sendo deploy de arquivos estáticos — só adiciona 1 comando de build local.

2. **Otimizar as imagens.** `money-bundle.png` está com **1.8MB** (mais pesado que o resto do site inteiro). `notas-leque.png` 248KB, `carteira-trabalho.png` 188KB.
   - **Solução:** recomprimir e converter para **WebP** (queda típica de 70–90% sem perda visível). Alvo: cada imagem < 200KB. Isso melhora muito o tempo de carregamento no celular (público acessa massivamente via mobile, ver `ui-rules.md` §6).

3. **Renomear `site_inst.html` → `index.html`** (ver §3, passo 1).

### 🟡 Média — qualidade e conformidade

4. **Self-hospedar a foto do "Quem somos".** Hoje ela é *hot-link* do Unsplash (`images.unsplash.com/photo-1521791...`, linha ~804): depende de servidor de terceiros, pode sair do ar e não é imagem própria da empresa. Idealmente trocar por **foto real da equipe/loja** e servir de `assets/`.
5. **Self-hospedar as fontes** (Bitter, Source Sans 3, Plus Jakarta Sans) em vez de Google Fonts CDN. Para uma marca financeira no Brasil, evita enviar o IP do visitante a um terceiro (boa prática **LGPD**) e remove uma dependência externa de carregamento.
6. **`robots.txt` + `sitemap.xml`** na raiz (`httpdocs/`) — ajuda o Google a indexar. Simples para site de 2 páginas.
7. **Favicon `.ico`** além do SVG atual, para compatibilidade com navegadores/abas antigas.

### 🟢 Baixa — refinamento

8. **Headers de segurança** via `.htaccess` (ver §3) — `X-Content-Type-Options`, `Referrer-Policy`, e eventualmente um CSP enxuto.
9. **Minificar `index.html`** no deploy (opcional; ganho pequeno num arquivo único).

---

## 6. Resumo de 1 linha

Stack certa para o caso; **antes de divulgar**, compilar o Tailwind (sair do CDN), comprimir as imagens e renomear para `index.html`. O resto são refinamentos.
