"use client";

import { useEffect, useState } from "react";
import GetInTouchModal from "./GetInTouchModal";

type Props = {
  propertyTitle: string;
  notifyTimerDone?: () => void;
};

export default function AutoPopup({
  propertyTitle,
  notifyTimerDone,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      notifyTimerDone?.(); // ✅ ab error nahi
    }, 5000);

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
