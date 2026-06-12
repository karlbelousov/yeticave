import { fetchLots } from "@/lib/data";
import LotCard from "./LotCard";

export default async function LotsList() {
  const lots = await fetchLots();
  
  return (
    <ul className="lots__list">
      {lots.map((lot) => (
        <LotCard {...lot} key={lot.id} />
      ))}
    </ul>
  );
}
