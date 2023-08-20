import { $cart, $totalPrice } from '@/context/cart';
import { useStore } from 'effector-react';
import { useCookies } from 'react-cookie';
import OrderItem from '../OrderItem/OrderItem';
import styles from './ListOrderItems.module.scss';

export default function ListOrderItems() {
	const cart = useStore($cart);
	const totalPrice = useStore($totalPrice);
	const [cookies, setCookie] = useCookies();

	return (
		<div className={styles.ListOrderItems}>
			<span className={styles.TotalProducts}>{cart.length} products</span>
			<ul className={styles.OrderList}>
				{cart.length ? (
					cart.map(item => <OrderItem key={item.id} item={item} />)
				) : (
					<li>
						<span className={styles.EmptyMessage}>
							To get started, fill out your shopping cart
						</span>
					</li>
				)}
			</ul>
			<div className={styles.OrderListBottom}>
				<div className={styles.AdditionalCosts}>
					<span className={styles.shipping}>
						shipping:{' '}
						<span className={styles.shippingValue}>
							{cookies.formData?.shippingPrice === 'Free'
								? '$0'
								: cookies.formData?.shippingPrice
								? cookies.formData.shippingPrice
								: '$0'}
						</span>
					</span>
					<span className={styles.discount}>
						discount:{' '}
						<span className={styles.discountValue}>
							{cookies.formData?.discountPrice || '$0'}
						</span>
					</span>
				</div>
				<div className={styles.TotalPrice}>
					Total: <span>${totalPrice}</span>
				</div>
			</div>
		</div>
	);
}
