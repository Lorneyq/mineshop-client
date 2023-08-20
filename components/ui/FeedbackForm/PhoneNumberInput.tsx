import { IFeedbackInput } from '@/types/feedbackForm';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './FeedbackForm.module.scss';

export default function PhoneNumberInput({
	register,
	errors,
	control,
}: IFeedbackInput) {
	return (
		<label className={styles.Label}>
			<span>Phone*</span>
			<Controller
				name="phone"
				control={control}
				rules={{ required: 'Please enter a phone number.' }}
				render={({ field }) => (
					<PhoneInput
						country={'us'}
						value={field.value}
						onChange={value => field.onChange(value)}
						placeholder="+1 234 567-89-00"
						inputStyle={{
							border: '1px solid black',
							borderRadius: '0px',
							padding: '8px',
							width: '100%',
							paddingLeft: '40px',
							fontSize: '16px',
						}}
						dropdownStyle={{
							borderRadius: '0px',
						}}
						buttonStyle={{
							borderRadius: '0px',
							backgroundColor: 'transparent',
							borderRight: '1px solid black',
						}}
					/>
				)}
			/>
			{errors.phone && (
				<span className={styles.ErrorAlert}>{errors.phone.message}</span>
			)}
		</label>
	);
}
