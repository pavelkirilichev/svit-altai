import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterMob from "../components/FooterMob";

function Good() {
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
                  <div
                    src="../images/good/sidebar_img.svg"
                    className="good__main__slider__img"
                    style={{
                      backgroundImage: "url(../images/good/sidebar_img.svg)",
                    }}
                  >
                    <div className="good__main__slider__img-active"></div>
                  </div>
                  <div
                    src="../images/good/sidebar_img.svg"
                    className="good__main__slider__img"
                    style={{
                      backgroundImage: "url(../images/good/sidebar_img.svg)",
                    }}
                  ></div>
                </div>
                <img src="../images/good/arrow_down.svg" />
              </div>
              <div className="good__main__image__content">
                <img src="../images/good/content_image.jpg" />
              </div>
            </div>
            <div className="good__main__down">
              <div className="good__main__down__left">
                <p className="good__main__down__left__title">
                  Подушка Memory Foam Roller
                </p>
                <div className="good__main__down__left__info">
                  <p className="good__main__down__left__subtitle">
                    Артикул: 40893654
                  </p>
                  <img src="../images/good/stars.svg" />
                </div>
                <div className="good__main__down__left__price">
                  <div className="good__main__down__left__wish">
                    <div className="good__main__wish__price">
                      <p className="good__main__wish__price__title">2120 ₽</p>
                      <p className="good__main__wish__price__subtitle">
                        2430 ₽
                      </p>
                    </div>
                    <img src="../images/good/wish_icon.svg" />
                  </div>
                  <div className="good__main__down__left__cart">
                    <img src="../images/good/cart_icon.svg" />
                    <span>Купить</span>
                  </div>
                </div>
                <div className="good__main__down__choice">
                  <div className="good__main__down__color">
                    <img src="../images/good/color_white.svg" />
                    <img src="../images/good/color_blue.svg" />
                  </div>
                  <div className="good__main__down__count">
                    <div className="cart__main__content__item__count-price__bottom-btn cart__btn-minus unselectable"></div>
                    <span className="cart__main__content__item__count-price__bottom-btn-cnt unselectable">
                      1
                    </span>
                    <div className="cart__main__content__item__count-price__bottom-btn cart__btn-plus unselectable"></div>
                  </div>
                </div>
              </div>
              <div className="good__main__down__right">
                <p className="good__main__down__right__title">Описание</p>
                <div className="good__main__down__right__content">
                  <p>
                    Подушка «Memory Foam Roller», два валика под шею - 13 и 11
                    см. Наполнитель - инновационная пена последнего поколения из
                    модифицированного пенополиуретана. Два ролика в подушке
                    сделаны для того, чтобы вы сами могли регулировать, как вам
                    удобнее на ней спать или сидеть. Хоть на боку, хоть на спине
                    – устраивайтесь поудобнее! В комплекте с подушкой идет
                    съемный чехол на молнии, изготовленный из мягкого
                    качественного трикотажа. Подушку не надо мочить и стирать, а
                    вот съемный чехол – можно и нужно, но только в деликатном
                    режиме. Подушка «Memory Foam Roller», два валика под шею -
                    13 и 11 см. Наполнитель - инновационная пена последнего
                    поколения из модифицированного пенополиуретана. Два ролика в
                    подушке сделаны для того, чтобы вы сами могли регулировать,
                    как вам удобнее на ней спать или сидеть. Хоть на боку, хоть
                    на спине – устраивайтесь поудобнее! В комплекте с подушкой
                    идет съемный чехол на молнии, изготовленный из мягкого
                    качественного трикотажа. Подушку не надо мочить и стирать, а
                    вот съемный чехол – можно и нужно, но только в деликатном
                    режиме.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="good__reviews__title">Отзывы</p>
          <div className="good__reviews">
            <div className="good__reviews__left">
              <div className="good__reviews__circle">
                <p>общий рейтинг</p>
                <p>12 отзывов</p>
              </div>
              <div className="good__reviews__line">
                <div className="good__reviews__line__item">
                  <span className="good__reviews__line__item__title">5</span>
                  <div className="good__reviews__line__item__inner">
                    <span>8 отзывов</span>
                    <div className="good__reviews__line__strip">
                      <div
                        className="good__reviews__line__painted"
                        style={{ width: 180 }}
                      >
                        <img src="../images/good/painted-line_star.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="good__reviews__line__item">
                  <span className="good__reviews__line__item__title">4</span>
                  <div className="good__reviews__line__item__inner">
                    <span>3 отзыва</span>
                    <div className="good__reviews__line__strip">
                      <div
                        className="good__reviews__line__painted"
                        style={{ width: 100 }}
                      >
                        <img src="../images/good/painted-line_star.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="good__reviews__line__item">
                  <span className="good__reviews__line__item__title">3</span>
                  <div className="good__reviews__line__item__inner">
                    <span>1 отзыв</span>
                    <div className="good__reviews__line__strip">
                      <div
                        className="good__reviews__line__painted"
                        style={{ width: 27 }}
                      >
                        <img src="../images/good/painted-line_star.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="good__reviews__line__item">
                  <span className="good__reviews__line__item__title">2</span>
                  <div className="good__reviews__line__item__inner">
                    <span></span>
                    <div className="good__reviews__line__strip"></div>
                  </div>
                </div>
                <div className="good__reviews__line__item">
                  <span className="good__reviews__line__item__title">1</span>
                  <div className="good__reviews__line__item__inner">
                    <span></span>
                    <div className="good__reviews__line__strip"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="good__reviews__right">
              <div className="good__reviews__list">
                <div className="good__reviews__item">
                  <div className="good__reviews__item__header">
                    <img src="../images/good/user_icon.svg" />
                    <span>Пользователь</span>
                  </div>
                  <p className="good__reviews__item__content">Все ок</p>
                  <img
                    src="../images/good/good_images.svg"
                    className="good__reviews__item__images"
                  />
                </div>
                <div className="good__reviews__item">
                  <div className="good__reviews__item__header">
                    <img src="../images/good/user_icon.svg" />
                    <span>Пользователь</span>
                  </div>
                  <p className="good__reviews__item__content">
                    Все нормально, ага
                  </p>
                  <img
                    src="../images/good/good_images.svg"
                    className="good__reviews__item__images"
                  />
                </div>
                <div className="good__reviews__item">
                  <div className="good__reviews__item__header">
                    <img src="../images/good/user_icon.svg" />
                    <span>Пользователь</span>
                  </div>
                  <p className="good__reviews__item__content">
                    Все нормально, ага, спасибо
                  </p>
                  <img
                    src="../images/good/good_images.svg"
                    className="good__reviews__item__images"
                  />
                </div>
                <div className="good__reviews__item">
                  <div className="good__reviews__item__header">
                    <img src="../images/good/user_icon.svg" />
                    <span>Пользователь</span>
                  </div>
                  <p className="good__reviews__item__content">Все ок</p>
                  <img
                    src="../images/good/good_images.svg"
                    className="good__reviews__item__images"
                  />
                </div>
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
