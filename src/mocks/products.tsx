import type { ProductType } from "../models/product.model";
import Image1 from "./images/1.webp";
import Image2 from "./images/2.webp";
import Image3 from "./images/3.webp";
import Image4 from "./images/4.webp";
import Image5 from "./images/5.webp";
import Image6 from "./images/6.webp";
import Image7 from "./images/7.webp";
import Image8 from "./images/8.webp";
import Image9 from "./images/9.webp";
import Image10 from "./images/10.webp";
import Image11 from "./images/11.webp";

export const MOCK_products: ProductType[] = [
  {
    id: "1",
    name: "Grilled Chicken Alfredo",
    description: "Creamy Alfredo pasta served with tender grilled chicken breast and herbs.",
    category: "Main Dishes",
    brand: "House Special",
    tags: ["chicken", "pasta", "creamy", "main dish"],
    images: [Image1],
    date: new Date(),
    price: { original: 14.99, discounted: 12.99, currency: "USD" },
    stock: { quantity: 25 },
    dimensions: { length: 25, width: 20, height: 5, weight: 0.8 },
    ratings: { averageRating: 4.7, reviews: [] },
  },
  {
    id: "2",
    name: "Classic Cheeseburger Combo",
    description: "Juicy beef burger with cheddar cheese, lettuce, tomato, fries, and a soft drink.",
    category: "Combos",
    brand: "Grill Express",
    tags: ["burger", "combo", "fries", "drink"],
    images: [Image2],
    date: new Date(),
    price: { original: 11.5, discounted: 10, currency: "USD" },
    stock: { quantity: 40 },
    dimensions: { length: 22, width: 18, height: 6, weight: 0.7 },
    ratings: { averageRating: 4.5, reviews: [] },
  },
  {
    id: "3",
    name: "Sushi Platter (12 pcs)",
    description: "An assortment of 12 fresh sushi pieces including tuna, salmon, and vegetarian rolls.",
    category: "Japanese",
    brand: "Sakura Bites",
    tags: ["sushi", "japanese", "platter", "fresh"],
    images: [Image3],
    date: new Date(),
    price: { original: 19.99, discounted: 17.49, currency: "USD" },
    stock: { quantity: 18 },
    dimensions: { length: 28, width: 20, height: 4, weight: 0.6 },
    ratings: { averageRating: 4.9, reviews: [] },
  },
  {
    id: "4",
    name: "Margherita Pizza (12\")",
    description: "Classic Margherita pizza with mozzarella, tomato sauce, and fresh basil.",
    category: "Pizza",
    brand: "Oven Stone",
    tags: ["pizza", "italian", "margherita", "cheese"],
    images: [Image4],
    date: new Date(),
    price: { original: 13.99, discounted: 11.99, currency: "USD" },
    stock: { quantity: 30 },
    dimensions: { length: 30, width: 30, height: 4, weight: 1.1 },
    ratings: { averageRating: 4.6, reviews: [] },
  },
  {
    id: "5",
    name: "Spicy Chicken Tacos (3 pcs)",
    description: "Soft shell tacos with spicy grilled chicken, salsa, and avocado.",
    category: "Mexican",
    brand: "Taco Boom",
    tags: ["tacos", "spicy", "mexican", "chicken"],
    images: [Image5],
    date: new Date(),
    price: { original: 9.99, discounted: 8.49, currency: "USD" },
    stock: { quantity: 50 },
    dimensions: { length: 20, width: 15, height: 4, weight: 0.5 },
    ratings: { averageRating: 4.4, reviews: [] },
  },
  {
    id: "6",
    name: "Vegetarian Buddha Bowl",
    description: "A healthy bowl with quinoa, roasted chickpeas, sweet potato, and tahini dressing.",
    category: "Healthy",
    brand: "Green Leaf",
    tags: ["vegetarian", "bowl", "healthy", "quinoa"],
    images: [Image6],
    date: new Date(),
    price: { original: 12.99, discounted: 11.5, currency: "USD" },
    stock: { quantity: 20 },
    dimensions: { length: 22, width: 18, height: 5, weight: 0.6 },
    ratings: { averageRating: 4.7, reviews: [] },
  },
  {
    id: "7",
    name: "BBQ Ribs with Coleslaw",
    description: "Slow-cooked BBQ pork ribs served with fresh coleslaw and cornbread.",
    category: "Main Dishes",
    brand: "Smokey’s",
    tags: ["ribs", "BBQ", "coleslaw", "pork"],
    images: [Image7],
    date: new Date(),
    price: { original: 17.99, discounted: 15.99, currency: "USD" },
    stock: { quantity: 15 },
    dimensions: { length: 28, width: 22, height: 6, weight: 1.2 },
    ratings: { averageRating: 4.8, reviews: [] },
  },
  {
    id: "8",
    name: "Chicken Caesar Wrap",
    description: "Grilled chicken breast wrapped with romaine, Caesar dressing, and parmesan.",
    category: "Wraps",
    brand: "LunchBox",
    tags: ["wrap", "chicken", "caesar", "on-the-go"],
    images: [Image8],
    date: new Date(),
    price: { original: 8.99, discounted: 7.5, currency: "USD" },
    stock: { quantity: 35 },
    dimensions: { length: 18, width: 10, height: 4, weight: 0.4 },
    ratings: { averageRating: 4.3, reviews: [] },
  },
  {
    id: "9",
    name: "Penne Arrabbiata",
    description: "Pasta with a spicy tomato sauce and fresh herbs. A vegetarian classic.",
    category: "Pasta",
    brand: "Italian Soul",
    tags: ["pasta", "vegetarian", "spicy", "italian"],
    images: [Image9],
    date: new Date(),
    price: { original: 11.5, discounted: 10, currency: "USD" },
    stock: { quantity: 25 },
    dimensions: { length: 24, width: 18, height: 4, weight: 0.6 },
    ratings: { averageRating: 4.4, reviews: [] },
  },
  {
    id: "10",
    name: "Beef Lasagna",
    description: "Layered pasta with beef ragu, bechamel, and melted mozzarella cheese.",
    category: "Pasta",
    brand: "Mama’s Kitchen",
    tags: ["lasagna", "beef", "italian", "comfort food"],
    images: [Image10, Image11],
    date: new Date(),
    price: { original: 14.5, discounted: 12.5, currency: "USD" },
    stock: { quantity: 22 },
    dimensions: { length: 25, width: 20, height: 5, weight: 0.9 },
    ratings: { averageRating: 4.7, reviews: [] },
  },
];


export const MOCK_categories = Array.from(
  MOCK_products.reduce((set, each) => {
    set.add(each.category);
    return set;
  }, new Set<string>())
);

export const MOCK_NewArrivals = [...MOCK_products]
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);
export const MOCK_Trending = [...MOCK_products]
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);
export const MOCK_TopRated = [...MOCK_products]
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);
export const MOCK_BestSellers = [...MOCK_products]
  .sort(() => Math.random() - 0.5)
  .slice(0, 8);
