import { ReactNode } from 'react';
import styles from './SectionTitle.module.scss';

type SectionTitleProps = {
	children: ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
	return <h5 className={styles.SectionTitle}>{children}</h5>;
}
