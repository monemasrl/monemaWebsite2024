"use client";
import Image from "next/image";
import style from "./footer.module.scss";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

function Footer() {
  const pathN = usePathname();
  const locale = useLocale();
  const t = useTranslations("Footer");
  const tnav = useTranslations("Navigation");
  const navigation = {
    nav: [
      {
        title: tnav("azienda.titolo"),
        url: "/" + locale + tnav("azienda.url"),
      },
      {
        title: tnav("contatti.titolo"),
        url: tnav("azienda.url"),
      },
      {
        title: tnav("lavora_con_noi.titolo"),
        url: "/" + locale + tnav("lavora_con_noi.url"),
      },
    ],
  };

  return (
    <footer className={style.footer}>
      <div className={style.footer__first}>
        <Image src="/image/logobianco.svg" width={223} height={27} alt="logo" />
        <ul>
          <li>{t("col1.nome")}</li>
          <li>Piva: {t("col1.piva")}</li>
          <li>
            Mail:
            <br />
            <a href={"mailto:" + t("col1.mail")}>{t("col1.mail")}</a>
          </li>
          <li>
            Orario:
            <br />
            {t("col1.orario")}
          </li>
        </ul>
      </div>

      <ul className={style.footer__second}>
        {navigation.nav.map((item, index) => (
          <li
            className={`${pathN.includes(item.url) && style.activeLink}`}
            key={index}
          >
            {item.title === "contatti" ? (
              <a href={item.url}>{item.title}</a>
            ) : (
              <Link href={item.url}>{item.title}</Link>
            )}
          </li>
        ))}
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li className={style.irmaFooter}>Progetto IRMA</li>
      </ul>
    </footer>
  );
}

export default Footer;
