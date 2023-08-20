import { IAuthModuleInput } from '@/types/auth';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import HidePasswordButton from '../Buttons/hide-password-button/HidePasswordButton';
import styles from './AuthModule.module.scss';

export default function PasswordInput({
	register,
	errors,
	control,
}: IAuthModuleInput) {
	const [showPassword, setShowPassword] = useState(false);

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<label className={styles.Label}>
			<Controller
				name="password"
				control={control}
				defaultValue=""
				rules={{
					required: 'Please enter a password.',
					minLength: 6,
					maxLength: 32,
				}}
				render={({ field }) => (
					<>
						<input
							type={showPassword ? 'text' : 'password'}
							{...field}
							{...register('password', {
								required: 'Please enter a password.',
								minLength: 6,
								maxLength: 32,
							})}
							onChange={e => field.onChange(e.target.value)}
							maxLength={32}
							className={`${styles.Input} ${styles.PasswordInput}`}
							placeholder="Password"
						/>
						<HidePasswordButton
							onClick={toggleShowPassword}
							condition={showPassword}
						/>
					</>
				)}
			/>
			{errors.password && (
				<span className={styles.ErrorAlert}>{errors.password.message}</span>
			)}
			{errors.password && errors.password.type === 'minLength' && (
				<span className={styles.ErrorAlert}>Minimum of 6 symbols</span>
			)}
			{errors.password && errors.password.type === 'maxLength' && (
				<span className={styles.ErrorAlert}>Maximum of 32 symbols</span>
			)}
		</label>
	);
}
