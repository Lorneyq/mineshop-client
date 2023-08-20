'use client';
import SearchButton from '@/components/ui/Buttons/search-button/SearchButton';
import SearchInput from '@/components/ui/Inputs/search-input/SearchInput';
import { useProductSearch } from '@/hooks/useProductSearch';
import styles from './ProductSearch.module.scss';

export default function ProductSearch() {
	const {
		show,
		handleShowChange,
		searchOption,
		options,
		inputValue,
		setInputValue,
		handleSearchOptionChange,
		handleSearchClick,
		onSearchInputChange,
	} = useProductSearch();

	return (
		<>
			{!show ? (
				<SearchButton onClick={handleShowChange} />
			) : (
				<div className={styles.ShowBox}>
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
						<button
							className={styles.CollapseButton}
							onClick={handleShowChange}
						>
							{'>'}
						</button>
					</div>
				</div>
			)}
		</>
	);
}
