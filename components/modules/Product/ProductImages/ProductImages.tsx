import ProductImageList from '@/components/ui/Product/product-image-list/ProductImageList';
import ProductMainImage from '@/components/ui/Product/product-main-image/ProductMainImage';
import { IProduct } from '@/types/products';
import { useState } from 'react';
import styles from './ProductImages.module.scss';

export default function ProductImages({ product }: { product: IProduct }) {
	const images = product.images ? (JSON.parse(product.images) as string[]) : [];
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className={styles.ProductImages}>
			<ProductMainImage images={images} activeIndex={activeIndex} />
			<ProductImageList images={images} setActiveIndex={setActiveIndex} />
		</div>
	);
}
