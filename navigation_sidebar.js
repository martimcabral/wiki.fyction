var texts = [
  "┃",
  "┣ Biomes:",
  "┃ ┗ Cork Forest",
  "┃",
  "┣ Structures:",
  "┃ ┗ Wine Trader House",
  "┃",
  "┣ Automation:",
  "┃ ┣ Ore Extractor",
  "┃ ┣ Gas Extractor",
  "┃ ┣ Fluid Extractor",
  "┃ ┗ Distillation Tower",
  "┃",
  "┣ Energy:",
  "┃ ┣ Renewable Energy:",
  "┃ ┃ ┣ Biomass",
  "┃ ┃ ┣ Geothermal",
  "┃ ┃ ┣ Hydropower",
  "┃ ┃ ┣ Solar",
  "┃ ┃ ┗ Wind",
  "┃ ┃ ",
  "┃ ┗ Non-Renewable Energy:",
  "┃ ㅤ  ┣ Coal",
  "┃ ㅤ  ┣ Gas",
  "┃ ㅤ  ┣ Nuclear",
  "┃ ㅤ  ┗ Fuel",
  "┃",
  "┣ Alimentation:",
  "┃ ┣ Farming:",
  "┃ ┃ ┣ Animals",
  "┃ ┃ ┣ Crops",
  "┃ ┃ ┣ Fishing",
  "┃ ┃ ┣ Trees",
  "┃ ┃ ┗ Winery",
  "┃ ┃ ",
  "┃ ┣ Food:",
  "┃ ┃ ┣ Breads",
  "┃ ┃ ┣ Confectionery",
  "┃ ┃ ┣ Dairy",
  "┃ ┃ ┣ Desserts",
  "┃ ┃ ┣ Eggs",
  "┃ ┃ ┣ Fast Food",
  "┃ ┃ ┣ Noodles",
  "┃ ┃ ┣ Pies",
  "┃ ┃ ┣ Pizza",
  "┃ ┃ ┣ Salads",
  "┃ ┃ ┣ Seafood",
  "┃ ┃ ┗ Stews",
  "┃ ┃ ",
  "┃ ┣ Drinks:",
  "┃ ┃ ┣ Coffee",
  "┃ ┃ ┣ Tea",
  "┃ ┃ ┣ Juice",
  "┃ ┃ ┣ Beer",
  "┃ ┃ ┣ Wine",
  "┃ ┃ ",
  "┃ ┗ Kitchen:",
  "┃ ㅤ  ┣ Toaster",
  "┃ ㅤ  ┣ Knife",
  "┃ ㅤ  ┣ Frying Pan",
  "┃ ㅤ  ┗ Cooking Pot",
  "┃",
  "┣ Entities:",
  "┃ ┗ None",
  "┃",
  "┣ Resources:",
  "┃ ┣ Deposits",
  "┃ ┗ Oil",
  "┃",
  "┣ Smelting:",
  "┃ ┣ Ingots",
  "┃ ┗ Alloys",
  "┃",
  "┣ Magic:",
  "┃ ┗ None",
  "┃",
  "┗ Wizardry:",
  "ㅤ┣ Knowledge Book",
  "ㅤ┣ Spawner Upgrades",
  "ㅤ┗ Pentagram",
];
var nav = document.getElementById("nav");

texts.forEach(function (text) {
  nav.innerHTML += "<p>" + text + "</p>";
});
