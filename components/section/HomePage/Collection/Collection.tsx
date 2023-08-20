import Image from 'next/image';
import Link from 'next/link';

import styles from './Collection.module.scss';

import SectionTitle from '@/components/ui/Titles/section-title/SectionTitle';
import { collection } from '@/data/collection';

import DecorationImage1 from './images/DecorationImage1.png';
import DecorationImage2 from './images/DecorationImage2.png';

export default function Collection() {
	return (
		<div className="container-fluid">
			<section className={styles.Collection}>
				<div className="container">
					<SectionTitle>collection</SectionTitle>
					<ul className={styles.List}>
						{collection.map((item, index) => (
							<li key={item.slug}>
								<Link
									href={`${item.slug}`}
									className={index === 3 ? `${styles.green}` : ''}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.Decorations}>
					<Image
						src={DecorationImage1}
						alt="Player with pig"
						width={0}
						height={0}
						draggable={false}
					/>
					<Image
						src={DecorationImage2}
						alt="Minecraft plain"
						width={0}
						height={0}
						draggable={false}
					/>
				</div>
			</section>
		</div>
	);
}
