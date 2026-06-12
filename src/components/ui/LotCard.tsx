import Image from "next/image";
import { openSans700 } from "@/app/fonts";
import Link from "next/link";
import { Lot } from "@/lib/definitions";
import formatPrice from "@/utils/formatPrice";
import getTimeLeft from "@/utils/getTimeLeft";
import clsx from "clsx";

export default function LotCard({
  id,
  title,
  category_name,
  img_url,
  start_price,
  date_finish,
}: Lot) {
  const [hours, minutes] = getTimeLeft(date_finish);

  return (
    <li className="lots__item lot">
      <div className="lot__image">
        <Image src={`/${img_url}`} width={350} height={260} alt={title} />
      </div>
      <div className="lot__info">
        <span className="lot__category">{category_name}</span>
        <h3 className={`lot__title ${openSans700.className}`}>
          <Link className="text-link" href={`/lot/${id}`}>
            {title}
          </Link>
        </h3>
        <div className="lot__state">
          <div className="lot__rate">
            <span className="lot__amount">Стартовая цена</span>
            <span className={`lot__cost ${openSans700.className}`}>
              {formatPrice(start_price)}
            </span>
          </div>
          <div className={clsx("lot__timer timer", hours < 1 && "timer--finishing")}>
            {hours <= 9 ? `0${hours}` : hours}{" : "}{minutes <= 9 ? `0${minutes}` : minutes}
          </div>
        </div>
      </div>
    </li>
  );
}
