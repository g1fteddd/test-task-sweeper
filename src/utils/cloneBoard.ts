import { ICell } from './initializeBoard';

const cloneBoard = (board: ICell[][]) => {
	return board.map(row =>
		row.map(cell => ({
			...cell,
		})),
	);
};

export default cloneBoard;
