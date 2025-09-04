import Threads from "../reactbits/Threads";
import SplitText from "../reactbits/SplitText";
import { Icon } from "@iconify/react";
import Link from "next/link";
import TextType from "../reactbits/Texttype";
import Image from "next/image";

export default function Hero() {
  const links = [
    { icon: "mdi:linkedin", href: "#" },
    { icon: "mdi:github", href: "#" },
    { icon: "ph:read-cv-logo-duotone", href: "#" },
  ];
  return (
    <div className="size-full relative py-20">
      <Threads
        amplitude={1}
        distance={0}
        enableMouseInteraction={true}
      />
      <div className="flex flex-col gap-4 absolute top-1/2 left-1/15 transform -translate-y-1/2"> 
        <SplitText
          text="Muhammed Baki"
          className="text-4xl font-normal text-center text-foreground"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="start"
        />
        <SplitText
          text="Caglayan"
          className="text-6xl font-extrabold text-center text-foreground pb-3" 
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="start"
        />
        <TextType
          text={["Frontend Developer", "Modern ve hızlı web çözümleri", "Hayalinizdeki siteye bir adım daha!"]}
          className="text-3xl font-normal text-start text-foreground bg-primary p-1"
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        /> 
      </div>

      <div className="flex items-center gap-2 absolute left-1/15 bottom-0">
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