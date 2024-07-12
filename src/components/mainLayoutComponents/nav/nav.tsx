"use client";
import Image from "next/image";
import Link from "next/link";
import style from "./nav.module.scss";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Switcher from "@/components/languageSwitcher/switcher";

function NavBar() {
  const pathN = usePathname();
  const locale = useLocale();
  const [mobile, setMobile] = useState(false);
  const t = useTranslations("Navigation");

  function isHome() {
    if (pathN === "/" + locale) {
      return true;
    }
    return false;
  }

  const data = {
    nav: [
      {
        title: t("azienda.titolo"),
        url: "/" + locale + t("azienda.url"),
      },
      {
        title: t("contatti.titolo"),
        url: t("contatti.url"),
      },
      {
        title: t("lavora_con_noi.titolo"),
        url: "/" + locale + t("lavora_con_noi.url"),
      },
    ],
  };

  useEffect(() => {
    setMobile(false);
  }, [pathN]);

  return (
    <header
      className={`${style.header} ${isHome() ? style.header__home : null}`}
    >
      <nav className={style.mainNavBar}>
        <div className={style.mainNavBar__logo}>
          <Link href="/">
            {isHome() ? (
              <Image src="/image/logo.svg" width={225} height={94} alt="logo" />
            ) : (
              <Image src="/image/logo.svg" width={225} height={94} alt="logo" />
            )}
          </Link>
        </div>
        <div
          className={`${style.mainNavBar__navBlock} ${
            isHome() ? style.mainNavBar__home : style.mainNavBar__inner
          }`}
        >
          <div className={style.mainNavBar__navBlock__topData}>
            Via della Stazione 27, Barga -{" "}
            <a href="tel:+390583711372">0575 1122334</a> -{" "}
            <a href="mailto:info@vtservices.it">info@simplesite.it</a>
          </div>
          <hr />
          <ul className={style.mainNavBar__navBlock__nav}>
            {data.nav.map((item, index) => (
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
            <li>
              <Switcher isHome={isHome()} />
            </li>
          </ul>
        </div>
        <div
          className={`${style.burger} ${
            isHome() ? style.burger__home : style.burger__inner
          }`}
          onClick={() => setMobile(true)}
        >
          <RxHamburgerMenu />
        </div>
        <AnimatePresence>
          {mobile && (
            <motion.div
              key="mobileMenu"
              className={style.navMobile}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div
                className={style.navMobile__close}
                onClick={() => setMobile(false)}
              >
                <RxCross2 />
              </div>
              <a href="/">
                <Image
                  src="/image/logo-white.svg"
                  width={121}
                  height={94}
                  alt="logo"
                />
              </a>

              <ul className={style.navMobile__nav}>
                {data.nav.map((item, index) => (
                  <li
                    className={`${
                      pathN.includes(item.url) && style.activeLink
                    }`}
                    key={index}
                  >
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <hr style={{ width: "50%" }} />
              <div className={style.navMobile__generic}>
                Via della Stazione 27, Barga - 0583 711372 - info@vtservices.it
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
export default NavBar;
