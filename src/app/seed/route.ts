import postgres from "postgres";
import bcrypt from "bcrypt";
import { categories, users, lots, bets } from "@/lib/placeholder-data";

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
      name_category VARCHAR(128)
    );
  `;

  const insertedCategories = await Promise.all(
    categories.map(
      (category) => sql`
        INSERT INTO categories (character_code, category_name)
        VALUES (${category.character_code},${category.category_name})
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
      user_id INT,
      winner_id INT,
      category_id INT,
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

async function seedBets() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS bets (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      date_bet TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      price_bet INT,
      user_id INT,
      lot_id INT,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (lot_id) REFERENCES lots(id)
    );
  `;

  const insertedBets = await Promise.all(
    bets.map(
      (bet) => sql`
      INSERT INTO bets (id, price_bet, user_id, lot_id)
      VALUES (${bet.id},${bet.price_bet}, ${bet.user_id}, ${bet.lot_id})
      `,
    ),
  );

  return insertedBets;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedUsers(),
      seedCategories(),
      seedLots(),
      seedBets(),
    ]);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
