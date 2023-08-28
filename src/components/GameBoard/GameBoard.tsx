import React, { useEffect } from 'react';
import styles from './GameBoard.module.scss';
import Cell from '../Cell/Cell';
import cloneBoard from '../../utils/cloneBoard';
import openNeighbors from '../../utils/openNeighbors';
import { ICell } from '../../utils/initializeBoard';
import { IDifficulty } from '../../utils/configDifficulty';

// TODO: Прописать нормальные типы
interface IGameBoardProps extends IDifficulty {
	board: ICell[][];
	setBoard: React.Dispatch<React.SetStateAction<ICell[][]>>;
	setIsWin: React.Dispatch<React.SetStateAction<boolean>>;
	setIsLose: React.Dispatch<React.SetStateAction<boolean>>;
	setFlagsCount: React.Dispatch<React.SetStateAction<number>>;
	setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameBoard: React.FC<IGameBoardProps> = ({
												  board,
												  setBoard,
												  setIsWin,
												  setIsLose,
												  setFlagsCount,
												  setIsRunning,
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
		const cell = copyBoard[x][y];

		if (!cell.isFlag && !cell.isQuestion) {
			if (cell.isMine) {
				setIsLose(true);
				setIsRunning(false);
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
		const copyBoard = cloneBoard(board);
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
			setIsRunning(false);
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
