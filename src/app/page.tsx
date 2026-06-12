import { Metadata } from "next";
import { openSans400, openSans700 } from "./fonts";
import LotsList from "@/components/ui/LotsList";
import PromoList from "@/components/ui/PromoList";
import { Suspense } from "react";
import PromoListSceleton from "@/components/sceletons/PromoListSceleton";
import LotsListSceleton from "@/components/sceletons/LotsListSceleton";

export const metadata: Metadata = {
  title: "Глаиная",
};

export default async function HomePage() {
  return (
    <main className="container">
      <section className="promo">
        <h2 className={`promo__title ${openSans700.className}`}>
          Нужен стафф для катки?
        </h2>
        <p className={`promo__text ${openSans400.className}`}>
          На нашем интернет-аукционе ты найдёшь самое эксклюзивное
          сноубордическое и горнолыжное снаряжение.
        </p>
        <Suspense fallback={<PromoListSceleton />}>
          <PromoList />
        </Suspense>
      </section>
      <section className="lots">
        <div className="lots__header">
          <h2 className={`${openSans700.className}`}>Открытые лоты</h2>
        </div>
        <Suspense fallback={<LotsListSceleton />}>
           <LotsList />
        </Suspense>
      </section>
    </main>
  );
}
