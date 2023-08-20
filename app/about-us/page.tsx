import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs';
import AboutUsSection from '@/components/section/AboutUsPage/AboutUsSection/AboutUsSection';
import PageTitle from '@/components/ui/Titles/page-title/PageTitle';

export default function AboutUsPage() {
	return (
		<div className='container'>
			<Breadcrumbs
				items={[
					{
						label: 'Home',
						path: '/',
					},
					{
						label: 'About Us',
						path: '/about-us',
					},
				]}
			/>
			<PageTitle>About Us</PageTitle>
			<AboutUsSection />
		</div>
	);
}
