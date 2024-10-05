"use client";

import Image from "next/image";
import Code, { Blog, Dark, Home, Info } from "../svgfiles/page";
import "./header.css"; 
import Link from "next/link";

export default function Header() { 
  return (
    <header>
      <Link href="/"><Image src="/img/aaaaa.png" alt="logo resmi" width={85} height={85} /></Link>
      <div className="navbar">
        <a href="/"><Home /> <span>Anasayfa</span></a>
        <a href="#aboutus"><Info /> <span>Hakkımda</span></a>
        <a href="#project"><Code /><span>Projelerim</span></a>
        <a href="#blog"><Blog /><span> Blog Yazılarım</span></a>
      </div>
    </header>
  );
}
