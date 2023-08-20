import { addToFavoritesFx, removeFromFavoritesFx } from '@/api/favorites';
import { removeFavoriteItem, updateFavorites } from '@/context/favorites';
import { toast } from 'react-toastify';

export const toggleFavoriteItem = async (
	username: string,
	productId: number,
	isInFavorites: boolean,
) => {
	try {
		if (isInFavorites) {
			await removeFromFavoritesFx(`/favorites/one/${productId}`);
			removeFavoriteItem(productId);
			return;
		}

		const data = await addToFavoritesFx({
			url: '/favorites/add',
			username,
			productId,
		});

		updateFavorites(data);
	} catch (error) {
		toast.warning('Log in to your account to perform this action');
	}
};

export const removeItemFromFavorites = async (productId: number) => {
	try {
		await removeFromFavoritesFx(`/favorites/one/${productId}`);
		removeFavoriteItem(productId);
	} catch (error) {
		toast.error((error as Error).message);
	}
};
