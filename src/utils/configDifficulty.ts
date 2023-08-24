interface IDifficulty {
	width: number;
	height: number;
	mines: number;
}

enum DifficultyName {
	EASY = 'easy',
	MEDIUM = 'medium',
	HARD = 'hard',
}

type TConfigDifficulty = {
	[key in DifficultyName]: IDifficulty;
};

const configDifficulty: TConfigDifficulty = {
	easy: {
		width: 8,
		height: 8,
		mines: 10,
	},
	medium: {
		width: 16,
		height: 16,
		mines: 40,
	},
	hard: {
		width: 32,
		height: 16,
		mines: 100,
	},
};

export default configDifficulty;
