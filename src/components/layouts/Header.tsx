import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  const isAuth = false;
  const userName = "Карл";

  return (
    <header className="main-header">
      <div className="main-header__container container">
        <h1 className="visually-hidden">YetiCave</h1>
        <Link href="/" className="main-header__logo">
          <Image
            src="/img/logo.svg"
            width={160}
            height={39}
            alt="Логотип компании YetiCave"
            loading="eager"
          />
        </Link>
        <form
          className="main-header__search"
          method="get"
          action="https://echo.htmlacademy.ru"
          autoComplete="off"
        >
          <input type="search" name="search" placeholder="Поиск лота" />
          <input
            className="main-header__search-btn"
            type="submit"
            name="find"
            defaultValue="Найти"
          />
        </form>
        <Link className="main-header__add-lot button" href="/lot/create">
          Добавить лот
        </Link>
        <nav className="user-menu">
          {isAuth && (
            <div className="user-menu__logged">
              <p>{userName}</p>
              <a href="login.html">Выйти</a>
            </div>
          )}
          {!isAuth && (
            <ul className="user-menu__list">
              <li className="user-menu__item">
                <Link href="/signup">Регистрация</Link>
              </li>
              <li className="user-menu__item">
                <Link href="/login">Вход</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
