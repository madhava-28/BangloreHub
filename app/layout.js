import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans"
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne"
});

export const metadata = {
  title: "BangloreHub — Your City, Simplified",
  description:
    "Discover top apps for Indian urban life across food delivery, transport, shopping, health, entertainment, and more.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "BangloreHub — Your City, Simplified",
    description:
      "Every app your city runs on. Explore curated apps across key daily-life categories in India.",
    url: "https://banglorehub.vercel.app/"
  },
  twitter: {
    card: "summary_large_image",
    title: "BangloreHub — Your City, Simplified",
    description: "Explore popular apps that power Indian urban life."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
