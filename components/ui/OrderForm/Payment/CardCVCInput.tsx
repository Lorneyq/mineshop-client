import { IOrderInput } from '@/types/orderForm';
import { useCookies } from 'react-cookie';
import { useCreditCardValidator } from 'react-creditcard-validator';
import { Controller, useForm } from 'react-hook-form';
import styles from '../OrderForm.module.scss';

export default function CardCVCInput({
	register,
	errors,
	className,
}: IOrderInput) {
	const { getCVCProps } = useCreditCardValidator();
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
				name="cardCVC"
				control={control}
				rules={{ required: 'Please enter your card CVC.' }}
				defaultValue={cookies.formData?.cardCVC || ''}
				render={({ field }) => (
					<input
						{...getCVCProps({
							value: field.value,
							onChange: e => {
								field.onChange(e);
								handleInputChange('cardCVC', e.target.value);
							},
						})}
						className={styles.Input}
						placeholder="CVC"
						crossOrigin={undefined}
					/>
				)}
			/>
			{errors.cardCVC && (
				<span className={styles.ErrorAlert}>{errors.cardCVC.message}</span>
			)}
		</label>
	);
}
