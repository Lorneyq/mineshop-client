import {
	ControlProps,
	GroupBase,
	OptionProps,
	StylesConfig,
} from 'react-select';
import { CSSObjectWithLabel } from 'react-select/dist/declarations/src/types';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { IOption } from '@/types/common';

export const controlStyles = (
	defaultStyles: CSSObjectWithLabel,
	state: ControlProps<IOption, boolean, GroupBase<IOption>>,
): CSSObjectWithLabel => ({
	...defaultStyles,
	cursor: 'pointer',
	backgroundColor: 'transparent',
	fontSize: useMediaQuery(480) ? '0.75rem' : '1rem',
	fontWeight: '300',
	minHeight: '15px',
	textTransform: 'uppercase',
	border: state.isFocused ? 'none' : 'none',
	boxShadow: 'none',
	justifyContent: 'flex-start',
	maxWidth: '125px',
});

export const selectStyles: StylesConfig<
	IOption,
	boolean,
	GroupBase<IOption>
> = {
	control: () => ({}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
	singleValue: () => ({
		maxWidth: '150px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	}),
	valueContainer: () => ({
		paddingLeft: '0px',
		paddingRight: '4px',
		height: useMediaQuery(1200) ? '1.5rem' : '28px',
	}),
	dropdownIndicator: (defaultStyles, state) => ({
		...defaultStyles,
		padding: 0,
		color: 'black',
		'&:hover': {
			color: 'black',
		},
	}),
	menuList: () => ({}),
};

export const menuStyles = (
	defaultStyles: CSSObjectWithLabel,
): CSSObjectWithLabel => ({
	...defaultStyles,
	textTransform: 'uppercase',
	top: '30px',
});

export const optionsStyles = (
	defaultStyles: CSSObjectWithLabel,
	state: OptionProps<IOption, boolean, GroupBase<IOption>>,
): CSSObjectWithLabel => ({
	...defaultStyles,
	cursor: 'pointer',
	background: state.isFocused ? 'none' : undefined,
	color: state.isFocused ? 'black' : undefined,
	backgroundColor: state.isSelected ? 'none' : undefined,
	padding: 0,
	borderBottom: '1px solid black',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	'&:hover': {
		backgroundColor: 'none',
	},
});
