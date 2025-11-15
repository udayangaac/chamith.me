import type { Metadata } from "next";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chamith Udayanga",
  description: "Software engineer and technical lead from Sri Lanka.",
  openGraph: {
    title: "Chamith Udayanga",
    description: "Software engineer and technical lead from Sri Lanka.",
    url: "https://chamith.me",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
