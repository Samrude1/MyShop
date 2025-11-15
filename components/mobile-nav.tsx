// Mobile nav component with search bar
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { categories } from "./navbar";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 p-4">
          <SheetClose asChild>
            <Link href="/" className="text-lg font-medium">
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/products" className="text-lg font-medium">
              Products
            </Link>
          </SheetClose>
          <div>
            <h3 className="text-xs font-medium mb-2 text-muted-foreground">
              Categories
            </h3>
            {categories.map((category) => (
              <SheetClose asChild key={category.id}>
                <Link
                  href={category.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors block mb-1"
                >
                  {category.name}
                </Link>
              </SheetClose>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
