// app/commercial/page.tsx
import { Suspense } from "react";
import CommercialClient from "./CommercialClient";

export default function CommercialPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <CommercialClient />
    </Suspense>
  );
}
