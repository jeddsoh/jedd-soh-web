import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Nav from "./components/nav";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const figtree = Figtree({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jedd Soh",
  description: "My software development portfolio. Built using Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg" sizes="32x32" />
      </head>
      <body
        className={`${figtree.className} dark text-foreground bg-background min-h-screen px-4 md:px-0`}
      >
        <Providers>
          <Nav />
          <main className="z-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
