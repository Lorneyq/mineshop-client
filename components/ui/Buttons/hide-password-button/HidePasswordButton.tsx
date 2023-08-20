import styles from './HidePasswordButton.module.scss';
import HiddenIcon from './icons/HiddenIcon';
import VisibleIcon from './icons/VisibleIcon';

type ButtonProps = {
	onClick: () => void;
	condition: boolean;
};

export default function HidePasswordButton({
	onClick,
	condition,
}: ButtonProps) {
	return (
		<button
			className={styles.HidePasswordButton}
			type="button"
			onClick={onClick}
		>
			{condition ? <VisibleIcon /> : <HiddenIcon />}
		</button>
	);
}
