import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Counter Server Side",
}

const getInitCount = async (): Promise<number> => {
  const resp = await fetch("http://localhost:3000/api/counter");
  const { count } = await resp.json() as { count: number };
  return count;
}

export default async function CounterPage() {
  const count = await getInitCount();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <span>Counter Page</span>
      <CartCounter value={count} />
    </div>
  );
}