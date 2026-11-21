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
- `ulpc.json`: Unidades Locais de Proteção Civil por freguesia (freguesia, nome, contacto, email, responsavel, morada, horario). Só aparece na app quando tem pelo menos uma entrada. Usar apenas contactos institucionais: o ficheiro é público.
- `bombeiros.json`: os dois corpos de bombeiros (nome, contacto, morada, lat/lon). Com coordenadas nos dois, a app oferece "Qual é o mais próximo de mim?" (localização só no telemóvel). Em `freguesias` pode indicar, por freguesia, o corpo prioritário (`"Sobreposta":"voluntarios"`). Só aparece com pelo menos um contacto preenchido.
- `avisos.json`: avisos do Município (nivel: info | amarelo | laranja | vermelho; `validoAte` opcional, ISO 8601). Gravar o ficheiro no GitHub publica o aviso.
- Guias e lista da mochila: constantes `GUIDES` e `KIT` em `index.html` (validar com SMPC/ANEPC).

## Fontes
IPMA (avisos, dados abertos) e Open-Meteo (previsão). Não usa dados internos do CCOM.

## Novidades (kits, plano, guias e idiomas)

- **Kits** de emergência: mochila, casa, carro e animais, com validades (aviso no Início quando faltam 30 dias ou menos) e lembrete de revisão de 6 em 6 meses.
- **Plano de Emergência Familiar** completo: pessoas e notas, contacto fora da região, 3 pontos de encontro (com localização opcional guardada só no telemóvel), dados da casa, passos de evacuação e **cartão de emergência** para imprimir ou guardar em PDF.
- **Guias** com antes, durante e depois (sismo, cheias, incêndio rural, calor, frio, tempestade, apagão, gases tóxicos, falta de água, deslizamentos) e secção **Riscos em Braga**.
- **Idiomas**: português, inglês, espanhol, francês, hindi e chinês (simplificado). Os textos estão em `lang-pt.js`, `lang-en.js`, `lang-es.js`, `lang-fr.js`, `lang-hi.js` e `lang-zh.js` (mesmas chaves em todos). Os avisos municipais e o texto dos avisos do IPMA ficam em português.
- Fontes dos conteúdos: recomendações da ANEPC/Proteção Civil. Rever com o SMPC antes de divulgar.
