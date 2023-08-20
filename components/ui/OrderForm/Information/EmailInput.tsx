import { $user } from '@/context/user';
import { IOrderInput } from '@/types/orderForm';
import { useStore } from 'effector-react';
import { ChangeEvent } from 'react';
import { useCookies } from 'react-cookie';
import { Controller, useForm } from 'react-hook-form';
import styles from '../OrderForm.module.scss';

export default function EmailInput({ register, errors }: IOrderInput) {
	const { control, setValue } = useForm();
	const [cookies, setCookie] = useCookies();
	const user = useStore($user);

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
				name="email"
				control={control}
				defaultValue={cookies.formData?.email || user.email || ''}
				render={({ field }) => (
					<input
						{...field}
						{...register('email', {
							required: 'Please enter a email.',
							pattern: {
								value: /\S+@\S+\.\S+/,
								message: 'Invalid Email!',
							},
						})}
						className={styles.Input}
						type="email"
						placeholder="Email"
						value={field.value}
						onChange={handleInputChange}
					/>
				)}
			/>
			{errors.email && (
				<span className={styles.ErrorAlert}>{errors.email.message}</span>
			)}
		</label>
	);
}
