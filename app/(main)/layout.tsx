import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "roommate - join",
  description: "An application for Room only :)",
  other: {
    "zalo-platform-site-verification": "M-spShx1Pcn-ojLch_nxNct3rrw1jGK6EJCq",
  },
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
