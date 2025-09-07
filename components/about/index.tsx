
import { Image } from "antd";
import React from "react";

export default function About() {
  return (
    <section id="hakkımda" className="flex flex-col lg:flex-row items-center bg-card justify-between min-h-screen text-white ">

      <div className="lg:w-2/3 mb-10 lg:mb-0 p-2 lg:pl-40 flex flex-col items-start justify-around h-screen">
        <div>
          <h2 className="text-4xl font-bold mb-2 border-b-2 border-primary inline-block">
            Hakkımda
          </h2>
          <p className="text-sm lg:text-md text-gray-400 mb-8">muhammedbakicaglayan@gmail.com</p>
        </div>
        <div className="w-full lg:w-2/3 text-justify lg:text-xl text-gray-200 leading-relaxed space-y-4">
          <p>
            Modern frontend dünyasında <span className="font-semibold text-primary">TypeScript</span> ve <span className="font-semibold text-primary">React</span> tabanlı uygulamalar geliştiriyor, temiz ve sürdürülebilir kod yazmaya özen gösteriyorum.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold  text-primary">Next.js</span> ile SEO uyumlu, SSR destekli projeler geliştiriyorum.
            </li>
            <li>
              <span className="font-semibold  text-primary">Tailwind CSS</span> ve <span className="font-semibold  text-primary">Shadcn UI</span> ile modern ve şık arayüzler tasarlıyorum.
            </li>
            <li>
              <span className="font-semibold  text-primary">Zustand</span> (state yönetimi), <span className="font-semibold  text-primary">TanStack Query</span> / <span className="font-semibold  text-primary">Supabase</span> (veri etkileşimi), <span className="font-semibold  text-primary">Formik</span> / <span className="font-semibold  text-primary">Yup</span> / <span className="font-semibold  text-primary">Zod</span> (form yönetimi) gibi araçlarda deneyimliyim.
            </li>
          </ul>
          <p>
            <span className="italic text-gray-400">Açık kaynak projeler üretmekten, kendimi güncel tutmaktan ve ekip içinde güçlü iletişim kurmaktan keyif alırım.</span>
          </p>
        </div>

        <div className="mt-10 text-gray-400">
          <p>Kartal, İstanbul</p>
          <p>Hürriyet Mah. 34800</p>
        </div>
      </div>

      {/* Sağ bölüm */}
      <div className="lg:w-1/3 flex justify-center">
        <Image
          src="/profil.jpeg"
          alt="Profile"
          className="size-screen lg:h-screen rounded-lg shadow-lg"
        />

      </div>
    </section>
  );
};

