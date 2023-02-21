function PersonalData({ setChapter }) {
  return (
    <div className="cart__main__inner personalData">
      <div className="personalData__head">
        <button className="personalData__btn-back">Назад</button>
        <button
          className="personalData__btn-edit"
          onClick={() => {
            setChapter("edit");
          }}
        >
          <span>Редакт.</span>
          <img src="./images/personal_data/edit.svg" />
        </button>
      </div>
      <div className="personalData__info">
        <div className="personalData__info__left">
          <img src="../images/edit-profile/photo_profile.svg" />
        </div>
        <div className="personalData__info__right">
          <div className="personalData__info__right__data">
            <span className="personalData__info__right__main">
              Наименование фирмы
            </span>
            <span className="personalData__info__right__standart">
              Фамилия Имя Отчество
            </span>
            <span className="personalData__info__right__medium">
              8 (999) 999-99-99
            </span>
          </div>
          <div className="personalData__info__right__data__down">
            <div className="personalData__information__left">
              <div className="personalData__information__subtitle">
                <span className="personalData__information__main">ИНН:</span>
                <span className="personalData__information__about">
                  325507450247
                </span>
              </div>
              <div className="personalData__information__subtitle">
                <span className="personalData__information__main">КПП:</span>
                <span className="personalData__information__about">
                  325507450247
                </span>
              </div>
            </div>
            <div className="personalData__information__left">
              <div className="personalData__information__subtitle">
                <span className="personalData__information__main">БИК:</span>
                <span className="personalData__information__about">
                  325507450247
                </span>
              </div>
              <div className="personalData__information__subtitle">
                <span className="personalData__information__main">Р.счёт:</span>
                <span className="personalData__information__about">
                  325507450247
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="personalData__geo">
        <div className="personalData__geo_legal">
          <span className="personalData__geo_legal__title">
            Юридический адрес:{" "}
          </span>
          <div className="mo__content__right__geo personalData_entery">
            <div className="mo__content__right__geo__position">
              <div className="mo__content__right__geo__info">
                <div className="mo__content__right__geo__info__up">
                  <span className="mo__content__right__factory">
                    Производство
                  </span>
                  <span className="mo__content__right__adress">
                    Новоалтайск, ул. Павла Корчагина, 21
                  </span>
                </div>
                <div className="mo__content__right__geo__info__down">
                  <span className="mo__content__right__timer">
                    Пн-сб с 10:00 до 16:00
                  </span>
                  <span className="mo__content__right__timer">
                    Самовывоз:
                    <br />
                    Завтра с 10:00
                  </span>
                </div>
              </div>
              <div className="mo__content__left__information__face__left">
                <span className="mo__header__left__information__person">
                  Выбрать другой
                </span>
              </div>
            </div>
            <img
              src="./images/personal_data/geolocation.png"
              className="geo_img"
            />
          </div>
        </div>
        <div className="personalData__geo_legal">
          <span className="personalData__geo_legal__title">
            Адрес доставки:
          </span>
          <div className="mo__content__right__geo personalData_entery">
            <div className="mo__content__right__geo__position">
              <div className="mo__content__right__geo__info">
                <div className="mo__content__right__geo__info__up">
                  <span className="mo__content__right__factory">
                    Производство
                  </span>
                  <span className="mo__content__right__adress">
                    Новоалтайск, ул. Павла Корчагина, 21
                  </span>
                </div>
                <div className="mo__content__right__geo__info__down">
                  <span className="mo__content__right__timer">
                    Пн-сб с 10:00 до 16:00
                  </span>
                  <span className="mo__content__right__timer">
                    Самовывоз:
                    <br />
                    Завтра с 10:00
                  </span>
                </div>
              </div>
              <div className="mo__content__left__information__face__left">
                <span className="mo__header__left__information__person">
                  Выбрать другой
                </span>
              </div>
            </div>
            <img
              src="./images/personal_data/geolocation.png"
              className="geo_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalData;
