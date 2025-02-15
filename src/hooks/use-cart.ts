import { useStore } from "@nanostores/react";
import { STORE_cartItems } from "../store/cart.store";
import { useMemo } from "react";

export function useCart() {
  const cart = useStore(STORE_cartItems);

  const total = useMemo(() => {
    let counter = 0;

    for (const key in cart) {
      const item = cart[key];

      const { original, discounted } = item.price;

      counter += (discounted ?? original) * item.quantity;
    }

    return counter;
  }, [cart]);

  const productsQuantity = useMemo(() => {
    let counter = 0;

    for (const key in cart) {
      const item = cart[key];

      counter += item.quantity;
    }

    return counter;
  }, [cart]);

  return { cart, total, productsQuantity };
}
