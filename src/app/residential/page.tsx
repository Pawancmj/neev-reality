// app/commercial/page.tsx
import { Suspense } from "react";
import ResidentialClient from "./ResidentialClient";

export default function CommercialPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <ResidentialClient />
    </Suspense>
  );
}

