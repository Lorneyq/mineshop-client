import CartItemCounter from '@/components/ui/Cart/cart-item-counter/CartItemCounter';
import RemoveFromCartButton from '@/components/ui/Cart/remove-from-cart-button/RemoveFromCartButton';
import { ICartItem } from '@/types/cart';
import Link from 'next/link';
import styles from './CartItem.module.scss';

export default function CartItem({ item }: { item: ICartItem }) {
	return (
		<li className={styles.CartItem}>
			<Link className={styles.ItemImage} href={`/catalog/product/${item.id}`}>
				<img src={JSON.parse(item.images)[0]} alt={item.name} />
			</Link>
			<div className={styles.ItemMainInfo}>
				<Link
					className={styles.ItemName}
					href={`/catalog/product/${item.id}`}
					title={item.name}
				>
					<span>{item.name}</span>
				</Link>
				<div className={styles.ItemFeatures}>
					{item.color && (
						<div className={styles.ItemColor}>
							<span className={styles.ItemColorLabel}>color:</span>
							<div
								className={styles.ItemColorSquare}
								style={{ backgroundColor: item.color }}
							></div>
						</div>
					)}
					{item.size && (
						<div className={styles.ItemSize}>
							<span className={styles.ItemSizeLabel}>size:</span>
							<div className={styles.ItemSizeSquare}>{item.size}</div>
						</div>
					)}
				</div>
			</div>
			<CartItemCounter cartItem={item} className={styles.ItemCounter} />
			<span className={styles.ItemPrice}>${item.price}</span>
			<RemoveFromCartButton
				cartItemId={item.id}
				className={styles.RemoveButton}
			/>
		</li>
	);
}
