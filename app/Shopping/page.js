import { redirect } from "next/navigation";

export default function ShoppingPage() {
  redirect("/");
}

export const metadata = {
  title: "Shopping Services in Bangalore",
  description:
    "Find shopping apps and online stores for groceries, fashion, electronics and more in Bangalore.",
};

