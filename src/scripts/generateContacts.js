import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (count) => {
    try {
        const existingContacts = await readContacts();
        const newContacts = Array.from({ length: count }, createFakeContact);
        const updatedContacts = [...existingContacts, ...newContacts];

        await writeContacts(updatedContacts);
        console.log(`✅ Successfully added ${count} new contacts!`);
    } catch (error) {
        console.error('❌ Error generating contacts:', error);
    }
};

if (process.argv.length > 2) {
    const count = parseInt(process.argv[2], 10) || 5;
    generateContacts(count);
}

generateContacts(5);
