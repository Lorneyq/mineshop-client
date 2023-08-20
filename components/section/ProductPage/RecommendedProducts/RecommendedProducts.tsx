'use client';
import { getProductByCategoryFx } from '@/api/products';
import ProductCards from '@/components/modules/Product/ProductCards/ProductCards';
import { IProduct, IProductList } from '@/types/products';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styles from './RecommendedProducts.module.scss';

export default function RecommendedProducts({
	currentProduct,
}: {
	currentProduct: IProduct;
}) {
	const [productItem, setProductItem] = useState<IProductList>(
		{} as IProductList,
	);
	const [spinner, setSpinner] = useState(false);
	const category = currentProduct.category;

	useEffect(() => {
		loadProductItem();
	}, []);

	const loadProductItem = async () => {
		try {
			setSpinner(true);
			const data = await getProductByCategoryFx({
				url: '/products/category?limit=3&offset=0',
				category,
			});
			setProductItem(data);
		} catch (error) {
			toast.error((error as Error).message);
		} finally {
			setSpinner(false);
		}
	};

	const products = productItem.rows;

	return (
		<div className={styles.RecommendedProducts}>
			<h2 className={styles.Title}>You may also like</h2>
			<ProductCards products={products} spinner={spinner} isRow={true} />
		</div>
	);
}
