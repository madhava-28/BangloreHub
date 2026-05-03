import { redirect } from "next/navigation";

export default function PetServicesPage() {
  redirect("/");
}

export const metadata = {
  title: "Pet Services in Bangalore",
  description:
    "Find pet care services including grooming, boarding, and veterinary services in Bangalore.",
};
