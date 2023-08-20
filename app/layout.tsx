import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import PageProgressBar from '@/components/ui/LoadersAnimation/page-progressbar/PageProgressBar';
import Toastify from '@/components/ui/toastify/Toastify';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import '/public/styles/globals.scss';
import '/public/styles/reset.scss';

export const metadata: Metadata = {
	title: 'Mineshop',
	description: 'Best minecraft commercial shop',
	icons: {
		icon: '/favicon/favicon.ico',
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<div className='wrapper'>
					<Header />
					<main>{children}</main>
					<Footer />
					<PageProgressBar />
					<Toastify />
				</div>
			</body>
		</html>
	);
}
