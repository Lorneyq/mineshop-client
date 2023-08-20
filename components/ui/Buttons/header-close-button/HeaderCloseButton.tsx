import { MouseEventHandler } from 'react';
import styles from './HeaderCloseButton.module.scss';
import CrossIcon from './icons/CrossIcon';

type headerCloseButtonProps = {
	closeMenu: MouseEventHandler<HTMLButtonElement>;
};

export default function HeaderCloseButton({
	closeMenu,
}: headerCloseButtonProps) {
	return (
		<button
			className={styles.HeaderCloseButton}
			onClick={closeMenu}
			aria-label="Close"
		>
			<CrossIcon />
		</button>
	);
}
