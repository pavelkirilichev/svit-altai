import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

function Tkani() {
  const [pullMenuMob, setPullMenuMob] = useState("");
  const [pull, setPull] = useState("");
  return (
    <div className="wrapper">
      <Header cartPrice={2120} pull={pull} setPull={setPull} pullMenuMob={pullMenuMob} setPullMenuMob={setPullMenuMob}/>
      <div className={(pull == "" && pullMenuMob == "") ? "tkani__main_section-active" : "tkani__main_section"}>
        <div className="tkani__container">
          <div className="tkani__navigation">
            <div className="tkani__navigation__back-btn">Назад</div>
            <ul className="tkani__navigation__chapter-list">
              <li className="tkani__navigation__chapter__item">Каталог</li>
              <li className="tkani__navigation__chapter__item">Спальня</li>
            </ul>
          </div>
          <div className="tkani__main">
            <div className="tkani__main__sidebar">
              <div className="tkani__main__sidebar__filter">
                <span className="tkani__filter__title">Фильтры</span>
                <span className="tkani__filter__avail">
                  <div className="tkani__filter__checkbox">
                    <img
                      src="../images/tkani/checkbox_mark.png"
                      className="tkani__filter__checkbox-active"
                    />
                  </div>
                  Только в наличии
                </span>
                <div className="tkani__filter__list">
                  <div className="tkani__filter__item">
                    <span className="tkani__filter__item__title">Материал</span>
                    <div className="tkani__filter__item__inner">
                      <div className="tkani__filter__item__inner-flex">
                        <div className="tkani__filter__item__inner-left">
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-active"
                              />
                            </div>
                            белое
                          </span>
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-disable"
                              />
                            </div>
                            красное
                          </span>
                        </div>
                        <div className="tkani__filter__item__inner-right">
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-disable"
                              />
                            </div>
                            черное
                          </span>
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-active"
                              />
                            </div>
                            синее
                          </span>
                        </div>
                      </div>
                      <img
                        src="../images/tkani/down_icon.png"
                        className="tkani__filter__item__down"
                      />
                    </div>
                  </div>
                  <div className="tkani__filter__item">
                    <span className="tkani__filter__item__title">Ширина</span>
                    <div className="tkani__filter__item__inner">
                      <div className="tkani__filter__item__inner-flex">
                        <div className="tkani__filter__item__inner-left">
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-active"
                              />
                            </div>
                            белое
                          </span>
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-disable"
                              />
                            </div>
                            красное
                          </span>
                        </div>
                        <div className="tkani__filter__item__inner-right">
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-disable"
                              />
                            </div>
                            черное
                          </span>
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-active"
                              />
                            </div>
                            синее
                          </span>
                        </div>
                      </div>
                      <img
                        src="../images/tkani/down_icon.png"
                        className="tkani__filter__item__down"
                      />
                    </div>
                  </div>
                  <div className="tkani__filter__item">
                    <span className="tkani__filter__item__title">
                      Коллекции
                    </span>
                    <div className="tkani__filter__item__inner">
                      <div className="tkani__filter__item__inner-flex">
                        <div className="tkani__filter__item__inner-left">
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-active"
                              />
                            </div>
                            белое
                          </span>
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-disable"
                              />
                            </div>
                            красное
                          </span>
                        </div>
                        <div className="tkani__filter__item__inner-right">
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-disable"
                              />
                            </div>
                            черное
                          </span>
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-active"
                              />
                            </div>
                            синее
                          </span>
                        </div>
                      </div>
                      <img
                        src="../images/tkani/down_icon.png"
                        className="tkani__filter__item__down"
                      />
                    </div>
                  </div>
                  <div className="tkani__filter__item">
                    <span className="tkani__filter__item__title">
                      Основной цвет
                    </span>
                    <div className="tkani__filter__item__inner">
                      <div className="tkani__filter__item__inner-flex">
                        <div className="tkani__filter__item__inner-left">
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-active"
                              />
                            </div>
                            белое
                          </span>
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-disable"
                              />
                            </div>
                            красное
                          </span>
                        </div>
                        <div className="tkani__filter__item__inner-right">
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-disable"
                              />
                            </div>
                            черное
                          </span>
                          <span className="tkani__filter__item__inner__span">
                            <div className="tkani__filter__checkbox">
                              <img
                                src="../images/tkani/checkbox_mark.png"
                                className="tkani__filter__checkbox-active"
                              />
                            </div>
                            синее
                          </span>
                        </div>
                      </div>
                      <img
                        src="../images/tkani/down_icon.png"
                        className="tkani__filter__item__down"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tkani__main__content">
              <div className="tkani__main__content__item">
                <img
                  src="../images/tkani/brown_paint.png"
                  className="tkani__main__content__item__img"
                />
                <span className="tkani__main__content__item__title">
                  Авокадо в шоколаде подушка
                </span>
                <span className="tkani__main__content__item__subtitle">
                  324-150-7Б4_326
                </span>
                <span className="tkani__main__content__item__price">
                  2120 ₽
                </span>
                <div className="tkani__main__content__item__bottom-flex">
                  <div className="tkani__main__content__item__bottom-count-avail">
                    <img
                      src="../images/tkani/minus_icon.png"
                      className="tkani_plus-minus__icon"
                    />
                    <span>1</span>
                    <img
                      src="../images/tkani/plus_icon.png"
                      className="tkani_plus-minus__icon"
                    />
                    <p className="tkani__main__content__item__bottom__count">
                      в наличии <br />
                      NNNNN шт.
                    </p>
                  </div>
                  <div className="tkani__main__content__item__bottom__cart">
                    <img src="../images/tkani/cart.png" />
                  </div>
                </div>
              </div>
              <div className="tkani__main__content__item">
                <img
                  src="../images/tkani/brown_paint.png"
                  className="tkani__main__content__item__img"
                />
                <span className="tkani__main__content__item__title">
                  Авокадо в шоколаде подушка
                </span>
                <span className="tkani__main__content__item__subtitle">
                  324-150-7Б4_326
                </span>
                <span className="tkani__main__content__item__price">
                  2120 ₽
                </span>
                <div className="tkani__main__content__item__bottom-flex">
                  <div className="tkani__main__content__item__bottom-count-avail">
                    <img
                      src="../images/tkani/minus_icon.png"
                      className="tkani_plus-minus__icon"
                    />
                    <span>1</span>
                    <img
                      src="../images/tkani/plus_icon.png"
                      className="tkani_plus-minus__icon"
                    />
                    <p className="tkani__main__content__item__bottom__count">
                      в наличии <br />
                      NNNNN шт.
                    </p>
                  </div>
                  <div className="tkani__main__content__item__bottom__cart">
                    <img src="../images/tkani/cart.png" />
                  </div>
                </div>
              </div>
              <div className="tkani__main__content__item">
                <img
                  src="../images/tkani/brown_paint.png"
                  className="tkani__main__content__item__img"
                />
                <span className="tkani__main__content__item__title">
                  Авокадо в шоколаде подушка
                </span>
                <span className="tkani__main__content__item__subtitle">
                  324-150-7Б4_326
                </span>
                <span className="tkani__main__content__item__price">
                  2120 ₽
                </span>
                <div className="tkani__main__content__item__bottom-flex">
                  <div className="tkani__main__content__item__bottom-count-avail">
                    <img
                      src="../images/tkani/minus_icon.png"
                      className="tkani_plus-minus__icon"
                    />
                    <span>1</span>
                    <img
                      src="../images/tkani/plus_icon.png"
                      className="tkani_plus-minus__icon"
                    />
                    <p className="tkani__main__content__item__bottom__count">
                      в наличии <br />
                      NNNNN шт.
                    </p>
                  </div>
                  <div className="tkani__main__content__item__bottom__cart">
                    <img src="../images/tkani/cart.png" />
                  </div>
                </div>
              </div>
              <div className="tkani__main__content__item">
                <img
                  src="../images/tkani/brown_paint.png"
                  className="tkani__main__content__item__img"
                />
                <span className="tkani__main__content__item__title">
                  Авокадо в шоколаде подушка
                </span>
                <span className="tkani__main__content__item__subtitle">
                  324-150-7Б4_326
                </span>
                <span className="tkani__main__content__item__price">
                  2120 ₽
                </span>
                <div className="tkani__main__content__item__bottom-flex">
                  <div className="tkani__main__content__item__bottom-count-avail">
                    <img
                      src="../images/tkani/minus_icon.png"
                      className="tkani_plus-minus__icon"
                    />
                    <span>1</span>
                    <img
                      src="../images/tkani/plus_icon.png"
                      className="tkani_plus-minus__icon"
                    />
                    <p className="tkani__main__content__item__bottom__count">
                      в наличии <br />
                      NNNNN шт.
                    </p>
                  </div>
                  <div className="tkani__main__content__item__bottom__cart">
                    <img src="../images/tkani/cart.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tkani;
