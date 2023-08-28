import React from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
	className?: string;
	children: React.ReactNode;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = ({ className, children, onClick }) => {
	return (
		<button className={`${styles['button']} ${className}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
