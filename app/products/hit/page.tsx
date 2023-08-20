'use client';
import { useEffect, useState } from 'react';

import { getHitItemsFx } from '@/api/products';
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs';
import ProductFilters from '@/components/section/CatalogPage/ProductFilters/ProductFilters';
import PromotionalProducts from '@/components/section/PromotionPage/PromotionalProducts/PromotionalProducts';
import { IProductList } from '@/types/products';
import { toast } from 'react-toastify';

export default function HitProductsPage() {
	const [hitItems, setHitItems] = useState<IProductList>({} as IProductList);
	const [spinner, setSpinner] = useState(false);

	useEffect(() => {
		loadProductItem();
	}, []);

	const loadProductItem = async () => {
		try {
			setSpinner(true);
			const hitItems = await getHitItemsFx('/products/hit');
			setHitItems(hitItems);
		} catch (error) {
			toast.error((error as Error).message);
		} finally {
			setSpinner(false);
		}
	};

	const products = hitItems.rows || [];

	return (
		<div className='container'>
			<Breadcrumbs
				items={[
					{
						label: 'Home',
						path: '/',
					},
					{
						label: 'Catalog',
						path: '/catalog',
					},
					{
						label: 'Hit products',
						path: '/products/hit',
					},
				]}
			/>
			<ProductFilters
				title='Hit products'
				colorTitle='#000000'
				totalProducts={hitItems.count}
				isPromotional={true}
			/>
			<PromotionalProducts products={products} />
		</div>
	);
}
