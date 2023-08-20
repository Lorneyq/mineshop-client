import { BreadcrumbsProps } from '@/types/common';
import Link from 'next/link';
import styles from './Breadcrumbs.module.scss';

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
	return (
		<div className={styles.Breadcrumbs} aria-label="breadcrumb">
			{items.map((crumb, i) => {
				const isLastItem = i === items.length - 1;
				if (!isLastItem) {
					return (
						<div className={styles.BreadcrumbsItem} key={i}>
							<Link href={crumb.path}>{crumb.label}</Link>
							<span className={styles.BreadcrumbsSeparator}>/</span>
						</div>
					);
				} else {
					return (
						<span key={i} className={styles.BreadcrumbsLastItem}>
							{crumb.label}
						</span>
					);
				}
			})}
		</div>
	);
}
