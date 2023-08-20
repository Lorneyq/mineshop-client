import accessoriesImage from '@/components/modules/Catalog/CatalogCard/images/accessories.jpg';
import booksAndMagazinesImage from '@/components/modules/Catalog/CatalogCard/images/books-and-magazines.jpg';
import clothesImage from '@/components/modules/Catalog/CatalogCard/images/clothes.jpg';
import jewelryImage from '@/components/modules/Catalog/CatalogCard/images/jewelry.jpg';
import toysImage from '@/components/modules/Catalog/CatalogCard/images/toys.jpg';
import { ICatalogItem } from '@/types/products';

export const catalog: ICatalogItem[] = [
	{
		name: 'Jewelry',
		slug: 'jewelry',
		subcategory: ['necklaces', 'key rings'],
		image: jewelryImage,
	},
	{
		name: 'Toys',
		slug: 'toys',
		subcategory: ['soft toys', 'trinkets', 'figurines'],
		image: toysImage,
	},
	{
		name: 'Accessories',
		slug: 'accessories',
		subcategory: ['backpacks', 'sunglasses'],
		image: accessoriesImage,
	},
	{
		name: 'Clothes',
		slug: 'clothes',
		subcategory: ['t-shirts', 'hoodies', 'onesies'],
		image: clothesImage,
	},
	{
		name: 'Books & Magazines',
		slug: 'books-and-magazines',
		subcategory: ['books', 'magazines'],
		image: booksAndMagazinesImage,
	},
];
