'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function PageProgressBar() {
	return (
		<ProgressBar
			height="4px"
			color="#fffd00"
			options={{ showSpinner: false }}
		/>
	);
}
