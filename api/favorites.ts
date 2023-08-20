import { IAddToFavoritesFx } from '@/types/favorites';
import { createEffect } from 'effector-next';
import api from './axiosClient';

export const getFavoriteItemsFx = createEffect(async (url: string) => {
	const { data } = await api.get(url);

	return data;
});

export const addToFavoritesFx = createEffect(
	async ({ url, username, productId }: IAddToFavoritesFx) => {
		const { data } = await api.post(url, { username, productId });

		return data;
	},
);

export const removeFromFavoritesFx = createEffect(async (url: string) => {
	await api.delete(url);
});
