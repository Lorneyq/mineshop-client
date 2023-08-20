import CatalogCard from '@/components/modules/Catalog/CatalogCard/CatalogCard';
import styles from './CatalogCards.module.scss';

export default function CatalogCards() {
	return (
		<div className={styles.CatalogCards}>
			<CatalogCard />
		</div>
	);
}
