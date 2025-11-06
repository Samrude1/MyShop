import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className="min-h-screen bg-white text-black antialiased">
        <nav className="bg-white border-b border-gray-200 py-4">
          <ul className="container mx-auto px-4 flex gap-4">
            <li>
              <Link href="/" className="text-black hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-black hover:text-gray-600">
                Products
              </Link>
            </li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
