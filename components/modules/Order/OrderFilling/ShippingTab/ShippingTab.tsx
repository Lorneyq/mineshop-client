'use client';
import StandardButton from '@/components/ui/Buttons/standard-button/StandardButton';
import StandardCheckbox from '@/components/ui/Checkboxes/standard-checkbox/StandardCheckbox';
import CityInput from '@/components/ui/OrderForm/Shipping/CityInput';
import CountrySelect from '@/components/ui/OrderForm/Shipping/CountrySelect';
import FullAddressInput from '@/components/ui/OrderForm/Shipping/FullAddressInput';
import PostalCodeInput from '@/components/ui/OrderForm/Shipping/PostalCodeInput';
import { $totalPrice, addToTotalPrice } from '@/context/cart';
import { OrderInputs } from '@/types/orderForm';
import { useStore } from 'effector-react';
import { MutableRefObject, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import mainStyles from '../OrderFilling.module.scss';
import styles from './ShippingTab.module.scss';

export default function ShippingTab({
	moveToTab,
}: {
	moveToTab: (arg0: number) => void;
}) {
	const {
		register,
		formState: { errors },
		setValue,
	} = useForm<OrderInputs>();
	const formRef = useRef() as MutableRefObject<HTMLFormElement>;
	const totalPrice = useStore($totalPrice);
	const [cookies, setCookie] = useCookies();

	const [isChecked1, setIsChecked1] = useState(false);
	const [isChecked2, setIsChecked2] = useState(false);

	const handleCheckbox1Change = () => {
		if (!isChecked1) {
			setIsChecked1(true);
			setIsChecked2(false);
			const valueToAdd = isChecked1 ? 0 : -10;
			addToTotalPrice(valueToAdd);
			const formDataToUpdate = {
				...cookies.formData,
				shippingPrice: 'Free',
				shippingMethod: 'Standard shipping',
			};

			setCookie('formData', formDataToUpdate, { path: '/' });
		}
	};

	const handleCheckbox2Change = () => {
		if (!isChecked2) {
			setIsChecked1(false);
			setIsChecked2(true);
			const valueToAdd = isChecked2 ? -10 : 10;
			addToTotalPrice(valueToAdd);
			const formDataToUpdate = {
				...cookies.formData,
				shippingPrice: '$10',
				shippingMethod: 'Fast shipping (2 days)',
			};

			setCookie('formData', formDataToUpdate, { path: '/' });
		}
	};

	return (
		<>
			<h4 className={mainStyles.FillingTitle}>Shipping address</h4>
			<form className={mainStyles.OrderForm} ref={formRef}>
				<CountrySelect register={register} errors={errors} />
				<CityInput register={register} errors={errors} />
				<FullAddressInput register={register} errors={errors} />
				<PostalCodeInput register={register} errors={errors} />
			</form>
			<h4 className={mainStyles.FillingTitle}>Shipping method</h4>
			<div className={styles.ShippingMethods}>
				<div className={styles.ShippingMethod}>
					<div className={styles.ShippingMethodChoice}>
						<StandardCheckbox
							checked={
								isChecked1 ||
								cookies.formData?.shippingMethod === 'Standard shipping'
							}
							onChange={handleCheckbox1Change}
						/>
						<span className={styles.ShippingMethodName}>Standard shipping</span>
					</div>
					<span className={styles.ShippingMethodCost}>Free</span>
				</div>
				<div className={styles.ShippingMethod}>
					<div className={styles.ShippingMethodChoice}>
						<StandardCheckbox
							checked={
								isChecked2 ||
								cookies.formData?.shippingMethod === 'Fast shipping (2 days)'
							}
							onChange={handleCheckbox2Change}
						/>
						<span className={styles.ShippingMethodName}>
							Fast shipping (2 days)
						</span>
					</div>
					<span className={styles.ShippingMethodCost}>$10</span>
				</div>
			</div>
			<div className={mainStyles.FillingButtons}>
				<button
					className={mainStyles.FillingPrevButton}
					onClick={() => moveToTab(0)}
				>
					back to information
				</button>
				<StandardButton
					className={mainStyles.FillingNextButton}
					isWhite
					onClick={() => moveToTab(2)}
				>
					continue
				</StandardButton>
			</div>
		</>
	);
}
