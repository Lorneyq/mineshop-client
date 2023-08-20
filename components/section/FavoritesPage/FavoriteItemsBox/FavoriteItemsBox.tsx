import { getFavoriteItemsFx } from '@/api/favorites';
import FavoriteItem from '@/components/modules/Favorites/FavoriteItem/FavoriteItem';
import { $favorites, setFavorites } from '@/context/favorites';
import { $user } from '@/context/user';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import styles from './FavoriteItemsBox.module.scss';

export default function FavoriteItemsBox() {
	const user = useStore($user);
	const favorites = useStore($favorites);
	const isMobile768 = useMediaQuery(768);

	useEffect(() => {
		loadFavoriteItems();
	}, []);

	const loadFavoriteItems = async () => {
		try {
			const favoriteItems = await getFavoriteItemsFx(
				`/favorites/${user.userId}`,
			);

			setFavorites(favoriteItems);
		} catch (error) {
			toast.error((error as Error).message);
		}
	};

	return (
		<section className={styles.FavoriteItemsBox}>
			<ul className={styles.FavoriteItemList}>
				<div className={styles.ListTop}>
					<span>{favorites.length} products</span>
					{!isMobile768 && (
						<>
							<span>Category</span>
							<span>Price</span>
							<span>Delete</span>
						</>
					)}
				</div>
				{favorites.length ? (
					favorites.map(item => (
						<FavoriteItem key={item.productId} item={item} />
					))
				) : (
					<li>
						<span className={styles.EmptyMessage}>
							You have not added any items to your Favorites
						</span>
					</li>
				)}
			</ul>
		</section>
	);
}
