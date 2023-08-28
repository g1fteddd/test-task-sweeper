import React from 'react';
import styles from './Cell.module.scss';
import { ICell } from '../../utils/initializeBoard';

interface ICellProps extends ICell {
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

interface INumberColorMap {
	[key: number]: string;
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
	const numberToColorMap: INumberColorMap = {
		1: 'blue',
		2: 'green',
		3: 'red',
		4: 'darkblue',
		5: 'brown',
		6: 'turquoise',
		7: 'black',
		8: 'white',
	};

	const getValue = () => {
		if (isFlag) return '🚩';
		if (isQuestion) return '❓';
		if (!isRevealed) return '';

		if (isMine) return '💣';
		if (value) return `${value}`;
	};
	return (
		<div
			className={[
				styles['cell'],
				styles[`${isRevealed ? 'open' : ''}`],
			].join(' ')}
			onClick={e => onClick(e, x, y)}
			onContextMenu={e => onRightClick(e, x, y)}
			style={{ color: numberToColorMap[value] }}
		>
			{getValue()}
		</div>
	);
};

export default Cell;
