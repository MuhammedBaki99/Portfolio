import Link from "next/link"
import "./projects.css"
import Image from "next/image"

export default function Projects() {
  return (
    <>

      <a name="project"></a>
      <div className="projectContainer">
        <div className="projecthero">
          <div className="projects">
            <span>
              <Image width={60} height={60} src="/img/todoLogo.png" alt="todoLogo logosu" />
              <h2>Todo</h2>
            </span>
            <span>
              <Image width={60} height={60} src="/img/rock-paper-scissors.png" alt="rock-paper-scissors logosu" />
              <h2>Taş Kağıt Makas</h2>
            </span>
            <span>
              <Image width={60} height={60} src="/img/shuffleword.png" alt="shuffleword logosu" />
              <h2>Shuffleword</h2>
            </span>
            <span>
              <Image width={60} height={60} src="/img/calculatorLogo.png" alt="calculatorLogo logosu" />
              <h2>Hesap Makinesi</h2>
            </span>
            <span>
              <Image width={60} height={60} src="/img/tabulogo.png" alt="tabulogo logosu" />
              <h2>Tabu</h2>
            </span>
          </div>

          <Image className="heroimg" src="/img/projecthero.jpeg" width={500} height={500} />
        </div>
        <div className="projectText">
          <h1>Projelerim</h1>
          <p>Bu bölümde, HTML, CSS, JavaScript, React ve Next.js gibi modern teknolojileri kullanarak geliştirdiğim projeleri keşfedebilirsiniz. Her bir proje, kullanıcı dostu arayüzler ve etkili çözümler sunmayı hedefleyerek, yazılım geliştirme yolculuğumda edindiğim bilgi ve tecrübeleri yansıtıyor.</p>
          <Link href={"/Projelerim"}>Projelerimi Keşfet</Link>
        </div>
      </div>

    </>
  )
}