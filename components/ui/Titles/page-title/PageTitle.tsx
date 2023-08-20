import { ReactNode } from 'react';
import styles from './PageTitle.module.scss';

type PageTitleProps = {
	children: ReactNode;
	isCenter?: boolean;
};

export default function PageTitle({ children, isCenter }: PageTitleProps) {
	return (
		<h1 className={isCenter ? styles.CenterTitle : styles.PageTitle}>
			{children}
		</h1>
	);
}
