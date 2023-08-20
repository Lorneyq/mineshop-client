'use client';
import AuthModule from '@/components/modules/Header/AuthModule/AuthModule';
import { useState } from 'react';
import StandardButton from '../standard-button/StandardButton';

export default function AuthButton({}) {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
	};

	return (
		<>
			<StandardButton onClick={handleClick}>Sign In/Sign Up</StandardButton>
			{show && <AuthModule setShow={setShow} />}
		</>
	);
}
