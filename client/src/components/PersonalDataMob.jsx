function PersonalDataMob() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
      }}
    >
      <div className="cart__main__inner personalData">
        <button className="personalData__btn-back personalData__mob">
          Назад
        </button>
        <div className="personalData__info personalData__mob__left">
          <img
            src="../images/personal_data_mob/photo.png"
            className="personalData__mob__left_personal"
          />
          <div className="personalData__info__right">
            <div className="personalData__info__right__data">
              <span className="personalData__info__right__main">
                Наименование
              </span>
              <span className="personalData__info__right__main">фирмы</span>
              <span className="personalData__info__right__standart">
                Фамилия Имя Отчество
              </span>
              <span className="personalData__info__right__medium">
                8 (999) 999-99-99
              </span>
            </div>
          </div>
        </div>
        <div className="personalData__info__right__data__down personalData__mob__right">
          <div className="personalData__information__left">
            <div className="personalData__information__subtitle">
              <span className="personalData__information__main personalData__mob__right__main">
                ИНН:
              </span>
              <span className="personalData__information__about personalData__mob__right__medium">
                325507450247
              </span>
            </div>
            <div className="personalData__information__subtitle">
              <span className="personalData__information__main personalData__mob__right__main">
                Р.счёт:
              </span>
              <span className="personalData__information__about personalData__mob__right__medium">
                32550745023255074502
              </span>
            </div>
          </div>
          <div className="personalData__information__left">
            <div className="personalData__information__subtitle">
              <span className="personalData__information__main personalData__mob__right__main">
                КПП:
              </span>
              <span className="personalData__information__about personalData__mob__right__medium">
                325507450247
              </span>
            </div>
            <div className="personalData__information__subtitle">
              <span className="personalData__information__main personalData__mob__right__main">
                БИК:
              </span>
              <span className="personalData__information__about personalData__mob__right__medium">
                325507450247
              </span>
            </div>
          </div>
        </div>
        <div className="personalData__geo">
          <div className="personalData__geo_legal personalData__mob__geo">
            <div className="personalData__mob__address__property">
              <span className="personalData__geo_legal__title personalData__mob__address__main ">
                Юридический адрес:{" "}
                <span className="personalData__mob__address">
                  Россия, Алтайский Край, г.Новоалтайск,
                </span>
              </span>
              <span className="personalData__mob__address">
                ул. Павла-Корчагина 21в.
              </span>
            </div>
            <span className="personalData__geo_legal__title personalData__mob__address__main ">
              Адрес доставки:
            </span>
            <div className="mo__content__right__geo personalData__mob__entery">
              <div className="mo__content__right__geo__position personalData__mob__entery__position">
                <div className="mo__content__right__geo__info">
                  <div className="mo__content__right__geo__info__up">
                    <span className="mo__content__right__factory">
                      Доставка на адрес
                    </span>
                    <span className="mo__content__right__adress">
                      Новоалтайск, ул. Павла Корчагина, 21
                    </span>
                  </div>
                  <div className="mo__content__right__geo__info__down">
                    <span className="mo__content__right__timer">
                      Примерное время ожидания заказа
                    </span>
                    <span className="mo__content__right__timer">
                      От 5 до 10 дней
                    </span>
                  </div>
                </div>
                <div className="mo__content__left__information__face__left">
                  <span className="mo__header__left__information__person">
                    Выбрать другой
                  </span>
                </div>
              </div>
              <img src="./images/personal_data_mob/geo.png" />
            </div>
          </div>
        </div>
        <button className="personalData__btn-edit personalData__mob__btn-edit">
          <span>Редакт.</span>
          <img src="./images/personal_data/edit.svg" />
        </button>
      </div>

      <div className="cart__main__inner personalData">
        <button className="personalData__btn-back personalData__mob">
          Назад
        </button>
        <div className="personalData__info personalData__mob__left">
          <img
            src="../images/personal_data_mob/photo.png"
            className="personalData__mob__left_personal"
          />
          <div className="personalData__info__right">
            <div className="personalData__info__right__data">
              <span className="personalData__info__right__main">
                Фамилия Имя
              </span>
              <span className="personalData__info__right__main">Отчество</span>
              <span className="personalData__info__right__standart personalData__mob__info__right ">
                8 (999) 999-99-99
              </span>
            </div>
          </div>
        </div>
        <div className="personalData__info__right__data__down personalData__mob__right">
          <div className="personalData__information__left">
            <div className="personalData__information__subtitle">
              <span className="personalData__information__main personalData__mob__right__main">
                Р.счёт:
              </span>
              <span className="personalData__information__about personalData__mob__right__medium">
                32550745023255074502
              </span>
            </div>
          </div>
          <div className="personalData__information__left">
            <div className="personalData__information__subtitle">
              <span className="personalData__information__main personalData__mob__right__main">
                БИК:
              </span>
              <span className="personalData__information__about personalData__mob__right__medium">
                325507450247
              </span>
            </div>
          </div>
        </div>
        <div className="personalData__geo">
          <div className="personalData__geo_legal personalData__mob__geo">
            <span className="personalData__geo_legal__title personalData__mob__address__main ">
              Адрес доставки:
            </span>
            <div className="mo__content__right__geo personalData__mob__entery">
              <div className="mo__content__right__geo__position personalData__mob__entery__position">
                <div className="mo__content__right__geo__info">
                  <div className="mo__content__right__geo__info__up">
                    <span className="mo__content__right__factory">
                      Доставка на адрес
                    </span>
                    <span className="mo__content__right__adress">
                      Новоалтайск, ул. Павла Корчагина, 21
                    </span>
                  </div>
                  <div className="mo__content__right__geo__info__down">
                    <span className="mo__content__right__timer">
                      Примерное время ожидания заказа
                    </span>
                    <span className="mo__content__right__timer">
                      От 5 до 10 дней
                    </span>
                  </div>
                </div>
                <div className="mo__content__left__information__face__left">
                  <span className="mo__header__left__information__person">
                    Выбрать другой
                  </span>
                </div>
              </div>
              <img src="./images/personal_data_mob/geo.png" />
            </div>
          </div>
        </div>
        <button className="personalData__btn-edit personalData__mob__btn-edit">
          <span>Редакт.</span>
          <img src="./images/personal_data/edit.svg" />
        </button>
      </div>
    </div>
  );
}

export default PersonalDataMob;
