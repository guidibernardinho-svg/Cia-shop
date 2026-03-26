/**
 * CIAShop - Games Database
 * js/data.js
 *
 * Add or remove entries from the GAMES array to manage the store catalog.
 * Fields:
 *   id       {number}  - Unique identifier
 *   title    {string}  - Full game title
 *   icon     {string}  - Emoji used as cover art
 *   cat      {string}  - Category slug: action|rpg|platform|puzzle|sports|adventure|homebrew
 *   region   {string}  - Region code: USA | EUR | JPN | ALL
 *   size     {string}  - File size string shown in UI
 *   rating   {number}  - Star rating 1-5
 *   badge    {string}  - Optional badge: "new" | "hot" | "cia" | ""
 *   color    {string}  - CSS background color for the cover tile
 *   desc     {string}  - Short description shown in detail panel
 *   year     {number}  - Release year (used for "Mais Novos" sort)
 *   titleId  {string}  - Nintendo Title ID (or "HOMEBREW" for unofficial tools)
 *   version  {string}  - Title version string
 */

const GAMES = [
  {
    id: 1,
    title: "The Legend of Zelda: A Link Between Worlds",
    icon: "🗡️",
    cat: "rpg",
    region: "USA",
    size: "1.8 GB",
    rating: 5,
    badge: "hot",
    color: "#1a2a1a",
    desc: "Aventura épica de Link em Hyrule e Lorule com mecânica de fusão com paredes.",
    year: 2023,
    titleId: "00040000000EC300",
    version: "1.0"
  },
  {
    id: 2,
    title: "Super Mario 3D Land",
    icon: "⭐",
    cat: "platform",
    region: "EUR",
    size: "1.1 GB",
    rating: 5,
    badge: "",
    color: "#2a1a1a",
    desc: "Mario em três dimensões com poder da Super Star. Exploração em mundos vibrantes.",
    year: 2022,
    titleId: "0004000000054000",
    version: "1.0"
  },
  {
    id: 3,
    title: "Pokémon X",
    icon: "🔵",
    cat: "rpg",
    region: "USA",
    size: "1.7 GB",
    rating: 5,
    badge: "new",
    color: "#1a1a2a",
    desc: "Primeira geração 3D dos Pokémon. Captura, treina e batalha em Kalos.",
    year: 2023,
    titleId: "0004000000055D00",
    version: "1.5"
  },
  {
    id: 4,
    title: "Fire Emblem Fates: Birthright",
    icon: "🔥",
    cat: "rpg",
    region: "USA",
    size: "2.1 GB",
    rating: 4,
    badge: "",
    color: "#2a1a0a",
    desc: "Estratégia tática de alto nível. Escolha seu caminho entre dois reinos em guerra.",
    year: 2022,
    titleId: "00040000001A0500",
    version: "1.4"
  },
  {
    id: 5,
    title: "Kid Icarus: Uprising",
    icon: "🏹",
    cat: "action",
    region: "USA",
    size: "2.0 GB",
    rating: 5,
    badge: "hot",
    color: "#1a1a2a",
    desc: "Pit enfrenta Medusa em batalhas aéreas e terrestres épicas. Ação intensa 3DS.",
    year: 2022,
    titleId: "0004000000030500",
    version: "1.0"
  },
  {
    id: 6,
    title: "Mario Kart 7",
    icon: "🏎️",
    cat: "sports",
    region: "EUR",
    size: "0.9 GB",
    rating: 4,
    badge: "",
    color: "#2a1a0a",
    desc: "Corridas no ar, terra e mar com itens clássicos. Modo online até 8 jogadores.",
    year: 2021,
    titleId: "0004000000030600",
    version: "1.2"
  },
  {
    id: 7,
    title: "Animal Crossing: New Leaf",
    icon: "🌿",
    cat: "adventure",
    region: "USA",
    size: "1.5 GB",
    rating: 5,
    badge: "",
    color: "#0a1a0a",
    desc: "Seja prefeito da sua vila! Customize tudo, pesque, colete e faça amigos.",
    year: 2021,
    titleId: "0004000000086300",
    version: "1.5"
  },
  {
    id: 8,
    title: "Monster Hunter 4 Ultimate",
    icon: "⚔️",
    cat: "action",
    region: "USA",
    size: "3.2 GB",
    rating: 5,
    badge: "hot",
    color: "#1a0a0a",
    desc: "Caça monstros gigantescos com armas únicas. Modo co-op local e online.",
    year: 2023,
    titleId: "00040000000B3A00",
    version: "1.1"
  },
  {
    id: 9,
    title: "Metroid: Samus Returns",
    icon: "🚀",
    cat: "action",
    region: "EUR",
    size: "1.6 GB",
    rating: 4,
    badge: "new",
    color: "#0a1a1a",
    desc: "Remake de Metroid II. Samus em SR388 eliminando Metroids. Ação intensa.",
    year: 2023,
    titleId: "00040000001BB800",
    version: "1.0"
  },
  {
    id: 10,
    title: "Shovel Knight",
    icon: "⛏️",
    cat: "platform",
    region: "USA",
    size: "0.4 GB",
    rating: 4,
    badge: "",
    color: "#1a1a0a",
    desc: "Plataforma retrô pixel art. Shovel Knight enfrenta Order of No Quarter.",
    year: 2021,
    titleId: "00040000001AD700",
    version: "4.1"
  },
  {
    id: 11,
    title: "Professor Layton vs. Phoenix Wright",
    icon: "🎩",
    cat: "puzzle",
    region: "EUR",
    size: "1.3 GB",
    rating: 4,
    badge: "",
    color: "#0a0a1a",
    desc: "Crossover épico entre dois detetives. Puzzles e julgamentos em Labyrinthia.",
    year: 2022,
    titleId: "00040000001B3200",
    version: "1.0"
  },
  {
    id: 12,
    title: "Yo-Kai Watch",
    icon: "👻",
    cat: "rpg",
    region: "USA",
    size: "1.8 GB",
    rating: 3,
    badge: "",
    color: "#1a0a1a",
    desc: "Encontre e befriend Yo-Kai invisíveis. Sistema de batalha circular único.",
    year: 2021,
    titleId: "00040000001A3C00",
    version: "1.3"
  },
  {
    id: 13,
    title: "Bravely Default",
    icon: "📖",
    cat: "rpg",
    region: "EUR",
    size: "2.2 GB",
    rating: 5,
    badge: "",
    color: "#1a1a0a",
    desc: "RPG clássico com sistema Brave/Default inovador. História rica com twists inesperados.",
    year: 2022,
    titleId: "00040000000FC600",
    version: "1.0"
  },
  {
    id: 14,
    title: "Kirby: Planet Robobot",
    icon: "🤖",
    cat: "platform",
    region: "USA",
    size: "1.1 GB",
    rating: 4,
    badge: "",
    color: "#2a0a1a",
    desc: "Kirby pilota mechas e absorve poderes robóticos para salvar Pop Star.",
    year: 2022,
    titleId: "000400000016AD00",
    version: "1.0"
  },
  {
    id: 15,
    title: "Luma3DS (CFW)",
    icon: "⚙️",
    cat: "homebrew",
    region: "ALL",
    size: "0.1 GB",
    rating: 5,
    badge: "cia",
    color: "#0a1a0a",
    desc: "Custom Firmware essencial para 3DS. Instala CIA, remove região, patches.",
    year: 2023,
    titleId: "HOMEBREW",
    version: "12.0"
  },
  {
    id: 16,
    title: "FBI Installer",
    icon: "🔧",
    cat: "homebrew",
    region: "ALL",
    size: "0.05 GB",
    rating: 5,
    badge: "cia",
    color: "#0a1a1a",
    desc: "Gerenciador de CIA homebrew. Instala, remove e gerencia títulos diretamente.",
    year: 2023,
    titleId: "HOMEBREW",
    version: "3.0"
  }
];
