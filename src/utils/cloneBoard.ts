import { ICell } from '../components/GameBoard/GameBoard';

const cloneBoard = (board: ICell[][]) => {
	return board.map(row =>
		row.map(cell => ({
			...cell,
		})),
	);
};

export default cloneBoard;
