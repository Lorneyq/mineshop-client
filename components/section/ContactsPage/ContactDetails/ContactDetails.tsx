import { contacts } from '@/data/contacts';
import { socialNetwork } from '@/data/socialNetwork';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ContactDetails.module.scss';

import qrCodeImage from './images/qr-code.png';

export default function ContactDetails() {
	return (
		<div className={styles.ContactDetails}>
			<h2 className={styles.Title}>Contact us</h2>
			<ul className={styles.InfoBox}>
				{contacts.map(contact => (
					<li key={contact.name}>
						<Link href={`contact.slug`}>{contact.name}</Link>
					</li>
				))}
				{socialNetwork.map(item => (
					<li key={item.name}>
						<Link href={`item.slug`}>
							{item.short_name}: {item.username}
						</Link>
					</li>
				))}
			</ul>
			<Image
				src={qrCodeImage}
				alt="qr code"
				width={300}
				height={300}
				draggable={false}
			/>
		</div>
	);
}
