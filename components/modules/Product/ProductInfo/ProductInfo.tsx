import StandardButton from '@/components/ui/Buttons/standard-button/StandardButton';
import CartItemCounter from '@/components/ui/Cart/cart-item-counter/CartItemCounter';
import AddToFavoritesButton from '@/components/ui/Favorites/add-to-favorites-button/AddToFavoritesButton';
import RatingStars from '@/components/ui/Product/rating-stars/RatingStars';
import { $cart, addToCart, removeCartItem } from '@/context/cart';
import { ICartItem } from '@/types/cart';
import { IProduct } from '@/types/products';
import { useStore } from 'effector-react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import PaymentInfo from '../PaymentInfo/PaymentInfo';
import ShippingInfo from '../ShippingInfo/ShippingInfo';
import styles from './ProductInfo.module.scss';

export default function ProductInfo({ product }: { product: IProduct }) {
	const cart = useStore($cart);
	const isInCart = cart.some(item => item.id === product.id);

	const handleAddToCart = () => {
		if (!isInCart) {
			addToCart(product as unknown as ICartItem);
		} else {
			removeCartItem(product.id);
		}
	};

	return (
		<div className={styles.ProductInfo}>
			<h1 className={styles.ProductName} title={product.name}>
				{product.name}
			</h1>
			<div className={styles.ProductSubinfo}>
				<span className={styles.Article}>Article: {product.vendor_code}</span>
				<RatingStars count={product.evaluation} />
			</div>
			{product.color && (
				<div className={styles.ProductColor}>
					Color:{' '}
					<div
						className={styles.colorBlock}
						style={{ backgroundColor: `${product.color}` }}
					></div>
				</div>
			)}
			{product.size && (
				<span className={styles.ProductSize}>
					Size: <div className={styles.sizeBlock}>{product.size}</div>
				</span>
			)}
			<div className={styles.ProductInteractive}>
				<div className={styles.Buttons}>
					{isInCart ? (
						cart.map(cartItem => {
							if (cartItem.id === product.id) {
								return (
									<CartItemCounter
										key={cartItem.id}
										cartItem={cartItem}
										className={styles.ItemCounter}
										removeAtNull
									/>
								);
							} else {
								return null;
							}
						})
					) : (
						<StandardButton onClick={handleAddToCart}>
							add to cart
						</StandardButton>
					)}
					<AddToFavoritesButton product={product} />
				</div>
				<div className={styles.ProductPriceBox}>
					{product.old_price ? (
						<>
							<del className={styles.oldProductPrice}>${product.old_price}</del>
							<span className={styles.ProductPrice}>${product.price}</span>
						</>
					) : (
						<span className={styles.ProductPrice}>${product.price}</span>
					)}
				</div>
			</div>
			<Tabs className={styles.InfoTabs}>
				<TabList className={styles.InfoTabList}>
					<Tab
						className={styles.InfoTab}
						selectedClassName={styles.SelectedInfoTab}
					>
						description
					</Tab>
					<Tab
						className={styles.InfoTab}
						selectedClassName={styles.SelectedInfoTab}
					>
						shipping
					</Tab>
					<Tab
						className={styles.InfoTab}
						selectedClassName={styles.SelectedInfoTab}
					>
						payment
					</Tab>
				</TabList>
				<TabPanel className={styles.InfoTabPanel}>
					<p className={styles.ProductDescription}>{product.description}</p>
				</TabPanel>
				<TabPanel>
					<ShippingInfo />
				</TabPanel>
				<TabPanel>
					<PaymentInfo />
				</TabPanel>
			</Tabs>
		</div>
	);
}
