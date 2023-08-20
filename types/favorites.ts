export interface IFavoriteItem {
	userId: number;
	username: string;
	userEmail: string;
	productId: number;
	name: string;
	category: string;
	subcategory: string;
	price: number;
	image: string;
}

export interface IAddToFavoritesFx {
	url: string;
	username: string;
	productId: number;
}
