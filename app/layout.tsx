import type { Metadata } from "next";
import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Parva Networks Sports and Entertainment Pvt. Ltd.",
  description:
    "Parva Networks Sports and Entertainment Pvt. Ltd. builds world-class intellectual properties across dance, music, sports and digital entertainment — flagship property: India Dance Premier League (IDPL). Connecting Passion. Creating Legacies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
