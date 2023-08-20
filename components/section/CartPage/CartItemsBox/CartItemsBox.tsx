import CartItem from '@/components/modules/Cart/CartItem/CartItem';
import { EnterPromocode } from '@/components/modules/Cart/EnterPromocode/EnterPromocode';
import StandardButton from '@/components/ui/Buttons/standard-button/StandardButton';
import { $cart, $totalPrice } from '@/context/cart';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useStore } from 'effector-react';
import Link from 'next/link';
import styles from './CartItemsBox.module.scss';

export default function CartItemsBox() {
	const cart = useStore($cart);
	const totalPrice = useStore($totalPrice);
	const isMobile768 = useMediaQuery(768);

	return (
		<section className={styles.CartItemsBox}>
			<ul className={styles.CartItemList}>
				<div className={styles.BoxTop}>
					<span>{cart.length} products</span>
					{!isMobile768 && (
						<>
							<span>Quantity</span>
							<span>Price</span>
							<span>Delete</span>
						</>
					)}
				</div>
				{cart.length ? (
					cart.map(item => <CartItem key={item.id} item={item} />)
				) : (
					<li>
						<span className={styles.EmptyMessage}>Cart is empty</span>
					</li>
				)}
			</ul>
			<div className={styles.CartItemsBoxBottom}>
				<EnterPromocode />
				<div className={styles.Checkout}>
					<div className={styles.TotalPrice}>
						Total: <span>${totalPrice}</span>
					</div>
					{cart.length ? (
						<StandardButton>
							<Link href="/cart/order">checkout</Link>
						</StandardButton>
					) : (
						<StandardButton className="!bg-[#939393] cursor-not-allowed">
							checkout
						</StandardButton>
					)}
				</div>
			</div>
		</section>
	);
}
