import RemoveFromFavoritesButton from '@/components/ui/Favorites/remove-from-favorites-button/RemoveFromFavoritesButton';
import { IFavoriteItem } from '@/types/favorites';
import Link from 'next/link';
import styles from './FavoriteItem.module.scss';

export default function FavoriteItem({ item }: { item: IFavoriteItem }) {
	return (
		<li className={styles.FavoriteItem}>
			<Link
				className={styles.ItemImage}
				href={`/catalog/product/${item.productId}`}
			>
				<img src={item.image} alt={item.name} />
			</Link>
			<Link
				className={styles.ItemName}
				href={`/catalog/product/${item.productId}`}
			>
				<span>{item.name}</span>
			</Link>
			<span className={styles.ItemCategory}>{item.category}</span>
			<span className={styles.ItemPrice}>${item.price}</span>
			<RemoveFromFavoritesButton item={item} />
		</li>
	);
}
