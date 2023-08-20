import { IStandardCheckboxProps } from '@/types/common';
import { useState } from 'react';
import styles from './StandardCheckbox.module.scss';

export default function StandardCheckbox({
	label,
	onChange,
	checked,
}: IStandardCheckboxProps) {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(prevChecked => !prevChecked);
	};

	return (
		<label className={styles.StandardCheckbox}>
			<input
				type="checkbox"
				checked={checked || isChecked}
				onChange={onChange || handleCheckboxChange}
			/>
			{label}
		</label>
	);
}
