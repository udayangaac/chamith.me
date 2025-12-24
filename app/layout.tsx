import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chamith Udayanga",
  description:
    "Official personal page of Chamith Udayanga — Software Engineer specializing in Golang, distributed systems, and backend development.",
  keywords:
    "Chamith Udayanga, Senior Software Engineer, Golang Developer, Backend Engineer, Distributed Systems, chamith.dev, chamith.com",
  openGraph: {
    title: "Chamith Udayanga | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in Golang, backend engineering, and distributed systems.",
    url: "https://chamith.me",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
