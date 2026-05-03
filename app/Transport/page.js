import { redirect } from "next/navigation";

export default function EntertainmentPage() {
  redirect("/");
}

export const metadata = {
  title: "Entertainment Options in Bangalore",
  description:
    "Explore entertainment apps, movies, events, and fun activities in Bangalore.",
};
