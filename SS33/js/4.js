class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }

    displayInfo() {
        console.log(`Tiêu đề: ${this.title}`);
        console.log(`Tác giả: ${this.author}`);
        console.log(`Năm xuất bản: ${this.publishedYear}`);
        console.log('-------------------------');
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Sách "${book.title}" đã được thêm vào thư viện.`);
    }

    displayAllBooks() {
        console.log('Danh sách sách trong thư viện:');
        this.books.forEach(book => {
            book.displayInfo();
        });
    }
}

const myLibrary = new Library();

const book1 = new Book('Sách 1', 'Tác giả A', 2020);
const book2 = new Book('Sách 2', 'Tác giả B', 2018);

myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.displayAllBooks();
