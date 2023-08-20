export interface IProductMainImageProps {
	images: string[];
	activeIndex: number;
}

export interface IProductImageListProps {
	images: string[];
	setActiveIndex: (arg0: number) => void;
}

export interface IProductImagesItemProps {
	src: string;
	alt: string;
}
