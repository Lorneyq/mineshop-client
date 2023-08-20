import { IProductMarkProps } from '@/types/products';
import Link from 'next/link';
import styles from './ProductMark.module.scss';
import MarkIcon from './icons/MarkIcon';

export default function ProductMark({ mark }: IProductMarkProps) {
	let colorMark;
	if (mark === 'hit') {
		colorMark = '#000000';
	} else if (mark === 'new') {
		colorMark = '#5A9A30';
	} else if (mark === 'sale') {
		colorMark = '#E08585';
	} else {
		('');
	}

	if (mark) {
		return (
			<Link href={`/products/${mark}`} className={styles.ProductMark}>
				<span>{mark}</span>
				<MarkIcon colorMark={colorMark} />
			</Link>
		);
	}
}
