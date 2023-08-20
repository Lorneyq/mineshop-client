'use client';
import { useEffect, useState } from 'react';

import { getNewItemsFx } from '@/api/products';
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs';
import ProductFilters from '@/components/section/CatalogPage/ProductFilters/ProductFilters';
import PromotionalProducts from '@/components/section/PromotionPage/PromotionalProducts/PromotionalProducts';
import { IProductList } from '@/types/products';
import { toast } from 'react-toastify';

export default function NewProductsPage() {
	const [newItems, setNewItems] = useState<IProductList>({} as IProductList);
	const [spinner, setSpinner] = useState(false);

	useEffect(() => {
		loadProductItem();
	}, []);

	const loadProductItem = async () => {
		try {
			setSpinner(true);
			const newItems = await getNewItemsFx('/products/new');
			setNewItems(newItems);
		} catch (error) {
			toast.error((error as Error).message);
		} finally {
			setSpinner(false);
		}
	};

	const products = newItems.rows || [];

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
						label: 'New products',
						path: '/products/new',
					},
				]}
			/>
			<ProductFilters
				title='New products'
				colorTitle='#5A9A30'
				totalProducts={newItems.count}
				isPromotional={true}
			/>
			<PromotionalProducts products={products} />
		</div>
	);
}
