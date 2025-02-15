import { GithubIcon } from "lucide-react";
import { ButtonAnchor } from "../ui/button_anchor";

export function GithubButton() {
  return (
    <ButtonAnchor
      variant="destructive"
      size="icon"
      href="https://github.com/lukadevv"
    >
      <GithubIcon />
    </ButtonAnchor>
  );
}
