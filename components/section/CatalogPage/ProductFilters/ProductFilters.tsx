'use client';
import SortSelect from '@/components/ui/Selects/sort-select/SortSelect';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { IProductFiltersProps } from '@/types/products';
import styles from './ProductFilters.module.scss';

export default function ProductFilters({
	title,
	subcategory,
	colorTitle,
	totalProducts,
	isPromotional,
}: IProductFiltersProps) {
	const isMobile768 = useMediaQuery(768);

	return (
		<section className={styles.ProductFilters}>
			<h1
				className={styles.Title}
				style={
					isPromotional ? { color: `${colorTitle}`, fontStyle: 'italic' } : {}
				}
			>
				{title}
			</h1>
			<div className={styles.Filters}>
				<span className={styles.TotalProducts}>
					{isMobile768 ? 'Total:' : 'Total Products:'}{' '}
					<span style={{ color: `${colorTitle}` }}>{totalProducts}</span>
				</span>
				<ul className={styles.Subcategory}>
					{subcategory?.map(item => (
						<li key={item}>{item}</li>
					))}
				</ul>
				<SortSelect />
			</div>
		</section>
	);
}
