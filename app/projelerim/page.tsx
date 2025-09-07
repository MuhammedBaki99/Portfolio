"use client"

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SpotlightCard from "@/components/SpotlightCard";
import Link from "next/link";

const projects = [
  {
    image: "/tatlibahce.vercel.app_.png",
    logo: "/tatlibahcelogo.png",
    alt: "tatlı bahçe proje fotoğrafı",
    title: "Tatlı Bahçe",
    description: "Tatlı Bahçe için hazırlanan modern ve şık web sitesi.",
    languages: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    url: "https://tatlibahce.vercel.app/"
  },
  {
    image: "/beyranistanmenu.vercel.app_.png",
    logo: "/beyranistanlogo.png",
    alt: "Beyranistan Menü proje ekran görüntüsü",
    title: "Beyranistan Menü",
    description: "Restoran menü yönetimi için modern bir çözüm.",
    languages: ["Next.js", "TypeScript", "TailwindCSS"],
    url: "https://beyranistanmenu.vercel.app/"
  },
  {
    image: "/no-said-taboo.vercel.app_.png",
    logo: "/nosaidtabulogo.png",
    alt: "No Said Taboo proje ekran görüntüsü",
    title: "No Said Taboo",
    description: "Eğlenceli ve interaktif bir tabu oyunu projesi.",
    languages: ["Next.js", "TypeScript", "TailwindCSS", "Zustand"],
    url: "https://no-said-taboo.vercel.app/"
  },
  {
    image: "/rezervasyondemo.vercel.app_.png",
    logo: "/rezervasyondemologo.png",
    alt: "Rezervasyon Demo proje ekran görüntüsü",
    title: "Rezervasyon Demo",
    description: "Restoranlar için modern ve kullanıcı dostu rezervasyon sistemi.",
    languages: ["Next.js", "TypeScript", "TailwindCSS", "Zustand"],
    url: "https://rezervasyondemo.vercel.app/"
  },
  {
    image: "/tatlibahcemenuu-three.vercel.app_.png",
    logo: "/tatlibahcelogo.png",
    alt: "Tatlı Bahçe Menü proje ekran görüntüsü",
    title: "Tatlı Bahçe Menü",
    description: "Tatlı Bahçe için QR menü projesi. Restoran müşterileri için hızlı ve kolay menü erişimi.",
    languages: ["Next.js", "TypeScript", "TailwindCSS"],
    url: "https://tatlibahcemenuu-three.vercel.app/"
  },
  {
    image: "/www.yayladansofraya.com.tr_.png",
    logo: "/yayladansofrayalogo.png",
    alt: "Yayladan Sofraya proje ekran görüntüsü",
    title: "Yayladan Sofraya",
    description: "Yayladan Sofraya için hazırlanan doğal ve taze ürünlerin sunulduğu e-ticaret web sitesi.",
    languages: ["Next.js", "CSS"],
    url: "https://www.yayladansofraya.com.tr/"
  },
]
export default function ProjectPage() {
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.13,
          delay: 0.2
        }
      );
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto min-h-screen bg-background text-white py-16 px-4">
      <div className="flex justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-primary/80 transition-colors duration-200 mb-6"
        >
          <Icon icon="mdi:arrow-left" className="w-5 h-5" />
          Anasayfaya Dön
        </Link>
        <h2
          ref={titleRef}
          className="text-3xl lg:text-5xl font-bold mb-8 text-primary drop-shadow-lg"
        >
          Projelerim
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Link
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            ref={el => {
              cardsRef.current[idx] = el;
            }}
            className="overflow-hidden shadow-2xl rounded-3xl border border-primary/40 bg-gradient-to-br from-[#18181b] via-primary/10 to-[#23272f] flex flex-col group transition-transform duration-300 hover:scale-105"
            style={{ textDecoration: "none", opacity: 0, transform: "translateY(40px) scale(0.95)" }}
          >
            <SpotlightCard className="custom-spotlight-card h-full flex flex-col" spotlightColor="rgba(163, 37, 47, 1)">
              <div className="relative w-full h-60 md:h-72 lg:h-80 flex-shrink-0">
                <Image
                  src={project.image}
                  fill
                  alt={project.alt}
                  className="object-cover rounded-t-3xl"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority={idx === 0}
                  quality={90}
                />
                <div className="absolute top-4 right-4 bg-primary/95 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-xl backdrop-blur-md border border-white/10">
                  {project.title}
                </div>
              </div>
              <div className="p-7 flex flex-col gap-4 flex-1">
                <div className="flex-1 flex flex-col">
                  <p className="text-lg text-muted-foreground font-semibold leading-relaxed flex-1">{project.description}</p>
                </div>
                <div className="flex items-start gap-3 mt-3">
                  <div className="size-5 rounded-full bg-gradient-to-tr from-primary to-secondary animate-pulse shadow flex-shrink-0" />
                  <div className="flex flex-wrap gap-2">
                    {project.languages.map((lang) => (
                      <span
                        key={lang}
                        className="text-xs bg-primary/10 text-primary font-bold tracking-widest uppercase px-2 py-1 rounded shadow-sm border border-primary/20"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Link>
        ))}
      </div>
    </div>
  );
}