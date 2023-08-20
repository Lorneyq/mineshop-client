'use client';
import EmailInput from '@/components/ui/FeedbackForm/EmailInput';
import MessageInput from '@/components/ui/FeedbackForm/MessageInput';
import NameInput from '@/components/ui/FeedbackForm/NameInput';
import PhoneNumberInput from '@/components/ui/FeedbackForm/PhoneNumberInput';
import SubmitButton from '@/components/ui/FeedbackForm/SubmitButton';
import { FeedbackInputs } from '@/types/feedbackForm';
import emailjs from '@emailjs/browser';
import { MutableRefObject, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import styles from './FeedbackForm.module.scss';

export default function FeedbackForm() {
	const {
		register,
		handleSubmit,
		control,
		setError,
		reset,
		formState: { errors },
	} = useForm<FeedbackInputs>();
	const formRef = useRef() as MutableRefObject<HTMLFormElement>;

	const submitForm = (data: FeedbackInputs) => {
		const { name, email, message, phone } = data;

		const templateParams = {
			name: name,
			email: email,
			message: message,
			phone: phone,
		};
		emailjs
			.send(
				'service_jtvs31q',
				'template_q35uczm',
				templateParams,
				'DiEUTE5YO_DU_uYLq',
			)
			.then(result => {
				toast.success('Message sent');
			})
			.catch(error => {
				toast.error('Something went wrong');
			});

		reset();
	};

	return (
		<div className={styles.Box}>
			<h2 className={styles.Title}>Feedback form</h2>
			<form
				className={styles.FeedbackForm}
				onSubmit={handleSubmit(submitForm)}
				ref={formRef}
			>
				<NameInput register={register} errors={errors} />
				<PhoneNumberInput
					register={register}
					errors={errors}
					control={control}
				/>
				<EmailInput register={register} errors={errors} />
				<MessageInput register={register} errors={errors} />
				<SubmitButton name="Send a message" />
			</form>
		</div>
	);
}
