'use client';
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs';
import ContactsSection from '@/components/section/ContactsPage/ContactsSection/ContactsSection';
import PageTitle from '@/components/ui/Titles/page-title/PageTitle';

export default function ContactsPage() {
	return (
		<div className='container'>
			<Breadcrumbs
				items={[
					{
						label: 'Home',
						path: '/',
					},
					{
						label: 'Contacts',
						path: '/contacts',
					},
				]}
			/>
			<PageTitle>Contacts</PageTitle>
			<ContactsSection />
		</div>
	);
}
