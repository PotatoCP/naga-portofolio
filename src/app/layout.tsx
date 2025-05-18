import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import "nes.css/css/nes.min.css";

const pressStart2p = Press_Start_2P({weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Naga's Porto",
  description: "This is a personal portofolio for Kenzie Raditya Tirtarahardja with 8-bit theme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2p.className}`}
      >
        {children}
      </body>
    </html>
  );
}
