import { StaticImageData } from 'next/image';

export interface ICollectionItem {
	name: string;
	slug: string;
}

export interface ICatalogItem {
	name: string;
	slug: string;
	subcategory: string[];
	image: StaticImageData;
}

export interface IProduct {
	id: number;
	name: string;
	price: number;
	old_price: number;
	vendor_code: string;
	description: string;
	category: string;
	subcategory: string;
	images: string;
	color: string;
	size: string;
	evaluation: number;
	in_stock: number;
	hit: boolean;
	new: boolean;
	sale: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface IProductList {
	count: number;
	rows: IProduct[];
}

export interface IProducts {
	products: IProduct[];
	spinner?: boolean;
	isRow?: boolean;
}

export interface IProductMarkProps {
	mark: string;
}

export interface IProductFiltersProps {
	title: string | undefined;
	subcategory?: string[] | undefined;
	colorTitle?: string | undefined;
	totalProducts?: number | string;
	products?: IProductList;
	isPromotional?: boolean;
}

export interface IPaginateProps {
	currentPage: number;
	pagesCount: number;
	handlePageChange: ({ selected }: { selected: number }) => Promise<void>;
}
