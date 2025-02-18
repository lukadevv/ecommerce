import { User } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CreateAccount } from "../molecules/CreateAccount";
import { useState } from "react";

export function UserButton() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger key={"user-menu"} asChild>
        <Button
          variant="secondary"
          size="icon"
          aria-label="User button"
          className="max-[373px]:hidden"
          onClick={() => setOpen(true)}
        >
          <User />
        </Button>
      </DialogTrigger>
      <DialogContent className="m-0 p-0 border-0">
        <DialogHeader>
          <DialogTitle />
        </DialogHeader>
        <CreateAccount />
        <DialogDescription />
        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
}
