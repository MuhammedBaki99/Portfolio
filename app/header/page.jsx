"use client";

import Image from "next/image";
import Code, { Blog, Dark, Info } from "../svgfiles/page";
import "./header.css"; 

export default function Header() { 
  return (
    <header>
      <a href="#"><Image src="/img/aaaaa.png" alt="logo resmi" width={85} height={85} /></a>
      <div className="navbar">
        <a href="#aboutus"><Info /> <span>Hakkımda</span></a>
        <a href="#project"><Code /><span>Projelerim</span></a>
        <a href="#blog"><Blog /><span> Blog Yazılarım</span></a>
      </div>
    </header>
  );
}
