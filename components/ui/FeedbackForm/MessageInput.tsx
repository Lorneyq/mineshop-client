import { IFeedbackInput } from '@/types/feedbackForm';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './FeedbackForm.module.scss';

export default function MessageInput({ register, errors }: IFeedbackInput) {
	return (
		<label className={styles.Label}>
			<TextareaAutosize
				{...register('message', {
					required: 'Enter your message!',
					minLength: 20,
					maxLength: 300,
				})}
				maxLength={300}
				className={styles.Textarea}
				placeholder="Enter your message (20 to 300 characters)"
			/>
			{errors.message && (
				<span className={styles.ErrorAlert}>{errors.message?.message}</span>
			)}
			{errors.message && errors.message.type === 'minLength' && (
				<span className={styles.ErrorAlert}>Minimum of 20 symbols</span>
			)}
			{errors.message && errors.message.type === 'maxLength' && (
				<span className={styles.ErrorAlert}>Maximum of 300 symbols</span>
			)}
		</label>
	);
}
