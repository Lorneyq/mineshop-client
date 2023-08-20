'use client';
import Dashboard from '@/components/section/PersonalPage/Dashboard/Dashboard';
import useUserCheck from '@/hooks/useUserCheck';

export default function PersonalPage() {
	const { allowAccess } = useUserCheck(true);

	if (allowAccess) {
		return (
			<div className="container">
				<Dashboard />
			</div>
		);
	}
}
