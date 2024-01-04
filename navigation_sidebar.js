var texts = [
  "All Content:",
  "ㅤ",
  "┏ Exploration:",
  "┃ ┃",
  "┃ ┣ Biomes:",
  "┃ ┃┗ Cork Forest",
  "┃ ┃",
  "┃ ┗ Structures:",
  "┃ㅤ ┗ Wine Trader House",
  "┃",
  "┣ Automation:",
  "┃ ┃",
  "┃ ┣ Ore Extractor",
  "┃ ┣ Gas Extractor",
  "┃ ┣ Fluid Extractor",
  "┃ ┗ Distillation Tower",
  "┃ㅤ ┣ How to Setup",
  "┃ㅤ ┗ Temperatures",
  "┃",
  "┣ Resources:",
  "┃ ┃",
  "┃ ┣ Ore Deposits",
  "┃ ┣ Sulfur Gas Deposits",
  "┃ ┗ Oil & Natural Gas Deposits",
  "┃",
  "┣ Food:",
  "┃ ┃",
  "┃ ┗ Winery:",
  "┃ㅤ ┣ Growing Grapes",
  "┃ㅤ ┣ Treader & Presser",
  "┃ㅤ ┣ Fermenting",
  "┃ㅤ ┗ Selling Wines",
  "┃",
  "┗ Wizardry:",
  "ㅤ ┃",
  "ㅤ ┣ Knowledge Book:",
  "ㅤ ┃   ┣ Knowledge Bookshelf",
  "ㅤ ┃   ┣ Knowledge Book",
  "ㅤ ┃   ┗ Knowledge Sacrifice",
  "ㅤ ┃",
  "ㅤ ┣ Souls:",
  "ㅤ ┃   ┣ Getting Souls",
  "ㅤ ┃   ┗ Selling Souls",
  "ㅤ ┃",
  "ㅤ ┣ Spawner Upgrades:",
  "ㅤ ┃   ┣ Getting a Spawner",
  "ㅤ ┃   ┣ Spawner Core",
  "ㅤ ┃   ┗ Spawner Upgrades",
  "ㅤ ┃",
  "ㅤ ┗ Pentagram:",
  "ㅤ ㅤ ┗ WIP",
];
var nav = document.getElementById("nav");

texts.forEach(function (text) {
  nav.innerHTML += "<p>" + text + "</p>";
});