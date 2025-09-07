import Threads from "../reactbits/Threads";
import SplitText from "../reactbits/SplitText";
import { Icon } from "@iconify/react";
import Link from "next/link";
import TextType from "../reactbits/Texttype"; 

export default function Hero() {
  const links = [
    { icon: "mdi:linkedin", href: "https://www.linkedin.com/in/muhammed-baki-%C3%A7a%C4%9Flayan-a2110128b/" },
    { icon: "mdi:github", href: "https://github.com/MuhammedBaki99" },
    { icon: "ph:read-cv-logo-duotone", href: "/CV.pdf" },
  ];
  return (
    <section id="anasayfa" className="size-full relative min-h-screen">
      <Threads
        amplitude={1}
        distance={0}
        enableMouseInteraction={true}
      />
      <div className="flex flex-col gap-4 absolute top-1/2 left-2 md:left-1/15 transform -translate-y-1/2"> 
        <SplitText
          text="Muhammed Baki"
          className="text-2xl md:text-4xl font-normal text-center text-foreground"
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
          className="text-3xl md:text-6xl font-extrabold text-center text-muted-foreground pb-3" 
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
          className="text-lg md:text-3xl font-normal text-start text-foreground bg-primary p-1"
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        /> 
      </div>

      <div className="flex items-center gap-2 absolute left-1/15 bottom-10">
        {
          links.map((x, i) =>
            <Link key={i} href={x.href} target="_blank" className="text-foreground">
              <Icon icon={x.icon} width="40" height="40" />
            </Link>)
        }
      </div>
    </section>
  )
}