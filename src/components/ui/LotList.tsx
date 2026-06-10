import LotCard from "./LotCard";
import { lots } from "@/lib/placeholder-data";

export default function LotList() {
  return (
    <ul className="lots__list">
      {lots.map((lot) => (
        <LotCard {...lot} key={lot.id} />
      ))}
    </ul>
  );
}
