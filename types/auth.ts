import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';

export interface IInputs {
	name: string;
	email: string;
	password: string;
	warningReason?: string;
}

export interface IButton {
	name: string;
}

export interface IAuthModuleInput {
	register: UseFormRegister<IInputs>;
	errors: FieldErrors<IInputs>;
	control?: Control<IInputs>;
}

export interface IAuthModuleProps {
	setShow: (show: boolean) => void | boolean;
}

export interface ISignUpFx {
	url: string;
	username: string;
	email: string;
	password: string;
}

export interface ISignInFx {
	url: string;
	email: string;
	password: string;
}

export interface IUser {
	username: string;
	id: number | string;
	email: string;
}
