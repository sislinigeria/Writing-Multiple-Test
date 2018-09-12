describe('Address Book', function() {
	it('should be able to add a contact', function() {
		var addressBook = new AddressBook(),
			thisContact = new Contact();

		addressBook.addContact(thisContact);

		//the best way to know if the new contact was added to the Address Book
		expect(addressBook.getContact(0)).toBe(thisContact);
	});

	it('should be able to delete a contact', function() {
		var addressBook = new AddressBook(), thisContact = new Contact();

		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);

		expect(addressBook.getContact(0)).not.toBeDefined();
	});
});

describe('Async Address Book', function() {
	var addressBook = new AddressBook();

	beforeEach(function(done) {
		addressBook.getInitialContacts(function() {
			done();
		});
	});

	it('should grab initial contacts', function(done) {
		expect(addressBook.initialComplete).toBe(true);
		done();
	});
});