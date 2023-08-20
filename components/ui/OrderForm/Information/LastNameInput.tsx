import { IOrderInput } from '@/types/orderForm';
import { ChangeEvent } from 'react';
import { useCookies } from 'react-cookie';
import { Controller, useForm } from 'react-hook-form';
import styles from '../OrderForm.module.scss';

export default function LastNameInput({ register, errors }: IOrderInput) {
	const { control, setValue } = useForm();
	const [cookies, setCookie] = useCookies();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValue(name, value);
		setCookie(
			'formData',
			{ ...cookies.formData, [name]: value },
			{ path: '/' },
		);
	};

	return (
		<label className={styles.Label}>
			<Controller
				name="lastName"
				control={control}
				defaultValue={cookies.formData?.lastName || ''}
				render={({ field }) => (
					<input
						{...field}
						{...register('lastName', {
							required: 'Please enter your last name',
						})}
						className={styles.Input}
						type="text"
						placeholder="Last name"
						value={field.value}
						onChange={handleInputChange}
					/>
				)}
			/>
			{errors.lastName && (
				<span className={styles.ErrorAlert}>{errors.lastName.message}</span>
			)}
		</label>
	);
}
