import { CV, Next } from "@/app/svgfiles/page";
import Image from "next/image";
import "./hero.css"

export default function Hero() {
  return (
    <>

      <a name="aboutus"></a>
      <div className="hero">
        <div className="hero-text">
          <h1>Herkese Selamlar Ben Muhammed Baki</h1> <br />
          2022 yılında Bolu Abant İzzet Baysal Üniversitesi Gerede Meslek Yüksekokulunda Bilgisayar Programcılığı
          bölümünden mezun oldum. <br /><br />


          Front-end Developer olarak ilerlemek için öğrenmem gereken dilleri öğrenmeye başladım ilerleme kaydettikden
          sonra sağlam bir eğitim almam gerektiğini düşündüm ve karşıma Acunmedya Akademi çıktı ve dedim ki neden olmasın
          hemen başvurdum ve değerli hocalarım sayesinde daha kaliteli bir eğitim alarak emin adımlarla yolculuğuma devam
          ediyorum...
          <div className="social">
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/muhammed-baki-%C3%A7a%C4%9Flayan-a2110128b/" target="_blank">
                <Image width={30} height={30} src="./img/linked.svg" alt="" />
                <h3>Linkedin</h3>
              </a>
            </div>
            <div className="github">
              <a href="https://github.com/MuhammedBaki99" target="_blank">
                <Image width={30} height={30} src="./img/github-logo.svg" alt="" />
                <h3>Github</h3>
              </a>
            </div>
            <div className="cv">
              <a href="/docs/Hakkımda.pdf" target='_blank'>
                <CV />
                <h3>CV</h3>
              </a>
            </div>
          </div>

        </div>
        <div className="hero-img">
          <Image width={600} height={600} src="/img/hero1.jpeg" />
        </div>
        <div className="skill">
          <span>
            <h1>Yeteneklerim</h1>
          </span>
          <span>
            <Image width={30} height={30} src="/img/html.png" alt="html logosu" />
            <h2>HTML</h2>
          </span>
          <span>
            <Image width={30} height={30} src="/img/css.png" alt="css logosu" />
            <h2>CSS</h2>
          </span>
          <span>
            <Image width={30} height={30} src="/img/javascript.png" alt="javascript logosu" />
            <h2>javascript</h2>
          </span>
          <span>
            <Image width={30} height={30} src="/img/react.png" alt="react logosu" />
            <h2>React</h2>
          </span>
          <span>
            <Next alt="adobe illustrator logosu" />
            <h2>NextJS</h2>
          </span>
          <span>
            <Image width={30} height={30} src="/img/figma.png" alt="figma logosu" />
            <h2>Figma</h2>
          </span>
        </div>

        <div className="skillmobile">
          <span>
            <h1>Yeteneklerim</h1>
          </span>
          <div className="skillList">
            <span>
              <Image width={30} height={30} src="/img/html.png" alt="html logosu" />
              <h2>HTML</h2>
            </span>
            <span>
              <Image width={30} height={30} src="/img/css.png" alt="css logosu" />
              <h2>CSS</h2>
            </span>
            <span>
              <Image width={30} height={30} src="/img/javascript.png" alt="javascript logosu" />
              <h2>javascript</h2>
            </span>
            <span>
              <Image width={30} height={30} src="/img/react.png" alt="react logosu" />
              <h2>React</h2>
            </span>
            <span>
              <Next alt="adobe illustrator logosu" />
              <h2>NextJS</h2>
            </span>
            <span>
              <Image width={30} height={30} src="/img/figma.png" alt="figma logosu" />
              <h2>Figma</h2>
            </span>
          </div>
        </div>
      </div>

    </>
  )
}