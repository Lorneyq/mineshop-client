'use client';
import { getFavoriteItemsFx } from '@/api/favorites';
import { $favorites, setFavorites } from '@/context/favorites';
import { $user } from '@/context/user';
import useUserCheck from '@/hooks/useUserCheck';
import { useStore } from 'effector-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import styles from './FavoritesButton.module.scss';
import FilledHeart from './icons/FilledHeart';
import Heart from './icons/Heart';

export default function FavoritesButton() {
	const user = useStore($user);
	const favorites = useStore($favorites);
	const { allowAccess } = useUserCheck();

	useEffect(() => {
		if (allowAccess) {
			loadFavoriteItems();
		}
	}, [allowAccess]);

	const loadFavoriteItems = async () => {
		try {
			const favoriteItems = await getFavoriteItemsFx(`/favorites/${user.id}`);

			setFavorites(favoriteItems);
		} catch (error) {
			toast.error((error as Error).message);
		}
	};

	return (
		<button className={styles.FavoritesButton}>
			<Link href="/favorites">
				{favorites.length ? (
					<div className={styles.IconBox}>
						<FilledHeart />
						<span className={styles.TotalItem}>
							{favorites.length > 99 ? '(99+)' : `(${favorites.length})`}
						</span>
					</div>
				) : (
					<Heart />
				)}
			</Link>
		</button>
	);
}
