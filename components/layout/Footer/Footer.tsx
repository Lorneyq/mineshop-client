'use client';
import EmailSubscription from '@/components/modules/Footer/EmailSubscription/EmailSubscription';
import FooterMobile from '@/components/modules/Footer/FooterMobile/FooterMobile';
import Copyright from '@/components/ui/copyright/Copyright';
import Logo from '@/components/ui/logo/Logo';
import { contacts } from '@/data/contacts';
import { pages } from '@/data/pages';
import { socialNetwork } from '@/data/socialNetwork';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
	const isMobile1024 = useMediaQuery(1024);

	return (
		<footer className={styles.Footer}>
			<div className="container">
				{!isMobile1024 ? (
					<div className={styles.FooterInner}>
						<div>
							<Logo />
							<EmailSubscription
								labelText="Subscribe for exclusive access to news and get a 10% discount"
								color="white"
							/>
							<div className={styles.FooterCopy}>
								<Copyright />
							</div>
						</div>
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
				) : (
					<FooterMobile />
				)}
			</div>
		</footer>
	);
}
