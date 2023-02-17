function MenuMob() {
	return (
		<div className='menu-mob'>
			<button className='personalData__btn-back personalData__mob'>
				Назад
			</button>
			<div className='personalData__info personalData__mob__left'>
				<img
					src='../images/personal_data_mob/photo.png'
					className='personalData__mob__left_personal'
				/>
				<div className='personalData__info__right'>
					<div className='personalData__info__right__data'>
						<span className='personalData__info__right__main'>
							Наименование
						</span>
						<span className='personalData__info__right__main'>фирмы</span>
						<span className='personalData__info__right__standart'>
							Фамилия Имя Отчество
						</span>
						<span className='personalData__info__right__medium'>
							8 (999) 999-99-99
						</span>
					</div>
				</div>
			</div>
			<div className='menu-mob__information'>
				<div className='menu-mob__information__title'>
					<img src='../images/tkani/user.svg' />
					<span>Мои данные </span>
				</div>
				<div className='menu-mob__information__title'>
					<img src='../images/tkani/box.svg' />
					<span>Заказы</span>
				</div>
				<div className='menu-mob__information__title'>
					<img src='../images/tkani/info_circle.svg' />
					<span>Информация </span>
				</div>
			</div>
		</div>
	);
}
export default MenuMob;
