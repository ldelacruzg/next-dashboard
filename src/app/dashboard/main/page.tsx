import { WidgetGrid } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Page",
  description: "Información general",
}

export default function MainPage() {
  return (
    <div className="p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span>Información general</span>
      <WidgetGrid />
    </div>
  );
}