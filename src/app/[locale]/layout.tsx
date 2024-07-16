import { Heebo } from "next/font/google";
import "@/sass/all.scss";
import SmoothScrolling from "@/components/scroll/smoothScrolling";
import JsonldMetaData from "@/components/metaData/jsonldmetadata";
import meta from "../../../public/data/meta-home.json";
import Nav from "@/components/mainLayoutComponents/nav/nav";
import { locales } from "../../configTranslations";
import { unstable_setRequestLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import CookieConsentBanner from "@/components/cookieConsent/cookieConsent";
import Footer from "@/components/mainLayoutComponents/footer/footer";
const heebo = Heebo({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "700", "900"],
  variable: "--font-heebo",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** FUNZIONE NEXT PER INSERIRE I METADATA NELL' HEAD */
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const data = meta[locale as keyof typeof meta].metaHtml;
  return data;
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang="en">
      <head>
        {/* COMPONENTE PER INSERIRE I META JSONLD PER GOOGLE  */}
        <JsonldMetaData metadata={meta} />
      </head>
      <body className={heebo.variable}>
        <CookieConsentBanner />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Nav />
          <SmoothScrolling>{children}</SmoothScrolling>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
