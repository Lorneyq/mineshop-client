'use client';
import CloseButton from '@/components/ui/Buttons/close-button/CloseButton';
import BackgroundOverlay from '@/components/ui/overlay/BackgroundOverlay';
import { IAuthModuleProps } from '@/types/auth';
import { useState } from 'react';
import styles from './AuthModule.module.scss';
import SignInForm from './SignInForm/SignInForm';
import SignUpForm from './SignUpForm/SignUpForm';

export default function AuthModule({ setShow }: IAuthModuleProps) {
	const [isSignIn, setIsSignIn] = useState(false);
	const switchForm = () => {
		setIsSignIn(!isSignIn);
	};

	return (
		<>
			<BackgroundOverlay />
			<div className={styles.AuthModule}>
				<CloseButton closeModal={() => setShow(false)} />
				<div className={styles.Box}>
					<span className={styles.Title}>
						{isSignIn ? 'Sign In' : 'Sign Up'}
					</span>
					<div>
						{isSignIn ? (
							<SignInForm setShow={setShow} />
						) : (
							<SignUpForm switchForm={switchForm} />
						)}
					</div>
					<button className={styles.SwitchForm} onClick={switchForm}>
						{isSignIn ? 'Sign Up' : 'Sign In'}
					</button>
				</div>
			</div>
		</>
	);
}
