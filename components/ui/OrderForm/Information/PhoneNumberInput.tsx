'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { IOrderInput } from '@/types/orderForm';
import { useCookies } from 'react-cookie';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from '../OrderForm.module.scss';

export default function PhoneNumberInput({ register, errors }: IOrderInput) {
	const { control, setValue } = useForm();
	const [cookies, setCookie] = useCookies();
	const isMobile1200 = useMediaQuery(1200);

	const handleInputChange = (value: string) => {
		setValue('phone', value);
		setCookie('formData', { ...cookies.formData, phone: value }, { path: '/' });
	};

	return (
		<label className={styles.Label}>
			<Controller
				name="phone"
				control={control}
				rules={{ required: 'Please enter a phone number.' }}
				defaultValue={cookies.formData?.phone || ''}
				render={({ field }) => (
					<PhoneInput
						{...field}
						country={'us'}
						value={field.value}
						onChange={handleInputChange}
						placeholder="Phone number"
						inputStyle={{
							border: '0px',
							borderBottom: '1px solid white',
							borderRadius: '0px',
							padding: isMobile1200 ? '5px' : '8px',
							color: 'white',
							backgroundColor: 'transparent',
							width: '100%',
							paddingLeft: isMobile1200 ? '20px' : '45px',
							fontSize: isMobile1200 ? '0.875rem' : '16px',
						}}
						dropdownStyle={{
							borderRadius: '0px',
							color: 'black',
							fontSize: isMobile1200 ? '0.875rem' : '16px',
						}}
						buttonClass={styles.PhoneDropdownButton}
					/>
				)}
			/>
			{errors.phone && (
				<span className={styles.ErrorAlert}>{errors.phone.message}</span>
			)}
		</label>
	);
}
