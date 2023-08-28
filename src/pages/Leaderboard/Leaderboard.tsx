import React from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../redux/users/selectors';
import UsersList from '../../components/UsersList/UsersList';
import styles from './Leaderboard.module.scss';

const Leaderboard: React.FC = () => {
	const { users } = useSelector(usersSelector);
	return (
		<div className={styles['leaderboard']}>
			<h1>Список лидеров</h1>
			<UsersList users={users} />
		</div>
	);
};

export default Leaderboard;
