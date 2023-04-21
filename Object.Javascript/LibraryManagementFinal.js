class LibraryManagement {
    constructor() {
        this.arrBooks = [];
        this.oBookTaken = {};
    }
    addBook(oBook) {
        this.oBook = oBook;
        this.arrBooks.push(this.oBook)
    }
    updateBook(id, updateBy, updateValue) {
        const nIndex = this.arrBooks.findIndex(object => object.id == id);
        if (nIndex!==-1) {
            this.obj = this.arrBooks[nIndex];
            this.obj[updateBy]=updateValue;
        }
    }
    deleteBook(bookId) {
        const index = this.arrBooks.findIndex(object => object.id == bookId);
        if (index == -1) {
            console.log('Enter the valid Id');
        } else {
            return this.arrBooks.splice(index, 1);
        }
    }
    getBook() {
        return this.arrBooks;
    }
    borrowBook(bookId, borrowName) {
        this.borrowName = borrowName;
        const index = this.arrBooks.findIndex(object => object.id == bookId);
        if (index == -1 || this.arrBooks[index].isBorrowed==true) {
            console.log('Enter the valid Id or Already Borrowed');
        } else {
            this.arrBooks[index].isBorrowed=true;
            Object.defineProperty(this.oBookTaken, this.borrowName, {
                value: this.arrBooks[index],
                configurable: true,
                enumerable: true,
                writable: true
            });
        }
    }
    
    returnBook(borrowName) {
        this.borrowName = borrowName;
        const oBook=this.oBookTaken[this.borrowName];
        const index = this.arrBooks.indexOf(oBook);
        if (index == -1 ) {
            console.log('Enter the valid Borrowed Name');
        } else {
            this.arrBooks[index].isBorrowed=false;
            delete this.oBookTaken[this.borrowName];
            console.log(this.oBookTaken)
        }
    
    }
    searchBook(id, sValue) {
        const nIndex = this.arrBooks.findIndex((object) => (object.id == id && object.author == sValue) || (object.id == id && object.title == sValue) || (object.id == id && object.publicationDate == sValue));
        if (nIndex == -1) {
            console.log('Enter the valid Id or Name');
            return 0;
        } else {
            this.obj = this.arrBooks[nIndex];
            return this.obj;
        }
    }
}

class Book {
    constructor(id, title, author, publicationDate) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;
        this.isBorrowed=false;
    }
}


const oMakingIndiaAwesome = new Book(100, 'MakingIndiaAwesome', 'ChetanBhagat', '21/07/2006');
const oRevolution2020 = new Book(101, 'Revolution2020', 'ChetanBhagat', '09/06/2007');
const oMillionMutiniesNow = new Book(102, 'A_MillionMutiniesNow', 'Naipaul', '10/12/2010');


const oLibraryManagement = new LibraryManagement();


oLibraryManagement.addBook(oMakingIndiaAwesome); //add Method
oLibraryManagement.addBook(oRevolution2020);
oLibraryManagement.addBook(oMillionMutiniesNow);


// console.log(oLibraryManagement.getBook());   //get Method



// oLibraryManagement.updateBook(100,'author','ChetanBhagat1');          //update method
// oLibraryManagement.updateBook(100,'title','Awesome');                //update method
// oLibraryManagement.updateBook(100,'publicationDate','21/07/2000');    //update method

// console.log(oLibraryManagement.getBook());



// console.log("Book Founded =>",oLibraryManagement.searchBook(100,'ChetanBhagat'));      //Search method
// console.log("Book Founded =>",oLibraryManagement.searchBook(100,'MakingIndiaAwesome'));      //Search method
// console.log("Book Founded =>",oLibraryManagement.searchBook(100,'21/07/2006'));      //Search method


// oLibraryManagement.deleteBook(100);             //delete method

// console.log(oLibraryManagement.getBook());

// oLibraryManagement.borrowBook(100,'vishal');        //borrow Book method
// console.log(oLibraryManagement.oBookTaken);
// oLibraryManagement.borrowBook(101,'paresh');        //borrow Book method

// oLibraryManagement.returnBook('vishal');            //return book method
// oLibraryManagement.returnBook('paresh');            //return book method


// console.log(oLibraryManagement.getBook());

