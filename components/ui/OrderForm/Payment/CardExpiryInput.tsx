import { IOrderInput } from '@/types/orderForm';
import { useCookies } from 'react-cookie';
import { useCreditCardValidator } from 'react-creditcard-validator';
import { Controller, useForm } from 'react-hook-form';
import styles from '../OrderForm.module.scss';

export default function CardExpiryInput({
	register,
	errors,
	className,
}: IOrderInput) {
	const { getExpiryDateProps } = useCreditCardValidator();
	const { control, setValue } = useForm();
	const [cookies, setCookie] = useCookies();

	const handleInputChange = (name: string, value: string) => {
		setValue(name, value);
		setCookie(
			'formData',
			{ ...cookies.formData, [name]: value },
			{ path: '/' },
		);
	};

	return (
		<label className={`${styles.Label} ${className ? className : ''}`}>
			<Controller
				name="cardExpiry"
				control={control}
				rules={{ required: 'Please enter the expiration date.' }}
				defaultValue={cookies.formData?.cardExpiry || ''}
				render={({ field }) => (
					<input
						{...getExpiryDateProps({
							value: field.value,
							onChange: e => {
								field.onChange(e);
								handleInputChange('cardExpiry', e.target.value);
							},
						})}
						className={styles.Input}
						placeholder="Expiration date"
						crossOrigin={undefined}
					/>
				)}
			/>
			{errors.cardExpiry && (
				<span className={styles.ErrorAlert}>{errors.cardExpiry.message}</span>
			)}
		</label>
	);
}
