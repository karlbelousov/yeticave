const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    email: "hero34@mail.ru",
    user_name: "Ярослав",
    user_password: "secretpassw1",
    contacts: "89191202527",
  },
];

const categories = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea48a9bd81aa",
    category_name: "Доски и лыжи",
    character_code: "boards",
  },
  {
    id: "d6e15727-9fe1-4761-8c5b-ea44a9bd81aa",
    category_name: "Крепления",
    character_code: "attachment",
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea74a9bd81aa",
    category_name: "Ботинки",
    character_code: "boots",
  },
  {
    id: "u6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    category_name: "Одежда",
    character_code: "clothing",
  },
  {
    id: "d6h15727-9fe1-4961-8c5b-ea44a9bd81aa",
    category_name: "Инструменты",
    character_code: "tools",
  },
  {
    id: "d6e15727-9fe1-4981-8c5b-ea44a9bd81aa",
    category_name: "Разное",
    character_code: "other",
  },
];

const lots = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    title: "2014 Rossignol District Snowboard",
    lot_description:
      "Легкий маневренный сноуборд, готовый дать жару в любом парке",
    img_url: "img/lot-1.jpg",
    start_price: 10999,
    date_finish: "2026-06-10",
    step: 500,
    category_id: "d6e15727-9fe1-4961-8c5b-ea48a9bd81aa",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    title: "DC Ply Mens 2016/2017 Snowboard",
    lot_description:
      "Легкий маневренный сноуборд, готовый дать жару в любом парке",
    img_url: "img/lot-2.jpg",
    start_price: 159999,
    date_finish: "2026-06-11",
    step: 1000,
    category_id: "d6e15727-9fe1-4961-8c5b-ea48a9bd81aa",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    title: "Крепления Union Contact Pro 2015 года размер L/XL",
    lot_description: "Хорошие крепления, надежные и легкие",
    img_url: "img/lot-3.jpg",
    start_price: 8000,
    date_finish: "2026-06-12",
    step: 500,
    category_id: "d6e15727-9fe1-4761-8c5b-ea44a9bd81aa",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  },
];

const bets = [
  {
    id: "3958dc9e-742f-4377-25e9-fec4b6a6442a",
    price_bet: 8500,
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    lot_id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
  },
];

export { categories, lots, users, bets };
