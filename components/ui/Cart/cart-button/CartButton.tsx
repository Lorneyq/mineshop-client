'use client ';
import CartPopup from '@/components/modules/Cart/CartPopup/CartPopup';
import { $cart } from '@/context/cart';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useStore } from 'effector-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './CartButton.module.scss';
import Cart from './icons/Cart';
import FilledCart from './icons/FilledCart';

export default function CartButton() {
	const cart = useStore($cart);
	const [show, setShow] = useState(false);
	const cartButtonRef = useRef<HTMLDivElement>(null);
	const isMobile1024 = useMediaQuery(1024);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				cartButtonRef.current &&
				!cartButtonRef.current.contains(event.target as Node)
			) {
				setShow(false);
			}
		};

		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	const handleShowPopup = () => {
		setShow(!show);
	};

	return (
		<div className={styles.CartButtonBox} ref={cartButtonRef}>
			<div className={styles.IconBox}>
				{!isMobile1024 ? (
					<button className={styles.CartButton} onClick={handleShowPopup}>
						{cart.length ? <FilledCart /> : <Cart />}
					</button>
				) : (
					<button className={styles.CartButton}>
						{cart.length ? (
							<Link href="/cart">
								<FilledCart />
							</Link>
						) : (
							<Cart />
						)}
					</button>
				)}
				<span className={styles.TotalItem}>
					{!cart.length ? '' : cart.length > 99 ? '(99+)' : `(${cart.length})`}
				</span>
			</div>
			<CartPopup show={show} />
		</div>
	);
}
