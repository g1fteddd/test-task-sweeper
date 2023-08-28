import { ICell } from './initializeBoard';

const showAllCell = (board: ICell[][], width: number, height: number) => {
	return board.map(row =>
		row.map(cell => ({
			...cell,
			isRevealed: true,
		})),
	);
};

export default showAllCell;
