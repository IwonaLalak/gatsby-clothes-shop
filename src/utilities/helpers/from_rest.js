export const REST_COLORS = [
  { "value": "colors/beige.jpeg", "key": "beige", "hex": "#bea390" },
  {
    "value": "colors/black.jpeg",
    "key": "black",
    "hex": "#000",
  },
  { "value": "colors/brown.jpeg", "key": "brown", "hex": "#653602" },
  {
    "value": "colors/dark_gray.jpeg",
    "key": "dark_gray",
    "hex": "#424242",
  },
  { "value": "colors/dark_green.jpeg", "key": "dark_green", "hex": "#0e5223" },
  {
    "value": "colors/dark_jeans.jpeg",
    "key": "dark_jeans",
    "hex": "#081c3d",
  },
  { "value": "colors/dark_red.jpeg", "key": "dark_red", "hex": "#870203" },
  {
    "value": "colors/intense_pink.jpeg",
    "key": "intense_pink",
    "hex": "#da0967",
  },
  { "value": "colors/intense_red.jpeg", "key": "intense_red", "hex": "#cb1313" },
  {
    "value": "colors/light_grey.jpeg",
    "key": "light_grey", "hex": "#b8b8b8",
  },
  { "value": "colors/light_jeans.jpeg", "key": "light_jeans", "hex": "#7fa3df" },
  {
    "value": "colors/light_pink.jpeg",
    "key": "light_pink",
    "hex": "#e398db",
  },
  { "value": "colors/lime.jpeg", "key": "lime", "hex": "#8efd00" },
  {
    "value": "colors/medium_jeans.jpeg",
    "key": "medium_jeans",
    "hex": "#15418a",
  },
  { "value": "colors/mint.jpeg", "key": "mint", "hex": "#54d4bb" },
  { "value": "colors/navy.jpeg", "key": "navy", "hex": "#0f0752" },
  {
    "value": "colors/orange.jpeg",
    "key": "orange",
    "hex": "#ff8800",
  },
  { "value": "colors/turquise.jpeg", "key": "turquise", "hex": "#238393" },
  {
    "value": "colors/violet.jpeg",
    "key": "violet",
    "hex": "#521d61",
  },
  { "value": "colors/white.jpeg", "key": "white", "hex": "#fff" },
  { "value": "colors/yellow.jpeg", "key": "yellow", "hex": "#f5ff00" },
]

export const REST_FILTERS = [
  {
    name: "Price",
    field: "product_price",
    type: "range",
    values: [{ type: "min", value: 1 }, { type: "max", value: 1000 }],
    others: [{ type: "step", value: 0.01 }],
  },
  {
    name: "Variant",
    field: "product_variant",
    type: "select",
    options: REST_COLORS,
  },

]