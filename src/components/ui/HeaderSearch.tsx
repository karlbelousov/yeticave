export default function HeaderSearch() {
  return (
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
  );
}
