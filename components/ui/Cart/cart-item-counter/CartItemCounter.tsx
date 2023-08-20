import {
	decreaseCartItem,
	increaseCartItem,
	removeCartItem,
} from '@/context/cart';
import { ICartItem } from '@/types/cart';
import styles from './CartItemCounter.module.scss';

export default function CartItemCounter({
	cartItem,
	className,
	removeAtNull,
}: {
	cartItem: ICartItem;
	className?: string;
	removeAtNull?: boolean;
}) {
	return (
		<div className={`${className ? className : ''}`}>
			<button
				className={styles.DecreaseButton}
				onClick={() => {
					if (removeAtNull) {
						if (cartItem.count === 1) {
							removeCartItem(cartItem.id);
						} else {
							decreaseCartItem(cartItem.id);
						}
					} else {
						decreaseCartItem(cartItem.id);
					}
				}}
			>
				-
			</button>
			<span className={styles.CartItemCount}>{cartItem.count}</span>
			<button
				className={styles.IncreaseButton}
				onClick={() => increaseCartItem(cartItem.id)}
			>
				+
			</button>
		</div>
	);
}
