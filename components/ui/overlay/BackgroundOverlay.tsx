import { useEffect } from 'react';
import scrollLock, { addFillGapSelector } from 'scroll-lock';

interface overlayProps {
	onClick?: () => void;
}

export default function BackgroundOverlay({ onClick }: overlayProps) {
	useEffect(() => {
		scrollLock.disablePageScroll();
		addFillGapSelector('header');
		return () => {
			scrollLock.enablePageScroll();
		};
	}, []);

	return (
		<div
			className="fixed inset-0 -left-full z-40 bg-black/40"
			onClick={onClick}
		></div>
	);
}
