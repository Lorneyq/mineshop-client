import { MouseEventHandler } from 'react';
import styles from './CloseButton.module.scss';
import CrossIcon from './icons/CrossIcon';

type closeButtonProps = {
	closeModal: MouseEventHandler<HTMLButtonElement>;
};

const CloseButton = ({ closeModal }: closeButtonProps) => {
	return (
		<button
			className={styles.CloseButton}
			onClick={closeModal}
			aria-label="Close"
		>
			<CrossIcon />
		</button>
	);
};

export default CloseButton;
