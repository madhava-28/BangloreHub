import { redirect } from "next/navigation";

export default function HealthPage() {
  redirect("/");
}
export const metadata = {
  title: "Health Services in Bangalore",
  description:
    "Discover healthcare services, fitness apps, hospitals and wellness services in Bangalore.",
};

