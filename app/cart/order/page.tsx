'use client';
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs';
import OrderPlacement from '@/components/section/OrderPage/OrderPlacement/OrderPlacement';

export default function OrderRegistrationPage() {
	return (
		<div className='container'>
			<Breadcrumbs
				items={[
					{
						label: 'Home',
						path: '/',
					},
					{
						label: 'Shopping cart',
						path: '/cart',
					},
					{
						label: 'Order registration',
						path: '/cart/order',
					},
				]}
			/>
			<OrderPlacement />
		</div>
	);
}
