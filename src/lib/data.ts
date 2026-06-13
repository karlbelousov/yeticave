import postgres from "postgres";
import { Category, Lot } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchCategories() {
  try {
    const categories = await sql<Category[]>`SELECT * FROM categories`;

    return categories;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch categories data.");
  }
}

export async function fetchLots() {
  const date = "2026-05-20";

  try {
    const lots = await sql<Lot[]>`
        SELECT lots.id, lots.title, lots.start_price, lots.img, lots.date_finish, categories.name_category FROM lots
        JOIN categories ON lots.category_id=categories.id
        WHERE date_creation > ${date}
        ORDER BY date_creation DESC
    `;

    return lots;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch lots data.");
  }
}

export async function fetchLotById(id: number) {
  try {
    const lot = await sql<Lot[]>`
      SELECT lots.title, lots.start_price, lots.img, lots.date_finish, lots.lot_description, categories.name_category FROM lots
      JOIN categories ON lots.category_id=categories.id
      WHERE lots.id=${id};
    `;

    return lot[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch lot data.");
  }
}
