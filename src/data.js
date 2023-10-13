import blueberrymuffin from "./assets/blueberry-muffin.jpg";
import greekyogurtparfait from "./assets/greek-yogurt-parfait.jpg";
import acaibowl from "./assets/acai-bowl.jpg";
import blueberrypancakes from "./assets/blueberry-pancakes.jpg";
import croissant from "./assets/croissant.jpg";
import mangosmoothiebowl from "./assets/mango-smoothie-bowl.jpg";
import chocolatechippancakes from "./assets/chocolate-chip-pancakes.jpg";
import blacktea from "./assets/black-tea.jpg";
import greentea from "./assets/green-tea.jpg";
import espresso from "./assets/espresso.jpg";
import cappuccino from "./assets/cappuccino.jpg";
import latte from "./assets/latte.jpg";

const menu = [
  {
    id: 1,
    title: "Blueberry Muffin",
    category: "pastry",
    price: 4.99,
    img: blueberrymuffin,
    desc: `Indulge in a freshly baked blueberry muffin, bursting with flavor.`,
  },
  {
    id: 2,
    title: "Greek Yogurt Parfait",
    category: "yogurts",
    price: 5.99,
    img: greekyogurtparfait,
    desc: `Creamy Greek yogurt layered with fresh fruit and honey. A healthy delight!`,
  },
  {
    id: 3,
    title: "Acai Bowl",
    category: "bowls",
    price: 8.49,
    img: acaibowl,
    desc: `Start your day with our acai bowl topped with granola and a variety of fresh fruits.`,
  },
  {
    id: 4,
    title: "Blueberry Pancakes",
    category: "pancakes",
    price: 9.99,
    img: blueberrypancakes,
    desc: `Fluffy blueberry pancakes served with maple syrup and a dollop of whipped cream.`,
  },
  {
    id: 5,
    title: "Croissant",
    category: "pastry",
    price: 2.99,
    img: croissant,
    desc: `A classic buttery croissant, flaky and delicious.`,
  },
  {
    id: 6,
    title: "Mango Smoothie Bowl",
    category: "bowls",
    price: 7.49,
    img: mangosmoothiebowl,
    desc: `Delight in a refreshing mango smoothie bowl with toppings that burst with flavor.`,
  },
  {
    id: 7,
    title: "Chocolate Chip Pancakes",
    category: "pancakes",
    price: 10.99,
    img: chocolatechippancakes,
    desc: `Satisfy your sweet tooth with our chocolate chip pancakes, a delightful treat.`,
  },
  {
    id: 8,
    title: "Black Kusmi Tea",
    category: "tea",
    price: 3.99,
    img: blacktea,
    desc: `Enjoy the bold and robust flavor of our black tea, perfect for an energizing start to your day.`,
  },
  {
    id: 9,
    title: "Green Kusmi Tea",
    category: "tea",
    price: 3.49,
    img: greentea,
    desc: `Enjoy the soothing aroma and health benefits of green tea.`,
  },
  {
    id: 10,
    title: "Espresso",
    category: "coffee",
    price: 2.49,
    img: espresso,
    desc: `A shot of pure energy! Enjoy our rich and bold espresso to kickstart your day.`,
  },
  {
    id: 11,
    title: "Cappuccino",
    category: "coffee",
    price: 4.49,
    img: cappuccino,
    desc: `Experience the perfect blend of espresso, steamed milk, and foam in our cappuccino.`,
  },
  {
    id: 12,
    title: "Latte",
    category: "coffee",
    price: 3.99,
    img: latte,
    desc: `A creamy and comforting latte, perfect for a relaxing afternoon.`,
  },
];

export default menu;
