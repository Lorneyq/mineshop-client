import StandardButton from '@/components/ui/Buttons/standard-button/StandardButton';
import CartItemCounter from '@/components/ui/Cart/cart-item-counter/CartItemCounter';
import RemoveFromCartButton from '@/components/ui/Cart/remove-from-cart-button/RemoveFromCartButton';
import { $cart, $totalPrice } from '@/context/cart';
import { useStore } from 'effector-react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import styles from './CartPopup.module.scss';

export default function CartPopup({ show }: { show: boolean }) {
	const cart = useStore($cart);
	const totalPrice = useStore($totalPrice);

	return (
		<AnimatePresence>
			{show && (
				<motion.ul
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
					style={{ transformOrigin: 'right top' }}
				>
					<div className={styles.CartPopup}>
						<h4 className={styles.Title}>Shopping Cart</h4>
						<ul className={styles.CartItemList}>
							{cart.length ? (
								cart.map(cartItem => (
									<li key={cartItem.id} className={styles.CartItem}>
										<div className={styles.CartItemTop}>
											<Link href={`${`/catalog/product/${cartItem.id}`}`}>
												<img
													className={styles.CartItemImage}
													src={JSON.parse(cartItem.images)[0]}
													alt={cartItem.name}
												/>
											</Link>
											<Link href={`${`/catalog/product/${cartItem.id}`}`}>
												<span
													className={styles.CartItemName}
													title={cartItem.name}
												>
													{cartItem.name}
												</span>
											</Link>
											<RemoveFromCartButton
												cartItemId={cartItem.id}
												isCross
												className={styles.RemoveButton}
											/>
										</div>
										<div className={styles.CartItemBottom}>
											{cartItem.in_stock === 0 ? (
												<span className={styles.EmptyText}>out of stock</span>
											) : (
												<CartItemCounter
													cartItem={cartItem}
													className={styles.ItemCounter}
												/>
											)}
											<span className={styles.CartItemPrice}>
												${cartItem.price}
											</span>
										</div>
									</li>
								))
							) : (
								<li>
									<span>Cart is empty</span>
								</li>
							)}
						</ul>
						<div className={styles.TotalPrice}>
							Total price: <span>${totalPrice}</span>
						</div>
						{cart.length ? (
							<StandardButton className={styles.CheckoutButton}>
								<Link href="/cart">checkout</Link>
							</StandardButton>
						) : (
							<StandardButton className={styles.DisabledCheckoutButton}>
								checkout
							</StandardButton>
						)}
					</div>
				</motion.ul>
			)}
		</AnimatePresence>
	);
}
