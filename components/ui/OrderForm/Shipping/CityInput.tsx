import { IOrderInput } from '@/types/orderForm';
import { ChangeEvent } from 'react';
import { useCookies } from 'react-cookie';
import { Controller, useForm } from 'react-hook-form';
import styles from '../OrderForm.module.scss';

export default function CityInput({ register, errors }: IOrderInput) {
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
				name="city"
				control={control}
				defaultValue={cookies.formData?.city || ''}
				render={({ field }) => (
					<input
						{...field}
						{...register('city', {
							required: 'Please enter your city',
						})}
						className={styles.Input}
						type="text"
						placeholder="City"
						value={field.value}
						onChange={handleInputChange}
					/>
				)}
			/>
			{errors.city && (
				<span className={styles.ErrorAlert}>{errors.city.message}</span>
			)}
		</label>
	);
}
