import LotSceleton from "@/components/sceletons/LotItemSceleton";
import LotItem from "@/components/ui/LotItem";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Страница лота",
};

export default async function LotPage(props: {
  params: Promise<{ id: number }>;
}) {
  const params = await props.params;
  const lotId = params.id;

  return (
      <Suspense fallback={<LotSceleton />}>
        <LotItem lotId={lotId} />
      </Suspense>
  )
}
