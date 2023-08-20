import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Catalog | Mineshop',
	description: '',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
