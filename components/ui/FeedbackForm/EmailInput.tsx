import { $user } from '@/context/user';
import { IFeedbackInput } from '@/types/feedbackForm';
import { useStore } from 'effector-react';
import styles from './FeedbackForm.module.scss';

export default function EmailInput({ register, errors }: IFeedbackInput) {
	const user = useStore($user);

	return (
		<label className={styles.Label}>
			<span>Email*</span>
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
				placeholder="jhon@gmail.com"
				defaultValue={user.email || ''}
			/>
			{errors.email && (
				<span className={styles.ErrorAlert}>{errors.email.message}</span>
			)}
		</label>
	);
}
