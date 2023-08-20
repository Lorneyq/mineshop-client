import { IFeedbackInput } from '@/types/feedbackForm';
import styles from './FeedbackForm.module.scss';

export default function NameInput({ register, errors }: IFeedbackInput) {
	return (
		<label className={styles.Label}>
			<span>Name*</span>
			<input
				{...register('name', {
					required: 'Please enter a name.',
					minLength: 3,
					maxLength: 25,
				})}
				maxLength={25}
				className={styles.Input}
				type="text"
				placeholder="Jhon"
			/>
			{errors.name && (
				<span className={styles.ErrorAlert}>{errors.name.message}</span>
			)}
			{errors.name && errors.name.type === 'minLength' && (
				<span className={styles.ErrorAlert}>Minimum of 3 symbols</span>
			)}
			{errors.name && errors.name.type === 'maxLength' && (
				<span className={styles.ErrorAlert}>Maximum of 25 symbols</span>
			)}
		</label>
	);
}
