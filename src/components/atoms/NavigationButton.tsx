import type { ButtonProps } from "../ui/button";
import { ButtonAnchor } from "../ui/button_anchor";

export function NavigationButton({
  text,
  href,
  className,
}: {
  text: string;
  href: string;
} & ButtonProps) {
  return (
    <ButtonAnchor
      variant={"link"}
      href={href}
      className={`capitalize text-yellow-200 ${className}`}
      aria-label="Navigation button"
    >
      {text}
    </ButtonAnchor>
  );
}
