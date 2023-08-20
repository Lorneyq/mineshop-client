'use client';
import StandardButton from '@/components/ui/Buttons/standard-button/StandardButton';
import CardCVCInput from '@/components/ui/OrderForm/Payment/CardCVCInput';
import CardExpiryInput from '@/components/ui/OrderForm/Payment/CardExpiryInput';
import CardNumberInput from '@/components/ui/OrderForm/Payment/CardNumberInput';
import { OrderInputs } from '@/types/orderForm';
import { MutableRefObject, useRef } from 'react';
import { useForm } from 'react-hook-form';
import mainStyles from '../OrderFilling.module.scss';
import styles from './PaymentTab.module.scss';

export default function PaymentTab({
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
				<CardNumberInput
					register={register}
					errors={errors}
					className={styles.CardNumberInput}
				/>
				<CardExpiryInput
					register={register}
					errors={errors}
					className={styles.ExpirationDateInput}
				/>
				<CardCVCInput
					register={register}
					errors={errors}
					className={styles.CVCInput}
				/>
			</form>
			<div className={mainStyles.FillingButtons}>
				<button
					className={mainStyles.FillingPrevButton}
					onClick={() => moveToTab(1)}
				>
					back to shipping
				</button>
				<StandardButton
					className={mainStyles.FillingNextButton}
					isWhite
					onClick={() => moveToTab(3)}
				>
					continue
				</StandardButton>
			</div>
		</>
	);
}
