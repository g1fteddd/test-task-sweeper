import React from 'react';
import { IUser } from '../../redux/users/types';
import styles from './UsersList.module.scss';

interface IUsersList {
	users: IUser[];
}

const UsersList: React.FC<IUsersList> = ({ users }) => {
	return (<ul className={styles['list']}>
		{users.map((user, index) => (
			<li key={index} className={styles['user']}>
				<div className={styles['info']}>
					<strong>{user.name}</strong>
					<span>Время игры: {user.time} секунд</span>
				</div>
			</li>
		))}
	</ul>);
};

export default UsersList;