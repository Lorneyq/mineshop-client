import ProductImages from '@/components/modules/Product/ProductImages/ProductImages';
import ProductInfo from '@/components/modules/Product/ProductInfo/ProductInfo';
import { IProduct } from '@/types/products';
import styles from './ProductSection.module.scss';

export default function ProductSection({ product }: { product: IProduct }) {
	return (
		<section className={styles.ProductSection}>
			<ProductImages product={product} />
			<ProductInfo product={product} />
		</section>
	);
}
