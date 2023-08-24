import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISettings } from './types';

const initialState: ISettings = {
	name: '',
	gameDifficulty: 'easy',
	hasGameStarted: false,
};

const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setName: (state, action: PayloadAction<ISettings['name']>) => {
			state.name = action.payload;
		},
		setGameDifficulty: (
			state,
			action: PayloadAction<ISettings['gameDifficulty']>,
		) => {
			state.gameDifficulty = action.payload;
		},
		setHasGameStarted: (
			state,
			action: PayloadAction<ISettings['hasGameStarted']>,
		) => {
			state.hasGameStarted = action.payload;
		},
	},
});

export const { setName, setGameDifficulty, setHasGameStarted } =
	settingsSlice.actions;

export default settingsSlice.reducer;
