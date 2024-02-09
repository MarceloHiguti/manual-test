import type { Metadata } from "next";
import "/src/styles/globals.css";
import "/src/styles/styles.css";

export const metadata: Metadata = {
  title: "Manual.co",
  description: "Manual landing page test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
