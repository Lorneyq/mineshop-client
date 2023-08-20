'use client';
import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ConfirmationTab from './ConfirmationTab/ConfirmationTab';
import ArrowIcon from './icons/ArrowIcon';
import InformationTab from './InformationTab/InformationTab';
import styles from './OrderFilling.module.scss';
import PaymentTab from './PaymentTab/PaymentTab';
import ShippingTab from './ShippingTab/ShippingTab';

export default function OrderFilling() {
	const [activeTabIndex, setActiveTabIndex] = useState(0);

	const moveToTab = (tabIndex: number) => {
		setActiveTabIndex(tabIndex);
	};

	return (
		<div className={styles.OrderFilling}>
			<Tabs
				className={styles.FillingTabs}
				selectedIndex={activeTabIndex}
				onSelect={index => setActiveTabIndex(index)}
			>
				<TabList className={styles.FillingTabList}>
					<Tab
						className={styles.FillingTab}
						selectedClassName={styles.SelectedFillingTab}
					>
						Information
					</Tab>
					<ArrowIcon />
					<Tab
						className={styles.FillingTab}
						selectedClassName={styles.SelectedFillingTab}
					>
						Shipping
					</Tab>
					<ArrowIcon />
					<Tab
						className={styles.FillingTab}
						selectedClassName={styles.SelectedFillingTab}
					>
						Payment
					</Tab>
					<ArrowIcon />
					<Tab
						className={styles.FillingTab}
						selectedClassName={styles.SelectedFillingTab}
					>
						Confirmation
					</Tab>
				</TabList>
				<TabPanel className={styles.FillingTabPanel}>
					<InformationTab moveToTab={moveToTab} />
				</TabPanel>
				<TabPanel className={styles.FillingTabPanel}>
					<ShippingTab moveToTab={moveToTab} />
				</TabPanel>
				<TabPanel className={styles.FillingTabPanel}>
					<PaymentTab moveToTab={moveToTab} />
				</TabPanel>
				<TabPanel className={styles.FillingTabPanel}>
					<ConfirmationTab moveToTab={moveToTab} />
				</TabPanel>
			</Tabs>
		</div>
	);
}
