import Link from 'next/link';
import styles from './ArrowLink.module.scss';
import ArrowIcon from './icons/ArrowIcon';

interface ArrowLinkProps {
	href: string;
	color: string;
}

export default function ArrowLink({ href, color }: ArrowLinkProps) {
	return (
		<Link href={href} className={styles.ArrowLink}>
			<ArrowIcon color={color} />
		</Link>
	);
}
