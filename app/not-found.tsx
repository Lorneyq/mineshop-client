'use client';
import HomeButton from '@/components/ui/Buttons/home-button/HomeButton';
import { Metadata } from 'next';
import Image from 'next/image';
import NotFoundImage from '/public/images/404.png';
import styles from '/public/styles/NotFound.module.scss';

export const metadata: Metadata = {
	title: 'Page not found | Mineshop',
};

export default function NotFound() {
	return (
		<div className={styles.NotFound}>
			<Image
				src={NotFoundImage}
				alt='Page Not Found'
				width={0}
				height={0}
				draggable={false}
			/>
			<div className={styles.Message}>
				<p>page not found</p>
				<p>Perhaps this page does not exist, or is in development</p>
			</div>
			<HomeButton />
		</div>
	);
}
