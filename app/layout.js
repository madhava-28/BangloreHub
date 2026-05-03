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
  title: "Best Home & City Services in Bangalore | BangaloreHub",

  description:
    "Find all home and city services in Bangalore in one place. Discover maid services, electricians, cleaning, food delivery, transport, shopping, and more.",

  robots: "index, follow",

  keywords: [
    "Bangalore services",
    "home services Bangalore",
    "maid services Bangalore",
    "electricians Bangalore",
    "cleaning services Bangalore",
    "plumbers Bangalore",
    "local services Bangalore"
  ],

  openGraph: {
    title: "BangaloreHub – All Services in One Place",
    description:
      "Explore all services in Bangalore including home services, food, transport, shopping, and more.",
    url: "https://bengaluruhub.in",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BangaloreHub – Discover All Services",
    description:
      "Find and compare services across Bangalore. One platform for everything.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
