import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        console.log('📋 All contacts:', contacts);
        return contacts;
    } catch (error) {
        console.error('❌ Error reading contacts:', error);
        return [];
    }
};

getAllContacts();
