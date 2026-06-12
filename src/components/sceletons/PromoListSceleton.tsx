export default function PromoListSceleton() {
  return (
    <div className="promo__list-sceleton">
      <PromoItemSceleton />
      <PromoItemSceleton />
      <PromoItemSceleton />
      <PromoItemSceleton />
      <PromoItemSceleton />
      <PromoItemSceleton />
    </div>
  );
}

function PromoItemSceleton() {
  return (
    <div className="promo__item-sceleton">
      <div className="promo__link-sceleton"></div>
    </div>
  );
}
