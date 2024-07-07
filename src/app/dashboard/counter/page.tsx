import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Counter Server Side",
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <span>Counter Page</span>
      <CartCounter value={20} />
    </div>
  );
}