import { ReactNode } from 'react';
import styles from './StandardButton.module.scss';

type buttonProps = {
	children: ReactNode;
	className?: string;
	isWhite?: boolean;
	onClick?: () => void;
};

export default function StandardButton({
	children,
	className,
	isWhite,
	onClick,
}: buttonProps) {
	return (
		<button
			className={`${styles.StandardButton} ${className ? className : ''} ${
				isWhite ? styles.White : styles.Black
			}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
