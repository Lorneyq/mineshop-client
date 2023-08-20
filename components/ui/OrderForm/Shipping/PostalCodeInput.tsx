import { IOrderInput } from '@/types/orderForm';
import { ChangeEvent } from 'react';
import { useCookies } from 'react-cookie';
import { Controller, useForm } from 'react-hook-form';
import styles from '../OrderForm.module.scss';

export default function PostalCodeInput({ register, errors }: IOrderInput) {
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
				name="postalCode"
				control={control}
				defaultValue={cookies.formData?.postalCode || ''}
				render={({ field }) => (
					<input
						{...field}
						{...register('postalCode', {
							required: 'Please enter a your postal code.',
							minLength: 4,
							maxLength: 12,
						})}
						minLength={4}
						maxLength={12}
						className={styles.Input}
						type="text"
						placeholder="Postal code"
						value={field.value}
						onChange={handleInputChange}
					/>
				)}
			/>
			{errors.postalCode && (
				<span className={styles.ErrorAlert}>{errors.postalCode.message}</span>
			)}
			{errors.postalCode && errors.postalCode.type === 'minLength' && (
				<span className={styles.ErrorAlert}>Incorrect postal code format</span>
			)}
			{errors.postalCode && errors.postalCode.type === 'maxLength' && (
				<span className={styles.ErrorAlert}>Incorrect postal code format</span>
			)}
		</label>
	);
}
