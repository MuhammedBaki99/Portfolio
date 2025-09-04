import Image from "next/image";
import SplitText from "../reactbits/SplitText";
import GooeyNav from "../reactbits/gooeynav";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Header() {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
  const links = [
    { icon: "mdi:linkedin", href: "#" },
    { icon: "mdi:github", href: "#" },
    { icon: "ph:read-cv-logo-duotone", href: "#" },
  ];
  return (
    <div className="w-fit flex justify-between items-center gap-20 space-x-2 mx-auto m-3 bg-card border-1 border-primary p-3 rounded-3xl">
      <div className="flex items-center gap-4">
        <Image src={"/logo.png"} width={50} height={50} alt="Site logosu: Muhammed Baki Çağlayan'ın kişisel logosu" />
        <SplitText
          text="Muhammed Baki Çağlayan"
          className="text-2xl font-semibold text-center text-foreground"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
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
      <div className="flex items-center gap-2">
        {
          links.map((x, i) =>
            <Link key={i} href={x.href} className="text-foreground">
              <Icon icon={x.icon} width="32" height="32" />
            </Link>)
        }
      </div>
    </div>
  )
}