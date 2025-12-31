"use client";

import { useEffect, useState } from "react";
import GetInTouchModal from "./GetInTouchModal";

export default function AutoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 800); // page load ke 0.8 sec baad

    return () => clearTimeout(timer);
  }, []);

  return (
    <GetInTouchModal open={open} onClose={() => setOpen(false)} />
  );
}
