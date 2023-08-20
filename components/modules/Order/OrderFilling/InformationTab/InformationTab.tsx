'use client';
import StandardButton from '@/components/ui/Buttons/standard-button/StandardButton';
import EmailInput from '@/components/ui/OrderForm/Information/EmailInput';
import FirstNameInput from '@/components/ui/OrderForm/Information/FirstNameInput';
import LastNameInput from '@/components/ui/OrderForm/Information/LastNameInput';
import PhoneNumberInput from '@/components/ui/OrderForm/Information/PhoneNumberInput';
import { OrderInputs } from '@/types/orderForm';
import Link from 'next/link';
import { MutableRefObject, useRef } from 'react';
import { useForm } from 'react-hook-form';
import mainStyles from '../OrderFilling.module.scss';

export default function InformationTab({
	moveToTab,
}: {
	moveToTab: (arg0: number) => void;
}) {
	const {
		register,
		formState: { errors },
	} = useForm<OrderInputs>();
	const formRef = useRef() as MutableRefObject<HTMLFormElement>;

	return (
		<>
			<form className={mainStyles.OrderForm} ref={formRef}>
				<FirstNameInput register={register} errors={errors} />
				<LastNameInput register={register} errors={errors} />
				<EmailInput register={register} errors={errors} />
				<PhoneNumberInput register={register} errors={errors} />
			</form>
			<div className={mainStyles.FillingButtons}>
				<button className={mainStyles.FillingPrevButton}>
					<Link href="/cart">back to cart</Link>
				</button>
				<StandardButton
					className={mainStyles.FillingNextButton}
					isWhite
					onClick={() => moveToTab(1)}
				>
					continue
				</StandardButton>
			</div>
		</>
	);
}
