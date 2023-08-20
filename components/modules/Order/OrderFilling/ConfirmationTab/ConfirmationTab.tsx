'use client';
import StandardButton from '@/components/ui/Buttons/standard-button/StandardButton';
import { $user } from '@/context/user';
import { OrderInputs } from '@/types/orderForm';
import { useStore } from 'effector-react';
import { MutableRefObject, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import mainStyles from '../OrderFilling.module.scss';
import styles from './ConfirmationTab.module.scss';

export default function ConfirmationTab({
	moveToTab,
}: {
	moveToTab: (arg0: number) => void;
}) {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<OrderInputs>();
	const formRef = useRef() as MutableRefObject<HTMLFormElement>;
	const [cookies, setCookie] = useCookies();
	const user = useStore($user);

	let maskedCardNumber;
	if (cookies.formData?.cardNumber) {
		const cardNumber = cookies.formData.cardNumber.replace(/\s/g, '');
		maskedCardNumber =
			cardNumber.length === 19
				? `${cardNumber.slice(0, 4)} **** **** **** ${cardNumber.slice(15)}`
				: cookies.formData?.cardNumber;
	}

	return (
		<>
			<div className={styles.ConfirmationInfo}>
				<div className={styles.ConfirmationInfoBox}>
					<h4 className={mainStyles.FillingTitle}>contacts</h4>
					<ul>
						<li>
							{cookies.formData?.firstName || ''}{' '}
							{cookies.formData?.lastName || ''}
						</li>
						<li>{cookies.formData?.email || user.email || ''}</li>
						<li>{`+${cookies.formData?.phone}` || ''}</li>
					</ul>
				</div>
				<div className={styles.ConfirmationInfoBox}>
					<h4 className={mainStyles.FillingTitle}>shipping method</h4>
					<ul>
						<li>{cookies.formData?.shippingMethod || ''}</li>
						<li>{cookies.formData?.shippingPrice || ''}</li>
					</ul>
				</div>
				<div className={styles.ConfirmationInfoBox}>
					<h4 className={mainStyles.FillingTitle}>shipping</h4>
					<ul>
						<li>
							{cookies.formData?.city && cookies.formData?.country?.label
								? `${cookies.formData.city}, ${cookies.formData.country.label}`
								: cookies.formData?.city
								? `${cookies.formData.city}`
								: cookies.formData?.country?.label
								? `${cookies.formData.country.label}`
								: ''}
						</li>
						<li>{cookies.formData?.fullAddress || ''}</li>
						<li>{cookies.formData?.postalCode || ''}</li>
					</ul>
				</div>
				<div className={styles.ConfirmationInfoBox}>
					<h4 className={mainStyles.FillingTitle}>payment</h4>
					<ul>
						<li>{maskedCardNumber}</li>
						<li>{cookies.formData?.cardExpiry || ''}</li>
						<li>{cookies.formData?.cardCVC || ''}</li>
					</ul>
				</div>
			</div>
			<div className={mainStyles.FillingButtons}>
				<button
					className={mainStyles.FillingPrevButton}
					onClick={() => moveToTab(2)}
				>
					back to payment
				</button>
				<StandardButton className={mainStyles.FillingNextButton} isWhite>
					order
				</StandardButton>
			</div>
		</>
	);
}
