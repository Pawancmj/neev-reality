"use client";

import { useEffect, useState } from "react";
import GetInTouchModal from "./GetInTouchModal";

type Props = {
  propertyTitle: string;
};

export default function AutoPopup({ propertyTitle }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000); // page load ke 5 sec baad popup

    return () => clearTimeout(timer);
  }, []);

  return (
    <GetInTouchModal
      open={open}
      onClose={() => setOpen(false)}
      propertyTitle={propertyTitle}
    />
  );
}
