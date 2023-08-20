import SectionTitle from '@/components/ui/Titles/section-title/SectionTitle';
import Image from 'next/image';
import styles from './AboutUs.module.scss';

import ArrowLink from '@/components/ui/Buttons/arrow-link/ArrowLink';
import AboutUsImage from './images/AboutUsImage.jpg';

export default function AboutUs() {
	return (
		<section className={styles.AboutUs}>
			<div className="container">
				<SectionTitle>About Us</SectionTitle>
				<div className={styles.ContentBox}>
					<Image src={AboutUsImage} alt="About Us" width={680} height={360} />
					<div className={styles.InfoBox}>
						<p>
							Get ready to show off your love for Minecraft with officially
							curated Minecraft apparel, accessories, and drinkware. Featuring
							apparel with classic characters, costumes, bedding, mugs, and
							more, this collection has something for every gamer. Whether you
							are searching new biomes, defeating the Enderman, or outrunning
							Creepers, you will love joining your next gaming session with your
							new Minecraft gear.
						</p>
						<ArrowLink href="/about-us" color="black" />
					</div>
				</div>
			</div>
		</section>
	);
}
