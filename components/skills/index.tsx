
import LogoLoop from '../reactbits/logoloop';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const techLogos = [
  { node: <Icon icon="vscode-icons:file-type-html" width="80" height="80" />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <Icon icon="devicon:css3" width="80" height="80" />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <Icon icon="logos:javascript" width="80" height="80" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <Icon icon="logos:react" width="80" height="80" />, title: "React", href: "https://reactjs.org/docs/getting-started.html" },
  { node: <Icon icon="logos:react" width="80" height="80" />, title: "ReactNative", href: "https://reactnative.dev/docs/getting-started" },
  { node: <Icon icon="logos:nextjs-icon" width="80" height="80" />, title: "Next.js", href: "https://nextjs.org/docs" },
  { node: <Icon icon="logos:typescript-icon" width="80" height="80" />, title: "TypeScript", href: "https://www.typescriptlang.org/docs/" },
  { node: <Icon icon="logos:figma" width="80" height="80" />, title: "Figma", href: "https://help.figma.com/hc/en-us" },
  { node: <Image src="/tanstackLogo.png" alt="Tanstack" width={80} height={80} />, title: "Tanstack", href: "https://tanstack.com/" },
  { node: <Icon icon="devicon:swiper" width="80" height="80" />, title: "Swiper", href: "https://swiperjs.com/react" },
  { node: <Icon icon="logos:ant-design" width="80" height="80" />, title: "AntDesign", href: "https://ant.design/docs/react/introduce" },
  { node: <Icon icon="devicon-plain:zustand" width="80" height="80" />, title: "Zustand", href: "https://docs.pmnd.rs/zustand/getting-started/introduction" },
  { node: <Icon icon="logos:zod" width="80" height="80" />, title: "Zod", href: "https://zod.dev/" },
];

export default function Skills() {
  return (
    <div id='skills' className="h-fit relative overflow-hidden text-white">
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={108}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
      />
    </div>
  )
}