'use client';
import { checkUserAuthFx } from '@/api/auth';
import { setUser } from '@/context/user';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const useUserCheck = (isLockedPage = false) => {
	const [allowAccess, setAllowAccess] = useState(false);
	const router = useRouter();
	const shouldCheckAuth = useRef(true);

	useEffect(() => {
		if (shouldCheckAuth.current) {
			shouldCheckAuth.current = false;
			checkUser();
		}
	}, []);

	const checkUser = async () => {
		const token = localStorage.getItem('auth_connection');
		const user = await checkUserAuthFx(token);

		if (isLockedPage) {
			if (user) {
				setUser(user);
				setAllowAccess(true);
			} else {
				router.push('/');
			}
		}

		if (user) {
			setUser(user);
			setAllowAccess(true);
		}
	};

	return { allowAccess };
};

export default useUserCheck;
