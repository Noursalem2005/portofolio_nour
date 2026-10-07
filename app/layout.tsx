import type { Metadata } from "next";
import { Instrument_Serif, Manrope, Caveat } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nour Salem — Software Engineer",
  description:
    "Software Engineer specializing in backend systems, distributed architectures, high-throughput APIs, and automated solutions.",
  keywords: [
    "Nour Salem",
    "Software Engineer",
    "Backend Engineer",
    "Distributed Systems",
    "Node.js",
    "NestJS",
    "RabbitMQ",
    "Redis",
    "TypeScript",
  ],
  authors: [{ name: "Nour Salem" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable} ${caveat.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#121514] text-[#F2E8DA] font-sans flex flex-col selection:bg-[#B96F4D] selection:text-[#121514]">
        {children}
      </body>
    </html>
  );
}
