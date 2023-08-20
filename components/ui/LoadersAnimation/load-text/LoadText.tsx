'use client';
import { useEffect, useState } from 'react';
import styles from './LoadText.module.scss';

type LoadTextProperty = {
	text: string;
};

export default function LoadText({ text }: LoadTextProperty) {
	const [dots, setDots] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			setDots(prevDots => {
				if (prevDots.length >= 3) {
					return '';
				} else {
					return prevDots + '.';
				}
			});
		}, 200);

		return () => clearInterval(interval);
	}, []);

	return (
		<span className={styles.LoadText}>
			{text}
			{dots}
		</span>
	);
}
