// import { catalog } from '@/data/catalog';
import { createSelectOption } from './common';

export const sortOptions = ['popular', 'cheap', 'expensive'].map(
	createSelectOption,
);

export const categoryOptions = [
	'Jewelry',
	'Toys',
	'Accessories',
	'Clothes',
	'Books & Magazines',
].map(createSelectOption);
