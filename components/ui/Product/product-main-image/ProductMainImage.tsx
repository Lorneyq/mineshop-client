import '@/public/styles/swiper.scss';
import { IProductMainImageProps } from '@/types/product';
import { useEffect, useRef } from 'react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ProductMainImage.module.scss';

export default function ProductMainImage({
	images,
	activeIndex,
}: IProductMainImageProps) {
	const swiperRef = useRef<any>();

	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.slideTo(activeIndex);
		}
	}, [activeIndex]);

	return (
		<Swiper
			onSwiper={swiper => (swiperRef.current = swiper)}
			className={styles.MainImageSlider}
			modules={[Mousewheel, Keyboard, Navigation, Pagination]}
			direction="horizontal"
			slidesPerView={1}
			slidesPerGroup={1}
			allowTouchMove
			simulateTouch
			mousewheel
			keyboard
			navigation={true}
			pagination={{
				type: 'fraction',
			}}
		>
			{images.map((item, index) => (
				<SwiperSlide className={styles.MainImageSlide} key={index}>
					<img src={item} alt={`image-${index + 1}`} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
