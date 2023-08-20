export default function formatPrice(price: number | string) {
	const parsedPrice = typeof price === 'string' ? parseFloat(price) : price;

	const roundedNum = parsedPrice.toFixed(2);
	return roundedNum;
}
