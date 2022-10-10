import { useState } from "react";
import { catalog } from "./CatalogJSON";

function Catalog({
  setPull,
  pull,
  setCatalogChapter,
  catalogChapter,
  catalogMenuImgOne,
  setCatalogMenuImgOne,
  catalogMenuImgTwo,
  setCatalogMenuImgTwo,
  catalogMenuImgThree,
  setCatalogMenuImgThree,
}) {
  return (
    <div className={"pull__main" + pull}>
      <div className="pull-menu">
        <div className="pull-menu__list">
          <span
            className="pull-menu__item"
            onClick={() => {
              if (catalogMenuImgOne == "") {
                setCatalogMenuImgOne(" pull-catalog-active");
                setCatalogMenuImgTwo(" pull-catalog-disable");
                setCatalogMenuImgThree(" pull-catalog-disable");
                setTimeout(() => {
                  setCatalogMenuImgTwo("");
                  setCatalogMenuImgThree("");
                }, 500);
              } else if (catalogMenuImgOne == " pull-catalog-active") {
                setCatalogMenuImgOne(" pull-catalog-disable");
                setTimeout(() => {
                  setCatalogMenuImgOne("");
                }, 500);
              } else {
              }
            }}
          >
            Спальня
          </span>
          <div className={"pull-catalog__list" + catalogMenuImgOne}>
            {catalog
              .filter((item) => item.type === "bedroom")
              .map((catalogItem) => {
                return (
                  <div className="pull-catalog__item">
                    <span>{catalogItem.title}</span>
                  </div>
                );
              })}
          </div>
          <span
            className="pull-menu__item"
            onClick={() => {
              if (catalogMenuImgTwo == "") {
                setCatalogMenuImgTwo(" pull-catalog-active");
                setCatalogMenuImgOne(" pull-catalog-disable");
                setCatalogMenuImgThree(" pull-catalog-disable");
                setTimeout(() => {
                  setCatalogMenuImgOne("");
                  setCatalogMenuImgThree("");
                }, 500);
              } else if (catalogMenuImgTwo == " pull-catalog-active") {
                setCatalogMenuImgTwo(" pull-catalog-disable");
                setTimeout(() => {
                  setCatalogMenuImgTwo("");
                }, 500);
              } else {
              }
            }}
          >
            Одежда и обувь для дома
          </span>
          <div className={"pull-catalog__list" + catalogMenuImgTwo}>
            {catalog
              .filter((item) => item.type === "clothes")
              .map((catalogItem) => {
                return (
                  <div className="pull-catalog__item">
                    <span>{catalogItem.title}</span>
                  </div>
                );
              })}
          </div>
          <span
            className="pull-menu__item"
            onClick={() => {
              if (catalogMenuImgThree == "") {
                setCatalogMenuImgThree(" pull-catalog-active");
                setCatalogMenuImgTwo(" pull-catalog-disable");
                setCatalogMenuImgOne(" pull-catalog-disable");
                setTimeout(() => {
                  setCatalogMenuImgTwo("");
                  setCatalogMenuImgOne("");
                }, 500);
              } else if (catalogMenuImgThree == " pull-catalog-active") {
                setCatalogMenuImgThree(" pull-catalog-disable");
                setTimeout(() => {
                  setCatalogMenuImgThree("");
                }, 500);
              } else {
              }
            }}
          >
            Кухня и интерьер
          </span>
          <div className={"pull-catalog__list" + catalogMenuImgThree}>
            {catalog
              .filter((item) => item.type === "kitchen")
              .map((catalogItem) => {
                return (
                  <div className="pull-catalog__item">
                    <span>{catalogItem.title}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="pull-catalog-bg"></div>
    </div>
  );
}

export default Catalog;
