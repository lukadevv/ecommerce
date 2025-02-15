import { map } from "nanostores";
import type { ProductType } from "../models/product.model";

export type CartProductType = {
  quantity: number;
} & ProductType;

export const STORE_cartItems = map<Record<ProductType["id"], CartProductType>>(
  {}
);

export function addCartItem(product: ProductType) {
  const id = product.id;
  const existingEntry = STORE_cartItems.get()[id];

  if (existingEntry) {
    STORE_cartItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity + 1,
    });
  } else {
    STORE_cartItems.setKey(id, {
      ...product,
      quantity: 1,
    });
  }
}

export function clearCart() {
  STORE_cartItems.set({});
}
