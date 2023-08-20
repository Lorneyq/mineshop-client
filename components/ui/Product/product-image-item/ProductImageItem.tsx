import { IProductImagesItemProps } from '@/types/product';
import styles from './ProductImageItem.module.scss';

export default function ProductImageItem({
	src,
	alt,
}: IProductImagesItemProps) {
	return (
		<li className={styles.ImageItem}>
			<img src={src} alt={alt} />
		</li>
	);
}
