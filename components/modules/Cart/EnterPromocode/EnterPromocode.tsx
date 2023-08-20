'use client';
import SendingInput from '@/components/ui/Inputs/sending-input/SendingInput';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './EnterPromocode.module.scss';

export function EnterPromocode({ color }: { color?: string }) {
	const [promocode, setPromocode] = useState('');
	const [isValid, setIsValid] = useState(true);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setPromocode(inputValue);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (promocode.length >= 4) {
			toast.error('There is no such promocode.');
			setPromocode('');
		} else if (promocode.length > 16) {
			toast.error('The promocode is too long');
		} else {
			toast.error('The promocode is too short');
		}
	};

	return (
		<SendingInput
			onSubmit={handleSubmit}
			type="text"
			value={promocode}
			onChange={handleInputChange}
			placeholder="Enter promo code"
			nameInput="enter-promocode"
			color={color}
			className={styles.EnterPromocode}
			maxLength={16}
		/>
	);
}
