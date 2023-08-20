import { signUpFx } from '@/api/auth';
import EmailInput from '@/components/ui/AuthModule/EmailInput';
import NameInput from '@/components/ui/AuthModule/NameInput';
import PasswordInput from '@/components/ui/AuthModule/PasswordInput';
import SubmitButton from '@/components/ui/AuthModule/SubmitButton';
import { IInputs } from '@/types/auth';
import { showAuthError } from '@/utils/errors';
import { useForm } from 'react-hook-form';
import styles from '../AuthModule.module.scss';

export default function SignUpForm({ switchForm }: { switchForm: () => void }) {
	const {
		register,
		formState: { errors },
		handleSubmit,
		resetField,
		control,
	} = useForm<IInputs>();

	const onSubmit = async (data: IInputs) => {
		try {
			const response = await signUpFx({
				url: '/users/signup',
				username: data.name,
				password: data.password,
				email: data.email,
			});
			if ('warningReason' in response) {
				if (response.warningReason === 'email') {
					resetField('email');
				} else if (response.warningReason === 'username') {
					resetField('name');
				}
			} else {
				resetField('email');
				resetField('name');
				resetField('password');
				switchForm();
			}
		} catch (error) {
			showAuthError(error);
		}
	};

	return (
		<form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
			<NameInput register={register} errors={errors} />
			<EmailInput register={register} errors={errors} />
			<PasswordInput register={register} errors={errors} control={control} />
			<SubmitButton name="Sign Up" />
		</form>
	);
}
