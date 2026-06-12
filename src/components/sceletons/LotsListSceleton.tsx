export default function LotsListSceleton() {
  return (
    <div className="lots__list-sceleton">
      <LotSceleton />
      <LotSceleton />
      <LotSceleton />
    </div>
  );
}

function LotSceleton() {
  return (
    <div className="lot__sceleton">
      <div className="lot__image"></div>
      <div className="lot__info">
        <div className="lot__category-sceleton"></div>
        <h3 className="lot__title-sceleton"></h3>
        <div className="lot__state">
          <div className="lot__rate">
            <div className="lot__amount-sceleton"></div>
            <div className="lot__cost-sceleton"></div>
          </div>
          <div className="lot__timer-sceleton"></div>
        </div>
      </div>
    </div>
  );
}
