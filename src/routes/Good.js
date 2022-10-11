import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterMob from "../components/FooterMob";

function Good() {
  const image_arr = ["images/good/sidebar_img.svg", "images/good/sidebar_img.svg", "images/good/sidebar_img.svg", "images/good/sidebar_img.svg"]
  return (
    <div className="wrapper">
      <Header cartPrice={2120} />
      <div className="good__main-section">
        <div className="good__container">
          <div class="tkani__navigation">
            <div class="tkani__navigation__back-btn">Назад</div>
            <ul class="tkani__navigation__chapter-list">
              <li class="tkani__navigation__chapter__item good__nav__item">
                Каталог
              </li>
              <li class="tkani__navigation__chapter__item good__nav__item">
                Спальня
              </li>
              <li class="tkani__navigation__chapter__item good__nav__item">
                Постельное белье
              </li>
              <li class="tkani__navigation__chapter__item good__nav__item">
                Комплект постельного белья
              </li>
            </ul>
          </div>
          <div className="good__main">
            <div className="good__main__image">
              <div className="good__main__image__sidebar">
                <img src="../images/good/arrow_up.svg" />
                <div className="good__main__image__sidebar__slider">
                  <div className="good__main__image__sidebar__slider__item">
                    <div className="good__main__slider__img-active"></div>
                      <div
                        src="
                        ../images/good/sidebar_img.svg"
                        className="good__main__slider__img"
                        style={{
                          backgroundImage: "url(../images/good/sidebar_img.svg)",
                        }}
                      >
                      </div>
                  </div>
                  <div className="good__main__image__sidebar__slider__item">
                      <div
                        src="../images/good/sidebar_img.svg"
                        className="good__main__slider__img"
                        style={{
                          backgroundImage: "url(../images/good/sidebar_img.svg)",
                        }}
                      >
                      </div>
                  </div>
                  <div className="good__main__image__sidebar__slider__item">
                      <div
                        src="../images/good/sidebar_img.svg"
                        className="good__main__slider__img"
                        style={{
                          backgroundImage: "url(../images/good/sidebar_img.svg)",
                        }}
                      >
                      </div>
                  </div>
                  <div className="good__main__image__sidebar__slider__item">
                      <div
                        src="../images/good/sidebar_img.svg"
                        className="good__main__slider__img"
                        style={{
                          backgroundImage: "url(../images/good/sidebar_img.svg)",
                        }}
                      >
                      </div>
                  </div>
                </div>
                <img src="../images/good/arrow_down.svg" />
              </div>
              <div className="good__main__image__content">
                <img src="../images/good/good_image.png" />
              </div>
              <div className="good__main__down">
                <div className="good__main__down__left">
                  <p className="good__main__down__left__title">
                    Подушка Memory Foam Roller
                  </p>
                  <p className="good__main__down__left__subtitle">
                    Артикул: 40893654
                  </p>
                  <div className="good__main__down__left__price">
                    <div className="good__main__down__left__wish">
                      <div className="good__main__wish__price">
                        <p className="good__main__wish__price__title">2120 ₽</p>
                        <p className="good__main__wish__price__subtitle">
                          2430 ₽
                        </p>
                      </div>
                    </div>
                    <div className="good__main__down__head">
                      <div className="good__main__down__choice">
                        <div className="good__main__down__count">
                          <img src="../images/good/minus.svg" />
                          <span className="cart__main__content__item__count-price__bottom-btn-cnt unselectable">
                            2
                          </span>
                          <img src="../images/good/plus.svg" />
                        </div>
                      </div>
                      <div className="good__main__staff">
                        <div className="good__main__staff__price">
                          <span>товара на: </span>
                          <span>4240 ₽</span>
                        </div>
                        <div className="good__main__staff__btn">
                          <span className="good__main__staff__btn__title">
                            В корзину
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="good__main__down__left__wish">
                    <div className="good__main__down__info">
                      <span>цвет</span>
                      <div className="good__main__down__color">
                        <div className="good__main__down__color__left"></div>
                        <div className="good__main__down__color__right"></div>
                      </div>
                    </div>
                    <div className="good__main__down__size">
                      <span>размер</span>
                      <div className="good__main__down__size__box">
                        <div className="good__main__down__size__item">
                          <span> 115×205 см</span>
                        </div>
                        <div className="good__main__down__size__item">
                          <span> 115×205 см</span>
                        </div>
                        <div className="good__main__down__size__item">
                          <span> 115×205 см</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="good__main__down__right">
                  <p className="good__main__down__right__title">Описание</p>
                  <div className="good__main__down__right__content">
                    <p>
                      Подушка «Memory Foam Roller», два валика под шею - 13 и 11
                      см. Наполнитель - инновационная пена последнего поколения
                      из модифицированного пенополиуретана. Два ролика в подушке
                      сделаны для того, чтобы вы сами могли регулировать, как
                      вам удобнее на ней спать или сидеть. Хоть на боку, хоть на
                      спине – устраивайтесь поудобнее!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="good__reviews">
            <p className="good__reviews__title">Похожие товары</p>
            <div className="good__reviews__btn">
              <span>Смотреть всё</span>
            </div>
          </div>
          <div className="home__goods__list good__list">
            <div className="home__goods__item">
              <div className="home__goods__item__image"></div>
              <div className="home__goods__item__info">
                <div className="home__goods__item__price">
                  <span className="home__goods__item__price__title">
                    2120 ₽
                  </span>
                  <span className="home__goods__item__price__subtitle">
                    2430 ₽
                  </span>
                </div>
                <p className="home__goods__item__info__title">
                  Подушка “Memory Foam Roller”{" "}
                </p>
              </div>
              <div className="home__goods__item__bottom">
                <div className="home__goods__item__bottom__left">
                  <img src="../images/home/minus_icon.svg" />
                  <span>2</span>
                  <img src="../images/home/plus_icon.svg" />
                </div>
                <img src="../images/home/cart.svg" />
              </div>
            </div>
            <div className="home__goods__item">
              <div className="home__goods__item__image"></div>
              <div className="home__goods__item__info">
                <div className="home__goods__item__price">
                  <span className="home__goods__item__price__title">
                    2120 ₽
                  </span>
                  <span className="home__goods__item__price__subtitle">
                    2430 ₽
                  </span>
                </div>
                <p className="home__goods__item__info__title">
                  Подушка “Memory Foam Roller”{" "}
                </p>
              </div>
              <div className="home__goods__item__bottom">
                <div className="home__goods__item__bottom__left">
                  <img src="../images/home/minus_icon.svg" />
                  <span>2</span>
                  <img src="../images/home/plus_icon.svg" />
                </div>
                <img src="../images/home/cart.svg" />
              </div>
            </div>
            <div className="home__goods__item">
              <div className="home__goods__item__image"></div>
              <div className="home__goods__item__info">
                <div className="home__goods__item__price">
                  <span className="home__goods__item__price__title">
                    2120 ₽
                  </span>
                  <span className="home__goods__item__price__subtitle">
                    2430 ₽
                  </span>
                </div>
                <p className="home__goods__item__info__title">
                  Подушка “Memory Foam Roller”{" "}
                </p>
              </div>
              <div className="home__goods__item__bottom">
                <div className="home__goods__item__bottom__left">
                  <img src="../images/home/minus_icon.svg" />
                  <span>2</span>
                  <img src="../images/home/plus_icon.svg" />
                </div>
                <img src="../images/home/cart.svg" />
              </div>
            </div>
            <div className="home__goods__item">
              <div className="home__goods__item__image"></div>
              <div className="home__goods__item__info">
                <div className="home__goods__item__price">
                  <span className="home__goods__item__price__title">
                    2120 ₽
                  </span>
                  <span className="home__goods__item__price__subtitle">
                    2430 ₽
                  </span>
                </div>
                <p className="home__goods__item__info__title">
                  Подушка “Memory Foam Roller”{" "}
                </p>
              </div>
              <div className="home__goods__item__bottom">
                <div className="home__goods__item__bottom__left">
                  <img src="../images/home/minus_icon.svg" />
                  <span>2</span>
                  <img src="../images/home/plus_icon.svg" />
                </div>
                <img src="../images/home/cart.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterMob cartPrice={212000} />
    </div>
  );
}

export default Good;
