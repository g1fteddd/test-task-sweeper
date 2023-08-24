import React, { useState } from 'react';
import styles from './Settings.module.scss';
import { useSelector } from 'react-redux';
import { settingsSelector } from '../../redux/settings/selectors';
import { useAppDispatch } from '../../redux/store';
import {
	setGameDifficulty,
	setHasGameStarted,
	setName,
} from '../../redux/settings/slice';
import TextField from '../../components/ui/TextField/TextField';
import RadioField from '../../components/ui/RadioField/RadioField';
import Button from '../../components/ui/Button/Button';

const Settings: React.FC = () => {
	const dispatch = useAppDispatch();
	const { name, gameDifficulty } = useSelector(settingsSelector);

	const dataDifficulty = [
		{ value: 'easy', text: 'Простой 8x8, 10 мин' },
		{ value: 'medium', text: 'Средний 16x16, 40 мин' },
		{ value: 'hard', text: 'Сложный 32x16, 100 мин' },
	];

	const [difficulty, setDifficulty] = useState('easy');

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setName(e.target.value));
	};

	const handleChangeGameDifficulty = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setDifficulty(e.target.value);
		dispatch(setGameDifficulty(e.target.value));
	};

	const handleClick = () => {
		if (!name) {
			alert('Заполните имя!');
			return;
		}
		dispatch(setHasGameStarted(true));
	};

	return (
		<div className={styles['settings']}>
			<div className={styles['name']}>
				<p>Твоё имя</p>
				<TextField
					value={name}
					onChange={handleChangeName}
					placeholder='Имя'
				/>
			</div>
			<div className={styles['difficulty']}>
				<p>Сложность игры</p>
				<RadioField
					data={dataDifficulty}
					currentValue={difficulty}
					setCurrentValue={handleChangeGameDifficulty}
				/>
			</div>
			<Button onClick={handleClick}>Играть</Button>
		</div>
	);
};

export default Settings;
