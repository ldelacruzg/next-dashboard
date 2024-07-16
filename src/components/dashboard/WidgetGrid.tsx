'use client';

import { useCounterStore } from "@/store"
import { SimpleWidget } from "./SmpleWidget"

export const WidgetGrid = () => {
  const counter = useCounterStore(state => state.count)

  return (
    <div className="flex flex-wrap py-2 gap-4">
      <SimpleWidget
        label="Contador"
        title={`${counter}`}
        subtitle="Beateful counter"
        href="/dashboard/counter" />
    </div>
  )
}