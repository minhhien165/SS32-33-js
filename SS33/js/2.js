class Contact {
    constructor(name, phoneNumber, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

var phoneBook = {
    Contact1: {
        name: "alice",
        phone: "123-456-7890",
        email: "alice@example.com"
    },
    contact2: {
        name: "bob",
        phone: "987-654-3210",
        email: "bob@example.com"
    }
};

for (let key in phoneBook) {
    let contact = phoneBook[key];
    console.log('------------------');
    console.log('Tên:', contact.name);
    console.log('Số điện thoại:', contact.phoneNumber);
    console.log('Email:', contact.email);
}
