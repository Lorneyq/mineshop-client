import { $favorites } from '@/context/favorites';
import { $user } from '@/context/user';
import { IProduct } from '@/types/products';
import { toggleFavoriteItem } from '@/utils/favorites';
import { useStore } from 'effector-react';
import styles from './AddToFavoritesButton.module.scss';
import FilledHeart from './icons/FilledHeart';
import Heart from './icons/Heart';

export default function AddToFavoritesButton({
	className,
	product,
}: {
	className?: string;
	product: IProduct;
}) {
	const user = useStore($user);
	const favorites = useStore($favorites);
	const isInFavorites = favorites.some(
		favoriteItem => favoriteItem.productId === product.id,
	);

	const toggleToFavorites = () =>
		toggleFavoriteItem(user.username, product.id, isInFavorites);

	return (
		<button
			className={`${styles.AddToFavoritesButton} ${className ? className : ''}`}
			onClick={toggleToFavorites}
		>
			{isInFavorites ? <FilledHeart /> : <Heart />}
		</button>
	);
}
