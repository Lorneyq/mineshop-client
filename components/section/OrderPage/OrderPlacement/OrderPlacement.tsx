import ListOrderItems from '@/components/modules/Order/ListOrderItems/ListOrderItems';
import OrderFilling from '@/components/modules/Order/OrderFilling/OrderFilling';
import styles from './OrderPlacement.module.scss';

export default function OrderPlacement() {
	return (
		<div className={styles.OrderPlacement}>
			<OrderFilling />
			<ListOrderItems />
		</div>
	);
}
