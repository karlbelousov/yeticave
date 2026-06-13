export default function LotSceleton() {
  return (
    <div className="lot-sceleton container">
      <div className="lot-sceleton__title"></div>
      <div className="lot-sceleton__content">
        <div className="lot-sceleton__left">
          <div className="lot-sceleton__image"></div>
          <div className="lot-sceleton__category"></div>
          <div className="lot-sceleton__desc"></div>
        </div>
        <div className="lot-sceleton__right">
            <div className="lot-sceleton__state"></div>
            <div className="lot-sceleton__history"></div>
        </div>
      </div>
    </div>
  );
}
