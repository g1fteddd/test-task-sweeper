export interface IDifficulty {
	width: number;
	height: number;
	mines: number;
}

export interface ISettings {
	name: string;
	gameDifficulty: IDifficulty;
	hasGameStarted: boolean;
}
