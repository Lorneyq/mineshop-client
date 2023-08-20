import { IAuthModuleInput } from '@/types/auth';
import styles from './AuthModule.module.scss';

export default function EmailInput({ register, errors }: IAuthModuleInput) {
	return (
		<label className={styles.Label}>
			<input
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
			/>
			{errors.email && (
				<span className={styles.ErrorAlert}>{errors.email.message}</span>
			)}
		</label>
	);
}
