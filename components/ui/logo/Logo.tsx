'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Link from 'next/link';
import styles from './Logo.module.scss';
import LogoIcon from './images/LogoIcon';
import ShortLogoIcon from './images/ShortLogoIcon';

const Logo = () => {
	const isMobile1386 = useMediaQuery(1386);
	const isMobile1024 = useMediaQuery(1024);

	return (
		<Link href="/" className={styles.Logo}>
			{isMobile1386 && !isMobile1024 ? <ShortLogoIcon /> : <LogoIcon />}
		</Link>
	);
};

export default Logo;
