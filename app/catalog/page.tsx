'use client';
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs';
import CatalogCards from '@/components/section/CatalogPage/CatalogCards/CatalogCards';
import PageTitle from '@/components/ui/Titles/page-title/PageTitle';

export default function CatalogPage() {
	return (
		<div className="container">
			<Breadcrumbs
				items={[
					{
						label: 'Home',
						path: '/',
					},
					{
						label: 'Catalog',
						path: '/catalog',
					},
				]}
			/>
			<PageTitle isCenter={true}>Catalog</PageTitle>
			<CatalogCards />
		</div>
	);
}
