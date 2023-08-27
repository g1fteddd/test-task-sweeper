import React, { useEffect } from 'react';
import styles from './GameBoard.module.scss';
import Cell from '../Cell/Cell';
import cloneBoard from '../../utils/cloneBoard';
import openNeighbors from '../../utils/openNeighbors';

export interface ICell {
	isRevealed: boolean;
	isMine: boolean;
	value: number;
	isFlag: boolean;
	isQuestion: boolean;
}

interface IGameBoardProps {
	board: ICell[][];
	setBoard: Function;
	isWin: boolean;
	setIsWin: Function;
	isLose: boolean;
	setIsLose: Function;
	setFlagsCount: Function;
	width: number;
	height: number;
	mines: number;
}

const GameBoard: React.FC<IGameBoardProps> = ({
												  board,
												  isWin,
												  setIsWin,
												  isLose,
												  setIsLose,
												  setFlagsCount,
												  setBoard,
												  width,
												  height,
												  mines,
											  }) => {
	const handleLeftClick = (
		e: React.MouseEvent<HTMLDivElement>,
		x: number,
		y: number,
	) => {
		const copyBoard: ICell[][] = cloneBoard(board);

		if (!copyBoard[x][y].isFlag && !copyBoard[x][y].isQuestion) {
			if (copyBoard[x][y].isMine) {
				setIsLose(true);
				for (let i = 0; i < width; i++) {
					for (let j = 0; j < height; j++) {
						copyBoard[i][j].isRevealed = true;
					}
				}
			}
			openNeighbors(copyBoard, x, y, width, height);
			setBoard(copyBoard);
		}
	};

	const handleRightClick = (
		e: React.MouseEvent<HTMLDivElement>,
		x: number,
		y: number,
	) => {
		e.preventDefault();
		const copyBoard = cloneBoard(board); // Клонируем доску

		const cell = copyBoard[x][y];

		if (cell.isRevealed) return;

		if (cell.isFlag) {
			cell.isFlag = false;
			cell.isQuestion = true;
		} else if (cell.isQuestion) {
			cell.isQuestion = false;
		} else {
			cell.isFlag = true;
			cell.isQuestion = false;
			setFlagsCount((prev: number) => prev + 1);
		}

		setBoard(copyBoard);
	};

	// проверка на выигрыш
	useEffect(() => {
		const revealedCells = board
			.flat()
			.filter(cell => cell.isRevealed).length;
		if (revealedCells === width * height - mines) {
			setIsWin(true);
		}
	}, [board]);

	return (
		<div className={styles['board']}>
			{board.map((row, rowIndex) => (
				<div key={rowIndex} className={styles['row']}>
					{row.map((cellData, colIndex) => (
						<Cell
							key={colIndex}
							{...cellData}
							onClick={handleLeftClick}
							onRightClick={handleRightClick}
							x={rowIndex}
							y={colIndex}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default GameBoard;
