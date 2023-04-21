// Scenario: Implementing a Library Management System
// You have been tasked with implementing a library management system using 
// JavaScript. Your system should allow users to add new books, update existing 
// books, delete books, and display all the books in the library. In addition to 
// the basic functionality, you should implement a book borrowing system that allows
//  users to borrow books and return books. You should also implement a feature that 
//  allows users to search for books by title, author, or publication date. Here's an 
//  example of how you can implement this:
// Task: Implement the library management functionality of the library management system using 
// JavaScript. Your system should have the following properties and methods:
// 1. Properties:
// * books: An array to store the books in the library.
// 2. Methods:
// * addBook: A method to add a new book to the library.
// * updateBook: A method to update an existing book in the library.
// * deleteBook: A method to delete a book from the library.
// * getBooks: A method to get all the books in the library.
// * borrowBook: A method to allow a user to borrow a book from the library.
// * returnBook: A method to allow a user to return a book to the library.
// * searchBooks: A method to search for books by title, author, or publicationdate.

class LibraryManagement {
    constructor() {
        this.arrBooks = [];
    }
    addBook(book) {
        this.book = book;
        this.arrBooks.push(this.book)
    }
    updateBook(id, updateBy, currentValue, updateValue) {
        switch (updateBy) {
            case 'author':
                this.isExist = 0;
                this.arrBooks.forEach(obj => {
                    if (obj.id === id && obj.author === currentValue) {
                        obj.author = updateValue;
                        this.isExist = 1;
                        console.log('author is updated');
                    }
                });
                if (this.isExist === 0) console.log('Enter the valid old Value or id');
                break;
            case 'title':
                this.isExist = 0;
                this.arrBooks.forEach(obj => {
                    if (obj.id === id && obj.title === currentValue) {
                        obj.title = updateValue;
                        this.isExist = 1;
                        console.log('title is updated');
                    }
                });
                if (this.isExist === 0) console.log('Enter the valid old Value or id');
                break;
            case 'publicationDate':
                this.isExist = 0;
                this.arrBooks.forEach(obj => {
                    if (obj.id === id && obj.publicationDate === currentValue) {
                        obj.publicationDate = updateValue;
                        this.isExist = 1;
                        console.log('publication date is updated');
                    }
                });
                if (this.isExist === 0) console.log('Enter the valid old Value or id');
                break;

            default:
                console.log("Enter the valid Key");
                break;
        }
    }
    deleteBook(bookId) {
        this.isExist = 0
        this.arrBooks.forEach(element => {
            if (bookId === element.id) {
                this.isExist = 1
                this.obj = element;
            }
        });
        if (this.isExist == 0) {
            console.log('Enter the valid Id');
        } else {
            const index = this.arrBooks.indexOf(this.obj)
            this.arrBooks.splice(index, 1);
        }
    }
    getBook() {
        return this.arrBooks;
    }
    borrowBook() {

    }
    returnBook() {

    }
    searchBook(id, searchBy, sValue) {
        switch (searchBy) {
            case 'author':
                this.isExist = 0;
                this.arrBooks.forEach(obj => {
                    if (obj.id === id && obj.author === sValue) {
                        this.isExist = 1;
                        this.obj = obj;
                        console.log('Book Founded');
                    }
                });
                if (this.isExist === 0) console.log('Enter the valid old Value or id');
                return this.obj;
                break;
            case 'title':
                this.isExist = 0;
                this.arrBooks.forEach(obj => {
                    if (obj.id === id && obj.title === sValue) {
                        this.isExist = 1;
                        console.log('Book Founded');
                        this.obj = obj;
                    }
                });
                if (this.isExist === 0) console.log('Enter the valid old Value or id');
                return this.obj;
                break;
            case 'publicationDate':
                this.isExist= 0;
                this.arrBooks.forEach(obj => {
                    if (obj.id === id && obj.publicationDate === sValue) {
                        this.isExist = 1;
                        console.log('Book Founded');
                        this.obj = obj
                    }
                });
                if (this.isExist === 0) console.log('Enter the valid old Value or id');
                return this.obj;
                break;

            default:
                return "Enter the valid Key";
                break;
        }
    }
}

function Book(id, title, author, publicationDate) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;

}

const oMakingIndiaAwesome = new Book(100, 'MakingIndiaAwesome', 'ChetanBhagat', '21/07/2006');
const oRevolution2020 = new Book(101, 'Revolution2020', 'ChetanBhagat', '09/06/2007');
const oMillionMutiniesNow = new Book(102, 'A_MillionMutiniesNow', 'Naipaul', '10/12/2010');


const oLibraryManagement = new LibraryManagement();


oLibraryManagement.addBook(oMakingIndiaAwesome); //add Method
oLibraryManagement.addBook(oRevolution2020);
oLibraryManagement.addBook(oMillionMutiniesNow);


// console.log(oLibraryManagement.getBook());   //get Method



// oLibraryManagement.updateBook(100,'author','ChetanBhagat','ChetanBhagat1');      //update method
// oLibraryManagement.updateBook(100,'title','MakingIndiaAwesome','Awesome');    //update method
// oLibraryManagement.updateBook(100,'publicationDate','21/07/2006','21/07/2000');    //update method

// console.log(oLibraryManagement.getBook());



// console.log(oLibraryManagement.searchBook(100,'author','ChetanBhagat'));      //Search method
// console.log(oLibraryManagement.searchBook(100,'author','ChetanBhagat'));      //Search method
// console.log(oLibraryManagement.searchBook(100,'author','ChetanBhagat'));      //Search method


// oLibraryManagement.deleteBook(103);         //delete method
// console.log(oLibraryManagement.getBook());



