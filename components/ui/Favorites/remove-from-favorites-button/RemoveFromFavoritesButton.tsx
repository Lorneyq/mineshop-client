import { useMediaQuery } from '@/hooks/useMediaQuery';
import { IFavoriteItem } from '@/types/favorites';
import { removeItemFromFavorites } from '@/utils/favorites';
import CrossIcon from './icons/CrossIcon';
import FilledHeart from './icons/FilledHeart';
import styles from './RemoveFromFavoritesButton.module.scss';

export default function RemoveFromFavoritesButton({
	item,
}: {
	item: IFavoriteItem;
}) {
	const deleteFavoriteItem = () => removeItemFromFavorites(item.productId);
	const isMobile768 = useMediaQuery(768);

	return (
		<button
			className={styles.RemoveFromFavoritesButton}
			onClick={deleteFavoriteItem}
		>
			{!isMobile768 ? <FilledHeart /> : <CrossIcon />}
		</button>
	);
}
