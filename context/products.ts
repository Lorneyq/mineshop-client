import { createDomain } from 'effector-next';
import { IProductList } from './../types/products';

const products = createDomain();

export const setProducts = products.createEvent<IProductList>();

export const setProductsCheapFirst = products.createEvent();
export const setProductsExpensiveFirst = products.createEvent();
export const setProductsByPopularity = products.createEvent();
export const setSubcategory = products.createEvent();

export const $products = products
	.createStore<IProductList>({} as IProductList)
	.on(setProducts, (_, items) => items)
	.on(setProductsCheapFirst, state => ({
		...state,
		rows: state.rows.sort((a, b) => a.price - b.price),
	}))
	.on(setProductsExpensiveFirst, state => ({
		...state,
		rows: state.rows.sort((a, b) => b.price - a.price),
	}))
	.on(setProductsByPopularity, state => ({
		...state,
		rows: state.rows.sort((a, b) => a.id - b.id),
	}));

// export const $subcategory = products
// 	.createStore<IProductList>({} as IProductList)
// 	.on(setSubcategory, (_, items) => items);
