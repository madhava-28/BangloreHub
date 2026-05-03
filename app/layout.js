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
  title: "BangloreHub — ALL Home & City Services in Banglore| inone platform for Your City, Simplified",
  description:
    "Discover all services in Bangalore in one place. Find maid services, electricians, cleaning, food delivery, transport, shopping, and more. Compare and choose the best options near you.",
  robots: "index, follow",
  keywords: [
    "Bangalore services",
    "home services Bangalore",
    "maid services Bangalore",
    "electricians Bangalore",
    "cleaning services Bangalore",
    "apps in Bangalore",
    "best services in Bangalore",
    "local services Bangalore",
    "Bangalore service platform",
    "Cleaning Services",
    "Maid Services",
    "Electricians",
    "Plumbers",
    "Cook Services",
    "Pet Services",
    "Home Repair",
    "Maid Services in Whitefield Bangalore",
    "Part Time Maid Bangalore Cost",
    "Full Time Maid in Bangalore near me",
    "Home Maid Services in HSR Layout",
    "Cook Maid Bangalore Price",
    "Daily Maid Services Bangalore",
    "House Cleaning Maid Bangalore",
    "Live in Maid Bangalore",
    "Best Maid Agency in Bangalore",
    "Affordable Maid Services Bangalore",

    "Electricians in Whitefield Bangalore",
    "Emergency Electrician Bangalore",
    "Home Repair Electrician Bangalore",
    "Electrician Charges Bangalore per Hour",
    "Wiring Service Bangalore",
    "Best Electrician near Me Bangalore",

    "Home Cleaning Services Bangalore Price",
    "Deep Cleaning Services Whitefield",
    "Bathroom Cleaning Bangalore",
    "Kitchen Cleaning Services Bangalore",
    "Sofa Cleaning Bangalore Cost",
    "Full House Cleaning Bangalore",

    "Cook Services in Bangalore near Me",
    "Home Cook Bangalore monthly",
    "Part Time Cook Bangalore",
    "South Indian Cook Bangalore",
    "Cook Salary Bangalore",

    "Pet Grooming Bangalore Home Service",
    "Dog Boarding Bangalore Price",
    "Pet Care Services Bangalore",
    "Dog Walking Services Bangalore",

    "Packers and Movers Bangalore Charges",
    "House Shifting Bangalore Cost",
    "Movers Whitefield Bangalore",
    "Local Shifting Services Bangalore",

    "Best Cab Services in Bangalore",
    "Auto Booking Apps Bangalore",
    "Cheap Taxi Bangalore",
    "Airport Taxi Bangalore Price",

    "Grocery Delivery Apps Bangalore",
    "10 Minute Delivery Bangalore Apps",
    "Best Grocery Apps Bangalore",
    "Online Shopping Bangalore Delivery",

    "Food Delivery Apps Bangalore List",
    "Best Food Delivery Bangalore",
    "Late Night Food Delivery Bangalore",
    "Cheap Food Delivery Bangalore",

    "PG in Whitefield Bangalore Price",
    "Affordable PG Bangalore for Working Professionals",
    "Rental Rooms Bangalore near IT Parks"
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default"
  },
  openGraph: {
    title: "BangaloreHub – All Services in One Place",
    description:
      "Explore all services in Bangalore including home services, food, transport, shopping, and more. Your one-stop platform.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
