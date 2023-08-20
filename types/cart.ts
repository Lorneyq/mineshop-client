export interface ICartItem {
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
	count: number;
}

export interface ICartState {
	items: ICartItem[];
}
