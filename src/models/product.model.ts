import type { ImageMetadata } from "astro";

// TODO: Add comments
export type ProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  tags: string[];
  images: ImageMetadata[];
  date: Date;
  price: {
    original: number;
    discounted?: number;
    currency: string;
  };
  stock: {
    quantity: number;
  };
  dimensions: {
    length: number;
    width: number;
    height: number;
    weight: number;
  };
  ratings: {
    averageRating: number;
    reviews: {
      user: string;
      rating: number;
      comment: string;
      date: string;
    }[];
  };
};
