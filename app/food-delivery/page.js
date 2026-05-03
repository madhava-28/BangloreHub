import categories from "../../categories-data";
import CategorySection from "../../components/CategorySection";

export const metadata = {
  title: "Food Delivery Services in Bangalore",
  description:
    "Explore food delivery apps in Bangalore like Swiggy, Zomato and more.",
};

export default function FoodDeliveryPage() {
  const category = categories.find(
    (c) => c.name === "Food Delivery"
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Food Delivery Services in Bangalore</h1>

      <CategorySection category={category} />
    </div>
  );
}