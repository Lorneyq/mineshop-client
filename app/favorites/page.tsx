'use client';
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs';
import FavoriteItemsBox from '@/components/section/FavoritesPage/FavoriteItemsBox/FavoriteItemsBox';
import WarningMessage from '@/components/section/FavoritesPage/WarningMessage/WarningMessage';
import PageTitle from '@/components/ui/Titles/page-title/PageTitle';
import useUserCheck from '@/hooks/useUserCheck';

export default function FavoritesPage() {
	const { allowAccess } = useUserCheck(false);

	if (allowAccess) {
		return (
			<div className="container">
				<Breadcrumbs
					items={[
						{
							label: 'Home',
							path: '/',
						},
						{
							label: 'Favorites',
							path: '/favorites',
						},
					]}
				/>
				<PageTitle>Favorites</PageTitle>
				<FavoriteItemsBox />
			</div>
		);
	} else {
		return (
			<div className="container">
				<WarningMessage />
			</div>
		);
	}
}
