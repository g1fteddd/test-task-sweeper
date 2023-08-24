import React from 'react';
import styles from './RadioField.module.scss';

interface IRadioFieldProps {
	data: {
		value: string;
		text: string;
	}[];
	currentValue: string;
	setCurrentValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioField: React.FC<IRadioFieldProps> = ({
	data,
	currentValue,
	setCurrentValue,
}) => {
	return (
		<>
			{data.map(item => (
				<div key={item.value} className={styles['wrapper']}>
					<input
						value={item.value}
						className={styles['input']}
						type='radio'
						checked={item.value === currentValue}
						onChange={setCurrentValue}
						id={item.value}
					/>
					<label htmlFor={item.value}>{item.text}</label>
				</div>
			))}
		</>
	);
};

export default RadioField;
