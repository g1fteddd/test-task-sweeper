import React from 'react';
import styles from './Cell.module.scss';

interface ICellProps {
	// TODO: объединить с ICell
	isRevealed: boolean;
	isMine: boolean;
	value: number;
	isFlag: boolean;
	isQuestion: boolean;
	onClick: (
		e: React.MouseEvent<HTMLDivElement>,
		x: number,
		y: number,
	) => void;
	onRightClick: (
		e: React.MouseEvent<HTMLDivElement>,
		x: number,
		y: number,
	) => void;

	x: number;
	y: number;
}

const Cell: React.FC<ICellProps> = ({
	value,
	isRevealed,
	isMine,
	isFlag,
	isQuestion,
	onClick,
	onRightClick,
	x,
	y,
}) => {
	const getValue = () => {
		if (isFlag) return '🚩';
		if (isQuestion) return '❓';
		if (!isRevealed) return '';

		if (isMine) return '💣';
		if (value) return `${value}`;
	};
	return (
		<div
			className={styles['cell']}
			onClick={e => onClick(e, x, y)}
			onContextMenu={e => onRightClick(e, x, y)}
		>
			{getValue()}
		</div>
	);
};

export default Cell;
