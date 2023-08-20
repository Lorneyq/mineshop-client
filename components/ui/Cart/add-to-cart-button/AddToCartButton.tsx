import { $cart, addToCart, removeCartItem } from '@/context/cart';
import { ICartItem } from '@/types/cart';
import { IProduct } from '@/types/products';
import { useStore } from 'effector-react';
import styles from './AddToCartButton.module.scss';
import Cart from './icons/Cart';
import FilledCart from './icons/FilledCart';

export default function AddToCartButton({
	className,
	product,
}: {
	className?: string;
	product: IProduct;
}) {
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
		<button
			className={`${styles.AddToCartButton} ${className}`}
			onClick={handleAddToCart}
		>
			{isInCart ? <FilledCart /> : <Cart />}
		</button>
	);
}
