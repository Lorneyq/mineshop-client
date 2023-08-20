'use client';
import AuthModule from '@/components/modules/Header/AuthModule/AuthModule';
import useUserCheck from '@/hooks/useUserCheck';
import Link from 'next/link';
import { useState } from 'react';
import styles from './UserButton.module.scss';
import SignInIcon from './icons/SignInIcon';
import UserIcon from './icons/UserIcon';

export default function UserButton() {
	const { allowAccess } = useUserCheck();
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
	};

	return (
		<>
			{allowAccess ? (
				<button className={styles.UserButton}>
					<Link href="/personal">
						<UserIcon />
					</Link>
				</button>
			) : (
				<button className={styles.SignInButton} onClick={handleClick}>
					<SignInIcon />
				</button>
			)}
			{show && <AuthModule setShow={setShow} />}
		</>
	);
}
