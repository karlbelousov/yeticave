export type Lot = {
  id: number;
  title: string;
  name_category: string;
  start_price: number;
  lot_description: string;
  img: string;
  date_finish: string;
  step: number;
};

export type Category = {
  id: number;
  name_category: string;
  character_code: string;
};

export type User = {
  id: number;
  date_registration: string;
  email: string;
  user_name: string;
  user_password: string;
  contacts: string;
};
