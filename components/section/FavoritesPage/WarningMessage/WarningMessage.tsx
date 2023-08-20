import AuthButton from '@/components/ui/Buttons/auth-button/AuthButton';
import styles from './WarningMessage.module.scss';

export default function WarningMessage() {
	return (
		<section className={styles.WarningMessageBox}>
			<span className={styles.Message}>
				To use the "Favorites" section register, or log in to your account.
			</span>
			<AuthButton />
		</section>
	);
}
