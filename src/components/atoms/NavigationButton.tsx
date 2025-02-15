import type { ButtonProps } from "../ui/button";
import { ButtonAnchor } from "../ui/button_anchor";

export function NavigationButton({
  text,
  href,
}: {
  text: string;
  href: string;
} & ButtonProps) {
  return (
    <ButtonAnchor variant={"link"} href={href} className="uppercase text-white">
      {text}
    </ButtonAnchor>
  );
}
