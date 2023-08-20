import AboutUs from '@/components/section/HomePage/AboutUs/AboutUs';
import Collection from '@/components/section/HomePage/Collection/Collection';
import Contacts from '@/components/section/HomePage/Contacts/Contacts';
import PopularProducts from '@/components/section/HomePage/PopularProducts/PopularProducts';
import Welcome from '@/components/section/HomePage/Welcome/Welcome';

export default function Home() {
	return (
		<>
			<Welcome />
			<AboutUs />
			<Collection />
			<PopularProducts />
			<Contacts />
		</>
	);
}
