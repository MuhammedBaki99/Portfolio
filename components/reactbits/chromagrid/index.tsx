"use client"

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export interface ChromaItem {
  image: string;
  title: string;
  subtitle?: string;
  handle?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
  alt?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = '',
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  // Demo data, matches @file_context_0 structure
  const demo: ChromaItem[] = [
    {
      image: "/tatlibahce.vercel.app_.png",
      title: "Tatlı Bahçe",
      subtitle: "Tatlı Bahçe için hazırlanan modern ve şık web sitesi.",
      handle: "Next.js, TypeScript, TailwindCSS, Supabase",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://tatlibahce.vercel.app/"
    },
    {
      image: "/beyranistanmenu.vercel.app_.png",
      title: "Beyranistan Menü",
      subtitle: "Restoran menü yönetimi için modern bir çözüm.",
      handle: "Next.js, TypeScript, TailwindCSS",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://beyranistanmenu.vercel.app/"
    },
    {
      image: "/no-said-taboo.vercel.app_.png",
      title: "No Said Taboo",
      subtitle: "Eğlenceli ve interaktif bir tabu oyunu projesi.",
      handle: "Next.js, TypeScript, TailwindCSS, Zustand",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: "https://no-said-taboo.vercel.app/"
    },
    {
      image: "/rezervasyondemo.vercel.app_.png",
      title: "Rezervasyon Demo",
      subtitle: "Restoranlar için modern ve kullanıcı dostu rezervasyon sistemi.",
      handle: "Next.js, TypeScript, TailwindCSS, Zustand",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://rezervasyondemo.vercel.app/"
    },
    {
      image: "/tatlibahcemenuu-three.vercel.app_.png",
      title: "Tatlı Bahçe Menü",
      subtitle: "Tatlı Bahçe için QR menü projesi. Restoran müşterileri için hızlı ve kolay menü erişimi.",
      handle: "Next.js, TypeScript, TailwindCSS",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #10B981, #000)",
      url: "https://tatlibahcemenuu-three.vercel.app/"
    },
    {
      image: "/www.yayladansofraya.com.tr_.png",
      title: "Yayladan Sofraya",
      subtitle: "Yayladan Sofraya için hazırlanan doğal ve taze ürünlerin sunulduğu e-ticaret web sitesi.",
      handle: "Next.js, TypeScript, TailwindCSS",
      borderColor: "#C19A6B",
      gradient: "linear-gradient(145deg, #C19A6B, #000)",
      url: "https://www.yayladansofraya.com.tr/"
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn;
    setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = e => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full flex flex-wrap justify-center items-start gap-6 ${className}`}
      style={
        {
          '--r': `${radius}px`,
          '--x': '50%',
          '--y': '50%'
        } as React.CSSProperties
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          className="group relative flex flex-col justify-between w-[300px]  overflow-hidden shadow-2xl rounded-3xl border border-primary/40 bg-gradient-to-br from-[#18181b] via-primary/10 to-[#23272f] cursor-pointer transition-transform duration-300 hover:scale-105"
          style={
            {
              '--spotlight-color': 'rgba(255,255,255,0.3)',
              borderColor: c.borderColor || undefined,
              background: c.gradient || undefined,
            } as React.CSSProperties
          }
        >
          {/* Spotlight hover effect */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
            }}
          />
          {/* Image */}
          <div className="relative w-full h-60 md:h-72 lg:h-80">
            <img
              src={c.image}
              alt={c.alt || c.title}
              loading="lazy"
              className="object-cover w-full h-full"
              style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-t-3xl pointer-events-none" />
            <div className="absolute top-4 right-4 bg-primary/95 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-xl backdrop-blur-md border border-white/10">
              {c.title}
            </div>
          </div>
          {/* Card content */}
          <div className="p-7 flex flex-col gap-4 flex-1">
            <p className="text-lg text-muted-foreground font-semibold leading-relaxed">{c.subtitle}</p>
            {c.handle && (
              <div className="flex items-center gap-3 mt-3">
                <span className="inline-block w-5 rounded-full bg-gradient-to-tr from-primary to-secondary animate-pulse shadow" />
                <div className="flex flex-wrap gap-2">
                  {c.handle.split(',').map((lang) => (
                    <span
                      key={lang.trim()}
                      className="text-xs bg-primary/10 text-primary font-bold tracking-widest uppercase px-2 py-1 rounded shadow-sm border border-primary/20"
                    >
                      {lang.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      ))}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)'
        }}
      />
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
          opacity: 1
        }}
      />
    </div>
  );
};

export default ChromaGrid;
