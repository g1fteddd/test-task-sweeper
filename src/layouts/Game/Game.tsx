import React, { useState } from 'react';
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

const Game: React.FC = () => {
	const dispatch = useAppDispatch();
	const { name, gameDifficulty } = useSelector(settingsSelector);

	const [isWin, setIsWin] = useState(false);
	const [isLose, setIsLose] = useState(false);

	const [minesCount, setMinesCount] = useState(
		configDifficulty[gameDifficulty].mines,
	);
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
						{isWin
							? 'Вы победили!'
							: isLose
							? 'Вы проиграли!'
							: `Счёт: ${minesCount - flagsCount}`}
					</div>
					<Button onClick={resetGame}>Перезапуск игры</Button>
					<Button onClick={goToSettings}>
						Вернуться к настройкам
					</Button>
				</div>
			</div>

			<GameBoard
				board={board}
				setBoard={setBoard}
				isWin={isWin}
				setIsWin={setIsWin}
				isLose={isLose}
				setIsLose={setIsLose}
				setFlagsCount={setFlagsCount}
				{...configDifficulty[gameDifficulty]}
			/>
		</>
	);
};

export default Game;
