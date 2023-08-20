'use client';
import ProductSearch from '@/components/modules/Header/ProductSearch/ProductSearch';
import HeaderMobileMenu from '@/components/ui/Buttons/header-mobile-menu/HeaderMobileMenu';
import UserButton from '@/components/ui/Buttons/user-button/UserButton';
import Cart from '@/components/ui/Cart/cart-button/icons/Cart';
import FavoritesButton from '@/components/ui/Favorites/favorites-button/FavoritesButton';
import Logo from '@/components/ui/logo/Logo';
import { pages } from '@/data/pages';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';

const CartButton = dynamic(
	() => import('@/components/ui/Cart/cart-button/CartButton'),
	{ ssr: false },
);

export default function Header() {
	const [isCartButtonLoaded, setIsCartButtonLoaded] = useState(false);
	const isMobile1024 = useMediaQuery(1024);

	useEffect(() => {
		setIsCartButtonLoaded(true);
	}, []);

	return (
		<header className={`${styles.Header}`}>
			<div className="container">
				<div className={styles.HeaderInner}>
					<Logo />
					{!isMobile1024 ? (
						<>
							<nav className={styles.navbar}>
								<ul>
									{pages.map(page => (
										<li key={page.slug}>
											<Link href={`${page.slug}`}>{page.name}</Link>
										</li>
									))}
								</ul>
							</nav>
							<div className={styles.buttons}>
								<UserButton />
								<ProductSearch />
								<FavoritesButton />
								<div className="w-5 mr-10">
									{isCartButtonLoaded ? <CartButton /> : <Cart />}
								</div>
							</div>
						</>
					) : (
						<HeaderMobileMenu />
					)}
				</div>
			</div>
		</header>
	);
}
