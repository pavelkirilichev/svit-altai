import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterMob from "../components/FooterMob";
import RegForm from "../components/RegForm";
import LoginForm from "../components/LoginForm";
import RecChoise from "../components/RecChoise";
import RecMail from "../components/RecMail";
import HomeMob from "../components/HomeMob";

function Home() {
  return (
    <div className="wrapper">
      <Header cartPrice={2120} />
      <div className="home__main">
        <div className="home__main__image"></div>
        <section className="home__container">
          <div className="home__menu">
            <div className="home__menu__item">
              <span>Новинки</span>
            </div>
            <div className="home__menu__item__border"></div>
            <div className="home__menu__item">
              <span>Спальня</span>
            </div>
            <div className="home__menu__item__border"></div>
            <div className="home__menu__item">
              <span>Кухня и интерьер</span>
            </div>
            <div className="home__menu__item__border"></div>
            <div className="home__menu__item">
              <span>Одежда и обувь </span>
            </div>
          </div>
          <div className="home__goods">
            <span className="home__goods__title">Лучшие цены на сайте</span>
            <HomeMob />
            <div className="home__goods__list">
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
