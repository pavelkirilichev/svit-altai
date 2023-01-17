import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterMob from "../components/FooterMob";
import RegForm from "../components/RegForm";
import LoginForm from "../components/LoginForm";
import RecChoise from "../components/RecChoise";
import RecMail from "../components/RecMail";
import HomeMob from "../components/HomeMob";
import { Link } from "react-router-dom";
import { useState } from "react";
import { goods } from "../data/GoodsJSON";
import NewArrayByCount from "../Services/Array";

function Home() {
  const [pullMenuMob, setPullMenuMob] = useState("");
  const [pull, setPull] = useState("");
  const [arrayCount, setArrayCount] = useState(NewArrayByCount(goods));
  return (
    <div className="wrapper">
      <Header
        cartPrice={2120}
        pull={pull}
        setPull={setPull}
        pullMenuMob={pullMenuMob}
        setPullMenuMob={setPullMenuMob}
      />
      <div
        className={
          pull == "" && pullMenuMob == "" ? "home__main-active" : "home__main"
        }
      >
        <div className="home__main__image"></div>
        <section className="home__container">
          <div className="home__menu">
            <div className="home__menu__item">
              <span className="text-red">Новинки</span>
            </div>
            <div className="home__menu__item__border"></div>
            <Link to={"/tkani"} state={{ chapter: "Спальня" }}>
              <div className="home__menu__item home__menu__bedroom">
                <span>Спальня</span>
              </div>
            </Link>
            <div className="home__menu__item__border"></div>
            <Link to={"/tkani"} state={{ chapter: "Кухня" }}>
              <div className="home__menu__item home__menu__kitchen">
                <span>Кухня и интерьер</span>
              </div>
            </Link>
            <div className="home__menu__item__border"></div>
            <Link to={"/tkani"} state={{ chapter: "Одежда" }}>
              <div className="home__menu__item home__menu__clothes">
                <span>Одежда и обувь </span>
              </div>
            </Link>
          </div>
          <div className="home__goods">
            <span className="home__goods__title">Лучшие цены на сайте</span>
            <HomeMob />
            <div className="home__goods__list">
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
          <div className="home__view-all">
            <span>Смотреть всё</span>
          </div>
        </section>
      </div>
      <Footer />
      <FooterMob cartPrice={212000} />
    </div>
  );
}

export default Home;
