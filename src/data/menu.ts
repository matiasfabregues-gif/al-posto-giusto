import type { MenuCategory } from "../types/menu";

export const menu: MenuCategory[] = [
  {
    id: "panini",
    title: {
      it: "Panini",
      en: "Sandwiches",
      es: "Sándwiches",
    },
    items: [
      {
        id: "pomotonno",
        name: {
          it: "Pomotonno",
          en: "Pomotonno",
          es: "Pomotonno",
        },
        description: {
          it: "Pomodoro, tonno, olio, origano, sale, basilico",
          en: "Tomato, tuna, olive oil, oregano, salt, basil",
          es: "Tomate, atún, aceite de oliva, orégano, sal, albahaca",
        },
        price: 4,
      },
      {
        id: "hot-dog",
        name: {
          it: "Hot Dog",
          en: "Hot Dog",
          es: "Hot Dog",
        },
        description: {
          it: "Würstel, ketchup, maionese",
          en: "Würstel sausage, ketchup, mayonnaise",
          es: "Salchicha würstel, kétchup, mayonesa",
        },
        price: 4,
      },
      {
        id: "sfizioso",
        name: {
          it: "Sfizioso",
          en: "Sfizioso",
          es: "Sfizioso",
        },
        description: {
          it: "Pomodoro, carciofini sott'olio, formaggio primosale pepato, olio, origano, sale, basilico",
          en: "Tomato, artichokes in oil, peppered primosale cheese, olive oil, oregano, salt, basil",
          es: "Tomate, alcachofas en aceite, queso primosale con pimienta, aceite de oliva, orégano, sal, albahaca",
        },
        price: 4.5,
      },
      {
        id: "mio",
        name: {
          it: "Mio",
          en: "Mio",
          es: "Mio",
        },
        description: {
          it: "Tonno, lattuga, mozzarella, olio, origano, sale",
          en: "Tuna, lettuce, mozzarella, olive oil, oregano, salt",
          es: "Atún, lechuga, mozzarella, aceite de oliva, orégano, sal",
        },
        price: 5,
      },
      {
        id: "baciami-subito",
        name: {
          it: "Baciami Subito",
          en: "Baciami Subito",
          es: "Baciami Subito",
        },
        description: {
          it: "Pomodoro, tonno, cipolla, olio, origano, sale, basilico",
          en: "Tomato, tuna, onion, olive oil, oregano, salt, basil",
          es: "Tomate, atún, cebolla, aceite de oliva, orégano, sal, albahaca",
        },
        price: 5,
      },
      {
        id: "piccante",
        name: {
          it: "Piccante",
          en: "Piccante",
          es: "Piccante",
        },
        description: {
          it: "Würstel, melanzane sott'olio, Tabasco, ketchup, maionese",
          en: "Würstel sausage, aubergines in oil, Tabasco, ketchup, mayonnaise",
          es: "Salchicha würstel, berenjenas en aceite, Tabasco, kétchup, mayonesa",
        },
        price: 5,
      },
      {
        id: "ortolano",
        name: {
          it: "Ortolano",
          en: "Ortolano",
          es: "Ortolano",
        },
        description: {
          it: "Olive, carciofi sott'olio, melanzane sott'olio, formaggio",
          en: "Olives, artichokes in oil, aubergines in oil, cheese",
          es: "Aceitunas, alcachofas en aceite, berenjenas en aceite, queso",
        },
        price: 5,
      },
      {
        id: "secco",
        name: {
          it: "Secco",
          en: "Secco",
          es: "Secco",
        },
        description: {
          it: "Pomodoro secco, formaggio primosale pepato, tonno, lattuga",
          en: "Dried tomato, peppered primosale cheese, tuna, lettuce",
          es: "Tomate seco, queso primosale con pimienta, atún, lechuga",
        },
        price: 5,
      },
      {
        id: "salsiccioso",
        name: {
          it: "Salsiccioso",
          en: "Salsiccioso",
          es: "Salsiccioso",
        },
        description: {
          it: "Salsiccia, melanzane sott'olio, ketchup, maionese, formaggio",
          en: "Italian sausage, aubergines in oil, ketchup, mayonnaise, cheese",
          es: "Salchicha italiana, berenjenas en aceite, kétchup, mayonesa, queso",
        },
        price: 7,
      },
      {
        id: "galletto",
        name: {
          it: "Galletto",
          en: "Galletto",
          es: "Galletto",
        },
        description: {
          it: "Pomodoro, lattuga, pollo speziato",
          en: "Tomato, lettuce, spiced chicken",
          es: "Tomate, lechuga, pollo especiado",
        },
        price: 7,
      },
    ],
  },

  {
    id: "tostoni",
    title: {
      it: "Tostoni",
      en: "Large Toasts",
      es: "Tostados",
    },
    items: [
      {
        id: "cotto",
        name: {
          it: "Cotto",
          en: "Cotto",
          es: "Cotto",
        },
        description: {
          it: "Prosciutto cotto, formaggio",
          en: "Cooked ham, cheese",
          es: "Jamón cocido, queso",
        },
        price: 4,
      },
      {
        id: "salamino",
        name: {
          it: "Salamino",
          en: "Salamino",
          es: "Salamino",
        },
        description: {
          it: "Salame, formaggio",
          en: "Salami, cheese",
          es: "Salame, queso",
        },
        price: 4,
      },
      {
        id: "estivo",
        name: {
          it: "Estivo",
          en: "Estivo",
          es: "Estivo",
        },
        description: {
          it: "Pomodoro, lattuga, formaggio",
          en: "Tomato, lettuce, cheese",
          es: "Tomate, lechuga, queso",
        },
        price: 5,
      },
    ],
  },

  {
    id: "insalate",
    title: {
      it: "Insalate “A Modo Mio”",
      en: "Salads “A Modo Mio”",
      es: "Ensaladas “A Modo Mio”",
    },
    items: [
      {
        id: "caprese",
        name: {
          it: "Caprese",
          en: "Caprese",
          es: "Caprese",
        },
        description: {
          it: "Pane caliatu, olio, origano, pomodoro, mozzarella",
          en: "Caliatu bread, olive oil, oregano, tomato, mozzarella",
          es: "Pan caliatu, aceite de oliva, orégano, tomate, mozzarella",
        },
        price: 6,
      },
      {
        id: "salina",
        name: {
          it: "Salina",
          en: "Salina",
          es: "Salina",
        },
        description: {
          it: "Pane caliatu, pomodoro, tonno, lattuga, melanzane sott'olio, mozzarella, olio, origano",
          en: "Caliatu bread, tomato, tuna, lettuce, aubergines in oil, mozzarella, olive oil, oregano",
          es: "Pan caliatu, tomate, atún, lechuga, berenjenas en aceite, mozzarella, aceite de oliva, orégano",
        },
        price: 8,
      },
    ],
  },

  {
    id: "fritti",
    title: {
      it: "Fritti",
      en: "Fried Food",
      es: "Fritos",
    },
    items: [
      {
        id: "patatine-piccole",
        name: {
          it: "Patatine — Porzione piccola",
          en: "French Fries — Small Portion",
          es: "Papas fritas — Porción pequeña",
        },
        price: 3,
        frozen: true,
      },
      {
        id: "patatine-grandi",
        name: {
          it: "Patatine — Porzione grande",
          en: "French Fries — Large Portion",
          es: "Papas fritas — Porción grande",
        },
        price: 5,
        frozen: true,
      },
      {
        id: "arancino-ragu",
        name: {
          it: "Arancino al ragù",
          en: "Arancino with Ragù",
          es: "Arancino de ragú",
        },
        price: 3,
        frozen: true,
      },
      {
        id: "arancino-norma",
        name: {
          it: "Arancino alla Norma",
          en: "Arancino with Aubergines and Ricotta",
          es: "Arancino con berenjenas y ricotta",
        },
        price: 3,
        frozen: true,
      },
      {
        id: "arancino-prosciutto-formaggio",
        name: {
          it: "Arancino al prosciutto cotto e formaggio",
          en: "Arancino with Cooked Ham and Cheese",
          es: "Arancino con jamón cocido y queso",
        },
        price: 3,
        frozen: true,
      },
    ],
    notes: [
      {
        it: "Ogni aggiunta: + €0,50",
        en: "Each additional ingredient: + €0.50",
        es: "Cada ingrediente adicional: + €0,50",
      },
      {
        it: "(*) Prodotto surgelato",
        en: "(*) Frozen product",
        es: "(*) Producto congelado",
      },
    ],
  },

  {
    id: "bevande",
    title: {
      it: "Bevande",
      en: "Drinks",
      es: "Bebidas",
    },
    items: [
      {
        id: "caffe",
        name: {
          it: "Caffè",
          en: "Coffee",
          es: "Café",
        },
        price: 1,
      },
      {
        id: "granita",
        name: {
          it: "Granita",
          en: "Granita",
          es: "Granita",
        },
        price: 2.5,
      },
      {
        id: "acqua-naturale-50cl",
        name: {
          it: "Acqua naturale 50 cl",
          en: "Still Water 50 cl",
          es: "Agua sin gas 50 cl",
        },
        price: 1,
      },
      {
        id: "acqua-frizzante-50cl",
        name: {
          it: "Acqua frizzante 50 cl",
          en: "Sparkling Water 50 cl",
          es: "Agua con gas 50 cl",
        },
        price: 1,
      },
      {
        id: "acqua-naturale-2l",
        name: {
          it: "Acqua naturale 2 L",
          en: "Still Water 2 L",
          es: "Agua sin gas 2 L",
        },
        price: 3,
      },
      {
        id: "coca-cola",
        name: {
          it: "Coca-Cola",
          en: "Coca-Cola",
          es: "Coca-Cola",
        },
        price: 2.5,
      },
      {
        id: "coca-cola-zero",
        name: {
          it: "Coca-Cola Zero",
          en: "Coca-Cola Zero",
          es: "Coca-Cola Zero",
        },
        price: 2.5,
      },
      {
        id: "chinotto",
        name: {
          it: "Chinotto",
          en: "Chinotto",
          es: "Chinotto",
        },
        price: 2.5,
      },
      {
        id: "fanta",
        name: {
          it: "Fanta",
          en: "Fanta",
          es: "Fanta",
        },
        price: 2.5,
      },
      {
        id: "lemon-soda",
        name: {
          it: "Lemon Soda",
          en: "Lemon Soda",
          es: "Lemon Soda",
        },
        price: 2.5,
      },
      {
        id: "acqua-tonica",
        name: {
          it: "Acqua tonica",
          en: "Tonic Water",
          es: "Agua tónica",
        },
        price: 2.5,
      },
      {
        id: "mandarino",
        name: {
          it: "Mandarino",
          en: "Mandarin",
          es: "Mandarina",
        },
        price: 2.5,
      },
      {
        id: "mandarino-verde",
        name: {
          it: "Mandarino verde",
          en: "Green Mandarin",
          es: "Mandarina verde",
        },
        price: 2.5,
      },
      {
        id: "gassosa",
        name: {
          it: "Gassosa",
          en: "Italian Soda",
          es: "Gaseosa italiana",
        },
        price: 2.5,
      },
      {
        id: "succo-ace",
        name: {
          it: "Succo ACE",
          en: "ACE Juice",
          es: "Jugo ACE",
        },
        price: 2.5,
      },
      {
        id: "succo-pesca",
        name: {
          it: "Succo alla pesca",
          en: "Peach Juice",
          es: "Jugo de durazno",
        },
        price: 2.5,
      },
      {
        id: "te-pesca",
        name: {
          it: "Tè alla pesca",
          en: "Peach Tea",
          es: "Té de durazno",
        },
        price: 2.5,
      },
      {
        id: "te-limone",
        name: {
          it: "Tè al limone",
          en: "Lemon Tea",
          es: "Té de limón",
        },
        price: 2.5,
      },
      {
        id: "red-bull",
        name: {
          it: "Red Bull",
          en: "Red Bull",
          es: "Red Bull",
        },
        price: 3,
      },
      {
        id: "monster",
        name: {
          it: "Monster",
          en: "Monster",
          es: "Monster",
        },
        price: 4,
      },
      {
        id: "birra-limone",
        name: {
          it: "Birra al limone",
          en: "Lemon Beer",
          es: "Cerveza con limón",
        },
        price: 2.5,
      },
      {
        id: "birra-messina",
        name: {
          it: "Birra Messina",
          en: "Messina Beer",
          es: "Cerveza Messina",
        },
        price: 2.5,
      },
      {
        id: "birra-dello-stretto",
        name: {
          it: "Birra dello Stretto",
          en: "Birra dello Stretto",
          es: "Cerveza dello Stretto",
        },
        price: 3,
      },
      {
        id: "birra-senza-glutine",
        name: {
          it: "Birra senza glutine",
          en: "Gluten-Free Beer",
          es: "Cerveza sin gluten",
        },
        price: 3,
      },
      {
        id: "birra-senza-alcool",
        name: {
          it: "Birra analcolica",
          en: "Alcohol-Free Beer",
          es: "Cerveza sin alcohol",
        },
        price: 3,
      },
      {
        id: "messina-cristalli-sale",
        name: {
          it: "Birra Messina Cristalli di Sale",
          en: "Messina Cristalli di Sale Beer",
          es: "Cerveza Messina Cristalli di Sale",
        },
        price: 3.5,
      },
      {
        id: "birra-corona",
        name: {
          it: "Birra Corona",
          en: "Corona Beer",
          es: "Cerveza Corona",
        },
        price: 3.5,
      },
      {
        id: "birra-ceres",
        name: {
          it: "Birra Ceres",
          en: "Ceres Beer",
          es: "Cerveza Ceres",
        },
        price: 4,
      },
      {
        id: "birra-tennents",
        name: {
          it: "Birra Tennent's",
          en: "Tennent's Beer",
          es: "Cerveza Tennent's",
        },
        price: 4,
      },
      {
        id: "minchia-bionda",
        name: {
          it: "Birra Minchia Bionda Artigianale",
          en: "Minchia Bionda Craft Beer",
          es: "Cerveza artesanal Minchia Bionda",
        },
        price: 5,
      },
      {
        id: "minchia-rossa",
        name: {
          it: "Birra Minchia Rossa Artigianale",
          en: "Minchia Rossa Craft Beer",
          es: "Cerveza artesanal Minchia Rossa",
        },
        price: 5,
      },
      {
        id: "minchia-tosta",
        name: {
          it: "Birra Minchia Tosta Artigianale",
          en: "Minchia Tosta Craft Beer",
          es: "Cerveza artesanal Minchia Tosta",
        },
        price: 5,
      },
    ],
  },
];