import { signInFx } from '@/api/auth';
import EmailInput from '@/components/ui/AuthModule/EmailInput';
import PasswordInput from '@/components/ui/AuthModule/PasswordInput';
import SubmitButton from '@/components/ui/AuthModule/SubmitButton';
import { IAuthModuleProps, IInputs } from '@/types/auth';
import { showAuthError } from '@/utils/errors';
import { useForm } from 'react-hook-form';
import styles from '../AuthModule.module.scss';

export default function SignInForm({ setShow }: IAuthModuleProps) {
	const {
		register,
		formState: { errors },
		handleSubmit,
		resetField,
		control,
		watch,
	} = useForm<IInputs>();

	const onSubmit = async (data: IInputs) => {
		try {
			await signInFx({
				url: '/users/login',
				email: data.email,
				password: data.password,
			});
			resetField('email');
			resetField('password');
			setShow(false);
			location.reload();
		} catch (error) {
			showAuthError(error);
		}
	};

	return (
		<form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
			<EmailInput register={register} errors={errors} />
			<PasswordInput register={register} errors={errors} control={control} />
			<SubmitButton name="Sign In" />
		</form>
	);
}
