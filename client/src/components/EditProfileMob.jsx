function EditProfileMob() {
    return (
        <div style={
            {
                display: "flex",
                flexDirection: "column",
                gap: 30
            }
        }>
            <div className="edit-profile">
                <div className="edit-profile__up">
                  <span>Назад</span>
                </div>
                <div className="edit-profile__down">
                    <div className="edit-profile__down__profile">
                        <img src="../images/edit-profile/photo_profile.svg"/>
                    </div>
                    <div className="edit-profile__down__info">
                        <div className="edit-profile__down__info__up">
                            <div className="edit-profile__down__info__data">
                                <input className="edit-profile__down__info__data__main" placeholder="Наименование фирмы"/>
                            </div>
                            <div className="edit-profile__down__info__data">
                                <input className="edit-profile__down__info__data__standart" placeholder="Фамилия Имя Отчество"/>
                            </div>
                            <div className="edit-profile__down__info__data">
                                <input className="edit-profile__down__info__data__standart edit-profile__data__medium" placeholder="8 (999) 999-99-99"/>
                            </div>
                            <div className="edit-profile__down__info__data">
                                <input className="edit-profile__down__info__data__medium" placeholder="ИНН"/>
                            </div>
                            <div className="edit-profile__down__info__data">
                                <input className="edit-profile__down__info__data__medium" placeholder="БИК"/>
                            </div>
                            <div className="edit-profile__down__info__data">
                                <input className="edit-profile__down__info__data__medium" placeholder="Р.счет"/>
                            </div>
                            <div className="edit-profile__down__profile__face">
                                <span>Перейти на Физ. Лицо</span>
                            </div>
                        </div>
                    </div>
                    <div className="edit-profile__up__button edit-profile-mob__button">
                        <span>Подтвердить</span>
                    </div>
                </div>
            </div>
            <div className="edit-profile">
                <div className="edit-profile__up">
                  <span>Назад</span>
                </div>
                <div className="edit-profile__down">
                    <div className="edit-profile__down__profile">
                        <img src="../images/edit-profile/photo_profile.svg"/>
                    </div>
                    <div className="edit-profile__down__info">
                        <div className="edit-profile__down__info__up">
                            <div className="edit-profile__down__info__data">
                                <input className="edit-mob__grey__main" placeholder="Наименование фирмы"/>
                            </div>
                            <div className="edit-profile__down__info__data">
                                <input className="edit-profile__down__info__data__standart" placeholder="Фамилия Имя Отчество"/>
                            </div>
                            <div className="edit-profile__down__info__data">
                                <input className="edit-profile__down__info__data__standart edit-profile__data__medium" placeholder="8 (999) 999-99-99"/>
                            </div>
                            <div className="edit-profile__down__info__data">
                                <input className="edit-mob__grey" placeholder="ИНН"/>
                            </div>
                            <div className="edit-profile__down__info__data">
                                <input className="edit-mob__grey" placeholder="БИК"/>
                            </div>
                            <div className="edit-profile__down__info__data">
                                <input className="edit-mob__grey" placeholder="Р.счет"/>
                            </div>
                            <div className="edit-profile__down__profile__face">
                                <span>Перейти на ЮР. Лицо</span>
                            </div>
                        </div>
                    </div>
                    <div className="edit-profile__up__button">
                        <span>Подтвердить</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfileMob;
