import Image from 'next/image';
import styles from './AboutUsSection.module.scss';

import Copyright from '@/components/ui/copyright/Copyright';
import Link from 'next/link';
import Logo from './images/Logo.svg';

export default function AboutUsSection() {
	return (
		<section className={styles.AboutUsSection}>
			<div className={styles.AboutUsText}>
				<p>
					Mineshop is a store specializing in official/unofficial Minecraft
					paraphernalia. Important advantages of our community - delivery of
					goods to a large number of countries, cheap prices, constant
					discounts. You can contact us on the{' '}
					<Link href="/contacts">Contacts button,</Link> our cozy catalog is{' '}
					<Link href="/catalog">here.</Link>
				</p>
				<p>
					The history of the service begins in 2023, when MineTick© decided to
					become #1 in price and convenience in a world of competition between
					analogs. That same year, mineshop.com was launched, and shipping and
					payment acceptance was set up. After entering the market, the project
					began to grow rapidly, and at the end of 2023, MineTick© had 12% of
					the market for official/unofficial Minecraft paraphernalia.
				</p>
				<p>
					With its many years of success, Mineshop has established itself as the
					leading store for official and unofficial Minecraft paraphernalia. The
					MineTick© team continued to develop its project, striving to meet the
					needs of every fan of this unique game. With the appearance of new
					expansions and updates to Minecraft, Mineshop has always been the
					first to offer its customers the most relevant and quality
					merchandise. Our cozy catalog was constantly updated with new unique
					items and collectibles that delighted experienced players and
					newcomers alike.
				</p>
				<p>
					One of the key advantages of Mineshop was international shipping to
					many countries, which allowed Minecraft fans all over the world to
					easily and conveniently receive the desired goods. Carefully designed
					logistics system and partnerships with reliable delivery services
					ensured timely receipt of orders and safety of goods during
					transportation. We took pride in the fact that our customers felt care
					and attention in every step, from placing an order to the moment they
					happily unpacked their new purchases.
				</p>
				<p>
					Another strong aspect of Mineshop was our affordable prices and
					ongoing discounts. We strived to make Minecraft paraphernalia
					accessible to every fan, and so we implemented various loyalty
					programs and promotions that allowed for savings on purchases. Every
					customer could be sure that they would not only get a quality product,
					but also a great price, which made shopping at Mineshop even more
					enjoyable.
				</p>
				<p>
					Over the years, Mineshop has not only become synonymous with quality
					Minecraft paraphernalia, but has also created a unique community of
					like-minded people united by their love for this amazing game. We
					pride ourselves on putting a piece of our soul into every sale, thus
					making this magical world a little closer and more accessible to all
					of its fans. We are happy to continue our journey through the
					Minecraft universe with you, and Mineshop will always be your trusted
					guide to a world of endless adventure and magic.
				</p>
			</div>
			<div className={styles.AboutUsLogo}>
				<Image
					src={Logo}
					alt="Mineshop"
					width={0}
					height={0}
					draggable={false}
				/>
				<Copyright />
			</div>
		</section>
	);
}
