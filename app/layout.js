import localFont from "next/font/local";
import "./globals.css";
import Header from "./header/page";

const bainsley = localFont({
  src: "./fonts/Bainsley_Roman.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Muhammed Baki Çağlayan",
  description: "Merhaba! Ben Muhammed Baki, front-end geliştirme konusunda tutkulu bir yazılımcıyım. Modern web teknolojilerini kullanarak kullanıcı dostu ve performans odaklı arayüzler geliştiriyorum. Sayfamda, üzerinde çalıştığım projeler, öğrendiğim yeni teknikler ve kendi geliştirme süreçlerime dair yazdığım blog yazılarını bulabilirsiniz. Her zaman öğrenmeye ve gelişmeye açık biri olarak, projelerimde en iyi deneyimi sunmayı hedefliyorum.",
  keywords:"Front-end developer, web developer, web tasarım, yazılım geliştirici, React, JavaScript, HTML, CSS, responsive design, kullanıcı arayüzü, UI/UX design, front-end projeler, web uygulamaları, blog yazıları, portföy sitesi, modern web teknolojileri, front-end development, kodlama, web tasarım projeleri, JavaScript frameworkleri, React projeleri, yazılım geliştirme, freelance front-end developer, kişisel portföy, web geliştirme, front-end araçları, performans optimizasyonu, kullanıcı deneyimi, front-end performansı, TypeScript, Git, SCSS, SASS, HTML5, CSS3, frontend frameworks, front-end libraries, UI components, user interface design, front-end projects, single page applications, SPA, web animation, mobile-first design, clean code, coding best practices, blog yazma, frontend teknikleri, frontend portfolio, yazılım blog, teknoloji blog, frontend kariyer, freelance yazılım, web developer portfolio, yazılım mühendisliği, yazılım blog yazıları, proje geliştirme, SEO, SEO optimizasyonu, dijital tasarım, grafik tasarım, frontend trends, frontend best practices, freelance developer, yazılım öğrenme, frontend becerileri, online yazılım, yazılım projeleri, front-end coding, yazılım portföy, tasarım trendleri, yaratıcı web tasarım, front-end web development"
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${bainsley.className} `}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
