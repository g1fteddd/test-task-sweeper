import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import styles from './App.module.scss';
import Header from './components/Header/Header';

function App() {
	return (
		<div className={styles['app']}>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/leaderboard' element={<Leaderboard />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</div>
	);
}

export default App;
