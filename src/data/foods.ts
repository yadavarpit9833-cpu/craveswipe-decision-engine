export interface FoodItem {
  id: number;
  name: string;
  emoji: string;
  description: string;
  tags: string[];
  price: string;
  rating: number;
}

export const foods: FoodItem[] = [
  {
    id: 1,
    name: "Spicy Ramen",
    emoji: "🍜",
    description: "Rich tonkotsu broth with chili oil, soft-boiled egg, and chashu pork.",
    tags: ["spicy", "hot", "japanese", "comfort"],
    price: "$$",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Classic Burger",
    emoji: "🍔",
    description: "Juicy beef patty, melted cheddar, crispy lettuce, and secret sauce.",
    tags: ["fast", "american", "comfort", "filling"],
    price: "$",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Margherita Pizza",
    emoji: "🍕",
    description: "Wood-fired with San Marzano tomatoes, fresh mozzarella, and basil.",
    tags: ["italian", "cheesy", "classic", "sharing"],
    price: "$$",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Pad Thai",
    emoji: "🍝",
    description: "Stir-fried rice noodles with shrimp, peanuts, and tangy tamarind.",
    tags: ["thai", "sweet", "fast", "cheap"],
    price: "$",
    rating: 4.4,
  },
  {
    id: 5,
    name: "Sushi Platter",
    emoji: "🍣",
    description: "Assorted nigiri and maki rolls with fresh wasabi and pickled ginger.",
    tags: ["japanese", "fresh", "healthy", "premium"],
    price: "$$$",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Tacos Al Pastor",
    emoji: "🌮",
    description: "Marinated pork with pineapple, cilantro, and spicy salsa verde.",
    tags: ["mexican", "spicy", "cheap", "fast"],
    price: "$",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Butter Chicken",
    emoji: "🍛",
    description: "Creamy tomato curry with tender chicken and aromatic spices.",
    tags: ["indian", "spicy", "comfort", "rich"],
    price: "$$",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Açaí Bowl",
    emoji: "🫐",
    description: "Frozen açaí blended with banana, topped with granola and fresh berries.",
    tags: ["healthy", "sweet", "fresh", "cheap"],
    price: "$",
    rating: 4.3,
  },
  {
    id: 9,
    name: "Korean BBQ",
    emoji: "🥩",
    description: "Grilled bulgogi with kimchi, pickled radish, and steamed rice.",
    tags: ["korean", "grilled", "sharing", "premium"],
    price: "$$$",
    rating: 4.8,
  },
  {
    id: 10,
    name: "Fish & Chips",
    emoji: "🐟",
    description: "Beer-battered cod with crispy fries, mushy peas, and tartar sauce.",
    tags: ["british", "comfort", "fast", "filling"],
    price: "$",
    rating: 4.2,
  },
];
