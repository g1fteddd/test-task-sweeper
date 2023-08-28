import { ICell } from './initializeBoard';

const openNeighbors = (
	board: ICell[][],
	x: number,
	y: number,
	width: number,
	height: number,
) => {
	if (
		x >= 0 &&
		x < width &&
		y >= 0 &&
		y < height &&
		!board[x][y].isRevealed
	) {
		board[x][y].isRevealed = true;

		if (board[x][y].value === 0) {
			const directions = [
				[1, 0],
				[-1, 0],
				[0, 1],
				[0, -1],
				[1, -1],
				[1, 1],
				[-1, -1],
				[-1, 1],
			];

			for (const [dx, dy] of directions) {
				openNeighbors(board, x + dx, y + dy, width, height);
			}
		}
	}
};

export default openNeighbors;
