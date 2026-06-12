export type Lot = {
  id: string;
  title: string;
  category_name: string;
  start_price: number;
  img_url: string;
  date_finish: string;
};

export type Category = {
  id: string;
  category_name: string;
  character_code: string;
};
