import ContactDetails from '@/components/modules/Contacts/ContactDetails/ContactDetails';
import FeedbackForm from '@/components/modules/Contacts/FeedbackForm/FeedbackForm';
import styles from './ContactsSection.module.scss';

export default function ContactsSection() {
	return (
		<div className={styles.ContactsSection}>
			<ContactDetails />
			<FeedbackForm />
		</div>
	);
}
