import type {
  BurgerProduct,
  DrinkOption,
  MenuCategoryConfig,
  MenuProduct,
  SimpleProduct,
} from "@/types/menu";

export const includedDrinks: DrinkOption[] = [
  "Coca-Cola",
  "Coca-Cola Zero",
  "Sprite",
  "Fanta",
];

export const menuCategories: MenuCategoryConfig[] = [
  {
    id: "clasicas",
    label: "Clásicas",
    description: "Los clásicos nunca mueren.",
  },
  {
    id: "signature",
    label: "Signature",
    description: "Para los amantes del bacon.",
  },
  {
    id: "hot-dogs",
    label: "Hot dogs",
    description: "Con salchicha tipo alemana.",
  },
  {
    id: "picoteo",
    label: "Para picotear",
    description: "Opciones para compartir.",
  },
  {
    id: "bebidas",
    label: "Bebidas",
    description: "Bien frías, como se debe.",
  },
];
const burgers: BurgerProduct[] = [
  {
    id: "oklahoma-street",
    type: "burger",
    name: "Oklahoma Street",
    category: "clasicas",
    baseDescription: "Medallón de carne, queso cheddar, cebollita caramelizada y aderezo Street de la casa.",
    includesFries: true,
    availableDrinks: includedDrinks,
    prices: { simple: 18000, doble: 20000 },
    featured: true,
  },
  {
    id: "hollywood-street",
    type: "burger",
    name: "Hollywood Street",
    category: "clasicas",
   baseDescription: "Medallón de carne, queso cheddar, tomate, lechuga, pepinitos, ketchup, mayo y aderezo Street de la casa.",

    includesFries: true,
    availableDrinks: includedDrinks,
    prices: { simple: 18000, doble: 20000 },
  },
 {
  id: "new-york-street",
  type: "burger",
  name: "New York Street",
  category: "clasicas",
baseDescription: "Medallón de carne, queso cheddar, cebollita en cubos y ketchup.",
  includesFries: true,
  availableDrinks: includedDrinks,
  prices: { simple: 18000, doble: 20000 },
  featured: true,
},
  {
    id: "brooklyn-street",
    type: "burger",
    name: "Brooklyn Street",
    category: "signature",
  baseDescription: "Medallón de carne, queso cheddar, bacon, cebollita en cubos y ketchup.",
    includesFries: true,
    availableDrinks: includedDrinks,
    prices: { simple: 19000, doble: 21000 },
    featured: true,
  },
 {
  id: "chicago-street",
  type: "burger",
  name: "Chicago Street",
  category: "signature",
 baseDescription: "Medallón de carne, queso cheddar, bacon, cebollita crispy, aderezo barbacoa y aderezo Street de la casa.",
  includesFries: true,
  availableDrinks: includedDrinks,
  prices: { simple: 19000, doble: 21000 },
  featured: true,
},
  {
    id: "kansas-street",
    type: "burger",
    name: "Kansas Street",
    category: "signature",
baseDescription: "Medallón de carne, queso cheddar, bacon, papas pay, ketchup, mostaza, mayo y aderezo barbacoa.",
    includesFries: true,
    availableDrinks: includedDrinks,
    prices: { simple: 19000, doble: 21000 },
  },
];

const simpleProducts: SimpleProduct[] = [
  {
    id: "hotdog-caracas",
    type: "simple",
    name: "Caracas",
    category: "hot-dogs",
    price: 7000,
    description: "Salchicha alemana, papas pay, cebolla en cubos, ketchup, mayo, mostaza, salsa tartara, queso reggianito.",
  },
  {
    id: "hotdog-oklahoma",
    type: "simple",
    name: "Oklahoma",
    category: "hot-dogs",
    price: 7000,
    description: "Salchicha alemana, cheddar, cebolla caramelizada, bacon.",
  },
  {
    id: "hotdog-cipolletti",
    type: "simple",
    name: "Cipolletti",
    category: "hot-dogs",
    price: 7000,
    description: "Salchicha alemana, criolla, ketchup, mostaza, queso reggianito.",
  },
  {
    id: "papas-grandes",
    type: "simple",
    name: "Papas grandes",
    category: "picoteo",
    price: 15000,
    description: "600 gr de papas crocantes para compartir.",
  },
  {
    id: "papas-cheddar",
    type: "simple",
    name: "Papas + cheddar",
    category: "picoteo",
    price: 16000,
    description: "Papas grandes con cheddar fundido.",
  },
  {
    id: "papas-cheddar-bacon",
    type: "simple",
    name: "Papas + cheddar + bacon",
    category: "picoteo",
    price: 17000,
    description: "Una de las más pedidas para arrancar fuerte.",
  },
  {
    id: "nuggets-papas",
    type: "simple",
    name: "Nuggets + papas",
    category: "picoteo",
    price: 17000,
    description: "15 nuggets de pollo acompañado de papas fritas.",
  },
  {
    id: "tequenos",
    type: "simple",
    name: "Tequeños",
    category: "picoteo",
    price: 15000,
    description: "Tequeños x6 + aderezo.",
  },
  {
    id: "coca-cola",
    type: "simple",
    name: "Coca-Cola 354 ml",
    category: "bebidas",
    price: 3500,
  },
  {
    id: "coca-cola-zero",
    type: "simple",
    name: "Coca-Cola Zero 354 ml",
    category: "bebidas",
    price: 3500,
  },
  {
    id: "sprite",
    type: "simple",
    name: "Sprite 354 ml",
    category: "bebidas",
    price: 3500,
  },
  {
    id: "fanta",
    type: "simple",
    name: "Fanta 354 ml",
    category: "bebidas",
    price: 3500,
  },
];

export const menuProducts: MenuProduct[] = [...burgers, ...simpleProducts];

export const featuredProducts = menuProducts.filter((product) => product.featured);
