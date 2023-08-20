import { ISendingInputProps } from '@/types/sendingInput';
import SendButtonIcon from './icons/SendButtonIcon';
import styles from './SendingInput.module.scss';

export default function SendingInput({
	onSubmit,
	labelText,
	type,
	value,
	onChange,
	placeholder,
	nameInput,
	color,
	className,
	maxLength,
}: ISendingInputProps) {
	return (
		<form
			className={`${styles.SendingInput} ${className ? className : ''}`}
			onSubmit={onSubmit}
		>
			<label htmlFor={nameInput}>{labelText}</label>
			<input
				type={type}
				value={value}
				onChange={onChange}
				maxLength={maxLength}
				name={nameInput}
				id={nameInput}
				placeholder={placeholder}
				style={{
					borderColor: `${color || 'black'}`,
					color: `${color || 'black'}`,
				}}
			/>
			<button type="submit">
				<SendButtonIcon color={color || 'black'} />
			</button>
		</form>
	);
}
