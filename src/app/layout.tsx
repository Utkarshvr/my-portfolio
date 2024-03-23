import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utkarsh | Full Stack Dev",
  description:
    "Hi, I am Utkarsh. This is my personal portfolio website where I have show cased my best projects consisting of websites and apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} dark`}>{children}</body>
    </html>
  );
}
