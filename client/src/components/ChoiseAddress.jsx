function ChoiseAddress() {
  return (
    <div className="choise-address">
      <div className="choise-address__left">
        <div className="choise-address__left__content__name">
          <span className="choise-address__left__content__title">
            Доставка в город:{" "}
          </span>
          <span className="choise-address__left__content__title">
            Новоалтайск
          </span>
          <img src="../images/choise_address/location.svg" />
        </div>
        <div className="choise-address__left__content__input">
          <div className="choise-address__left__content__input__info">
            <span>Улица</span>
            <input />
          </div>
          <div className="choise-address__left__content__input__info">
            <span>Номер дома</span>
            <input />
          </div>
          <div className="choise-address__left__content__input__info">
            <span>Дополнительная информация</span>
            <input />
          </div>
        </div>
        <button className="choise-address__left__content__button">
          Подтвердить
        </button>
      </div>
      <div className="choise-address__right">
        <img src="../images/choise_address/loco.png" />
        <img src="../images/choise_address/close.svg" />
      </div>
    </div>
  );
}

export default ChoiseAddress;
