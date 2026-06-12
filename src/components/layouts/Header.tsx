import Link from "next/link";
import HeaderSearch from "../ui/HeaderSearch";
import Logo from "../ui/Logo";
import UserMenu from "../ui/UserMenu";

export default async function Header() {
  

  return (
    <header className="main-header">
      <div className="main-header__container container">
        <h1 className="visually-hidden">YetiCave</h1>
        <Logo />
        <HeaderSearch />
        <Link className="main-header__add-lot button" href="/lot/create">
          Добавить лот
        </Link>
        <UserMenu />
      </div>
    </header>
  );
}
