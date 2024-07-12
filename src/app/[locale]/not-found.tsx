"use client";
import { useLocale } from "next-intl";
import data404 from "../../../public/data/404.json";

function NotFound() {
  const data = data404[useLocale() as keyof typeof data404];

  return (
    <main>
      <section className="p404">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </section>
    </main>
  );
}

export default NotFound;
