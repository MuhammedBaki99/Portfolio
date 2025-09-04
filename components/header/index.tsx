"use client"
 
import GooeyNav from "../reactbits/gooeynav";
import { useRef, useEffect } from "react";
import gsap from "gsap";


export default function Header() {
  const items = [
    { label: "Anasayfa", href: "#" },
    { label: "Hakkımda", href: "#" },
    { label: "Yetenekler", href: "#" },
    { label: "Projelerim", href: "#" },
  ];
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.in"
        }
      );
    }
  }, []);

  return (
    <div
      ref={headerRef}
      className="w-full flex justify-between items-center gap-20 p-2"
    >
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
}