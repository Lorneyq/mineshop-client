'use client';
import { useEffect, useState } from 'react';
import styles from './PopularProducts.module.scss';

import { getHitItemsFx } from '@/api/products';
import ProductCards from '@/components/modules/Product/ProductCards/ProductCards';
import SectionTitle from '@/components/ui/Titles/section-title/SectionTitle';
import { IProductList } from '@/types/products';
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function PopularProducts() {
	const [hitItem, setHitItem] = useState<IProductList>({} as IProductList);
	const [spinner, setSpinner] = useState(false);

	useEffect(() => {
		loadProductItem();
	}, []);

	const loadProductItem = async () => {
		try {
			setSpinner(true);
			const hitItem = await getHitItemsFx('/products/hit');
			setHitItem(hitItem);
		} catch (error) {
			toast.error((error as Error).message);
		} finally {
			setSpinner(false);
		}
	};

	const products = hitItem.rows || [];

	const limitedProducts = products.slice(0, 3);

	return (
		<section className={styles.PopularProducts}>
			<div className="container">
				<SectionTitle>
					<Link href="/products/hit">popular</Link>
				</SectionTitle>
				<ProductCards products={limitedProducts} spinner={spinner} />
			</div>
		</section>
	);
}
