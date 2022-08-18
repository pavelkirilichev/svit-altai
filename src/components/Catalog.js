import { useState } from "react";
import { catalogBig, catalogSmall } from "./CatalogJSON";

function Catalog({
  setPull,
  pull,
  setCatalogChapter,
  catalogChapter,
  catalogBlurActive,
  setCatalogBlurActive,
  catalogMenuImgOne,
  setCatalogMenuImgOne,
  catalogMenuImgTwo,
  setCatalogMenuImgTwo,
  catalogMenuImgThree,
  setCatalogMenuImgThree,
}) {
  const [catalogMenuImgActive, setCatalogMenuImgActive] = useState("");

  const [catalogActive, setCatalogActive] = useState("");
  const [catalogActiveBg, setCatalogActiveBg] = useState("");

  return (
    <div className={"pull__main" + pull}>
      <div className="pull-menu">
        <ul className="pull-menu__list">
          <li
            className="pull-menu__item"
            onClick={() => {
              setCatalogMenuImgTwo(" pull-menu__item__catalog-img-disable");
              setCatalogMenuImgThree(" pull-menu__item__catalog-img-disable");
              if (catalogChapter != "bedroom") {
                if (catalogChapter == "") {
                  setCatalogActiveBg(" pull-catalog-bg-active");
                  setTimeout(() => {
                    setCatalogBlurActive(" pull__main__blur-active");
                    setCatalogActive(" pull-catalog-active");
                  }, 150);
                  setCatalogMenuImgOne(" pull-menu__item__catalog-img-active");
                  setCatalogChapter("bedroom");
                } else {
                  setCatalogMenuImgOne(" pull-menu__item__catalog-img-active");
                  setCatalogActive(" pull-catalog-disable");
                  setTimeout(() => {
                    setCatalogChapter("bedroom");
                    setCatalogActive(" pull-catalog-active");
                    setCatalogActiveBg(" pull-catalog-bg-active");
                  }, 150);
                }
              } else {
                setCatalogMenuImgOne(" pull-menu__item__catalog-img-disable");
                setCatalogActive(" pull-catalog-disable");
                setCatalogBlurActive(" pull__main__blur-disable");
                setTimeout(() => {
                  setCatalogChapter("");
                  setCatalogBlurActive("");
                  setCatalogActive("");
                  setCatalogActiveBg("");
                }, 150);
              }
            }}
          >
            Спальня
          </li>
          <img
            src="./images/header/catalog_bedroom.png"
            className={"pull-menu__item__catalog-img " + catalogMenuImgOne}
          />

          <li
            className="pull-menu__item"
            onClick={() => {
              setCatalogMenuImgOne(" pull-menu__item__catalog-img-disable");
              setCatalogMenuImgThree(" pull-menu__item__catalog-img-disable");
              if (catalogChapter != "clothes") {
                if (catalogChapter == "") {
                  setCatalogActiveBg(" pull-catalog-bg-active");
                  setTimeout(() => {
                    setCatalogBlurActive(" pull__main__blur-active");
                    setCatalogActive(" pull-catalog-active");
                  }, 150);
                  setCatalogMenuImgTwo(" pull-menu__item__catalog-img-active");
                  setCatalogChapter("clothes");
                } else {
                  setCatalogMenuImgTwo(" pull-menu__item__catalog-img-active");
                  setCatalogActive(" pull-catalog-disable");
                  setTimeout(() => {
                    setCatalogChapter("clothes");
                    setCatalogActive(" pull-catalog-active");
                    setCatalogActiveBg(" pull-catalog-bg-active");
                  }, 150);
                }
              } else {
                setCatalogMenuImgTwo(" pull-menu__item__catalog-img-disable");
                setCatalogActive(" pull-catalog-disable");
                setCatalogBlurActive(" pull__main__blur-disable");
                setTimeout(() => {
                  setCatalogChapter("");
                  setCatalogBlurActive("");
                  setCatalogActive("");
                  setCatalogActiveBg("");
                }, 150);
              }
            }}
          >
            Одежда и обувь для дома
          </li>
          <img
            src="./images/header/catalog_clothes.png"
            className={"pull-menu__item__catalog-img " + catalogMenuImgTwo}
          />

          <li
            className="pull-menu__item"
            onClick={() => {
              setCatalogMenuImgTwo(" pull-menu__item__catalog-img-disable");
              setCatalogMenuImgOne(" pull-menu__item__catalog-img-disable");
              if (catalogChapter != "kitchen") {
                if (catalogChapter == "") {
                  setCatalogActiveBg(" pull-catalog-bg-active");
                  setTimeout(() => {
                    setCatalogBlurActive(" pull__main__blur-active");
                    setCatalogActive(" pull-catalog-active");
                  }, 150);
                  setCatalogMenuImgThree(
                    " pull-menu__item__catalog-img-active"
                  );
                  setCatalogChapter("kitchen");
                } else {
                  setCatalogMenuImgThree(
                    " pull-menu__item__catalog-img-active"
                  );
                  setCatalogActive(" pull-catalog-disable");
                  setTimeout(() => {
                    setCatalogChapter("kitchen");
                    setCatalogActive(" pull-catalog-active");
                    setCatalogActiveBg(" pull-catalog-bg-active");
                  }, 150);
                }
              } else {
                setCatalogMenuImgThree(" pull-menu__item__catalog-img-disable");
                setCatalogActive(" pull-catalog-disable");
                setCatalogBlurActive(" pull__main__blur-disable");
                setTimeout(() => {
                  setCatalogChapter("");
                  setCatalogBlurActive("");
                  setCatalogActive("");
                  setCatalogActiveBg("");
                }, 150);
              }
            }}
          >
            Кухня и интерьер
          </li>
          <img
            src="./images/header/catalog_kitchen.png"
            className={"pull-menu__item__catalog-img " + catalogMenuImgThree}
          />
        </ul>
      </div>

      {catalogChapter == "" ? (
        <div className="pull-catalog-bg"></div>
      ) : (
        <div className={"pull-catalog-bg" + catalogActiveBg}>
          <div className={"pull__main__blur" + catalogBlurActive}>
            <div className={"pull-catalog" + catalogActive}>
              <div className="pull-catalog-big">
                {catalogBig
                  .filter((item) => item.type === catalogChapter)
                  .map((catalogItem) => {
                    return (
                      <div
                        className="pull-catalog-big__item"
                        style={{
                          background: `url(./images/header/catalog${catalogItem["src"]})`,
                        }}
                      >
                        <div className="pull-catalog__item__curtain">
                          <span className="pull-catalog-big__item__title">
                            {catalogItem["title"]}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="pull-catalog-small">
                {catalogSmall
                  .filter((item) => item.type === catalogChapter)
                  .map((catalogItem) => {
                    return (
                      <div
                        className="pull-catalog-small__item"
                        style={{
                          background: `url(./images/header/catalog${catalogItem["src"]})`,
                        }}
                      >
                        <div className="pull-catalog__item__curtain">
                          <span className="pull-catalog-small__item__title">
                            {catalogItem["title"]}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalog;
