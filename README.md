# CIAShop 🎮

> Uma loja de títulos CIA para Nintendo 3DS, inspirada na HShop — feita com HTML, CSS e JavaScript puro.

![CIAShop Preview](https://img.shields.io/badge/Nintendo-3DS-red?style=flat-square&logo=nintendo)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## ✨ Funcionalidades

- 🗂️ **Catálogo de CIAs** com 16 títulos (jogos + homebrew)
- 🔍 **Busca em tempo real** por nome do título
- 🏷️ **Filtro por categoria**: Ação, RPG, Plataforma, Puzzle, Esportes, Aventura, Homebrew
- 🔃 **Ordenação** por nome, tamanho, avaliação ou mais recente
- 📋 **Painel de detalhes** com Title ID, região, versão e descrição
- ⬇️ **Simulação de download** com barra de progresso animada
- 🕐 **Relógio ao vivo** e indicador de status online
- 📱 **Responsivo** — funciona em mobile e desktop

## 🗂️ Estrutura do Projeto

```
ciashop/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos completos
├── js/
│   ├── data.js         # Banco de dados dos títulos CIA
│   └── app.js          # Lógica da aplicação
└── README.md
```

## 🚀 Como Usar

### Opção 1 — Abrir direto no navegador

Basta clonar o repositório e abrir o `index.html` no seu navegador:

```bash
git clone https://github.com/SEU_USUARIO/ciashop.git
cd ciashop
# Abra index.html no navegador
```

### Opção 2 — Servidor local (recomendado)

```bash
# Com Python
python -m http.server 8080

# Com Node.js (npx)
npx serve .

# Com VS Code — instale a extensão Live Server e clique em "Go Live"
```

Acesse: `http://localhost:8080`

### Opção 3 — Deploy no GitHub Pages

1. Faça fork ou envie o projeto para um repositório GitHub
2. Vá em **Settings → Pages**
3. Em **Source**, selecione `main` branch e pasta `/root`
4. Salve — o site ficará disponível em `https://SEU_USUARIO.github.io/ciashop`

## 📦 Adicionar Novos Títulos

Edite o arquivo `js/data.js` e adicione um novo objeto ao array `GAMES`:

```js
{
  id: 17,                          // ID único (incrementar)
  title: "Nome do Jogo",
  icon: "🎮",                      // Emoji como capa
  cat: "action",                   // action|rpg|platform|puzzle|sports|adventure|homebrew
  region: "USA",                   // USA | EUR | JPN | ALL
  size: "1.2 GB",
  rating: 4,                       // 1 a 5
  badge: "new",                    // "new" | "hot" | "cia" | ""
  color: "#1a1a2a",                // Cor de fundo da capa
  desc: "Descrição curta do jogo.",
  year: 2023,
  titleId: "00040000XXXXXXXX",
  version: "1.0"
}
```

## 🎨 Tecnologias

| Tecnologia | Uso |
|-----------|-----|
| HTML5 | Estrutura semântica |
| CSS3 | Animações, Grid, variáveis CSS |
| JavaScript ES6+ | Lógica, DOM, eventos |
| Google Fonts | Press Start 2P · VT323 |

## ⚠️ Aviso Legal

Este projeto é **educacional e de entretenimento**. Não hospeda, distribui nem fornece links para arquivos CIA ou ROMs protegidos por direitos autorais. Todos os títulos listados são fictícios para fins de demonstração da interface.

O uso de CFW (Custom Firmware) em consoles Nintendo pode violar os Termos de Serviço da Nintendo. Use por sua conta e risco.

## 📄 Licença

MIT License — veja [LICENSE](LICENSE) para detalhes.

---

Feito com ❤️ por fãs de 3DS
