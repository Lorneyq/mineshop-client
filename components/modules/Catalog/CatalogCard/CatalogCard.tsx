import { catalog } from '@/data/catalog';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CatalogCard.module.scss';

export default function CatalogCard() {
	return (
		<>
			{catalog.map(item => (
				<div key={item.slug} className={styles.CatalogCard}>
					<Link className={styles.MainInfo} href={`/catalog/${item.slug}`}>
						<Image
							src={item.image}
							alt={item.name}
							width={0}
							height={0}
							className={styles.CatalogImage}
						/>
						<h2 className={styles.Title}>{item.name}</h2>
					</Link>
					<ul className={styles.Subcategory}>
						{item.subcategory.map((subitem, index) => (
							<li key={index}>
								{subitem}
								{/* <Link href={`/catalog/${item.slug}/#`}>{subitem}</Link> */}
							</li>
						))}
					</ul>
				</div>
			))}
		</>
	);
}
