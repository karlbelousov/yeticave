import { fetchLotById } from "@/lib/data";
import formatPrice from "@/utils/formatPrice";
import getTimeLeft from "@/utils/getTimeLeft";
import clsx from "clsx";
import Image from "next/image";
import CreateBetForm from "./CreateBetForm";

export default async function LotItem({ lotId }: { lotId: number }) {
  const lot = await fetchLotById(lotId);
  const {
    title,
    img,
    name_category,
    lot_description,
    date_finish,
    start_price,
  } = lot;
  const [hours, minutes] = getTimeLeft(date_finish);

  return (
    <section className="lot-item container">
      <h2>{title}</h2>
      <div className="lot-item__content">
        <div className="lot-item__left">
          <div className="lot-item__image">
            <Image src={img} width={730} height={548} alt={title} loading="eager" />
          </div>
          <p className="lot-item__category">
            Категория: <span>{name_category}</span>
          </p>
          <p className="lot-item__description">{lot_description}</p>
        </div>
        <div className="lot-item__right">
          <div className="lot-item__state">
            <div
              className={clsx(
                "lot-item__timer timer",
                hours < 1 && "timer--finishing",
              )}
            >
              {hours <= 9 ? `0${hours}` : hours}
              {" : "}
              {minutes <= 9 ? `0${minutes}` : minutes}
            </div>
            <div className="lot-item__cost-state">
              <div className="lot-item__rate">
                <span className="lot-item__amount">Текущая цена</span>
                <span className="lot-item__cost">
                  {formatPrice(start_price)}
                </span>
              </div>
              <div className="lot-item__min-cost">
                Мин. ставка <span>12 000 р</span>
              </div>
            </div>
            <CreateBetForm />
          </div>
          <div className="history">
            <h3>
              История ставок (<span>10</span>)
            </h3>
            <table className="history__list">
              <tbody>
                <tr className="history__item">
                  <td className="history__name">Иван</td>
                  <td className="history__price">10 999 р</td>
                  <td className="history__time">5 минут назад</td>
                </tr>
                <tr className="history__item">
                  <td className="history__name">Константин</td>
                  <td className="history__price">10 999 р</td>
                  <td className="history__time">20 минут назад</td>
                </tr>
                <tr className="history__item">
                  <td className="history__name">Евгений</td>
                  <td className="history__price">10 999 р</td>
                  <td className="history__time">Час назад</td>
                </tr>
                <tr className="history__item">
                  <td className="history__name">Игорь</td>
                  <td className="history__price">10 999 р</td>
                  <td className="history__time">19.03.17 в 08:21</td>
                </tr>
                <tr className="history__item">
                  <td className="history__name">Енакентий</td>
                  <td className="history__price">10 999 р</td>
                  <td className="history__time">19.03.17 в 13:20</td>
                </tr>
                <tr className="history__item">
                  <td className="history__name">Семён</td>
                  <td className="history__price">10 999 р</td>
                  <td className="history__time">19.03.17 в 12:20</td>
                </tr>
                <tr className="history__item">
                  <td className="history__name">Илья</td>
                  <td className="history__price">10 999 р</td>
                  <td className="history__time">19.03.17 в 10:20</td>
                </tr>
                <tr className="history__item">
                  <td className="history__name">Енакентий</td>
                  <td className="history__price">10 999 р</td>
                  <td className="history__time">19.03.17 в 13:20</td>
                </tr>
                <tr className="history__item">
                  <td className="history__name">Семён</td>
                  <td className="history__price">10 999 р</td>
                  <td className="history__time">19.03.17 в 12:20</td>
                </tr>
                <tr className="history__item">
                  <td className="history__name">Илья</td>
                  <td className="history__price">10 999 р</td>
                  <td className="history__time">19.03.17 в 10:20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
