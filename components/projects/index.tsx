import Image from "next/image";
import CardSwap, { Card } from "../reactbits/swapcard";
import Link from "next/link";
import { Icon } from "@iconify/react";

const projects = [
  {
    image: "/tatlibahce.vercel.app_.png",
    alt: "tatlı bahçe proje fotoğrafı",
    title: "Tatlı Bahçe",
    description: "Tatlı Bahçe için hazırlanan modern ve şık web sitesi.",
    languages: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
  },
  {
    image: "/beyranistanmenu.vercel.app_.png",
    alt: "Beyranistan Menü proje ekran görüntüsü",
    title: "Beyranistan Menü",
    description: "Restoran menü yönetimi için modern bir çözüm.",
    languages: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    image: "/no-said-taboo.vercel.app_.png",
    alt: "No Said Taboo proje ekran görüntüsü",
    title: "No Said Taboo",
    description: "Eğlenceli ve interaktif bir tabu oyunu projesi.",
    languages: ["Next.js", "TypeScript", "TailwindCSS", "Zustand"],
  },
];

export default function Projects() {
  return (
    <div id="projelerim" className="h-[700px] relative overflow-hidden text-white">
      <div className="absolute top-4 left-2 lg:top-32 lg:left-32 z-10 max-w-2xl text-left">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-primary drop-shadow-lg">
          Projelerim
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground font-medium drop-shadow">
          Modern, hızlı ve kullanıcı odaklı web projelerimi aşağıda inceleyebilirsiniz. Her biri özenle tasarlanmış ve en güncel teknolojilerle geliştirilmiştir.
        </p>
        <Link
          href="/projelerim"
          className="inline-flex items-center gap-2 mt-6 p-2 rounded-lg bg-primary text-white font-semibold shadow-lg transition hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <Icon icon="solar:documents-bold" width="32" height="32" />
          Tüm Projelerimi Görüntüle
        </Link>
      </div>
      <CardSwap
        cardDistance={70}
        verticalDistance={80}
        delay={6000}
        pauseOnHover={true}
      >
        {projects.map((project, idx) => (
          <Card
            key={project.title}
            className="overflow-hidden shadow-2xl rounded-3xl border border-primary/40 bg-gradient-to-br from-[#18181b] via-primary/10 to-[#23272f] flex flex-col justify-between  group"
          >
            <div className="relative w-full h-60 md:h-72 lg:h-80">
              <Image
                src={project.image}
                fill
                alt={project.alt}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority={idx === 0}
                quality={90}
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-t-3xl pointer-events-none" />
              <div className="absolute top-4 right-4 bg-primary/95 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-xl backdrop-blur-md border border-white/10">
                {project.title}
              </div>
            </div>
            <div className="p-7 flex flex-col gap-4">
              <p className="text-lg text-muted-foreground font-semibold leading-relaxed">{project.description}</p>
              <div className="flex items-center gap-3 mt-3 flex-wrap">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-primary to-secondary animate-pulse shadow" />
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
          </Card>
        ))}
      </CardSwap>
    </div>
  );
}