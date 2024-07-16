import { SimpleWidget } from "@/components";

export default function MainPage() {
  return (
    <div className="p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span>Información general</span>
      <div className="flex flex-wrap py-2 gap-4">
        <SimpleWidget />
      </div>
    </div>
  );
}