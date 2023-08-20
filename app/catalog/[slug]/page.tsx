'use client';
import { getProductByCategoryFx } from '@/api/products';
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs';
import CatalogProducts from '@/components/section/CatalogPage/CatalogProducts/CatalogProducts';
import ProductFilters from '@/components/section/CatalogPage/ProductFilters/ProductFilters';
import { catalog } from '@/data/catalog';
import { IQueryParams } from '@/types/catalog';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type Props = {
	params: {
		slug: string;
		name: string;
		subcategory: string;
	};
};

export default function CategoryPage({ params: { slug } }: Props) {
	const catalogItem = catalog.find(item => item.slug === slug);
	const [totalProducts, setTotalProducts] = useState('');

	const query = queryString.parse(location.search) as unknown as IQueryParams;
	const category = catalogItem?.name;

	useEffect(() => {
		loadProductCount();
	}, [category]);

	const loadProductCount = async () => {
		try {
			const data = await getProductByCategoryFx({
				url: '/products/category?limit=9&offset=0',
				category,
			});
			setTotalProducts(data.count);
		} catch (error) {
			toast.error((error as Error).message);
		}
	};

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
						label: `${catalogItem?.name}`,
						path: `${catalogItem?.slug}`,
					},
				]}
			/>
			<ProductFilters
				title={catalogItem?.name}
				subcategory={catalogItem?.subcategory}
				totalProducts={totalProducts}
			/>
			<CatalogProducts query={query} category={category} />
		</div>
	);
}
