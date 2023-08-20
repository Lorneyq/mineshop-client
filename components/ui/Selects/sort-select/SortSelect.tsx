'use client';
import {
	$products,
	setProductsByPopularity,
	setProductsCheapFirst,
	setProductsExpensiveFirst,
} from '@/context/products';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { IOption, SelectOptionType } from '@/types/common';
import { createSelectOption } from '@/utils/common';
import { sortOptions } from '@/utils/selectContents';
import { useStore } from 'effector-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useId, useState } from 'react';
import Select, { components, DropdownIndicatorProps } from 'react-select';
import ArrowIcon from './icons/ArrowIcon';
import styles from './SortSelect.module.scss';
import {
	controlStyles,
	menuStyles,
	optionsStyles,
	selectStyles,
} from './styles';

export default function SortSelect() {
	const [categoryOption, setCategoryOption] = useState<SelectOptionType>(null);
	const products = useStore($products);
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const isMobile768 = useMediaQuery(768);
	const queryFirst = searchParams.get('first');

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	useEffect(() => {
		if (products.rows) {
			switch (queryFirst) {
				case 'cheap':
					updateCategoryOption('cheap');
					setProductsCheapFirst();
					break;
				case 'expensive':
					updateCategoryOption('expensive');
					setProductsExpensiveFirst();
					break;
				case 'popular':
					updateCategoryOption('popular');
					setProductsByPopularity();
					break;
				default:
					updateCategoryOption('popular');
					setProductsByPopularity();
					break;
			}
		}
	}, [products.rows, queryFirst]);

	const updateCategoryOption = (value: string) =>
		setCategoryOption({ value, label: value });

	const handleSortOptionChange = (selectedOption: SelectOptionType) => {
		setCategoryOption(selectedOption);

		switch ((selectedOption as IOption).value) {
			case 'cheap':
				setProductsCheapFirst();
				router.push(pathname + '?' + createQueryString('first', 'cheap'));
				break;
			case 'expensive':
				setProductsExpensiveFirst();
				router.push(pathname + '?' + createQueryString('first', 'expensive'));
				break;
			case 'popular':
				setProductsByPopularity();
				router.push(pathname + '?' + createQueryString('first', 'popular'));
				break;
		}
	};

	const DropdownIndicator = (props: DropdownIndicatorProps<IOption>) => {
		return (
			<components.DropdownIndicator {...props}>
				<ArrowIcon />
			</components.DropdownIndicator>
		);
	};

	return (
		<div className={styles.SortSelect}>
			{isMobile768 ? '' : 'sort by'}
			<Select
				value={categoryOption || createSelectOption('popular')}
				onChange={handleSortOptionChange}
				options={sortOptions}
				components={{ DropdownIndicator }}
				isSearchable={false}
				instanceId={useId()}
				styles={{
					...selectStyles,
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
			/>
		</div>
	);
}
