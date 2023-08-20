'use client';
import SendingInput from '@/components/ui/Inputs/sending-input/SendingInput';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './EmailSubscription.module.scss';

export default function EmailSubscription({
	labelText,
	color,
}: {
	labelText?: string;
	color?: string;
}) {
	const [email, setEmail] = useState('');
	const [isValid, setIsValid] = useState(true);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setEmail(inputValue);

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		setIsValid(emailRegex.test(inputValue));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (isValid) {
			toast.success('Message sent');
			setEmail('');
		} else {
			toast.error('Invalid email');
		}
	};

	return (
		<SendingInput
			onSubmit={handleSubmit}
			labelText={labelText}
			type="email"
			value={email}
			onChange={handleInputChange}
			placeholder="Email"
			nameInput="email-subscribe"
			color={color}
			className={styles.EmailSubscription}
		/>
	);
}
