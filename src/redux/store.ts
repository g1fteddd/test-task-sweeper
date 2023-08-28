import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settings/slice';
import usersReducer from './users/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
	reducer: {
		settings: settingsReducer,
		users: usersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
