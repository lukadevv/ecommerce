import { Input } from "../ui/input";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div
      className="relative w-full bg-slate-200"
      style={{
        borderRadius: "25px",
      }}
    >
      <Search
        className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
        size={22}
      />
      <Input
        className="pl-10"
        placeholder="Search..."
        style={{
          borderRadius: "25px",
        }}
      />
    </div>
  );
}
