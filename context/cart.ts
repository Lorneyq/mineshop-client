import { ICartItem } from '@/types/cart';
import persist from 'effector-localstorage';
import { createDomain } from 'effector-next';
import { toast } from 'react-toastify';

const cart = createDomain();

export const setCart = cart.createEvent<ICartItem[]>();
export const addToCart = cart.createEvent<ICartItem>();
export const updateCart = cart.createEvent<ICartItem>();
export const removeCartItem = cart.createEvent<number>();
export const increaseCartItem = cart.createEvent<number>();
export const decreaseCartItem = cart.createEvent<number>();

const remove = (cartItems: ICartItem[], productId: number) =>
	cartItems.filter(item => item.id !== productId);

const calculateTotalPrice = (cartItems: ICartItem[]) =>
	cartItems.reduce((total, item) => total + item.price, 0);

export const $cart = cart
	.createStore<ICartItem[]>([])
	.on(setCart, (_, cart) => cart)
	.on(addToCart, (state, product) => {
		const existingItem = state.find(item => item.id === product.id);

		if (existingItem) {
			const newCount = existingItem.count + 1;
			if (newCount <= product.in_stock) {
				return state.map(item => {
					if (item.id === product.id) {
						return {
							...item,
							count: newCount,
							price: product.price * newCount,
						};
					}
					return item;
				});
			}
			return state;
		}

		return [
			...state,
			{
				...product,
				count: 1,
				price: product.price,
			},
		];
	})
	.on(updateCart, (state, cartItem) => [...state, cartItem])
	.on(removeCartItem, (state, productId) => [...remove(state, productId)])
	.on(increaseCartItem, (state, productId) => {
		return state.map(item => {
			if (item.id === productId && item.count < item.in_stock) {
				const newCount = item.count + 1;
				return {
					...item,
					count: newCount,
					price: item.price + item.price / item.count,
				};
			} else if (item.id === productId && item.count === item.in_stock) {
				toast.warning('Maximum quantity of product has been reached');
			}
			return item;
		});
	})
	.on(decreaseCartItem, (state, productId) => {
		return state.map(item => {
			if (item.id === productId && item.count >= 2) {
				const newCount = item.count - 1;
				return {
					...item,
					count: newCount,
					price: item.price - item.price / item.count,
				};
			}
			return item;
		});
	});

export const $totalPrice = $cart.map(calculateTotalPrice);
export const addToTotalPrice = cart.createEvent<number>();

$totalPrice.on(
	addToTotalPrice,
	(totalPrice, valueToAdd) => totalPrice + valueToAdd,
);

persist({ store: $cart, key: 'cart' });
persist({ store: $totalPrice, key: 'totalPrice' });
