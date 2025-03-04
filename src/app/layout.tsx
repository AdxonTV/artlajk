
import type { Metadata } from "next";
import Loading from "./loading";
import { Suspense } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:"Artlajk - Malownia", 
   template: "%s | Artlajk - Malownia",
  },
  description: "Zajęcia plastyczne dla dzieci i dorosłych w chojnicach, prowadzone przez Elżbietę Jakubowską.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body>{children}</body>
      </Suspense>
    </html>
  );
}
