import Link from 'next/link';
import styles from './ProductCard.module.scss';

import AddToCartButton from '@/components/ui/Cart/add-to-cart-button/AddToCartButton';
import AddToFavoritesButton from '@/components/ui/Favorites/add-to-favorites-button/AddToFavoritesButton';
import LoadText from '@/components/ui/LoadersAnimation/load-text/LoadText';
import Spinner from '@/components/ui/LoadersAnimation/spinner/Spinner';
import ProductMark from '@/components/ui/Product/product-mark/ProductMark';
import { IProducts } from '@/types/products';

export default function ProductCard({ products, spinner }: IProducts) {
	return (
		<>
			{spinner ? (
				[products?.length].map((item, index) => (
					<div className={styles.ProductCard} key={index}>
						<Spinner />
					</div>
				))
			) : products?.length ? (
				products.map(item => (
					<div className={styles.ProductCard} key={item.id}>
						<div className={styles.ProductCardTop}>
							<ProductMark
								mark={
									item.hit ? 'hit' : item.sale ? 'sale' : item.new ? 'new' : ''
								}
							/>
							<Link href={`/catalog/product/${item.id}`}>
								<div className={styles.ProductImage}>
									<img
										src={JSON.parse(item.images)[0]}
										alt={item.name}
										title={item.name}
									/>
								</div>
							</Link>
							<AddToFavoritesButton
								className={styles.favoriteButton}
								product={item}
							/>
							<AddToCartButton className={styles.cartButton} product={item} />
						</div>
						<div className={styles.ProductCardBottom}>
							<Link
								href={`/catalog/product/${item.id}`}
								className={styles.productName}
								title={item.name}
							>
								{item.name}
							</Link>
							<div className={styles.priceBox}>
								{item.old_price ? (
									<>
										<del
											className={styles.oldPrice}
											title={'$' + `${item.old_price}`}
										>
											${item.old_price}
										</del>
										<span
											className={styles.price}
											title={'$' + `${item.price}`}
										>
											${item.price}
										</span>
									</>
								) : (
									<span className={styles.price} title={'$' + `${item.price}`}>
										${item.price}
									</span>
								)}
							</div>
						</div>
					</div>
				))
			) : (
				<LoadText text="Loading" />
			)}
		</>
	);
}
