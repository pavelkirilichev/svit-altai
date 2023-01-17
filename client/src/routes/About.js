import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import AboutMob from "../components/AboutMob";
import FooterMob from "../components/FooterMob";

function About() {
  const [pullMenuMob, setPullMenuMob] = useState("");
  const [pull, setPull] = useState("");
  return (
    <div className="wrapper">
      <Header
        pull={pull}
        setPull={setPull}
        pullMenuMob={pullMenuMob}
        setPullMenuMob={setPullMenuMob}
        isAbout={true}
      />
      <AboutMob pullMenuMob={pullMenuMob} />
      <div className={pull == "" ? "about-active" : "about"}>
        <div className="home__main__image">
          <div className="about__container">
            <div className="about__topic">
              <div className="about__topic__up">
                <span>Приветствуем вас на </span>
                <span>www.svit-altai.ru</span>
              </div>
              <span className="about__topic__down">
                15 лет мы работаем над качеством наших услуг
              </span>
            </div>
            <div className="about__advantage">
              <div className="about__advantage__item">
                <img src="../images/about/Bag 2.svg" />
                <div className="about__advantage__item__down">
                  <span className="about__advantage__item__title">
                    Куча всего!
                  </span>
                  <div className="about__advantage__item__down__discribe">
                    <span>большой ассортимент и постоянные новинки</span>
                  </div>
                </div>
              </div>
              <div className="about__advantage__item">
                <img src="../images/about/Calling.svg" />
                <div className="about__advantage__item__down">
                  <span className="about__advantage__item__title">
                    Всегда на связи!
                  </span>
                  <div className="about__advantage__item__down__discribe">
                    <span className="about__advantage__item__discribe__special">
                      +7(909) 900-99-99
                    </span>
                    <span className="about__advantage__item__discribe__special">
                      svit22@mail.ru
                    </span>
                  </div>
                </div>
              </div>
              <div className="about__advantage__item">
                <img src="../images/about/machine.svg" />
                <div className="about__advantage__item__down">
                  <span className="about__advantage__item__title">
                    Всё сами!
                  </span>
                  <div className="about__advantage__item__down__discribe">
                    <span>имеем собственное производство и магазины</span>
                  </div>
                </div>
              </div>
              <div className="about__advantage__item">
                <img src="../images/about/leafes.svg" />
                <div className="about__advantage__item__down">
                  <span className="about__advantage__item__title">
                    Натуральность!
                  </span>
                  <div className="about__advantage__item__down__discribe">
                    <span>
                      мы изготавливаем из натур материалов и перераб. вторичное
                      сырье
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about__container">
          <div className="about__description">
            <div className="about__description__up">
              <div className="about__description__item">
                <div className="about__description__item__up">
                  <span>На любой вкус и кошелек!</span>
                </div>
                <span>
                  На нашем сайте вы сможете найти то, что подходит именно вам:
                  всегда в наличии множество товаров в различных ценовых
                  категориях и дизайнерских решениях.
                </span>
              </div>
              <div className="about__description__item">
                <div className="about__description__item__up">
                  <span>Стали профи!</span>
                </div>
                <span>
                  За 20 лет в сфере производства домашнего текстиля мы узнали
                  всё обо всем. Выбираем самые приятные ценовые предложения и
                  знаем, где искать лучшее сырьё на рынке.
                </span>
              </div>
              <div className="about__description__item">
                <div className="about__description__item__up">
                  <span>Рост и развитие</span>
                </div>
                <span>
                  Мы уверенно расширяемся, работаем с надежными поставщиками
                  (как российскими, так и зарубежными) и постоянными оптовыми
                  клиентами со всего СНГ.
                </span>
              </div>
              <div className="about__description__item">
                <div className="about__description__item__up">
                  <span>Мы работаем для вас</span>
                </div>
                <span>
                  Наше имя — это труд тысячи рук. Мы работаем в команде и
                  стремимся, чтобы частичка нашей общей заботы была в каждом
                  произведенном изделии.
                </span>
              </div>
              <img src="../images/about/people.png" />
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <Footer />
      <FooterMob cartPrice={212000} />
    </div>
  );
}

export default About;
