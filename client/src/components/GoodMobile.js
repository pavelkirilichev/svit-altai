import { useState } from "react";
import { Link } from "react-router-dom";

function GoodMobile({ goodCount, setGoodCount }) {
	const [pullMenuMob, setPullMenuMob] = useState("");
	const [pull, setPull] = useState("");
	return (
		<div className='good_mobile__container'>
			<div className='good_mobile__back-btn'>Назад</div>
			<div className='good_mobile__content'>
				<span className='good_mobile__content__artikul'>
					артикул: 121231311231{" "}
				</span>
				<div
					className='good_mobile__content__image'
					style={{ backgroundImage: "url(images/good/good_image_1.png)" }}
				></div>
				<p className='good__main__down__left__title good__title__little good_mobile__main__title'>
					Подушка Memory Foam Roller
				</p>
				<div className='good_mobile__content__paints'>
					<div className='good_mobile__content__paints__leaft'>
						<p className='good__main__wish__price__title good__price__down__status'>
							2120 ₽
						</p>
						<p className='good__main__wish__price__subtitle good__price__down'>
							2430 ₽
						</p>
						<div className='good__main__down__color'>
							<div className='good_mobile__down__color__left'></div>
							<div className='good_mobile_down__color__right'></div>
						</div>
					</div>
					<div className='good_mobile__content__paints__right'>
						<div className='good__main__down__count good_mobile__count__width'>
							<img
								src='../images/good/minus.svg'
								onClick={() => {
									if (goodCount != 0) {
										setGoodCount(goodCount - 1);
									}
								}}
							/>
							<span className='cart__main__content__item__count-price__bottom-btn-cnt unselectable'>
								{goodCount}
							</span>
							<img
								src='../images/good/plus.svg'
								onClick={() => {
									setGoodCount(goodCount + 1);
								}}
							/>
						</div>
						<div className='good_mobile__content__paints__button'>
							<span>В корзину</span>
							<span>
								{goodCount}шт. за {goodCount * 2120} ₽
							</span>
						</div>
						<div className='good_mobile__content__amount'>
							<span>В наличии: </span>
							<span>121</span>
							<span>шт.</span>
						</div>
					</div>
				</div>
				<div className='good__main__down__size__box good_mobile good_mobile__size__box'>
					<div className='good__main__down__size__item good_mobile__main__down__size__item'>
						<span>115×205 см</span>
					</div>
					<div className='good__main__down__size__item good_mobile__main__down__size__item'>
						<span>115×205 см</span>
					</div>
					<div className='good__main__down__size__item good_mobile__main__down__size__item'>
						<span>115×205 см</span>
					</div>
					<div className='good__main__down__size__item good_mobile__main__down__size__item'>
						<span>115×205 см</span>
					</div>
				</div>
				<div className='good_mobile__content__discription'>
					<span>Описание</span>
					<p>
						Подушка «Memory Foam Roller», два валика под шею - 13 и 11 см.
						Наполнитель - инновационная пена последнего поколения из
						модифицированного пенополиуретана. Два ролика в подушке сделаны для
						того, чтобы вы сами могли регулировать, как вам удобнее на ней спать
						или сидеть. Хоть на боку, хоть на спине – устраивайтесь поудобнее! В
						комплекте с подушкой идет съемный чехол на молнии, изготовленный из
						мягкого качественного трикотажа. Подушку не надо мочить и стирать, а
						вот съемный чехол – можно и нужно, но только в деликатном режиме.
					</p>
				</div>
			</div>
		</div>
	);
}

export default GoodMobile;
