let phoneBook = {
    Contact1: {
        name: "alice",
        phone: "123-456-7890",
        email: "alice@example.com",
        displayInfo() {
            console.log('Tên:', this.name);
            console.log('Số điện thoại:', this.phone);
            console.log('Email:', this.email);
        }
    },
    contact2: {
        name: "bob",
        phone: "987-654-3210",
        email: "bob@example.com",
        displayInfo() {
            console.log('Tên:', this.name);
            console.log('Số điện thoại:', this.phone);
            console.log('Email:', this.email);
        }
    }
};

for (let key in phoneBook) {
    let contact = phoneBook[key];
    console.log('------------------');
    contact.displayInfo();
}
