'use client';
import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import animationData from './loading.json';

import styles from './Spinner.module.scss';

export default function Spinner() {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			Lottie.loadAnimation({
				container: container as HTMLDivElement,
				renderer: 'svg',
				animationData: animationData,
			});
		}
	}, []);

	return <div ref={containerRef} className={styles.Animation} />;
}
