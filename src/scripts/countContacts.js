import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        console.log(`📊 Total contacts: ${contacts.length}`);
        return contacts.length;
    } catch (error) {
        console.error('❌ Error counting contacts:', error);
        return 0;
    }
};

countContacts();
