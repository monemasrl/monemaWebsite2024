import HeroVideo from "@/components/heros/HeroVideo";
import style from "./page.module.scss";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import heroData from "../../../public/data/hero.json";
import homeData from "../../../public/data/home.json";
import TitleAnimations from "@/components/animations/titleAnimations";
import AnimatedSection from "@/components/mainLayoutComponents/sections/animatedSection";
import Sezione1Animazione from "@/components/svg/sezione1";
import Sezione2Animazione from "@/components/svg/sezione2";
import Skills from "@/components/skills/skills";
import Portfolio from "@/components/portfolio/portfolio";
import Form from "@/components/form/netlifyForm";
import ScrollingElement from "@/components/animations/scrollingElement";

/**
 * PAGINA
 * Utilizzare le pagine per fetchare i dati e passarli ai componenti
 * Mantenere le pagine componenti server-side
 * Passare i dati ai componenti tramite props
 */

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const HeroDataLang = heroData[locale as keyof typeof heroData];
  const HomeDataLang = homeData[locale as keyof typeof homeData];

  return (
    <main className={style.main}>
      <HeroVideo URL={"/video/video.mp4"} data={HeroDataLang} />
      <ScrollingElement
        from="22%"
        to="48%"
        className={"keyboard"}
        src="/image/keyboard.svg"
        noScroll
      />
      <ScrollingElement
        from="30%"
        to="50%"
        className={"mondo"}
        src="/image/chip.svg"
        noScroll
      />
      <ScrollingElement
        from="50%"
        to="50%"
        className={"ecommerce"}
        src="/image/commerce.svg"
        noScroll
      />
      <AnimatedSection classname={style.wrapperFirst}>
        <div className={style.wrapperFirst__txt}>
          <p>
            Le competenze di <strong>Monema</strong> coprono l’ambito
            sistemistico e quello dello sviluppo in ambito web enterprise. Si
            avvale di professionisti Backend e Frontend
          </p>
          <p>
            Web design, Ui, Prototipia. Monema si occupa di progettazione di
            estetica e funzionalità delle applicazioni web
          </p>
        </div>
        <div className={style.wrapperFirst__claim}>
          Frontend <br /> Backend <br /> Web Design <br /> Prototipia
        </div>
        <div className={style.wrapperFirst__animation}>
          <Sezione1Animazione />
        </div>
      </AnimatedSection>

      <AnimatedSection classname={style.wrapperSecond}>
        <div className={style.wrapperSecond__animation}>
          <Sezione2Animazione />
        </div>
        <div className={style.wrapperSecond__txt}>
          <p>
            Monema è in grado di sviluppare applicazioni web complesse e
            performanti, garantendo la massima sicurezza e scalabilità
          </p>
          <p className={style.testo}>
            &ldquo;Ci occupiamo dell&apos;intero processo, dall&rsquo;analisi
            iniziale fino alla messa in opera ma collaboriamo volentieri anche
            con altre realtà, aziende e professionisti, che ci coinvolgono come
            team di sviluppo per i loro progetti.&rdquo;
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection classname={style.skillset}>
        <TitleAnimations
          className="monemaTitle"
          animation="letter"
          testo={"Ci occupiamo di:"}
        />
        <Skills data={HomeDataLang.skills} />
      </AnimatedSection>
      <AnimatedSection classname={style.wrapperThird}>
        <TitleAnimations
          className="monemaTitle"
          animation="letter"
          testo={"Something we did"}
        />
        <Portfolio />
      </AnimatedSection>
      <AnimatedSection classname={style.wrapperForm}>
        <TitleAnimations
          className="monemaTitle"
          animation="letter"
          testo={"Contattaci"}
        />
        <Form />
      </AnimatedSection>
    </main>
  );
}
