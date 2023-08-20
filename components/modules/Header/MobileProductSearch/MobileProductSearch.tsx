'use client';
import SearchButton from '@/components/ui/Buttons/search-button/SearchButton';
import SearchInput from '@/components/ui/Inputs/search-input/SearchInput';
import { useProductSearch } from '@/hooks/useProductSearch';
import styles from './MobileProductSearch.module.scss';

export default function MobileProductSearch() {
	const {
		searchOption,
		options,
		inputValue,
		setInputValue,
		handleSearchOptionChange,
		handleSearchClick,
		onSearchInputChange,
	} = useProductSearch();

	return (
		<div className={styles.SearchBox}>
			<SearchInput
				value={searchOption}
				inputValue={inputValue}
				onChange={handleSearchOptionChange}
				onInputChange={onSearchInputChange}
				options={options}
				setInputValue={setInputValue}
			/>
			<div className={styles.Buttons}>
				<SearchButton onClick={handleSearchClick} color="black" />
			</div>
		</div>
	);
}
