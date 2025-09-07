"use client"

import InfiniteMenu from "@/components/reactbits/infinitemenu";

export default function ProjectPage() {
  const items = [
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

  return (
    <div className="relative h-screen text-white">
      <InfiniteMenu
        items={items.map(item => ({
          ...item,
          link: item.url,
          description: item.subtitle
        }))}
      />
    </div>
  );
}