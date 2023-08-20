import { removeCartItem } from '@/context/cart';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import CrossIcon from './icons/CrossIcon';
import TrashIcon from './icons/TrashIcon';
import styles from './RemoveFromCartButton.module.scss';

export default function RemoveFromCartButton({
	cartItemId,
	isCross,
	className,
}: {
	cartItemId: number;
	isCross?: boolean;
	className?: string;
}) {
	const isMobile768 = useMediaQuery(768);

	return (
		<button
			className={`${isCross ? styles.CrossButton : styles.IconButton} ${
				className ? className : ''
			}`}
			onClick={() => removeCartItem(cartItemId)}
		>
			{isCross ? <CrossIcon /> : !isMobile768 ? <TrashIcon /> : <CrossIcon />}
		</button>
	);
}
