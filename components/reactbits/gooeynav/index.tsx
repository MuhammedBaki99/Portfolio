"use client"
import React, { useRef, useEffect, useState } from 'react';
import gsap from "gsap";

interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  initialActiveIndex = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

  // GSAP ile underline/indicator animasyonu
  const animateIndicator = (toIndex: number) => {
    if (!navRef.current || !indicatorRef.current) return;
    const liEls = navRef.current.querySelectorAll('li');
    const targetLi = liEls[toIndex] as HTMLElement;
    if (!targetLi) return;

    const navRect = navRef.current.getBoundingClientRect();
    const liRect = targetLi.getBoundingClientRect();

    const left = liRect.left - navRect.left;
    const width = liRect.width;

    gsap.to(indicatorRef.current, {
      x: left,
      width: width,
      duration: 0.5,
      ease: "power3.out"
    });
  };

  // İlk render ve activeIndex değişiminde indicator'ı konumlandır
  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;
    // İlk konumlandırma
    animateIndicator(activeIndex);
    // Resize'da da güncelle
    const handleResize = () => animateIndicator(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, [activeIndex, navRef.current]);

  // İlk renderda indicator'ı görünür yap
  useEffect(() => {
    if (indicatorRef.current) {
      gsap.set(indicatorRef.current, { opacity: 1 });
    }
  }, []);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    e.preventDefault();

    // Eğer href bir id içeriyorsa (ör. #hakkımda)
    const targetId = items[index].href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" }); // yumuşak scroll
    }

    // Active state ve indicator animasyonu
    if (activeIndex !== index) {
      setActiveIndex(index);
      animateIndicator(index);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      items.forEach((item, index) => {
        const el = document.getElementById(item.href.replace("#", ""));
        if (el) {
          const rect = el.getBoundingClientRect();
          // Section üstten 1/3 viewport içindeyse aktif say
          if (rect.top <= window.innerHeight / 3 && rect.bottom > window.innerHeight / 3) {
            setActiveIndex(index);
            animateIndicator(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);


  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (activeIndex !== index) {
        setActiveIndex(index);
        animateIndicator(index);
      }
    }
  };

  return (
    <>
      <style>
        {`
          .gooeynav-ul {
            position: relative;
            z-index: 3;
          }
          .gooeynav-li {
            position: relative;
            cursor: pointer;
            border-radius: 9999px;
            font-size: 1.25rem;
            color: white;
            padding: 0.25rem 0.75rem;
            transition: color 0.3s;
            outline: none;
            z-index: 3;
          }
          .gooeynav-li.active {
            color: #0f172a;
            font-weight: bold;
          }
          .gooeynav-indicator {
            position: absolute;
            left: 0;
            top: 50%;
            height: 2.5rem;
            background: linear-gradient(90deg, #fff 60%, #e0e7ff 100%);
            border-radius: 9999px;
            z-index: 2;
            transform: translateY(-50%);
            box-shadow: 0 2px 16px 0 rgba(0,0,0,0.08);
            opacity: 0;
            pointer-events: none;
            will-change: transform, width;
          }
        `}
      </style>
      <div className="relative" ref={containerRef}>
        <nav className="flex relative" style={{ transform: 'translate3d(0,0,0.01px)' }}>
          <ul
            ref={navRef}
            className="gooeynav-ul flex gap-8 list-none relative"
            style={{
              color: 'white',
              padding: 0,
              margin: 0,
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={`gooeynav-li ${activeIndex === index ? 'active' : ''}`}
                tabIndex={0}
              >
                <a
                  href={item.href}
                  onClick={e => handleClick(e, index)}
                  onKeyDown={e => handleKeyDown(e, index)}
                  className="outline-none py-1 px-2 inline-block"
                  tabIndex={-1}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <div
              ref={indicatorRef}
              className="gooeynav-indicator"
              style={{
                width: 0,
                opacity: 0,
                transition: "background 0.3s"
              }}
            />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default GooeyNav;
