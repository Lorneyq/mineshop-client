import MobileProductSearch from '@/components/modules/Header/MobileProductSearch/MobileProductSearch';
import HeaderCloseButton from '@/components/ui/Buttons/header-close-button/HeaderCloseButton';
import UserButton from '@/components/ui/Buttons/user-button/UserButton';
import Cart from '@/components/ui/Cart/cart-button/icons/Cart';
import FavoritesButton from '@/components/ui/Favorites/favorites-button/FavoritesButton';
import { pages } from '@/data/pages';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './HeaderMobileMenu.module.scss';

export default function HeaderMobileMenu() {
	const [show, setShow] = useState(false);
	const [isCartButtonLoaded, setIsCartButtonLoaded] = useState(false);

	const handleShowMenu = () => {
		setShow(!show);
	};

	const CartButton: React.ComponentType<{}> = dynamic<{}>(
		() => import('@/components/ui/Cart/cart-button/CartButton'),
		{ ssr: false },
	);

	useEffect(() => {
		setIsCartButtonLoaded(true);
	}, []);

	return (
		<div>
			<button className={styles.HeaderMenuButton} onClick={handleShowMenu}>
				<span></span>
				<span></span>
			</button>
			<AnimatePresence>
				{show && (
					<motion.div
						className={styles.HeaderMobileMenu}
						initial={{ x: '100%' }}
						animate={{ x: show ? 0 : '100%' }}
						exit={{ x: '100%' }}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}
					>
						<HeaderCloseButton closeMenu={handleShowMenu} />
						<div className={styles.HeaderMenuInner}>
							<div className={styles.MenuHead}>
								<MobileProductSearch />
							</div>
							<div className={styles.MenuMain}>
								<nav className={styles.navbar}>
									<ul>
										{pages.map(page => (
											<li key={page.slug}>
												<Link href={`${page.slug}`}>{page.name}</Link>
											</li>
										))}
									</ul>
								</nav>
							</div>
							<div className={styles.MenuFooter}>
								<div className={styles.buttons}>
									<UserButton />
									<FavoritesButton />
									<div className="w-7">
										{isCartButtonLoaded ? <CartButton /> : <Cart />}
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
