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
import { useCallback, useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { addCartItem } from "../../store/cart.store";
import { useToast } from "../../hooks/use-toast";
import { Rating } from "../atoms/Rating";

export function Product(
  product: ProductType & {
    extraKey: string;
  }
) {
  const {
    id,
    name,
    description,
    price: { original, discounted, currency },
    images,
    tags,
    ratings: { averageRating },
    extraKey,
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

  useEffect(() => {
    const element = document.getElementById(`${id}-${extraKey}`)!;

    const mouseMoveCb = (evt: any) => {
      const { layerX, layerY } = evt;

      const yRotation = ((layerX - 120 / 2) / 120) * 0.42;
      const xRotation = ((layerY - 116 / 2) / 116) * 0.42;

      element.style.transform = `
    perspective(200px) 
    scale(1) 
    rotateX(${xRotation}deg) 
    rotateY(${yRotation}deg)`;
    };

    element.addEventListener("mousemove", mouseMoveCb);

    const mouseOutCb = () => {
      element.style.transform = `
    perspective(116px) 
    scale(1) 
    rotateX(0) 
    rotateY(0)`;
    };

    element.addEventListener("mouseout", mouseOutCb);

    return () => {
      element.removeEventListener("mousemove", mouseMoveCb);
      element.removeEventListener("mousedown", mouseOutCb);
    };
  }, [id]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger key={id}>
        <Card
          id={`${id}-${extraKey}`}
          key={`${id}-${extraKey}`}
          className="flex p-2 shadow-chart-4 gap-5 w-full px-4 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer border border-input shadow-sm hover:bg-accent hover:text-accent-foreground"
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
              src={images[0].src}
              alt="Product image"
              className="my-auto h-full object-scale-down"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <CardHeader className="h-fit my-2 p-0 overflow-hidden w-full">
            <CardTitle className="m-0 p-0 w-0">{name}</CardTitle>
            <CardDescription className="w-0">{description}</CardDescription>
            {discounted ? (
              <CardDescription className="text-red-700 font-bold text-start">
                {getPrice(discounted)}{" "}
                <span className="ml-0.5 line-through text-xs text-slate-500">
                  {getPrice(original)}
                </span>
              </CardDescription>
            ) : (
              <CardDescription className="text-red-600 font-bold text-start">
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
                  <CarouselItem key={each.src}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <img src={each.src} alt={"Product image"} />
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
          <Button
            type="submit"
            onClick={() => buyClick(product)}
            aria-label="Product item"
          >
            Buy {getPrice(discounted ?? original)}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
