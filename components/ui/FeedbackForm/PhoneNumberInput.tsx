import { useMediaQuery } from '@/hooks/useMediaQuery';
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
	const isMobile580 = useMediaQuery(580);
	const isMobile1200 = useMediaQuery(1200);
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
							padding: '0.5rem',
							width: '100%',
							paddingLeft: isMobile1200 ? '22px' : '40px',
							fontSize: '1rem',
							height: isMobile580 ? '30px' : '35px',
						}}
						dropdownStyle={{
							borderRadius: '0px',
						}}
						buttonStyle={{
							borderRadius: '0px',
							backgroundColor: 'white',
							borderTop: '1px solid white',
							borderLeft: '1px solid white',
							borderBottom: '1px solid white',
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
