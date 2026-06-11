import postgres from "postgres";
import { categories, users, lots } from "@/lib/placeholder-data";
import bcrypt from "bcryptjs";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      date_registration TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      email VARCHAR(128) NOT NULL UNIQUE,
      user_name VARCHAR(128),
      user_password CHAR(256),
      contacts TEXT
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.user_password, 10);
      return sql`
        INSERT INTO users (id, user_name, email, user_password, contacts)
        VALUES (${user.id}, ${user.user_name}, ${user.email}, ${hashedPassword}, ${user.contacts})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedCategories() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS categories (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      character_code VARCHAR(128) UNIQUE,
      category_name VARCHAR(128)
    );
  `;

  const insertedCategories = await Promise.all(
    categories.map(
      (category) => sql`
        INSERT INTO categories (id, character_code, category_name)
        VALUES (${category.id}, ${category.character_code}, ${category.category_name})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCategories;
}

async function seedLots() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS lots (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      title VARCHAR(255),
      lot_description TEXT,
      img VARCHAR(255),
      start_price INT,
      date_finish DATE,
      step INT,
      user_id UUID,
      winner_id UUID,
      category_id UUID,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (winner_id) REFERENCES users(id),
      FOREIGN KEY (category_id) REFERENCES categories(id)
    );
  `;

  const insertedLots = await Promise.all(
    lots.map(
      (lot) => sql`
        INSERT INTO lots (title, lot_description, img_url, start_price, date_finish, step, user_id, category_id)
        VALUES (${lot.title}, ${lot.lot_description}, ${lot.img_url}, ${lot.start_price}, ${lot.date_finish}, ${lot.step}, ${lot.user_id}, ${lot.category_id})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedLots;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [seedUsers()]);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
