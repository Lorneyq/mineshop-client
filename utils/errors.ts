import { HTTPStatus } from '@/constans';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const showAuthError = (error: unknown) => {
	const axiosError = error as AxiosError;

	if (axiosError.response) {
		if (axiosError.response.status === HTTPStatus.UNAUTHORIZED) {
			toast.error('Invalid email or password');
			return;
		}
	}

	toast.error((error as Error).message);
};
