import { catalog } from '@/data/catalog';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
	params: {
		slug: string;
		name: string;
		subcategory: string;
	};
};

export async function generateMetadata(
	{ params: { slug } }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const catalogItem = catalog.find(item => item.slug === slug);

	return {
		title: `${catalogItem?.name} | Mineshop`,
	};
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
