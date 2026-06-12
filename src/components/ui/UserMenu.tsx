import Link from "next/link";

export default function UserMenu() {
  const isAuth = false;
  const userName = "Карл";

  return (
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
  );
}
