"use client"

import GooeyNav from "../reactbits/gooeynav";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import BubbleMenu from "../reactbits/bubblemenu";


export default function Header() {
  const items = [
    { label: "Anasayfa", href: "#anasayfa" },
    { label: "Hakkımda", href: "#hakkımda" },
    { label: "Yetenekler", href: "#skills" },
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

  const bubblemenuitems = [
    {
      label: "Anasayfa",
      href: "#anasayfa",
      ariaLabel: "Anasayfa",
      rotation: -8,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" }
    },
    {
      label: "Hakkımda",
      href: "#hakkımda",
      ariaLabel: "Hakkımda",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" }
    },
    {
      label: "Yetenekler",
      href: "#skills",
      ariaLabel: "Yetenekler",
      rotation: 8,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" }
    },
    {
      label: "Projelerim",
      href: "#",
      ariaLabel: "Projelerim",
      rotation: -8,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" }
    }
  ];
  return (
    <> 
      <div
        ref={headerRef}
        className="hidden md:flex w-full justify-between items-center gap-20 p-2 fixed top-0 bg-card z-99"
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
      <div className="md:hidden sticky top-0 z-99">
        <BubbleMenu
          items={bubblemenuitems}
          menuAriaLabel="Toggle navigation"
          menuBg="#ffffff"
          menuContentColor="#111111"
          useFixedPosition={false}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
      </div>
    </>
  );
}