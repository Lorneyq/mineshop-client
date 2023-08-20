import StandardButton from '@/components/ui/Buttons/standard-button/StandardButton';
import { useRouter } from 'next/navigation';

export default function HomeButton() {
	const router = useRouter();

	return <StandardButton onClick={() => router.push('/')}>home</StandardButton>;
}
