import { getProductByNameFx, searchProductsFx } from '@/api/products';
import { IOption, SelectOptionType } from '@/types/common';
import { IProduct } from '@/types/products';
import { createSelectOption } from '@/utils/common';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

export function useProductSearch() {
	const [show, setShow] = useState(false);
	const [searchOption, setSearchOption] = useState<SelectOptionType>(null);
	const [options, setOptions] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const router = useRouter();

	const handleShowChange = () => {
		setShow(!show);
	};

	const handleSearchOptionChange = (selectedOption: SelectOptionType) => {
		if (!selectedOption) {
			setSearchOption(null);
			return;
		}

		const name = (selectedOption as IOption)?.value as string;

		if (name) {
			getProductAndRedirect(name);
		}
		setSearchOption(selectedOption);
	};

	const handleSearchClick = async () => {
		console.log(inputValue);
		if (!inputValue) {
			return;
		}
		getProductAndRedirect(inputValue);
	};

	const searchProduct = async (search: string) => {
		try {
			setInputValue(search);
			const data = await searchProductsFx({
				url: 'products/search',
				search,
			});

			const names = data
				.map((product: IProduct) => product.name)
				.map(createSelectOption);

			setOptions(names);
		} catch (error) {
			toast.error((error as Error).message);
		}
	};

	const onSearchInputChange = (name: string) => {
		searchProduct(name);
	};

	const getProductAndRedirect = async (name: string) => {
		const product = await getProductByNameFx({
			url: '/products/name',
			name,
		});

		if (!product.id) {
			toast.warning('Product not found');
			return;
		}

		router.push(`/catalog/product/${product.id}`);
		toast.success('Loading...');
	};

	return {
		show,
		handleShowChange,
		searchOption,
		options,
		inputValue,
		setInputValue,
		handleSearchOptionChange,
		handleSearchClick,
		onSearchInputChange,
	};
}
