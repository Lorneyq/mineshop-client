'use client';
import { getProductFx } from '@/api/products';
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs';
import ProductSection from '@/components/section/ProductPage/ProductSection/ProductSection';
import RecommendedProducts from '@/components/section/ProductPage/RecommendedProducts/RecommendedProducts';
import { $product, setProduct } from '@/context/product';
import { catalog } from '@/data/catalog';
import { useStore } from 'effector-react';
import { useRouter } from 'next/navigation';
import queryString from 'query-string';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function ProductPage() {
	const product = useStore($product);
	const router = useRouter();

	const catalogItem = catalog.find(item => item.name === product.category);

	useEffect(() => {
		const parsedQuery = queryString.parse(
			location.pathname.split('product/')[1]
		);
		const productId = parseInt(Object.keys(parsedQuery)[0]);

		loadProduct(productId);
	}, []);

	const loadProduct = async (productId: number) => {
		try {
			const data = await getProductFx(`/products/find/${productId}`);

			if (data) {
				setProduct(data);
			} else {
				router.push('/');
				toast.error('No such product exists');
			}
		} catch (error) {
			toast.error((error as Error).message);
		}
	};
	return (
		<>
			<title>{`${product.name} | Mineshop`}</title>
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
							label: `${product?.category}`,
							path: `/catalog/${catalogItem?.slug}`,
						},
						{
							label: `${product?.name}`,
							path: `/catalog/product/${product?.id}`,
						},
					]}
				/>
				<ProductSection product={product} />
				<RecommendedProducts currentProduct={product} />
			</div>
		</>
	);
}
