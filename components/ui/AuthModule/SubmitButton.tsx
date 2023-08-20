import { IButton } from '@/types/auth';
import styles from './AuthModule.module.scss';

export default function SubmitButton({ name }: IButton) {
	return (
		<button className={styles.Button} type="submit">
			{name}
		</button>
	);
}
