import { redirect } from "next/navigation";

export default function PgRentPage() {
  redirect("/");
}

export const metadata = {
  title: "PG and Rental Services in Bangalore",
  description:
    "Find PG accommodations and rental homes in Bangalore with ease.",
};

