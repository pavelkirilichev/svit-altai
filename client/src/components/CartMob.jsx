function CartMob() {
  return (
    <div className="cart-mob">
      <div className="cart-mob__title">
        <span className="cart-mob__title__subtitle">Корзина</span>
        <div className="cart-mob__title__booking">
          <span>Оформить заказ</span>
          <span>2120₽</span>
        </div>
      </div>
      <div className="сart-mob__stic"></div>
      <div className="сart-mob__total">
        <div className="сart-mob__subtotal">
          <span>Итого:</span>
          <span>212000₽</span>
        </div>
        <div className="сart-mob__subtotal">
          <span>Очистить корзину</span>
          <img src="../images/choise_address/close.svg" />
        </div>
      </div>
      <div className="сart-mob__staff__number">
        <div className="сart-mob__staff">
          <img
            src="../images/choise_address/close.svg"
            className="сart-mob__staff__close"
          />
          <div className="сart-mob__staff__left">
            <div className="сart-mob__staff__left__pillow"></div>
            <div className="сart-mob__staff__left__count">
              <img src="../images/cart-mob/plus.svg" />
              <span>100</span>
              <img src="../images/cart-mob/minus.svg" />
            </div>
          </div>
          <div className="сart-mob__staff__right">
            <div className="сart-mob__staff__right__title">
              <span>Подушка</span>
              <span>Memory Foam </span>
              <span>Roller</span>
            </div>
            <div className="сart-mob__staff__right__parametrs">
              <div className="сart-mob__staff__right__parametrs__left">
                <div className="сart-mob__staff__right__parametrs__main">
                  <span>цвет:</span>
                  <span>белый</span>
                </div>
                <div className="сart-mob__staff__right__parametrs__main">
                  <span>размер: </span>
                  <span>60 x 40 x 12</span>
                </div>
              </div>
              <div className="сart-mob__staff__right__parametrs__right">
                <span className="сart-mob__staff__right__price">2430 ₽</span>
                <div className="сart-mob__staff__right__parametrs__standart">
                  <span>2120 ₽</span>
                  <span>1шт</span>
                </div>
              </div>
            </div>
            <div className="сart-mob__staff__right__total">
              <span>Итого:</span>
              <span>212000₽</span>
            </div>
          </div>
        </div>
        <div className="сart-mob__staff">
          <img
            src="../images/choise_address/close.svg"
            className="сart-mob__staff__close"
          />
          <div className="сart-mob__staff__left">
            <div className="сart-mob__staff__left__pillow"></div>
            <div className="сart-mob__staff__left__count">
              <img src="../images/cart-mob/plus.svg" />
              <span>100</span>
              <img src="../images/cart-mob/minus.svg" />
            </div>
          </div>
          <div className="сart-mob__staff__right">
            <div className="сart-mob__staff__right__title">
              <span>Подушка</span>
              <span>Memory Foam </span>
              <span>Roller</span>
            </div>
            <div className="сart-mob__staff__right__parametrs">
              <div className="сart-mob__staff__right__parametrs__left">
                <div className="сart-mob__staff__right__parametrs__main">
                  <span>цвет:</span>
                  <span>белый</span>
                </div>
                <div className="сart-mob__staff__right__parametrs__main">
                  <span>размер: </span>
                  <span>60 x 40 x 12</span>
                </div>
              </div>
              <div className="сart-mob__staff__right__parametrs__right">
                <span className="сart-mob__staff__right__price">2430 ₽</span>
                <div className="сart-mob__staff__right__parametrs__standart">
                  <span>2120 ₽</span>
                  <span>1шт</span>
                </div>
              </div>
            </div>
            <div className="сart-mob__staff__right__total">
              <span>Итого:</span>
              <span>212000₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartMob;
