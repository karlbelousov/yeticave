import Link from "next/link";
import { fetchCategories } from "@/lib/data";

export default async function NavList() {
  const categories = await fetchCategories();

  return (
    <ul className="nav__list container">
      {categories.map(({ id, category_name }) => (
        <li className="nav__item" key={id}>
          <Link href={`/category/${id}`}>{category_name}</Link>
        </li>
      ))}
    </ul>
  );
}
