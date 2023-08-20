'use client';
import { IOption, SearchInputProps } from '@/types/common';
import { useState } from 'react';
import Select, { components, GroupBase, NoticeProps } from 'react-select';
import {
	controlStyles,
	inputStyles,
	menuStyles,
	optionsStyles,
} from './styles';

export default function SearchInput({
	value,
	inputValue,
	onChange,
	onInputChange,
	options,
	setInputValue,
}: SearchInputProps) {
	const [inputSave, setSave] = useState('');

	const NoOptionsMessage = (
		props: NoticeProps<IOption, boolean, GroupBase<IOption>>,
	) => {
		return (
			<components.NoOptionsMessage {...props}>
				Products not found
			</components.NoOptionsMessage>
		);
	};

	return (
		<Select
			components={{ NoOptionsMessage }}
			placeholder={inputSave || 'Search...'}
			value={value}
			inputValue={inputValue}
			onChange={onChange}
			styles={{
				...inputStyles,
				control: (defaultStyles, state) => ({
					...controlStyles(defaultStyles, state),
				}),
				input: defaultStyles => ({
					...defaultStyles,
				}),
				menu: defaultStyles => ({
					...menuStyles(defaultStyles),
				}),
				option: (defaultStyles, state) => ({
					...optionsStyles(defaultStyles, state),
				}),
			}}
			isClearable={true}
			onInputChange={onInputChange}
			options={options}
			onMenuClose={() => setSave(inputValue)}
			onFocus={() => {
				setInputValue(inputSave);
			}}
			blurInputOnSelect
		/>
	);
}
