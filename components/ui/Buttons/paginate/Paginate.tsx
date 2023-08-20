import { IPaginateProps } from '@/types/products';
import ReactPaginate from 'react-paginate';
import styles from './Paginate.module.scss';

export default function Paginate({
	currentPage,
	pagesCount,
	handlePageChange,
}: IPaginateProps) {
	if (pagesCount > 1) {
		return (
			<ReactPaginate
				containerClassName={styles.Paginate}
				pageClassName={styles.PageItem}
				pageLinkClassName={styles.PageLink}
				previousClassName={styles.PreviousPage}
				previousLabel="<"
				nextClassName={styles.NextPage}
				nextLabel=">"
				disabledLinkClassName={styles.Disabled}
				breakClassName={styles.Break}
				breakLinkClassName={styles.BreakLink}
				breakLabel="..."
				pageCount={pagesCount}
				forcePage={currentPage}
				onPageChange={handlePageChange}
			/>
		);
	} else {
		return null;
	}
}
