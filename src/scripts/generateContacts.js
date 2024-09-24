import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  let contactsList = [];
  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    contactsList.push(contact);
  }
  writeContacts(contactsList);
};

generateContacts(5);
