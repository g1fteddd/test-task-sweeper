import { IDifficulty } from './configDifficulty';

const initializeBoard = ({ width, height, mines }: IDifficulty) => {
	const board = new Array(width).fill(null).map(() =>
		new Array(height).fill(null).map(() => ({
			isRevealed: false,
			isMine: false,
			value: 0,
			isFlag: false,
			isQuestion: false,
		})),
	);

	let minesPlaced = 0;
	while (minesPlaced < mines) {
		const randomRow = Math.floor(Math.random() * width);
		const randomCol = Math.floor(Math.random() * height);

		if (!board[randomRow][randomCol].isMine) {
			board[randomRow][randomCol].isMine = true;
			board[randomRow][randomCol].value = -1;

			minesPlaced++;

			// Увеличиваем значение клеток вокруг мины
			for (let dr = -1; dr <= 1; dr++) {
				for (let dc = -1; dc <= 1; dc++) {
					const newRow = randomRow + dr;
					const newCol = randomCol + dc;

					if (
						newRow >= 0 &&
						newRow < width &&
						newCol >= 0 &&
						newCol < height
					) {
						if (board[newRow][newCol].isMine) continue;
						board[newRow][newCol].value++;
					}
				}
			}
		}
	}

	return board;
};

export default initializeBoard;
