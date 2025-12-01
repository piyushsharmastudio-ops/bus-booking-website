import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "piyush sharma bus  - Low cost travel in India by bus",
  description: "Book affordable bus tickets across India with FlixBus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
