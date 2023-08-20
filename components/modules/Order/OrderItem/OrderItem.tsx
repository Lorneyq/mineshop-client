import RemoveFromCartButton from '@/components/ui/Cart/remove-from-cart-button/RemoveFromCartButton';
import { ICartItem } from '@/types/cart';
import Link from 'next/link';
import styles from './OrderItem.module.scss';

export default function OrderItem({ item }: { item: ICartItem }) {
	return (
		<li className={styles.OrderItem}>
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
					{item.count && (
						<div className={styles.ItemQuantity}>
							<span className={styles.ItemQuantityLabel}>quantity:</span>
							<div className={styles.ItemQuantitySquare}>{item.count}</div>
						</div>
					)}
				</div>
			</div>
			<span className={styles.ItemPrice}>${item.price}</span>
			<RemoveFromCartButton
				cartItemId={item.id}
				className={styles.RemoveButton}
				isCross
			/>
		</li>
	);
}
