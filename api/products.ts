import { createEffect } from 'effector-next';
import { toast } from 'react-toastify';
import api from './axiosClient';

export const getHitItemsFx = createEffect(async (url: string) => {
	const { data } = await api.get(url);

	return data;
});

export const getNewItemsFx = createEffect(async (url: string) => {
	const { data } = await api.get(url);

	return data;
});

export const getSaleItemsFx = createEffect(async (url: string) => {
	const { data } = await api.get(url);

	return data;
});

export const getAllProductsFx = createEffect(async (url: string) => {
	const { data } = await api.get(url);

	return data;
});

export const getProductFx = createEffect(async (url: string) => {
	const { data } = await api.get(url);

	return data;
});

export const searchProductsFx = createEffect(
	async ({ url, search }: { url: string; search: string }) => {
		const { data } = await api.post(url, { search });

		return data.rows;
	},
);

export const getProductByNameFx = createEffect(
	async ({ url, name }: { url: string; name: string }) => {
		try {
			const { data } = await api.post(url, { name });

			return data;
		} catch (error) {
			toast.error((error as Error).message);
		}
	},
);

export const getProductByCategoryFx = createEffect(
	async ({ url, category }: { url: string; category: string | undefined }) => {
		try {
			const { data } = await api.post(url, { category });

			return data;
		} catch (error) {
			toast.error((error as Error).message);
		}
	},
);
