import styles from './RatingStars.module.scss';
import StarIcon from './icons/StarIcon';

export default function RatingStars({ count }: { count: number }) {
	const activeStars = Math.min(Math.max(count, 0), 5);
	const inactiveStars = 5 - activeStars;

	return (
		<ul className={styles.Stars}>
			{Array.from({ length: activeStars }, (_, index) => (
				<li key={index}>
					<StarIcon isActive />
				</li>
			))}
			{Array.from({ length: inactiveStars }, (_, index) => (
				<li key={index}>
					<StarIcon isActive={false} />
				</li>
			))}
		</ul>
	);
}
