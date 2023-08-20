import {
	Control,
	FieldErrorsImpl,
	UseFormRegister,
	UseFormSetError,
} from 'react-hook-form';

export type FeedbackInputs = {
	name: string;
	phone: string;
	email: string;
	message: string;
};

export interface IFeedbackInput {
	register: UseFormRegister<FeedbackInputs>;
	errors: Partial<FieldErrorsImpl<FeedbackInputs>>;
	setError?: UseFormSetError<FeedbackInputs>;
	control?: Control<FeedbackInputs>;
}
