import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import "./globals.css";

const gothic = Gothic_A1({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-gothic'
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gothic.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
