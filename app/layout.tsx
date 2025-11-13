import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import { ModeToggle } from "@/components/mode-toggle";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "E-Commerce Store",
    template: "%s | E-Commerce Store",
  },
  description: "A simple e-commerce store built with Next.js and Tailwind CSS",
  openGraph: {
    title: "E-Commerce Store",
    description:
      "A simple e-commerce store built with Next.js and Tailwind CSS",
    url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
    siteName: "E-Commerce Store",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fonts = `${geistSans.variable} ${geistMono.variable}`;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fonts} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="border-b py-4 bg-background text-foreground shadow-sm">
            <Navbar />
            <nav className="container mx-auto px-4 flex gap-4">
              <Link
                href="/"
                className="hover:text-muted-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="hover:text-muted-foreground transition-colors"
              >
                Products
              </Link>
              <ModeToggle />
            </nav>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
