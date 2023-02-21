import { useState } from "react";
function MakeOrderMob() {
  const [buyer, setBuyer] = useState("company");
  const [delivery, setDelivery] = useState("local");
  const [payment, setPayment] = useState("online");
  const [paymentSystem, setPaymentSystem] = useState("card");

  function BuyerDate() {
    return (
      <div className="mo__content__left__information__container">
        {buyer == "company" ? (
          <div className="mo__content__left__information__face mo-mob__container-btn">
            <div
              className="mo__content__left__information__face__left mo-mob__btn"
              onClick={() => {
                setBuyer("person");
              }}
            >
              <span className="mo__header__left__information__person">
                Физическое лицо
              </span>
            </div>
            <div
              className="mo__content__left__information__face__right mo-mob__btn"
              onClick={() => {
                setBuyer("compeny");
              }}
            >
              <span className="mo__header__left__information__person">
                Юридическое лицо
              </span>
            </div>
          </div>
        ) : (
          <div className="mo__content__left__information__face mo-mob__container-btn">
            <div
              className="mo__content__left__information__face__right mo-mob__btn"
              onClick={() => {
                setBuyer("person");
              }}
            >
              <span className="mo__header__left__information__person">
                Физическое лицо
              </span>
            </div>
            <div
              className="mo__content__left__information__face__left mo-mob__btn"
              onClick={() => {
                setBuyer("company");
              }}
            >
              <span className="mo__header__left__information__person">
                Юридическое лицо
              </span>
            </div>
          </div>
        )}
        {buyer == "company" ? (
          <div className="mo-mob__form">
            <div className="mo__content__left__require__personal mo-mob__form__item">
              <span className="mo__content__left__require__title">ИНН</span>
              <input className="mo__content__left__require__input" />
            </div>
            <div className="mo__content__left__require__personal mo-mob__form__item">
              <span className="mo__content__left__require__title">
                Контактный номер телефона
              </span>
              <input className="mo__content__left__require__input" />
            </div>
            <div className="mo__content__left__require__personal mo-mob__form__item">
              <span className="mo__content__left__require__title">КПП</span>
              <input className="mo__content__left__require__input" />
            </div>
            <div className="mo__content__left__require__personal mo-mob__form__item">
              <span className="mo__content__left__require__title">
                E-mail (не обязательно)
              </span>
              <input className="mo__content__left__require__input" />
            </div>
          </div>
        ) : (
          <div className="mo-mob__form">
            <div className="mo__content__left__require__personal mo-mob__form__item">
              <span className="mo__content__left__require__title">
                Контактный номер телефона
              </span>
              <input className="mo__content__left__require__input" />
            </div>
            <div className="mo__content__left__require__personal mo-mob__form__item">
              <span className="mo__content__left__require__title">
                E-mail (не обязательно)
              </span>
              <input className="mo__content__left__require__input" />
            </div>
          </div>
        )}
      </div>
    );
  }

  function Delivery() {
    return (
      <div className="mo__content__right">
        <div className="mo-mob__stage">
          <img
            className="mo__content__left__number__second"
            src="./images/make_order/icon_2_.svg"
          />
          <span className="mo__content__left__information__topic">
            Выберите способ получения
          </span>
        </div>

        {delivery == "local" ? (
          <div className="mo__content__right__express mo-mob__container-btn">
            <div
              className="mo__content__left__information__face__right mo-mob__btn"
              onClick={() => {
                setDelivery("local");
              }}
            >
              <span className="mo__header__left__information__person">
                Самовывоз
              </span>
            </div>
            <div
              className="mo__content__left__information__face__left mo-mob__btn"
              onClick={() => {
                setDelivery("adress");
              }}
            >
              <span className="mo__header__left__information__person">
                Доставка
              </span>
            </div>
          </div>
        ) : (
          <div className="mo__content__right__express mo-mob__container-btn">
            <div
              className="mo__content__left__information__face__left mo-mob__btn"
              onClick={() => {
                setDelivery("local");
              }}
            >
              <span className="mo__header__left__information__person">
                Самовывоз
              </span>
            </div>
            <div
              className="mo__content__left__information__face__right mo-mob__btn"
              onClick={() => {
                setDelivery("adress");
              }}
            >
              <span className="mo__header__left__information__person">
                Доставка
              </span>
            </div>
          </div>
        )}
        {delivery == "local" ? (
          <div className="mo__content__right__geo mo-mob__geo">
            <div className="mo__content__right__geo__position mo-mob__geo__position">
              <div className="mo__content__right__geo__info">
                <div className="mo__content__right__geo__info__up">
                  <span className="mo__content__right__factory">
                    Производство
                  </span>
                  <span className="mo__content__right__adress">
                    Новоалтайск, ул. Павла Корчагина, 21
                  </span>
                </div>
                <div className="mo__content__right__geo__info__down">
                  <span className="mo__content__right__timer">
                    Пн-сб с 10:00 до 16:00
                  </span>
                  <span className="mo__content__right__timer">
                    Самовывоз:
                    <br />
                    Завтра с 10:00
                  </span>
                </div>
              </div>
              <div className="mo__content__left__information__face__left mo-mob__geo__btn">
                <span className="mo__header__left__information__person">
                  Выбрать другой
                </span>
              </div>
            </div>
            <img
              src="./images/make_order/location.png"
              className="mo-mob__delivery_image"
            />
          </div>
        ) : (
          <div className="mo__content__right__geo mo__delivery mo-mob__delivery">
            <div className="mo__delivery__add">
              <span>Добавить адрес</span>
              <img src="./images/make_order/plus_icon.svg" />
            </div>
          </div>
        )}
      </div>
    );
  }

  function Payment() {
    return (
      <div className="mo__content__payment">
        <span className="mo__content__left__information__topic">
          Выбирете способ оплаты
        </span>
        {payment == "online" ? (
          <div className="mo__content__left__information__face mo-mob__container-btn">
            <div
              className="mo__content__left__information__face__left mo-mob__btn"
              onClick={() => {
                setPayment("local");
              }}
            >
              <span className="mo__header__left__information__person">
                При получении
              </span>
            </div>
            <div
              className="mo__content__left__information__face__right mo-mob__btn"
              onClick={() => {
                setPayment("online");
              }}
            >
              <span className="mo__header__left__information__person">
                Онлайн
              </span>
            </div>
          </div>
        ) : (
          <div className="mo__content__left__information__face mo-mob__container-btn">
            <div
              className="mo__content__left__information__face__right mo-mob__btn"
              onClick={() => {
                setPayment("local");
              }}
            >
              <span className="mo__header__left__information__person">
                При получении
              </span>
            </div>
            <div
              className="mo__content__left__information__face__left mo-mob__btn"
              onClick={() => {
                setPayment("online");
              }}
            >
              <span className="mo__header__left__information__person">
                Онлайн
              </span>
            </div>
          </div>
        )}

        {payment == "online" ? (
          <div className="mo__content__payment__methods mo-mob__payment__methods">
            <div className="mo__content__payment__methods__checkbox">
              {paymentSystem == "card" ? (
                <div className="mo__content__payment__check">
                  <div className="mo__content__payment__check__circle">
                    <div className="mo__content__payment__check__point"></div>
                  </div>
                  <div className="mo__content__payment__check__circle"></div>
                </div>
              ) : (
                <div className="mo__content__payment__check">
                  <div className="mo__content__payment__check__circle"></div>
                  <div className="mo__content__payment__check__circle">
                    <div className="mo__content__payment__check__point"></div>
                  </div>
                </div>
              )}

              <div className="mo__content__payment__title">
                <span
                  className="mo__header__left__information__person"
                  onClick={() => {
                    setPaymentSystem("card");
                  }}
                >
                  Банковская карта
                </span>
                <span
                  className="mo__header__left__information__person"
                  onClick={() => {
                    setPaymentSystem("account");
                  }}
                >
                  Расчетный счет
                </span>
              </div>
            </div>
            <div className="mo__content__payment__atribut">
              <img src="./images/make_order/mastercard.svg" />
              <img src="./images/make_order/visa.svg" />
              <img src="./images/make_order/mir.svg" />
            </div>
          </div>
        ) : (
          <div style={{ height: 90 }}></div>
        )}

        <div className="mo__content__payment__confirm">
          <span className="mo__header__left__information__person">
            Подтвердить заказ
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="mo__main mo-mob__main">
      <div className="mo-mob__header">
        <div className="mo-mob__header__title">
          <span>Оформление заказа</span>
        </div>
        <div className="mo-mob__header__info">
          <div className="mo-mob__header__row mo-mob__header__row__up">
            <div className="mo-mob__header__result">
              <span className="mo-mob__header__result__title">Итого:</span>
              <span className="mo-mob__header__result__subtitle">212000₽</span>
            </div>
            <div className="mo__header__essential__cancel mo-mob__btn-cancel">
              <span>Отмена</span>
              <img src="./images/make_order/Close.svg" />
            </div>
          </div>
          <div className="mo-mob__header__row mo-mob__header__row__down">
            <div className="mo__header__time mo-mob__time">
              <div className="mo__header__time__up">
                <span className="mo__header__time__up__title mo-mob__time__title">
                  Номер заказа:
                </span>
                <span className="mo__header__time__up__title mo-mob__time__subtitle">
                  121123
                </span>
              </div>
              <div className="mo__header__time__up">
                <span className="mo__header__time__up__title mo-mob__time__title">
                  Дата заказа:
                </span>
                <span className="mo__header__time__up__title mo-mob__time__subtitle">
                  12.12.2022
                </span>
              </div>
            </div>
            <div className="mo__header__essential__detailed">
              <span className="mo__header__time__up__title">подробнее</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mo__content mo-mob__content">
        <div className="mo__content__left__information">
          <div className="mo-mob__stage">
            <img
              className="mo__content__left__number__first"
              src="./images/make_order/icon_1_.svg"
            />
            <span className="mo__content__left__information__topic">
              Данные покупателя
            </span>
          </div>

          <BuyerDate />
          <Delivery />
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default MakeOrderMob;
