import { ReactNode } from 'react';
import { MultiValue, SingleValue } from 'react-select';

export interface IOption {
	value: string | number;
	label: string | number;
}

export type SelectOptionType =
	| MultiValue<IOption>
	| SingleValue<IOption>
	| null;

export interface IButtonProps {
	onClick?: () => void;
	color?: string;
	className?: string;
}

export interface IStandardCheckboxProps {
	label?: string;
	onChange?: () => void;
	checked?: boolean;
}

export type SearchInputProps = {
	value: SelectOptionType;
	inputValue?: string | any;
	onChange: (selectedOption: SelectOptionType) => void;
	onInputChange?: (name: string) => void;
	options: IOption[];
	setInputValue?: React.Dispatch<React.SetStateAction<string>> | any;
};

export interface ICrumbProps {
	text: string;
	textGenerator: () => string;
	href: string;
	last: boolean;
}

export type CrumbItem = {
	label: ReactNode;
	path: string;
};
export type BreadcrumbsProps = {
	items: CrumbItem[];
};
