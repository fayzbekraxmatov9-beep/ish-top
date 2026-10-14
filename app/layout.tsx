import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "IshTop — Ish toping",
  description: "O'zbekistonda ish topish platformasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>
        <Header />
        {children}
      </body>
     <Footer />
    </html>
  );
}