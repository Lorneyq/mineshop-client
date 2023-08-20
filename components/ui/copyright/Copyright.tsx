import styles from './Copyright.module.scss';

export default function Copyright() {
	return (
		<span aria-label="Copyright" className={styles.Copyright}>
			&copy; Mineshop 2023
		</span>
	);
}
