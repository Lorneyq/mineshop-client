'use client';
import StandardButton from '@/components/ui/Buttons/standard-button/StandardButton';
import Marquee from '@/components/ui/marquee/Marquee';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';
import Link from 'next/link';
import WelcomeImage from './images/WelcomeMan.png';
import styles from './Welcome.module.scss';

export default function Welcome() {
	const isMobile1200 = useMediaQuery(1200);

	return (
		<section className={styles.Welcome}>
			<div className={isMobile1200 ? 'container-fluid' : 'container'}>
				<div className={styles.WelcomeTop}>
					<Image
						src={WelcomeImage}
						alt="Welcome Man"
						width={0}
						height={0}
						draggable={false}
						className={styles.WelcomeImage}
					/>
					<div className={styles.InfoBox}>
						<h1 className={styles.Title}>
							this shop has something for every gamer
						</h1>
						<p className={styles.Subtitle}>
							soft toys, figures, t-shirts, hoodies and more
						</p>
						<StandardButton className={styles.LinkButton}>
							<Link href="/catalog">catalog</Link>
						</StandardButton>
					</div>
				</div>
			</div>
			<div className={styles.WelcomeMarquee}>
				<Marquee>
					necklaces bracelets key rings soft toys figures t-shirts hoodies waist
					bags backpacks pencil box books magazines necklaces bracelets key
					rings soft toys figures t-shirts hoodies waist bags backpacks pencil
					box books magazines necklaces bracelets key rings soft toys figures
					t-shirts hoodies waist bags backpacks pencil box books magazines
					necklaces bracelets key rings soft toys figures t-shirts hoodies waist
					bags backpacks pencil box books magazines necklaces bracelets key
					rings soft toys figures t-shirts hoodies waist bags backpacks pencil
					box books magazines necklaces bracelets key rings soft toys figures
					t-shirts hoodies waist bags backpacks pencil box books magazines
					necklaces bracelets key rings soft toys figures t-shirts hoodies waist
					bags backpacks pencil box books magazines necklaces bracelets key
					rings soft toys figures t-shirts hoodies waist bags backpacks pencil
					box books magazines
				</Marquee>
			</div>
		</section>
	);
}
