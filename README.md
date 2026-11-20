# Braga Resiliente

Aplicação web instalável (PWA) de autoproteção para a população de Braga: previsão e avisos reais (IPMA, Open-Meteo), mochila de 72 h, plano familiar, guias e contactos de emergência. Sem servidor e sem recolha de dados pessoais (o plano e a mochila ficam só no telemóvel).

## Publicar (GitHub Pages)
1. Criar um repositório público (ex.: `braga-resiliente`) e carregar TODOS os ficheiros desta pasta na raiz.
2. Settings → Pages → Deploy from a branch → `main` / root.
3. O link será `https://<utilizador>.github.io/braga-resiliente/`. Enviar por WhatsApp.

## Instalar no telemóvel
- Android (Chrome): abrir o link → "Instalar aplicação".
- iPhone: abrir no Safari → Partilhar → "Adicionar ao ecrã principal" (o browser interno do WhatsApp não instala).

## O que editar
- `index.html`, bloco `CFG` no início do script: número verde de emergência municipal (`TEL_MUNICIPAL`), contactos locais opcionais (`LOCAL`: bombeiros, psp, gnr, smpc), telefones do hospital e da Cruz Vermelha, coordenadas e código IPMA (`BRG`).
- `avisos.json`: avisos do Município (nivel: info | amarelo | laranja | vermelho; `validoAte` opcional, ISO 8601). Gravar o ficheiro no GitHub publica o aviso.
- Guias e lista da mochila: constantes `GUIDES` e `KIT` em `index.html` (validar com SMPC/ANEPC).

## Fontes
IPMA (avisos, dados abertos) e Open-Meteo (previsão). Não usa dados internos do CCOM.
