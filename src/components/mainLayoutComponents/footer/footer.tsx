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
        <Image src="/image/vtslogo.jpg" width={180} height={96} alt="logo" />
        <ul>
          <li>{t("col1.piva")}</li>
          <li>{t("col1.rea")}</li>
          <li>
            {t("col1.pec")}{" "}
            <a href={"mailto:" + t("col1.pecURL")}>{t("col1.pecURL")}</a>
          </li>
        </ul>
      </div>
      <ul className={style.footer__second}>
        <li>VTS</li>
        <li> {t("col2.indirizzo")} </li>
        <li>
          <a href={"tel:" + t("col2.tel")}>tel:{t("col2.tel")}</a>
        </li>
        <li>
          <a href={"mailto:" + t("col2.email")}>{t("col2.email")}</a>
        </li>
        <li>{t("col2.subsidiary")}</li>
        <li>{t("col2.subsidiary_indirizzo")}</li>
      </ul>
      <ul className={style.footer__third}>
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
      </ul>
      <div className={style.footer__fourth}>
        <h3>{t("col4.seguici")}</h3>
        <div className={style.socialIcons}>
          <Image src="/image/what.svg" width={50} height={50} alt="logo" />
          <Image src="/image/link.svg" width={50} height={50} alt="logo" />
          <Image src="/image/instagram.svg" width={50} height={50} alt="logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
