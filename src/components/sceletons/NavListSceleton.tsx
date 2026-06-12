export default function NavListSceleton() {
  return (
    <div className="nav__list-sceleton container">
      <NavItemSceleton />
      <NavItemSceleton />
      <NavItemSceleton />
      <NavItemSceleton />
      <NavItemSceleton />
      <NavItemSceleton />
    </div>
  );
}

function NavItemSceleton() {
  return (
    <div className="nav__item-sceleton">
      <div className="nav__link-sceleton"></div>
    </div>
  );
}
