import { useMediaQuery } from '@/hooks/useMediaQuery';
import { IProductImageListProps } from '@/types/product';
import 'swiper/css';
import { Keyboard, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductImageItem from '../product-image-item/ProductImageItem';
import styles from './ProductImageList.module.scss';

export default function ProductImageList({
	images,
	setActiveIndex,
}: IProductImageListProps) {
	const isMobile1386 = useMediaQuery(1386);
	const isMobile960 = useMediaQuery(960);

	return (
		<ul className={styles.ProductImageList}>
			<Swiper
				className={styles.ImageSlider}
				modules={[Mousewheel, Keyboard]}
				onClick={swiper => {
					setActiveIndex(swiper.clickedIndex);
				}}
				direction="vertical"
				slidesPerView={isMobile960 ? 4 : isMobile1386 ? 5 : 6}
				slidesPerGroup={1}
				spaceBetween={10}
				allowTouchMove
				simulateTouch
				mousewheel
				keyboard
			>
				{images.map((item, index) => (
					<SwiperSlide className={styles.ImageSlide} key={index}>
						<ProductImageItem alt={`image-${index + 1}`} src={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</ul>
	);
}
