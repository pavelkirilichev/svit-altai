function OrdersMob() {
  return (
    <div className="orders-mob">
      <button className="personalData__btn-back personalData__mob">
        Назад
      </button>
      <div className="personalData__info personalData__mob__left orders-mob__info">
        <img
          src="../images/personal_data_mob/photo.png"
          className="personalData__mob__left_personal"
        />
        <div className="personalData__info__right">
          <div className="personalData__info__right__data">
            <span className="personalData__info__right__main ordrer-mob__info__data">
              Наименование
            </span>
            <span className="personalData__info__right__main ordrer-mob__info__data">
              фирмы
            </span>
            <span className="personalData__info__right__standart ordrer-mob__info__standart">
              Фамилия Имя Отчество
            </span>
            <span className="personalData__info__right__medium ordrer-mob__info__medium">
              8 (999) 999-99-99
            </span>
          </div>
        </div>
      </div>
      <div className="orders-mob__current">
        <button>Текущие заказы</button>
        <button>Выполненные заказы</button>
      </div>
      <div className="orders-mob__booking__number">
        <div className="orders-mob__booking">
          <div className="orders-mob__booking__title">
            <span>Заказ №</span>
            <span>1</span>
          </div>
          <div className="orders-mob__booking__parametrs">
            <div className="md-mob__cart__characteristic">
              <span>Номер заказа: </span>
              <span>121123</span>
            </div>
            <div className="md-mob__cart__line"></div>
            <div className="md-mob__cart__characteristic">
              <span>Дата заказа: </span>
              <span>12.12.2022</span>
            </div>
            <div className="md-mob__cart__line"></div>
            <div className="md-mob__cart__characteristic">
              <span>Адрес доставки: </span>
              <span>куда-то</span>
            </div>
          </div>
          <div className="orders-mob__buttons">
            <button>Ожидает подтверждения</button>
            <button>О заказе</button>
          </div>
          <div className="orders-mob__buttons__direct">
            <span>Cумма заказа</span>
            <span>2120₽</span>
          </div>
        </div>
        <div className="orders-mob__booking">
          <div className="orders-mob__booking__title">
            <span>Заказ №</span>
            <span>2</span>
          </div>
          <div className="orders-mob__booking__parametrs">
            <div className="md-mob__cart__characteristic">
              <span>Номер заказа: </span>
              <span>121123</span>
            </div>
            <div className="md-mob__cart__line"></div>
            <div className="md-mob__cart__characteristic">
              <span>Дата заказа: </span>
              <span>12.12.2022</span>
            </div>
            <div className="md-mob__cart__line"></div>
            <div className="md-mob__cart__characteristic">
              <span>Адрес доставки: </span>
              <span>куда-то</span>
            </div>
          </div>
          <div className="orders-mob__buttons">
            <button>Ожидает подтверждения</button>
            <button>О заказе</button>
          </div>
          <div className="orders-mob__buttons__direct">
            <span>Cумма заказа</span>
            <span>2120₽</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersMob;
