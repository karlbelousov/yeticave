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
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    category_name: "Одежда",
    character_code: "clothing",
  },
  {
    id: "f49d8193-7b4c-4786-a702-9972e573bda9",
    category_name: "Инструменты",
    character_code: "tools",
  },
  {
    id: "f31f0c28-1ef9-4e6b-8e47-a9539a987e38",
    category_name: "Разное",
    character_code: "other",
  },
];

const lots = [
  {
    id: "c49784f1-0b6e-4656-a35d-1b53c57a9142",
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
    id: "c4ca49b9-9301-4246-81bd-478c13bcc0db",
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
    id: "a2a85f64-a08f-4e56-a36a-cd120e3a7e28",
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
    id: "f795cb9b-c14f-45ea-b392-e4899e595672",
    price_bet: 5400,
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    lot_id: "c4ca49b9-9301-4246-81bd-478c13bcc0db",
  },
];

export { categories, lots, users, bets};
