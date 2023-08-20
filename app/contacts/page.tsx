'use client';
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs';
import ContactDetails from '@/components/section/ContactsPage/ContactDetails/ContactDetails';
import FeedbackForm from '@/components/section/ContactsPage/FeedbackForm/FeedbackForm';
import PageTitle from '@/components/ui/Titles/page-title/PageTitle';

export default function ContactsPage() {
	return (
		<div className="container">
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
			<div className="flex justify-between mb-20 mt-20">
				<ContactDetails />
				<FeedbackForm />
			</div>
		</div>
	);
}
