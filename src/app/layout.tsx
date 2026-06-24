import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "LUMIÈRE | Fine Dining",
  description: "Experience quiet luxury. Secure your dining experience with us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" data-scroll-behavior="smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=Libre+Caslon+Text:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

        {/* Extracted CSS and Tailwind config */}
        <link rel="stylesheet" href="/css/style.css" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script src="/js/tailwind-config.js"></script>
        <script src="/js/script.js" defer></script>
      </head>
      <body className="bg-background text-on-background font-body-md antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed min-h-screen flex flex-col">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
