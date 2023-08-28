import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className={styles['navbar']}>
			<Link to='/' className={styles['link']}>
				Играть
			</Link>
			<Link to='/leaderboard' className={styles['link']}>
				Список лидеров
			</Link>
		</nav>
	);
};

export default Navbar;
