import { Star, StarHalf } from "lucide-react";

export function Rating({ rating, max }: { rating: number; max: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(max)].map((_, i) => {
        const value = i + 1;
        return value <= rating ? (
          <Star key={i} className="w-5 h-5 fill-current text-yellow-300" />
        ) : value - 0.5 === rating ? (
          <StarHalf key={i} className="w-5 h-5 fill-current text-yellow-300" />
        ) : (
          <Star key={i} className="w-5 h-5 text-gray-300" />
        );
      })}
    </div>
  );
}
