import Link from "next/dist/client/link";

const categories = [
  { id: 1, name: "Electronics", href: "/category/electronics" },
  { id: 2, name: "Clothing", href: "/category/clothing" },
  { id: 3, name: "Home", href: "/category/home" },
];

export function Navbar() {
  return (
    <div className="border-b py-4 bg-background text-foreground shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div>
          <div className="flex items-center gap-6">
            <Link className="text-2xl font-bold" href="/">
              Store
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {categories.map((category) => (
                <Link
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  key={category.id}
                  href={category.href}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div>Right</div>
      </div>
    </div>
  );
}
