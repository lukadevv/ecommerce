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

// TODO: Add products
export const MOCK_products: ProductType[] = [
  {
    id: "1",
    name: "Wireless Mechanical Keyboard",
    description:
      "A high-performance wireless mechanical keyboard with RGB lighting.",
    category: "Electronics",
    brand: "Keytron",
    tags: ["keyboard", "wireless", "mechanical", "RGB"],
    images: [Image1],
    date: new Date(),
    price: { original: 120, discounted: 99, currency: "USD" },
    stock: { quantity: 50 },
    dimensions: { length: 45, width: 15, height: 4, weight: 1.2 },
    ratings: { averageRating: 4.5, reviews: [] },
  },
  {
    id: "2",
    name: "Noise Cancelling Headphones",
    description: "Experience immersive sound with active noise cancellation.",
    category: "Electronics",
    brand: "SoundMax",
    tags: ["headphones", "noise cancelling", "wireless"],
    images: [Image2],
    date: new Date(),
    price: { original: 200, discounted: 180, currency: "USD" },
    stock: { quantity: 30 },
    dimensions: { length: 20, width: 18, height: 10, weight: 0.8 },
    ratings: { averageRating: 4.8, reviews: [] },
  },
  {
    id: "3",
    name: "Smart Watch Series 6",
    description:
      "A powerful smartwatch with health tracking and notifications.",
    category: "Wearables",
    brand: "TechWear",
    tags: ["smartwatch", "fitness", "wearable"],
    images: [Image3],
    date: new Date(),
    price: { original: 300, discounted: 270, currency: "USD" },
    stock: { quantity: 20 },
    dimensions: { length: 5, width: 5, height: 1, weight: 0.2 },
    ratings: { averageRating: 4.6, reviews: [] },
  },
  {
    id: "4",
    name: "4K Ultra HD Monitor",
    description: "A 32-inch 4K monitor with stunning colors and clarity.",
    category: "Electronics",
    brand: "VisionTech",
    tags: ["monitor", "4K", "ultra HD"],
    images: [Image4],
    date: new Date(),
    price: { original: 500, discounted: 450, currency: "USD" },
    stock: { quantity: 15 },
    dimensions: { length: 75, width: 45, height: 10, weight: 5 },
    ratings: { averageRating: 4.8, reviews: [] },
  },
  {
    id: "5",
    name: "Gaming Mouse",
    description: "An ergonomic gaming mouse with customizable buttons and RGB.",
    category: "Accessories",
    brand: "GamePro",
    tags: ["mouse", "gaming", "RGB"],
    images: [Image5],
    date: new Date(),
    price: { original: 60, discounted: 50, currency: "USD" },
    stock: { quantity: 40 },
    dimensions: { length: 12, width: 8, height: 4, weight: 0.3 },
    ratings: { averageRating: 4.4, reviews: [] },
  },
  {
    id: "6",
    name: "Portable SSD 1TB",
    description: "Fast and reliable external SSD with 1TB storage.",
    category: "Storage",
    brand: "SpeedDrive",
    tags: ["SSD", "external", "storage"],
    images: [Image6],
    date: new Date(),
    price: { original: 150, discounted: 130, currency: "USD" },
    stock: { quantity: 25 },
    dimensions: { length: 10, width: 5, height: 1, weight: 0.2 },
    ratings: { averageRating: 4.7, reviews: [] },
  },
  {
    id: "7",
    name: "Ergonomic Office Chair",
    description: "Comfortable and adjustable office chair for long hours.",
    category: "Furniture",
    brand: "ErgoSeat",
    tags: ["chair", "office", "ergonomic"],
    images: [Image7],
    date: new Date(),
    price: { original: 250, discounted: 220, currency: "USD" },
    stock: { quantity: 10 },
    dimensions: { length: 60, width: 60, height: 120, weight: 15 },
    ratings: { averageRating: 4.5, reviews: [] },
  },
  {
    id: "8",
    name: "Mechanical Gaming Keyboard",
    description: "RGB mechanical keyboard with tactile switches.",
    category: "Electronics",
    brand: "HyperType",
    tags: ["keyboard", "gaming", "mechanical"],
    images: [Image8],
    date: new Date(),
    price: { original: 100, discounted: 85, currency: "USD" },
    stock: { quantity: 35 },
    dimensions: { length: 44, width: 14, height: 3, weight: 1.1 },
    ratings: { averageRating: 4.6, reviews: [] },
  },
  {
    id: "9",
    name: "Smartphone Stand",
    description: "A foldable and adjustable stand for smartphones and tablets.",
    category: "Accessories",
    brand: "FlexStand",
    tags: ["stand", "smartphone", "tablet"],
    images: [Image9],
    date: new Date(),
    price: { original: 20, currency: "USD" },
    stock: { quantity: 60 },
    dimensions: { length: 15, width: 10, height: 3, weight: 0.5 },
    ratings: { averageRating: 4.3, reviews: [] },
  },
  {
    id: "10",
    name: "USB-C Docking Station",
    description: "A versatile USB-C docking station with multiple ports.",
    category: "Accessories",
    brand: "MultiHub",
    tags: ["USB-C", "docking station", "hub"],
    images: [Image10, Image11],
    date: new Date(),
    price: { original: 80, discounted: 70, currency: "USD" },
    stock: { quantity: 20 },
    dimensions: { length: 12, width: 6, height: 2, weight: 0.3 },
    ratings: { averageRating: 4.5, reviews: [] },
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
