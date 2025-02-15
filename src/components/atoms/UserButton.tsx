import { User } from "lucide-react";
import { Button } from "../ui/button";

export function UserButton() {
  return (
    <Button
      variant="secondary"
      size="icon"
    >
      <User />
    </Button>
  );
}
