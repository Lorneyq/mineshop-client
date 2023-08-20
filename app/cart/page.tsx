'use client';
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs';
import CartItemsBox from '@/components/section/CartPage/CartItemsBox/CartItemsBox';
import PageTitle from '@/components/ui/Titles/page-title/PageTitle';

export default function CartPage() {
	return (
		<div className='container'>
			<Breadcrumbs
				items={[
					{
						label: 'Home',
						path: '/',
					},
					{
						label: 'Cart',
						path: '/cart',
					},
				]}
			/>
			<PageTitle>Shopping cart</PageTitle>
			<CartItemsBox />
		</div>
	);
}
