import Link from "next/link";
import { clsx } from "clsx";
import { fetchCategories } from "@/lib/data";

export default async function PromoList() {
  const categories = await fetchCategories();
  
  return (
    <ul className="promo__list">
      {categories.map(({ id, name_category, character_code }) => (
        <li
          className={clsx(
            "promo__item",
            character_code && `promo__item--${character_code}`,
          )}
          key={id}
        >
          <Link className="promo__link" href={`/category/${id}`}>
            {name_category}
          </Link>
        </li>
      ))}
    </ul>
  );
}
