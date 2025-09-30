"use client";
import { faqData } from "@/data/faq.data";
import { useState } from "react";
import FaqItem from "./FaqItem";

export default function FaqList() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelectId = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className=" flex flex-col gap-4 md:gap-6 lg:gap-10">
      {faqData.map((item) => (
        <FaqItem
          key={item.id}
          title={item.title}
          detail={item.detail}
          isOpen={selectedId === item.id}
          onSelectId={() => handleSelectId(item.id)}
        />
      ))}
    </div>
  );
}
