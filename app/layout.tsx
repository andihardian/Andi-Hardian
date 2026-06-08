import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andi Hardiansya Permana — Portfolio",
  description: "IT Student & Developer from Batam. Fullstack, QA, Mobile, AI Integration.",
  keywords: ["Andi Hardiansya Permana", "portfolio", "developer", "Laravel", "Flutter", "QA", "Batam"],
  authors: [{ name: "Andi Hardiansya Permana" }],
  openGraph: {
    title: "Andi Hardiansya Permana — Portfolio",
    description: "Fullstack Developer, QA Engineer & Mobile Developer from Batam, Indonesia.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
