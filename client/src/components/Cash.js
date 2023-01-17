function Cash() {
  return (
    <div className="cash">
      <div className="cash_left">
        <div className="cash__set">
          <span className="cash__set__title">Оплата</span>
          <div className="cash__set__capital">
            <span>сумма списания</span>
            <span>2120₽</span>
          </div>
        </div>
        <div className="cash__card">
          <div className="cash__card__item">
            <div className="cash__card__item__info">
              <div className="cash__card__item__info__valid">
                <span className="cash__card__item__info__number">
                  Номер карты
                </span>
                <input className="cash__card__item__info__input" />
              </div>
              <div className="cash__card__item__info__valid">
                <span className="cash__card__item__info__correct">
                  VALID THRU
                </span>
                <input className="cash__card__item__info__input cash__input-small" />
              </div>
            </div>
            <div className="cash__card__item__info__icons">
              <img src="../images/cash/mastercard.svg" />
              <img src="../images/cash/visa.svg" />
              <img src="../images/cash/mir.svg" />
            </div>
          </div>
          <div className="cash__card__item">
            <div className="cash__card__item__info__valid cash__card__valid__down">
              <span className="cash__card__item__info__correct">CVV</span>
              <input className="cash__card__item__info__input cash__input-small" />
            </div>
          </div>
        </div>
      </div>
      <div className="cash__right">
        <img src="../images/cash/close.svg" className="cash__close-icon" />
        <img src="../images/cash/bed.png" className="cash__bed" />
        <div className="cash__right__button">
          <span>Подтвердить</span>
        </div>
      </div>
    </div>
  );
}

export default Cash;
