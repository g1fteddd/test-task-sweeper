import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import styles from './App.module.scss';

function App() {


	return (
		<div className={styles['App']}>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/leaderboard' element={<Leaderboard />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</div>
	);
}

export default App;
