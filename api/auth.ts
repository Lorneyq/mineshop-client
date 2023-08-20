import { HTTPStatus } from '@/constans';
import { AxiosError } from 'axios';
import { createEffect } from 'effector-next';
import { toast } from 'react-toastify';
import { ISignInFx, ISignUpFx } from './../types/auth';
import api from './axiosClient';

export const signUpFx = createEffect(
	async ({ url, username, password, email }: ISignUpFx) => {
		const { data } = await api.post(url, { username, password, email });

		if (data.warningMessage) {
			toast.warning(data.warningMessage);
			return;
		}

		toast.success('Registration was successful');

		return data;
	},
);

export const signInFx = createEffect(
	async ({ url, password, email }: ISignInFx) => {
		const { data } = await api.post(url, { email, password });

		if (data.warningMessage) {
			toast.warning(data.warningMessage);
			return;
		}

		toast.success('The input is accomplished');

		return data;
	},
);

export const checkUserAuthFx = createEffect(async (url: string) => {
	try {
		const { data } = await api.get(url);

		return data;
	} catch (error) {
		const axiosError = error as AxiosError;

		if (axiosError.response) {
			if (axiosError.response.status === HTTPStatus.FORBIDDEN) {
				return false;
			}
		}

		toast.error((error as Error).message);
	}
});

export const logoutFx = createEffect(async (url: string) => {
	try {
		await api.get(url);
	} catch (error) {
		toast.error((error as Error).message);
	}
});
