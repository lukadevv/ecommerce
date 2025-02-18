import { ShoppingBagIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "../../hooks/use-cart";
import { NotificationBadge } from "../ui/notification-badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useCallback, useMemo, useState } from "react";
import { clearCart, type CartProductType } from "../../store/cart.store";
import { CardsPaymentMethod } from "../molecules/PaymentMethod";
import { Product } from "../molecules/Product";

export function UserCart() {
  const [open, setOpen] = useState<boolean>(false);
  const { productsQuantity, cart, total } = useCart();
  const cartItems = useMemo(() => {
    const items: CartProductType[] = [];

    for (const key in cart) {
      items.push(cart[key]);
    }

    return items;
  }, [cart]);

  const shipping = useMemo(
    () => Math.max(Math.min(500, total * 0.2), 20),
    [total]
  );

  const getPrice = useCallback(
    (value: number, currency: string) =>
      new Intl.NumberFormat("us", {
        style: "currency",
        currency,
      }).format(value),
    []
  );

  return (
    <Dialog
      open={open}
      onOpenChange={cartItems.length > 0 ? setOpen : () => {}}
    >
      <DialogTrigger asChild>
        <NotificationBadge
          label={productsQuantity === 0 ? undefined : productsQuantity}
        >
          <Button
            variant="secondary"
            size="icon"
            className="relative"
            onClick={() => cartItems.length > 0 && setOpen(true)}
            aria-label="Cart button"
          >
            <ShoppingBagIcon />
          </Button>
        </NotificationBadge>
      </DialogTrigger>
      <DialogContent style={{ height: "fit-content" }}>
        <DialogHeader>
          <DialogTitle>Shopping Cart ({productsQuantity})</DialogTitle>
          <div
            className="overflow-y-scroll flex gap-2 mt-5 flex-col py-3 pr-2"
            style={{
              maxHeight: "60vh",
            }}
          >
            {cartItems.map((item) =>
              Array.from({ length: item.quantity }).map((_, index) => (
                <Product key={`${item.id}-${index}`} {...item} />
              ))
            )}
          </div>
        </DialogHeader>
        <DialogDescription />
        <DialogFooter>
          <div className="flex flex-col w-full">
            <div>
              <div className="summary flex flex-col w-full border-t-1 border-b-1 py-2 gap-1">
                <div className="flex justify-between text-slate-600">
                  <b>Subtotal</b>
                  <b>
                    {getPrice(total, cartItems.at(0)?.price.currency ?? "usd")}
                  </b>
                </div>
                <div className="flex justify-between text-slate-600">
                  <b>Shipping</b>
                  <b>
                    {getPrice(
                      shipping,
                      cartItems.at(0)?.price.currency ?? "usd"
                    )}
                  </b>
                </div>
              </div>
              <div className="flex justify-between text-slate-900 text-xl py-2">
                <b>Total</b>
                <b className="text-red-400">
                  {getPrice(
                    total + shipping,
                    cartItems.at(0)?.price.currency ?? "usd"
                  )}
                </b>
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-3">
              <Button variant={"outline"} onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Checkout</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle />
                  </DialogHeader>
                  <CardsPaymentMethod
                    close={() => {
                      setOpen(false);
                      clearCart();
                    }}
                  />
                  <DialogDescription />
                  <DialogFooter />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
