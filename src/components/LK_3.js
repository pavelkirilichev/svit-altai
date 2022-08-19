import SidabarFilter from "./SidebarFilter";

function LK_3() {
  return (
    <div className="lk-clients__main">
      <div className="lk-clients__sidebar">
        <div className="lk-clients__sidebar__top">
          <div className="cart__row__sidebar__info">
            <img
              src="./images/cart/profile_icon.png"
              className="cart__profile__icon"
            />
            <div className="cart__info__title">
              <span className="cart__info__main-title">Пользователь</span>
              <span className="cart__info__subtitle">8 909 999 99 99</span>
            </div>
          </div>
          <div className="lk-clients__sidebar__top__menu">
            <div className="lk-clients__sidebar__menu__item">
              <div className="lk-clients__sidebar__menu__item__count">
                <span>8</span>
              </div>
              <img src="../images/lk/order_icon.svg" />
              <span className="lk-clients__sidebar__menu__item__title">
                Заказы
              </span>
            </div>
            <div className="lk-clients__sidebar__menu__item">
              <img
                src="../images/lk/delivery_icon.svg"
                style={{ marginTop: 3.5, marginRight: 1 }}
              />
              <span className="lk-clients__sidebar__menu__item__title">
                Доставка
              </span>
            </div>
            <div className="lk-clients__sidebar__menu__item">
              <img src="../images/lk/report_icon.svg" />
              <span className="lk-clients__sidebar__menu__item__title">
                Отчеты
              </span>
            </div>
            <div className="lk-clients__sidebar__menu__item">
              <img src="../images/lk/box_icon.svg" />
              <span className="lk-clients__sidebar__menu__item__title">
                Отгрузка
              </span>
            </div>
            <div className="lk-clients__sidebar__menu__item lk-clients__sidebar__menu__item-active">
              <img
                src="../images/lk/users_w_icon.svg"
                style={{ marginTop: 3 }}
              />
              <span className="lk-clients__sidebar__menu__item__title">
                Клиенты
              </span>
            </div>
            <div className="lk-clients__sidebar__menu__item">
              <img src="../images/lk/goods_icon.svg" />
              <span className="lk-clients__sidebar__menu__item__title">
                Товары
              </span>
            </div>
            <div className="lk-clients__sidebar__menu__item">
              <img src="../images/lk/mail_icon.svg" style={{ marginTop: 2 }} />
              <span className="lk-clients__sidebar__menu__item__title">
                Отзывы
              </span>
            </div>
          </div>
        </div>
        <div className="lk-clients__sidebar__bottom">
          <SidabarFilter />
        </div>
      </div>
      <div className="lk-clients__content">
        <div className="lk-clients__content__header">
          <button className="lk-clients__content__header__btn lk__btn-160">
            Назад
          </button>
          <button className="lk-clients__content__header__btn lk__btn-260">
            Статус заказа
          </button>
        </div>
        <div className="lk-order_inner__main">
          <div className="lk-order_inner__main__responsible">
            <div className="lk-order_inner__main__responsible__item">
              <div className="lk-order_inner__main__responsible__item-left">
                <img src="../images/lk/user_icon-big.png" />
                <div className="lk-order_inner__main__responsible__item__info">
                  <span className="lk-clients__content__main__item__top__subtitle lk-order_inner__content__main__item__top__subtitle">
                    Основной менеджер
                  </span>
                  <span className="lk-clients__content__main__item__top__title">
                    Менеджер продажи
                  </span>
                  <span className="lk-clients__content__main__item__bottom__phone lk-order_inner__content__main__item__bottom__phone">
                    8 (999) 999-99-99
                  </span>
                </div>
              </div>
              <img src="../images/lk/reveal.png" className="lk__reveal" />
            </div>
            <div className="lk-order_inner__main__responsible__item">
              <div className="lk-order_inner__main__responsible__item-left">
                <img src="../images/lk/user_icon-big.png" />
                <div className="lk-order_inner__main__responsible__item__info">
                  <span className="lk-clients__content__main__item__top__subtitle lk-order_inner__content__main__item__top__subtitle">
                    Назначенный менеджер заказа
                  </span>
                  <span className="lk-clients__content__main__item__top__title">
                    Менеджер продажи
                  </span>
                  <span className="lk-clients__content__main__item__bottom__phone lk-order_inner__content__main__item__bottom__phone">
                    8 (999) 999-99-99
                  </span>
                </div>
              </div>
              <img src="../images/lk/reveal.png" className="lk__reveal" />
            </div>
          </div>
          <div className="lk-order_inner__main__info">
            <div className="lk-order_inner__main__info__left">
              <div className="lk-clients__content__main__item__top">
                <img src="../images/lk/user_icon.png" />
                <div className="lk-clients__content__main__item__top__info">
                  <span className="lk-clients__content__main__item__top__title">
                    Наименование фирмы
                  </span>
                  <span className="lk-clients__content__main__item__top__subtitle">
                    Фамилия Имя Отчество
                  </span>
                </div>
              </div>
              <div className="lk-order_inner__main__info__left__bottom">
                <span className="lk-clients__content__main__item__bottom__phone">
                  8 (999) 999-99-99
                </span>
                <button className="lk-order_inner__main__info__left__bottom__btn">
                  О клиенте
                </button>
              </div>
            </div>
            <div className="lk-order_inner__main__info__right">
              <div className="lk-order_inner__main__info__right__top">
                <div className="lk-order_inner__main__info__right__top__left">
                  <span className="lk-order_inner__main__info__right__top__left__title">
                    Ааа-10001200120012
                  </span>
                  <span className="lk-order_inner__main__info__right__top__left__subtitle">
                    от 01.01.0001
                  </span>
                </div>
                <div className="lk-order_inner__main__info__right__top__right">
                  <span className="lk-order_inner__main__info__right__top__right__title">
                    Актуален:
                  </span>
                  <span className="lk-order_inner__main__info__right__top__right__subtitle">
                    ещё 2 дня
                  </span>
                </div>
              </div>
              <div className="lk-order_inner__main__info__right__bottom">
                <span className="lk-order_inner__main__info__right__bottom__title">
                  Продлить
                </span>
                <button className="lk-order_inner__main__info__right__bottom__btn">
                  с сохранением
                </button>
                <button className="lk-order_inner__main__info__right__bottom__btn">
                  с перерасчетом
                </button>
              </div>
            </div>
          </div>
          <div className="lk-order_inner__main__goods">
            <div className="lk-order_inner__main__goods__header">
              <span className="lk-order_inner__main__goods__header__title">
                <span className="lk__orange-600">NN</span> товаров
              </span>
              <div className="lk-order_inner__main__goods__header__count">
                <span className="lk-order_inner__main__goods__header__title">
                  на{" "}
                  <span className="lk__orange-600 lk-order_inner__main__goods__header__count__span">
                    35 000
                  </span>
                </span>
                <div className="lk-order_inner__main__goods__header__count__images">
                  <img src="../images/lk/prod_icon.svg" />
                  <img src="../images/lk/reserve_icon.svg" />
                </div>
              </div>
            </div>
            <div className="lk-order_inner__main__goods__list">
              <div className="lk-order_inner__main__goods__item"></div>
            </div>
            <img src="../images/lk/arrow_down.svg" className="lk-order_inner__main__goods__arrow"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LK_3;
