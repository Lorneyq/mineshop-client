'use client';
import { useEffect, useState } from 'react';

import { getSaleItemsFx } from '@/api/products';
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs';
import ProductFilters from '@/components/section/CatalogPage/ProductFilters/ProductFilters';
import PromotionalProducts from '@/components/section/PromotionPage/PromotionalProducts/PromotionalProducts';
import { IProductList } from '@/types/products';
import { toast } from 'react-toastify';

export default function NewProductsPage() {
	const [saleItems, setSaleItems] = useState<IProductList>({} as IProductList);
	const [spinner, setSpinner] = useState(false);

	useEffect(() => {
		loadProductItem();
	}, []);

	const loadProductItem = async () => {
		try {
			setSpinner(true);
			const saleItems = await getSaleItemsFx('/products/sale');
			setSaleItems(saleItems);
		} catch (error) {
			toast.error((error as Error).message);
		} finally {
			setSpinner(false);
		}
	};

	const products = saleItems.rows || [];

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
						label: 'Sale products',
						path: '/products/sale',
					},
				]}
			/>
			<ProductFilters
				title='Sale products'
				colorTitle='#E08585'
				totalProducts={saleItems.count}
				isPromotional={true}
			/>
			<PromotionalProducts products={products} />
		</div>
	);
}
