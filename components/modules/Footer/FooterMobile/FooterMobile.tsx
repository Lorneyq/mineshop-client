import Copyright from '@/components/ui/copyright/Copyright';
import Logo from '@/components/ui/logo/Logo';
import { contacts } from '@/data/contacts';
import { pages } from '@/data/pages';
import { socialNetwork } from '@/data/socialNetwork';
import Link from 'next/link';
import styles from './FooterMobile.module.scss';

export default function FooterMobile() {
	return (
		<div className={styles.FooterInner}>
			<div className={styles.FooterHead}>
				<Logo />
			</div>
			<div className={styles.FooterMain}>
				<nav className={styles.navbar}>
					<ul className={styles.menuList}>
						<span>Menu</span>
						{pages.map(page => (
							<li key={page.slug}>
								<Link href={`${page.slug}`}>{page.name}</Link>
							</li>
						))}
					</ul>
				</nav>
				<ul className={styles.contactsList}>
					<span>Contacts</span>
					{contacts.map(contact => (
						<li key={contact.name}>
							<Link href={`${contact.slug}`}>{contact.name}</Link>
						</li>
					))}
				</ul>
				<ul className={styles.socialNetworkList}>
					<span>Social network</span>
					{socialNetwork.map(item => (
						<li key={item.name}>
							<Link href={`${item.slug}`}>{item.name}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.FooterBottom}>
				<Copyright />
			</div>
		</div>
	);
}
