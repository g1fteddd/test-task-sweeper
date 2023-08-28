import React, { useEffect, useState } from 'react';
import styles from './Game.module.scss';
import { useSelector } from 'react-redux';
import { settingsSelector } from '../../redux/settings/selectors';
import configDifficulty from '../../utils/configDifficulty';
import Timer from '../../components/Timer/Timer';
import Button from '../../components/ui/Button/Button';
import { useAppDispatch } from '../../redux/store';
import { setHasGameStarted } from '../../redux/settings/slice';
import initializeBoard from '../../utils/initializeBoard';
import GameBoard from '../../components/GameBoard/GameBoard';
import { usersSelector } from '../../redux/users/selectors';
import { setUsers } from '../../redux/users/slice';

const Game: React.FC = () => {
	const dispatch = useAppDispatch();
	const { name, gameDifficulty } = useSelector(settingsSelector);
	const { users } = useSelector(usersSelector);

	const [isWin, setIsWin] = useState(false);
	const [isLose, setIsLose] = useState(false);

	const [flagsCount, setFlagsCount] = useState(0);

	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(true);

	const [board, setBoard] = useState(() =>
		initializeBoard(configDifficulty[gameDifficulty]),
	);

	const resetGame = () => {
		setIsWin(false);
		setIsLose(false);

		setTime(0);
		setIsRunning(true);

		setFlagsCount(0);

		setBoard(initializeBoard(configDifficulty[gameDifficulty]));
	};

	const goToSettings = () => {
		dispatch(setHasGameStarted(false));
	};

	useEffect(() => {
		if (isWin) {
			let newUsers = [...users];

			const foundIndexUser = newUsers.findIndex(
				user => user.name === name,
			);

			if (foundIndexUser !== -1 && newUsers[foundIndexUser].time > time) {
				newUsers[foundIndexUser] = {
					...newUsers[foundIndexUser],
					time,
				};
			} else {
				newUsers.push({ name, time });
			}

			newUsers.sort((a, b) => a.time - b.time);

			// Ограничение только до топ 10
			if (newUsers.length > 10) {
				newUsers = newUsers.slice(0, 10);
			}

			dispatch(setUsers(newUsers));

			localStorage.setItem('users', JSON.stringify(newUsers));
		}
	}, [isWin]);

	return (
		<>
			<div className={styles['game']}>
				<div className={styles['panel']}>
					<Timer
						isRunning={isRunning}
						time={time}
						setTime={setTime}
					/>
					<div className={styles['result']}>
						{isWin ? (
							<strong className={styles['win']}>
								Вы победили!
							</strong>
						) : isLose ? (
							<strong className={styles['lose']}>
								Вы проиграли!
							</strong>
						) : (
							`Счёт: ${
								configDifficulty[gameDifficulty].mines -
								flagsCount
							}`
						)}
					</div>
					<Button onClick={resetGame}>Перезапуск игры</Button>
					<Button onClick={goToSettings}>
						Вернуться к настройкам
					</Button>
				</div>

				<GameBoard
					board={board}
					setBoard={setBoard}
					setIsWin={setIsWin}
					setIsLose={setIsLose}
					setFlagsCount={setFlagsCount}
					setIsRunning={setIsRunning}
					{...configDifficulty[gameDifficulty]}
				/>
			</div>
		</>
	);
};

export default Game;
