import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUsers } from './types';

const initialUsers = localStorage.getItem('users');
const initialState: IUsers = {
	users: initialUsers ? JSON.parse(initialUsers) : [],
};


const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, action: PayloadAction<IUser[]>) => {
			state.users = action.payload;
		},
	},
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;