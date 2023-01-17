function AboutMob({ pullMenuMob }) {
  return (
    <div
      className={pullMenuMob != "" ? "aboutMob__main-active" : "aboutMob__main"}
    >
      <div className="aboutMob__head">
        <div className="aboutMob__container">
          <button className="aboutMob__button-back">Назад</button>
          <div className="aboutMob__head__content">
            <p className="aboutMob__head__title">
              Приветствуем вас на <span>www.svit-altai.ru</span>
            </p>
            <p className="aboutMob__head__title-bottom">
              15 лет мы работаем над качеством наших услуг
            </p>
          </div>
        </div>
      </div>
      <div className="aboutMob__container">
        <div className="about__advantage aboutMob__advantage">
          <div className="about__advantage__item aboutMob__advantage__item">
            <img src="../images/about/Bag 2.svg" />
            <div className="about__advantage__item__down aboutMob__advantage__down">
              <span className="about__advantage__item__title aboutMob__advantage__title">
                Куча всего!
              </span>
              <div className="about__advantage__item__down__discribe aboutMob__advantage__discribe">
                <span>большой ассортимент и постоянные новинки</span>
              </div>
            </div>
          </div>
          <div className="about__advantage__item aboutMob__advantage__item">
            <img src="../images/about/machine.svg" />
            <div className="about__advantage__item__down aboutMob__advantage__down">
              <span className="about__advantage__item__title aboutMob__advantage__title">
                Всё сами!
              </span>
              <div className="about__advantage__item__down__discribe aboutMob__advantage__discribe">
                <span>имеем собственное производство и магазины</span>
              </div>
            </div>
          </div>
          <div className="about__advantage__item aboutMob__advantage__item">
            <img src="../images/about/Calling.svg" />
            <div className="about__advantage__item__down aboutMob__advantage__down">
              <span className="about__advantage__item__title aboutMob__advantage__title">
                Всегда на связи!
              </span>
              <div className="about__advantage__item__down__discribe aboutMob__advantage__discribe">
                <span className="about__advantage__item__discribe__special">
                  +7(909) 900-99-99
                </span>
                <span className="about__advantage__item__discribe__special">
                  svit22@mail.ru
                </span>
              </div>
            </div>
          </div>
          <div className="about__advantage__item aboutMob__advantage__item">
            <img src="../images/about/safely.svg" />
            <div className="about__advantage__item__down aboutMob__advantage__down">
              <span className="about__advantage__item__title aboutMob__advantage__title">
                Безопасно!
              </span>
              <div className="about__advantage__item__down__discribe aboutMob__advantage__discribe">
                <span>качественные материалы от проверенных поставщиков</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about__description aboutMob__description">
          <div className="about__description__up">
            <div className="about__description__item aboutMob__description__item">
              <div className="about__description__item__up aboutMob__description__item__up">
                <span>На любой вкус и кошелек!</span>
              </div>
              <span>
                На нашем сайте вы сможете найти то, что подходит именно вам:
                всегда в наличии множество товаров в различных ценовых
                категориях и дизайнерских решениях.
              </span>
            </div>
            <div className="about__description__item aboutMob__description__item">
              <div className="about__description__item__up">
                <span>Стали профи!</span>
              </div>
              <span>
                За 20 лет в сфере производства домашнего текстиля мы узнали всё
                обо всем. Выбираем самые приятные ценовые предложения и знаем,
                где искать лучшее сырьё на рынке.
              </span>
            </div>
            <div className="about__description__item aboutMob__description__item">
              <div className="about__description__item__up">
                <span>Рост и развитие</span>
              </div>
              <span>
                Мы уверенно расширяемся, работаем с надежными поставщиками (как
                российскими, так и зарубежными) и постоянными оптовыми клиентами
                со всего СНГ.
              </span>
            </div>
            <div className="about__description__item aboutMob__description__item">
              <div className="about__description__item__up">
                <span>Мы работаем для вас</span>
              </div>
              <span>
                Наше имя — это труд тысячи рук. Мы работаем в команде и
                стремимся, чтобы частичка нашей общей заботы была в каждом
                произведенном изделии.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMob;
