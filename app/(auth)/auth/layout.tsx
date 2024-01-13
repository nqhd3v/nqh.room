import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "roommate - auth",
  description: "An application for Room only :)",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
