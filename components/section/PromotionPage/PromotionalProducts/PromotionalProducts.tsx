'use client';
import ProductCards from '@/components/modules/Product/ProductCards/ProductCards';
import { IProducts } from '@/types/products';
import { useState } from 'react';
import styles from './PromotionalProducts.module.scss';

export default function PromotionalProducts({ products }: IProducts) {
	const [spinner, setSpinner] = useState(false);

	return (
		<section className={styles.PromotionalProducts}>
			<ProductCards products={products} spinner={spinner} />
		</section>
	);
}
