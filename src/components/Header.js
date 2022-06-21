import Catalog from "./Catalog";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [pullMenuMob, setPullMenuMob] = useState("");
  const [pull, setPull] = useState("");
  const [catalogChapter, setCatalogChapter] = useState("");
  const [catalogMenuImgActive, setCatalogMenuImgActive] = useState("");

  const [catalogMenuImgOne, setCatalogMenuImgOne] = useState("");
  const [catalogMenuImgTwo, setCatalogMenuImgTwo] = useState("");
  const [catalogMenuImgThree, setCatalogMenuImgThree] = useState("");

  const [catalogBlurActive, setCatalogBlurActive] = useState("");

  return (
    <header className="header">
      <div className="header-pc">
        <nav className="nav-top">
          <div className="header__container">
            <div className="nav-top__row">
              <div className="nav-top__left">
                <div className="nav-top__city">
                  <span className="nav-top__city-text">Новоалтайск</span>
                  <img
                    src="./images/header/geo_icon.png"
                    className="nav-top__city-img"
                  />
                </div>
              </div>
              <div className="nav-top__right">
                <div className="nav-top__right__email">
                  <img
                    src="./images/header/mail_icon.png"
                    className="nav-top__mail-img"
                  />
                  <span className="nav-top__mail-text">svit22@mail.ru</span>
                </div>
                <div className="nav-top__right__phone">
                  <img
                    src="./images/header/phone_icon.png"
                    className="nav-top__phone-img"
                  />
                  <span className="nav-top__phone-text">+7-3852-570-722</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="nav-bottom">
          <div className="header__container">
            <div className="nav-bottom__row">
              <div className="nav-bottom__row__left">
                <img
                  src="./images/header/logo.png"
                  className="nav-bottom__logo"
                />
                <div
                  className="nav-bottom__burger"
                  onClick={() => {
                    setPull(pull == "" ? " pull__active" : "");
                    setCatalogMenuImgOne("");
                    setCatalogMenuImgTwo("");
                    setCatalogMenuImgThree("");
                    setCatalogChapter("");
                    setCatalogBlurActive("");
                  }}
                >
                  <img
                    src="./images/header/burger.png"
                    className="nav-bottom__burger-img"
                  />
                </div>
              </div>
              <div className="nav-bottom__search">
                <img
                  src="./images/header/search.png"
                  className="nav-bottom__search-img"
                />
              </div>
              <div className="nav-bottom__row-right">
                <div className="nav-bottom__row-right__icons">
                  <div className="nav-bottom__row-right__icon">
                    <img
                      src="./images/header/home.png"
                      className="nav-bottom__row-right__icon-img"
                    />
                  </div>
                  <div className="nav-bottom__row-right__icon">
                    <img
                      src="./images/header/heart.png"
                      className="nav-bottom__row-right__icon-img"
                    />
                  </div>
                  <div className="nav-bottom__row-right__icon">
                    <img
                      src="./images/header/user.png"
                      className="nav-bottom__row-right__icon-img"
                    />
                  </div>
                  <div className="nav-bottom__row-right__icon cart-icon">
                    <Link to="/cart">
                      <img
                        src="./images/header/cart.png"
                        className="nav-bottom__row-right__icon-img"
                      />
                    </Link>
                  </div>
                </div>
                <span className="nav-bottom__cart-price">2120₽</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Catalog
        setPull={setPull}
        pull={pull}
        setCatalogChapter={setCatalogChapter}
        catalogChapter={catalogChapter}
        setCatalogBlurActive={setCatalogBlurActive}
        catalogBlurActive={catalogBlurActive}
        catalogMenuImgOne={catalogMenuImgOne}
        setCatalogMenuImgOne={setCatalogMenuImgOne}
        catalogMenuImgTwo={catalogMenuImgTwo}
        setCatalogMenuImgTwo={setCatalogMenuImgTwo}
        catalogMenuImgThree={catalogMenuImgThree}
        setCatalogMenuImgThree={setCatalogMenuImgThree}
      />
      <div className="header-mobile">
        <nav className="nav-mobile">
          <img src="./images/header/logo_mobile.png" />
          <div className="nav-mobile__search">
            <img
              src="./images/header/search.png"
              className="nav-mobile__search-img"
            />
          </div>
          <div
            className="nav-mobile__burger"
            onClick={() => {
              setPullMenuMob(
                pullMenuMob == "" ? " pull-menu-mobile__active" : ""
              );
            }}
          >
            <img src="./images/header/burger_mobile.png" />
          </div>
        </nav>
      </div>
      <div className={"pull-menu-mobile" + pullMenuMob}>
        <div className="pull-menu-mobile__inner">
          <span className="pull-menu-mobile__title">Каталог</span>
          <ul className="pull-menu-mobile__list">
            <li className="pull-menu-mobile__item">
              <span>Спальня</span>
              <img
                src="./images/header/mobile_arrow.png"
                className="pull-menu-mobile__item-img"
              />
            </li>
            <li className="pull-menu-mobile__item">
              <span>Одежда и обувь для дома</span>
              <img
                src="./images/header/mobile_arrow.png"
                className="pull-menu-mobile__item-img"
              />
            </li>
            <li className="pull-menu-mobile__item">
              <span>Кухня и интерьер</span>
              <img
                src="./images/header/mobile_arrow.png"
                className="pull-menu-mobile__item-img"
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
