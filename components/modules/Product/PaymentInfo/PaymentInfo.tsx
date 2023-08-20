import Image from 'next/image';
import styles from './PaymentInfo.module.scss';

import AE from './images/american-express.png';
import JCB from './images/jcb.png';
import Mastercard from './images/mastercard.png';
import UP from './images/union-pay.png';
import Visa from './images/visa.png';

export default function PaymentInfo() {
	return (
		<div className={styles.PaymentImages}>
			<Image
				className={styles.PaymentImage}
				src={Visa}
				alt="Visa"
				title="Visa"
				width={0}
				height={0}
			/>
			<Image
				className={styles.PaymentImage}
				src={Mastercard}
				alt="Mastercard"
				title="Mastercard"
				width={0}
				height={0}
			/>
			<Image
				className={styles.PaymentImage}
				src={UP}
				alt="Union Pay"
				title="Union Pay"
				width={0}
				height={0}
			/>
			<Image
				className={styles.PaymentImage}
				src={JCB}
				alt="JCB"
				title="JCB"
				width={0}
				height={0}
			/>
			<Image
				className={styles.PaymentImage}
				src={AE}
				alt="American Express"
				title="American Express"
				width={0}
				height={0}
			/>
		</div>
	);
}
