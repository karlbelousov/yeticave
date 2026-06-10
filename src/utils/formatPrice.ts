import { number_format } from "locutus/php/strings/number_format";

export default function formatPrice(price: number) {
  const roundedPrice = Math.ceil(price);

  if (roundedPrice >= 1000) {
    return number_format(roundedPrice, 0, "", " ") + " ₽";
  }

  return roundedPrice + " ₽";
}
