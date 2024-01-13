import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "roommate",
  description: "An application for Room only :)",
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
