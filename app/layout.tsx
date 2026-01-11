import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bender SAAS - Premium Development Studio",
  description: "Crafting Digital Excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-700">
        {children}
      </body>
    </html>
  );
}
