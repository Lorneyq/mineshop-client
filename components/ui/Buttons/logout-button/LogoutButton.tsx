import { useRouter } from 'next/navigation';
import StandardButton from '../standard-button/StandardButton';
import styles from './LogoutButton.module.scss';

export default function LogoutButton() {
	const router = useRouter();

	const handleLogout = async () => {
		router.push('/');
		localStorage.setItem('auth_connection', '');
		await location.reload();
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
