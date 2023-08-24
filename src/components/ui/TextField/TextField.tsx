import React from 'react';
import styles from './TextField.module.scss';

interface ITextFieldProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
}

const TextField: React.FC<ITextFieldProps> = ({
	value,
	onChange,
	placeholder,
}) => {
	return (
		<input
			type='text'
			placeholder={placeholder}
			className={styles['input']}
			value={value}
			onChange={onChange}
		/>
	);
};

export default TextField;
