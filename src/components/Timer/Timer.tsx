import React, { useEffect } from 'react';
import styles from './Timer.module.scss';

interface ITimerProps {
	isRunning: boolean;
	time: number;
	setTime: React.Dispatch<React.SetStateAction<number>>;
}

const Timer: React.FC<ITimerProps> = ({ isRunning, time, setTime }) => {
	useEffect(() => {
		let intervalId: NodeJS.Timer | undefined = undefined;

		if (isRunning) {
			intervalId = setInterval(() => {
				setTime((prevTime: number) => prevTime + 1);
			}, 1000);
		}

		if (!isRunning && time !== 0) {
			clearInterval(intervalId);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [isRunning]);

	return <div className={styles['timer']}>Время: {time}</div>;
};

export default Timer;
