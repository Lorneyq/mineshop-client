import SectionTitle from '@/components/ui/Titles/section-title/SectionTitle';
import { contacts } from '@/data/contacts';
import { socialNetwork } from '@/data/socialNetwork';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Contacts.module.scss';
import ContactsImage from './images/ContactsImage.jpg';

export default function Contacts() {
	return (
		<section className={styles.Contacts}>
			<div className="container">
				<SectionTitle>contacts</SectionTitle>
				<div className={styles.ContactsInner}>
					<ul className={styles.InfoBox}>
						{contacts.map(contact => (
							<li key={contact.name}>
								<Link href={contact.slug}>{contact.name}</Link>
							</li>
						))}
						{socialNetwork.map(item => (
							<li key={item.name}>
								<Link href={item.slug}>
									{item.short_name}: {item.username}
								</Link>
							</li>
						))}
					</ul>
					<Image
						className={styles.ContactsImage}
						src={ContactsImage}
						alt="The player dances in a flat world"
						width={0}
						height={0}
						draggable={false}
					/>
				</div>
			</div>
		</section>
	);
}
