import { IFavoriteItem } from '@/types/favorites';
import { createDomain } from 'effector-next';
const favorites = createDomain();

export const setFavorites = favorites.createEvent<IFavoriteItem[]>();
export const updateFavorites = favorites.createEvent<IFavoriteItem>();
export const removeFavoriteItem = favorites.createEvent<number>();

const remove = (favoriteItems: IFavoriteItem[], productId: number) =>
	favoriteItems.filter(item => item.productId !== productId);

export const $favorites = favorites
	.createStore<IFavoriteItem[]>([])
	.on(setFavorites, (_, favorites) => favorites)
	.on(updateFavorites, (state, favoriteItem) => [...state, favoriteItem])
	.on(removeFavoriteItem, (state, productId) => [...remove(state, productId)]);
