import HomeMob from "./HomeMob";

function TkaniMob() {
	return (
		<div className='tkani-mob'>
			<button className='personalData__btn-back personalData__mob'>
				Назад
			</button>
			<div className='tkani-mob__catalog'>
				<span>Главная</span>
				<span> ></span>
				<span>Каталог</span>
				<span> ></span>
				<span> Спальня</span>
				<span> ></span>
				<span className='tkani-mob__catalog__click'> Постельное белье</span>
			</div>

			<div className='tkani-mob__filtrs'>
				<span className='tkani-mob__filtrs__title'>Фильтры</span>
				<div className='tkani-mob__filtrs__delete'>
					<span>Очистить фильтры</span>
					<img src='../images/choise_address/close.svg' />
				</div>
			</div>

			<HomeMob />
		</div>
	);
}

export default TkaniMob;
