class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.isAvailable = true;
    }

    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`Sách "${this.title}" đã được mượn.`);
        } else {
            console.log(`Sách "${this.title}" không có sẵn để mượn.`);
        }
    }

    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`Sách "${this.title}" đã được trả.`);
        } else {
            console.log(`Sách "${this.title}" đã có sẵn, không cần trả.`);
        }
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

    isBookAvailable(bookTitle) {
        const book = this.books.find(book => book.title === bookTitle);
        if (book) {
            return book.isAvailable;
        } else {
            console.log(`Không tìm thấy sách có tiêu đề "${bookTitle}" trong thư viện.`);
            return false;
        }
    }
}

const myLibrary = new Library();

const book1 = new Book('Sách 1', 'Tác giả A', 2020);
const book2 = new Book('Sách 2', 'Tác giả B', 2018);

myLibrary.addBook(book1);
myLibrary.addBook(book2);

book1.borrow();
book2.borrow();

book1.returnBook();
book2.returnBook();

console.log(myLibrary.isBookAvailable('Sách 1'));
console.log(myLibrary.isBookAvailable('Sách 2'));
console.log(myLibrary.isBookAvailable('Sách 3'));