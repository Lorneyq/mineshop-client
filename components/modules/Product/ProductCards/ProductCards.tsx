import { IProducts } from '@/types/products';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductCards.module.scss';

export default function ProductCards({ products, spinner, isRow }: IProducts) {
	return (
		<div className={isRow ? styles.ProductsRow : styles.ProductCards}>
			<ProductCard products={products} spinner={spinner} />
		</div>
	);
}
