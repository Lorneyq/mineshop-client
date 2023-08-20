import { logoutFx } from '@/api/auth';
import { useRouter } from 'next/navigation';
import StandardButton from '../standard-button/StandardButton';
import styles from './LogoutButton.module.scss';

export default function LogoutButton() {
	const router = useRouter();

	const handleLogout = async () => {
		await logoutFx('/users/logout');
		await location.reload();
		router.push('/');
	};

	return (
		<StandardButton
			onClick={handleLogout}
			isWhite
			className={styles.LogoutButton}
		>
			Logout
		</StandardButton>
	);
}
