export interface ISendingInputProps {
	onSubmit: (e: React.FormEvent) => void;
	labelText?: string;
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	nameInput: string;
	color?: string;
	className?: string;
	maxLength?: number;
}
