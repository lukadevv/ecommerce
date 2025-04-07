import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export function ThemeModeButton() {
  const [theme, setThemeState] = useState<"theme-light" | "dark">(() => {
    // Try to get the current theme from the navigator not using localstorage.
    // Create a function to check if the user prefers dark mode
    if (
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "theme-light";

    // Initialize theme based on the current DOM state

    // return document.documentElement.classList.contains("dark")
    //   ? "dark"
    //   : "theme-light";
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // Synchronize the DOM class with the theme state
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Button
      variant={"secondary"}
      size={"icon"}
      onClick={() => setThemeState(theme === "dark" ? "theme-light" : "dark")}
      aria-label="Change theme button"
      className="max-[295px]:hidden"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
