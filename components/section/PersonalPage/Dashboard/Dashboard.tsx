import LogoutButton from '@/components/ui/Buttons/logout-button/LogoutButton';
import { $user } from '@/context/user';
import { useStore } from 'effector-react';
import Link from 'next/link';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styles from './Dashboard.module.scss';

export default function Dashboard() {
	const user = useStore($user);

	return (
		<section className={styles.Dashboard}>
			<Tabs className={styles.DashboardTabs}>
				<TabList className={styles.DashboardTabList}>
					<Tab
						className={styles.DashboardTab}
						selectedClassName={styles.SelectedDashboardTab}
					>
						Personal Info
					</Tab>
					<Link href="/favorites">
						<Tab
							className={styles.DashboardTab}
							selectedClassName={styles.SelectedDashboardTab}
						>
							My Favorites
						</Tab>
					</Link>
				</TabList>
				<div className={styles.DashboardTabPanels}>
					<TabPanel className={styles.DashboardTabPanel}>
						<div className={styles.UserInfoBox}>
							<div className={styles.UserInfo}>
								<div
									className={styles.UsernameBox}
									title={`Your id: ${user.id}`}
								>
									Welcome,{' '}
									<span className={styles.Username}>{user.username}</span>
								</div>
								<div className={styles.EmailBox}>
									User Email: <span className={styles.Email}>{user.email}</span>
								</div>
							</div>
							<LogoutButton />
						</div>
					</TabPanel>
					<TabPanel>Loading</TabPanel>
				</div>
			</Tabs>
		</section>
	);
}
