import { ReactNode } from 'react';
import styles from './Marquee.module.scss';

interface MarqueeProps {
	children: ReactNode;
}

export default function Marquee({ children }: MarqueeProps) {
	return (
		<div className={styles.Marquee}>
			<span>{children}</span>
		</div>
	);
}
