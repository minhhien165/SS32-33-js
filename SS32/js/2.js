function Information(id, name, phone, address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
}

let userInformation = new Information('1', 'John Doe', '123456789', '123 Main St');

delete userInformation.address;

userInformation.email = 'john.doe@example.com';

console.log(userInformation);
