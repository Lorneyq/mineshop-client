import Link from 'next/link';
import styles from './ShippingInfo.module.scss';

export default function ShippingInfo() {
	return (
		<div className={styles.ShippingInfo}>
			<p>
				Mineshop delivers its products worldwide<b>*</b> by such delivery means
				as:{' '}
				<Link href="https://www.dhl.com/" className={styles.ShippingInfoItem}>
					DHL Express,
				</Link>{' '}
				<Link href="https://www.fedex.com/" className={styles.ShippingInfoItem}>
					FedEx,
				</Link>{' '}
				<Link
					href="https://www.royalmail.com/"
					className={styles.ShippingInfoItem}
				>
					Royal Mail,
				</Link>{' '}
				<Link
					href="https://www.postnl.post/"
					className={styles.ShippingInfoItem}
				>
					PostNL,
				</Link>{' '}
				etc. Standard shipping is completely free and delivered in 6-12 days.
				You can also choose fast shipping on the payment page, which will
				deliver the ordered goods in 2-3 days. The cost of such service is $10.
			</p>
			<p>
				<i>*We do not deliver to countries that are under US sanctions.</i>
			</p>
		</div>
	);
}
