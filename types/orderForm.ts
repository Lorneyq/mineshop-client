import {
	Control,
	FieldErrorsImpl,
	UseFormRegister,
	UseFormSetError,
} from 'react-hook-form';

export type OrderInputs = {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	country: string;
	city: string;
	fullAddress: string;
	postalCode: string;
	cardNumber: string;
	cardExpiry: string;
	cardCVC: string;
};

export interface IOrderInput {
	register: UseFormRegister<OrderInputs>;
	errors: Partial<FieldErrorsImpl<OrderInputs>>;
	setError?: UseFormSetError<OrderInputs>;
	control?: Control<OrderInputs>;
	className?: string;
}

export interface IOrderInputChange {
	field: string;
	value: string;
}

export type CountryType = {
	code: string;
	label: string;
};
