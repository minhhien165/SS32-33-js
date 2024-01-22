class Book {
    constructor(author, name) {
        this.author = author;
        this.name = name;
    }
}

let books = [
    new Book('Tác giả A', 'Sách 1'),
    new Book('Tác giả B', 'Sách 2'),
    new Book('Tác giả A', 'Sách 3'),
];

let searchAuthor = prompt('Nhập tên tác giả cần tìm kiếm:');

let foundBooks = [];
for (let book of books) {
    if (book.author === searchAuthor) {
        foundBooks.push(book);
    }
}

if (foundBooks.length > 0) {
    console.log('Đối tượng Book tìm thấy:');
    for (let foundBook of foundBooks) {
        console.log('Tác giả:', foundBook.author, ', Tên sách:', foundBook.name);
    }
} else {
    console.log('Không tìm thấy sách.');
}
