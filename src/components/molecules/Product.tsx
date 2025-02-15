import { Rating } from "../atoms/Rating";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import type { ProductType } from "../../models/product.model";
import { useCallback, useState } from "react";
import { Badge } from "../ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { appendUrlPath } from "../../utils/path";
import { addCartItem } from "../../store/cart.store";
import { useToast } from "../../hooks/use-toast";
import { useCart } from "../../hooks/use-cart";

export function Product(product: ProductType) {
  const {
    id,
    name,
    description,
    price: { original, discounted, currency },
    ratings: { averageRating },
    images,
    tags,
  } = product;

  const [open, setOpen] = useState<boolean>(false);
  const { toast } = useToast();

  const getPrice = useCallback(
    (value: number) =>
      new Intl.NumberFormat("us", {
        style: "currency",
        currency,
      }).format(value),
    [currency]
  );

  const buyClick = useCallback(
    (product: ProductType) => {
      addCartItem(product);
      setTimeout(
        () =>
          toast({
            description: `${name} was added to cart`,
            variant: "positive",
          }),
        500
      );
      setOpen(false);
    },
    [name, setOpen, toast]
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger key={id} asChild>
        <Card
          className="flex gap-5 w-full px-4 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
          key={id}
        >
          <div
            className="img-container"
            style={{
              width: "90px",
              height: "90px",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <img
              src={images[0]}
              alt="Product image"
              className="my-auto h-full object-scale-down"
            />
          </div>
          <CardHeader className="h-fit my-2 p-0 overflow-hidden w-full">
            <CardTitle className="m-0 p-0 w-0">{name}</CardTitle>
            <CardDescription className="w-0">{description}</CardDescription>
            {discounted ? (
              <CardDescription className="text-red-400 font-bold">
                {getPrice(discounted)}{" "}
                <span className="ml-0.5 line-through text-xs text-red-300">
                  {getPrice(original)}
                </span>
              </CardDescription>
            ) : (
              <CardDescription className="text-red-400 font-bold">
                {getPrice(original)}
              </CardDescription>
            )}
            <CardDescription className="flex gap-3 items-center">
              <Rating rating={averageRating} max={5} />
              <p className="text-xs">{averageRating}</p>
            </CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent style={{ height: "fit-content" }}>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription className="mb-8">{description}</DialogDescription>
          <div className="flex justify-center">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {images.map((each) => (
                  <CarouselItem key={each}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <img
                            src={appendUrlPath(each)}
                            alt={"Product Image"}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex gap-2 mt-5 items-center justify-center">
            {tags.map((tag) => (
              <Badge key={tag} variant={"outline"}>
                {tag}
              </Badge>
            ))}
          </div>
        </DialogHeader>
        <DialogFooter className="items-end">
          <Button type="submit" onClick={() => buyClick(product)}>
            Buy {getPrice(discounted ?? original)}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
