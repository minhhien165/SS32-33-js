function Information() {
    this.id = '';
    this.name = '';
    this.phone = '';
    this.address = '';
}

Information.id = prompt('Nhập ID:');
Information.name = prompt('Nhập tên:');
Information.phone = prompt('Nhập số điện thoại:');
Information.address = prompt('Nhập địa chỉ:');


console.log('Thông tin cá nhân:');
console.log('ID: ' + Information.id);
console.log('Tên: ' + Information.name);
console.log('Số điện thoại: ' + Information.phone);
console.log('Địa chỉ: ' + Information.address);


