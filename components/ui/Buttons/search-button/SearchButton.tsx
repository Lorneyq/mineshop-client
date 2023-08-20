import { IButtonProps } from '@/types/common';
import styles from './SearchButton.module.scss';
import SearchIcon from './icons/SearchIcon';

const SearchButton = ({ onClick, color }: IButtonProps) => {
	return (
		<button className={styles.SearchButton} onClick={onClick}>
			<SearchIcon color={color} />
		</button>
	);
};

export default SearchButton;
