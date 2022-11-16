import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { goods } from "../data/GoodsJSON";
import NewArrayByCount from "../Services/Array";

function Tkani(props) {
  const location = useLocation();
  const [chapter, setChapterTkani] = useState(location.state?.chapter);
  const [arrayCount, setArrayCount] = useState(NewArrayByCount(goods));
  const [pullMenuMob, setPullMenuMob] = useState("");
  const [pull, setPull] = useState("");
  return (
    <div className="wrapper">
      <Header
        cartPrice={2120}
        pull={pull}
        setPull={setPull}
        pullMenuMob={pullMenuMob}
        setPullMenuMob={setPullMenuMob}
        route={"tkani"}
        setChapterTkani={setChapterTkani}
      />
      <div
        className={
          pull == "" && pullMenuMob == ""
            ? "tkani__main_section-active"
            : "tkani__main_section"
        }
      >
        <div className="tkani__container">
          <div className="tkani__navigation">
            <Link to={"/"}>
              <div class="tkani__navigation__back-btn">Назад</div>
            </Link>
            <ul className="tkani__navigation__chapter-list">
              <li className="tkani__navigation__chapter__item">Каталог</li>
              <li className="tkani__navigation__chapter__item">{chapter}</li>
            </ul>
          </div>
          <div className="tkani__main">
            <div className="tkani__main__sidebar">
              <div className="tkani__main__sidebar__filter">
                <span className="tkani__filter__title">Фильтры</span>
                <div className="tkani__filter__list">
                  <div className="tkani__filter__item">
                    <span className="tkani__filter__item__title">
                      Основной цвет
                    </span>
                    <div className="tkani__filter__item__inner">
                      <div className="tkani__filter__item__inner-flex">
                        <div className="tkani__filter__item__inner-left">
                          <label className="tkani__filter__item__inner__label">
                            <input
                              type="checkbox"
                              className="tkani__filter__item__inner__check__input"
                            />
                            <div className="tkani__filter__item__inner__check__box"></div>
                            <span className="tkani__filter__item__inner__label__text">
                              белое
                            </span>
                          </label>
                          <label className="tkani__filter__item__inner__label">
                            <input
                              type="checkbox"
                              className="tkani__filter__item__inner__check__input"
                            />
                            <div className="tkani__filter__item__inner__check__box"></div>
                            <span className="tkani__filter__item__inner__label__text">
                              красное
                            </span>
                          </label>
                        </div>
                        <div className="tkani__filter__item__inner-right">
                          <label className="tkani__filter__item__inner__label">
                            <input
                              type="checkbox"
                              className="tkani__filter__item__inner__check__input"
                            />
                            <div className="tkani__filter__item__inner__check__box"></div>
                            <span className="tkani__filter__item__inner__label__text">
                              чёрное
                            </span>
                          </label>
                          <label className="tkani__filter__item__inner__label">
                            <input
                              type="checkbox"
                              className="tkani__filter__item__inner__check__input"
                            />
                            <div className="tkani__filter__item__inner__check__box"></div>
                            <span className="tkani__filter__item__inner__label__text">
                              синее
                            </span>
                          </label>
                        </div>
                      </div>
                      <img
                        src="../images/tkani/down_icon.png"
                        className="tkani__filter__item__down"
                      />
                    </div>
                  </div>
                  <div className="tkani__filter__item">
                    <span className="tkani__filter__item__title">Цвет</span>
                    <div className="tkani__filter__item__inner">
                      <div className="tkani__filter__item__inner-flex">
                        <div className="tkani__filter__item__inner-left">
                          <label className="tkani__filter__item__inner__label">
                            <input
                              type="checkbox"
                              className="tkani__filter__item__inner__check__input"
                            />
                            <div className="tkani__filter__item__inner__check__box"></div>
                            <span className="tkani__filter__item__inner__label__text">
                              белое
                            </span>
                          </label>
                          <label className="tkani__filter__item__inner__label">
                            <input
                              type="checkbox"
                              className="tkani__filter__item__inner__check__input"
                            />
                            <div className="tkani__filter__item__inner__check__box"></div>
                            <span className="tkani__filter__item__inner__label__text">
                              красное
                            </span>
                          </label>
                        </div>
                        <div className="tkani__filter__item__inner-right">
                          <label className="tkani__filter__item__inner__label">
                            <input
                              type="checkbox"
                              className="tkani__filter__item__inner__check__input"
                            />
                            <div className="tkani__filter__item__inner__check__box"></div>
                            <span className="tkani__filter__item__inner__label__text">
                              чёрное
                            </span>
                          </label>
                          <label className="tkani__filter__item__inner__label">
                            <input
                              type="checkbox"
                              className="tkani__filter__item__inner__check__input"
                            />
                            <div className="tkani__filter__item__inner__check__box"></div>
                            <span className="tkani__filter__item__inner__label__text">
                              синее
                            </span>
                          </label>
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
              <div className="tkani__main__sort">
                <span className="tkani__main__sort__text">Сортировать по:</span>
                <span className="tkani__main__sort__text text-red">Цене 🠕</span>
                <span className="tkani__main__sort__text">Скидке</span>
                <span className="tkani__main__sort__text">Новизне</span>
              </div>
              {goods.map((good, key) => {
                return (
                  <div className="home__goods__item">
                    <Link to={"/good"}>
                      <div className="home__goods__item__image"></div>
                    </Link>
                    <Link to={"/good"}>
                      <div className="home__goods__item__info">
                        <div className="home__goods__item__price">
                          <span className="home__goods__item__price__title">
                            {good.price} ₽
                          </span>
                          <span className="home__goods__item__price__subtitle">
                            {good.old_price} ₽
                          </span>
                        </div>
                        <p className="home__goods__item__info__title">
                          {good.type} “{good.title}”{" "}
                        </p>
                      </div>
                    </Link>
                    <div className="home__goods__item__bottom">
                      <div className="home__goods__item__bottom__left">
                        <img
                          src="../images/home/minus_icon.svg"
                          onClick={() => {
                            let copy = Object.assign([], arrayCount);
                            let index = key;
                            if (copy[index] > 0) {
                              copy[index] -= 1;
                            }
                            setArrayCount(copy);
                          }}
                        />
                        <span>{arrayCount[key]}</span>
                        <img
                          src="../images/home/plus_icon.svg"
                          onClick={() => {
                            let copy = Object.assign([], arrayCount);
                            let index = key;
                            copy[index] += 1;
                            setArrayCount(copy);
                          }}
                        />
                      </div>
                      <img src="../images/home/cart.svg" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tkani;
