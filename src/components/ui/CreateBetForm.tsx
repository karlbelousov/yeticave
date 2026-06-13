export default function CreateBetForm() {
  return (
    <form
      className="lot-item__form"
      action="https://echo.htmlacademy.ru"
      method="post"
      autoComplete="off"
    >
      <p className="lot-item__form-item form__item form__item--invalid">
        <label htmlFor="cost">Ваша ставка</label>
        <input id="cost" type="text" name="cost" placeholder="12 000" />
        <span className="form__error">Введите наименование лота</span>
      </p>
      <button type="submit" className="button">
        Сделать ставку
      </button>
    </form>
  );
}
