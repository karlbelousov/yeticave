import Link from "next/link";
import { categories } from "@/lib/placeholder-data";
import { clsx } from "clsx";

export default function PromoList() {
  return (
    <ul className="promo__list">
      {categories.map(({ id, category_name, character_code }) => (
        <li
          className={clsx(
            "promo__item",
            character_code && `promo__item--${character_code}`,
          )}
          key={id}
        >
          <Link className="promo__link" href="/lot/all">
            {category_name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
