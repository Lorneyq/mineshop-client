import { IOrderInput } from '@/types/orderForm';
import { ChangeEvent } from 'react';
import { useCookies } from 'react-cookie';
import { images, useCreditCardValidator } from 'react-creditcard-validator';
import { Controller, useForm } from 'react-hook-form';
import styles from '../OrderForm.module.scss';

export default function CardNumberInput({ errors, className }: IOrderInput) {
	const { getCardNumberProps, getCardImageProps } = useCreditCardValidator();
	const { control, setValue } = useForm();
	const [cookies, setCookie] = useCookies();

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
		<label className={`${styles.Label} ${className ? className : ''}`}>
			<Controller
				name="cardNumber"
				control={control}
				rules={{ required: 'Please enter your card number.' }}
				defaultValue={cookies.formData?.cardNumber || ''}
				render={({ field }) => (
					<div className={styles.CardNumberInput}>
						<svg
							{...getCardImageProps({ images })}
							className={styles.CardNumberIcon}
						/>
						<input
							{...getCardNumberProps({
								value: field.value,
								onChange: e => {
									field.onChange(e);
									handleInputChange(e);
								},
							})}
							className={styles.Input}
							placeholder="Card number"
							crossOrigin={undefined}
						/>
					</div>
				)}
			/>
			{errors.cardNumber && (
				<span className={styles.ErrorAlert}>{errors.cardNumber.message}</span>
			)}
		</label>
	);
}
