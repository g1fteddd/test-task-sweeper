import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import styles from './App.module.scss';

// TODO: сделать красиво
// TODO: поправить README.md
// TODO: Постараться сделать допы
// TODO: смена флажком на мобилке
// TODO: сделать первым касанием островок

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
