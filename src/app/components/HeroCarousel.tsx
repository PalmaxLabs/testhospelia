"use client";

import React from "react";
import Image from "next/image";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    alt: "Vista panorámica de Cali",
  },
];

export default function HeroCarousel() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0">
        <Image
          src={IMAGES[0].src}
          alt={IMAGES[0].alt}
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
      </div>
    </div>
  );
}
