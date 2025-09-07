import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import ClickSpark from "@/components/reactbits/clickspark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammed Baki Çağlayan",
  description: "Merhaba! Ben Muhammed Baki Çağlayan. Frontend developer olarak modern, hızlı ve kullanıcı odaklı web arayüzleri geliştiriyorum. Portföyümde React, Next.js ve güncel web teknolojileriyle yaptığım projeleri inceleyebilirsiniz.",
  keywords: "Frontend Developer, Muhammed Baki Çağlayan, Web Geliştirici, React, Next.js, Portföy, JavaScript, TypeScript, UI, Web Tasarım",
  creator: "Muhammed Baki Çağlayan",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        > 
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
