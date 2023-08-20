import { Metadata, ResolvingMetadata } from 'next';

type Props = {
	params: {
		id: string;
	};
};

export async function generateMetadata(
	{ params: { id } }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	return {
		title: '',
	};
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
