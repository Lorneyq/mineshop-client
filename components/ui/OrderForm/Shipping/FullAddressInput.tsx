import { IOrderInput } from '@/types/orderForm';
import { ChangeEvent } from 'react';
import { useCookies } from 'react-cookie';
import { Controller, useForm } from 'react-hook-form';
import styles from '../OrderForm.module.scss';

export default function FullAddressInput({ register, errors }: IOrderInput) {
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
				name="fullAddress"
				control={control}
				defaultValue={cookies.formData?.fullAddress || ''}
				render={({ field }) => (
					<input
						{...field}
						{...register('fullAddress', {
							required: 'Please enter your full address.',
						})}
						className={styles.Input}
						type="text"
						placeholder="Full address"
						value={field.value}
						onChange={handleInputChange}
					/>
				)}
			/>
			{errors.fullAddress && (
				<span className={styles.ErrorAlert}>{errors.fullAddress.message}</span>
			)}
		</label>
	);
}
