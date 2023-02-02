function PersonalData2() {
    return (
        <div className="cart__main__inner personalData">
            <div className="personalData__head">
                <button className="personalData__btn-back">Назад</button>
                <button className="personalData__btn-edit">
                    <span>Редакт.</span>
                    <img src="./images/personal_data/edit.svg"/>
                </button>
            </div>
            <div className="personalData__info personal__meaning">
                <div className="personalData__info__left">
                    <img src="../images/edit-profile/photo_profile.svg"/>
                </div>
                <div className="personalData__info__right person__details">
                    <div className="personalData__info__right__data">
                        <span className="personalData__info__right__main">Фамилия Имя Отчество</span> 
                        <span className="personalData__info__right__medium person_min">8 (999) 999-99-99</span>
                    </div>
                    <div className="personalData__geo_legal">
                        <span className="personalData__geo_legal__title">Адрес доставки:</span>
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
                            <img src="./images/personal_data/geolocation.png" className="geo_img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default PersonalData2
