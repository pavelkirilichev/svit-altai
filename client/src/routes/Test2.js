function Test2() {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: 50 }}>
			<div className='edit-profile'>
				<div className='edit-profile__up'>
					<div className='edit-profile__up__button '>
						<span>Назад</span>
					</div>
					<div className='edit-profile__up__button edit-profile__white-button'>
						<span>Подтвердить</span>
					</div>
				</div>
				<div className='edit-profile__down'>
					<div className='edit-profile__down__profile'>
						<img src='../images/edit-profile/photo_profile.svg' />
						<div className='edit-profile__down__profile__face'>
							<span>Перейти на</span>
							<span>Физ. Лицо</span>
						</div>
					</div>
					<div className='edit-profile__down__info'>
						<div className='edit-profile__down__info__up'>
							<div className='edit-profile__down__info__data'>
								<input
									className='edit-profile__down__info__data__main'
									placeholder='Наименование фирмы'
								/>
							</div>
							<div className='edit-profile__down__info__data'>
								<input
									className='edit-profile__down__info__data__standart'
									placeholder='Фамилия Имя Отчество'
								/>
							</div>
							<div className='edit-profile__down__info__data'>
								<input
									className='edit-profile__down__info__data__standart edit-profile__data__medium'
									placeholder='8 (999) 999-99-99'
								/>
							</div>
						</div>
						<div className='edit-profile__down__info__medium'>
							<div className='edit-profile__down__info__data edit-profile__data__small'>
								<input
									className='edit-profile__down__info__data__medium'
									placeholder='ИНН'
								/>
							</div>
							<div className='edit-profile__down__info__data edit-profile__data__small'>
								<input
									className='edit-profile__down__info__data__medium'
									placeholder='БИК'
								/>
							</div>
						</div>
						<div className='edit-profile__down__info__data edit-profile__data'>
							<input
								className='edit-profile__down__info__data__medium'
								placeholder='Р.счет'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='edit-profile'>
				<div className='edit-profile__up'>
					<div className='edit-profile__up__button '>
						<span>Назад</span>
					</div>
					<div className='edit-profile__up__button edit-profile__white-button'>
						<span>Подтвердить</span>
					</div>
				</div>
				<div className='edit-profile__down'>
					<div className='edit-profile__down__profile'>
						<img src='../images/edit-profile/photo_profile.svg' />
						<div className='edit-profile__down__profile__face'>
							<span>Перейти на</span>
							<span>Физ. Лицо</span>
						</div>
					</div>
					<div className='edit-profile__down__info'>
						<div className='edit-profile__down__info__up'>
							<div className='edit-profile__down__info__data'>
								<input
									className='edit-profile__down__info__data__main edit-profile__plc-grey'
									placeholder='Наименование фирмы'
									disabled
								/>
							</div>
							<div className='edit-profile__down__info__data'>
								<input
									className='edit-profile__down__info__data__standart'
									placeholder='Фамилия Имя Отчество'
								/>
							</div>
							<div className='edit-profile__down__info__data'>
								<input
									className='edit-profile__down__info__data__standart edit-profile__data__medium'
									placeholder='8 (999) 999-99-99'
								/>
							</div>
						</div>
						<div className='edit-profile__down__info__medium'>
							<div className='edit-profile__down__info__data edit-profile__data__small'>
								<input
									className='edit-profile__down__info__data__medium edit-profile__plc-grey'
									placeholder='ИНН'
									disabled
								/>
							</div>
							<div className='edit-profile__down__info__data edit-profile__data__small'>
								<input
									className='edit-profile__down__info__data__medium edit-profile__plc-grey'
									placeholder='БИК'
									disabled
								/>
							</div>
						</div>
						<div className='edit-profile__down__info__data edit-profile__data'>
							<input
								className='edit-profile__down__info__data__medium edit-profile__plc-grey'
								placeholder='Р.счет'
								disabled
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Test2;
