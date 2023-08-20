'use client';
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
	cursor: 'text',
	position: 'absolute',
	left: '0px',
	top: '50%',
	transform: 'translateY(-50%)',
	minHeight: useMediaQuery(786) ? '30px' : '40px',
	height: useMediaQuery(786) ? '30px' : '40px',
	fontSize: useMediaQuery(786) ? '12px' : '16px',
	width: '100%',
	overflow: 'hidden',
	borderRadius: '0px',
	boxShadow: 'none',
});

export const inputStyles: StylesConfig<IOption, boolean, GroupBase<IOption>> = {
	control: () => ({}),
	indicatorSeparator: () => ({
		border: 'none',
	}),
	singleValue: () => ({
		position: 'absolute',
		bottom: '7px',
	}),
	valueContainer: () => ({}),
	container: () => ({
		position: useMediaQuery(1024) ? 'relative' : 'absolute',
		right: useMediaQuery(1024) ? '0' : '152px',
		width: useMediaQuery(1024) ? '100%' : '76%',
		zIndex: useMediaQuery(1024) ? '0' : '41',
	}),
	indicatorsContainer: () => ({
		display: 'none',
	}),
	menuList: () => ({
		paddingTop: 0,
		paddingBottom: 0,
		minHeight: 30,
	}),
	placeholder: () => ({
		position: 'absolute',
		top: '6px',
		userSelect: 'none',
	}),
	input: () => ({
		color: 'black',
	}),
};

export const menuStyles = (
	defaultStyles: CSSObjectWithLabel,
): CSSObjectWithLabel => ({
	...defaultStyles,
	top: '20px',
	overflow: 'hidden',
	height: 'auto',
	minHeight: 30,
});

export const optionsStyles = (
	defaultStyles: CSSObjectWithLabel,
	state: OptionProps<IOption, boolean, GroupBase<IOption>>,
): CSSObjectWithLabel => ({
	...defaultStyles,
	cursor: 'pointer',
});
