import React from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
	children: React.ReactNode;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
	return (
		<button className={styles['button']} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
