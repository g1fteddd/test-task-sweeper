import { DifficultyName } from '../../utils/configDifficulty';

export interface ISettings {
	name: string;
	gameDifficulty: DifficultyName;
	hasGameStarted: boolean;
}
