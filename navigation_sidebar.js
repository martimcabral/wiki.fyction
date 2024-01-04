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
  "┃",
  "┣ Resources:",
  "┃ ┃",
  "┃ ┣ Ore Deposits",
  "┃ ┣ Sulfur Gas Deposits",
  "┃ ┗ Oil & Natural Gas Deposits",
  "┃",
  "┗ Wizardry:",
  "ㅤ ┃",
  "ㅤ ┣ Knowledge Book",
  "ㅤ ┣ Spawner Upgrades",
  "ㅤ ┗ Pentagram",
];
var nav = document.getElementById("nav");

texts.forEach(function (text) {
  nav.innerHTML += "<p>" + text + "</p>";
});