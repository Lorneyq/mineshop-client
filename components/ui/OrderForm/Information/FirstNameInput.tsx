import { IOrderInput } from '@/types/orderForm';
import { ChangeEvent } from 'react';
import { useCookies } from 'react-cookie';
import { Controller, useForm } from 'react-hook-form';
import styles from '../OrderForm.module.scss';

export default function FirstNameInput({ register, errors }: IOrderInput) {
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
				name="firstName"
				control={control}
				defaultValue={cookies.formData?.firstName || ''}
				render={({ field }) => (
					<input
						{...field}
						{...register('firstName', {
							required: 'Please enter your first name',
						})}
						className={styles.Input}
						type="text"
						placeholder="First name"
						value={field.value}
						onChange={handleInputChange}
					/>
				)}
			/>
			{errors.firstName && (
				<span className={styles.ErrorAlert}>{errors.firstName.message}</span>
			)}
		</label>
	);
}
