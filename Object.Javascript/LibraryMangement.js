class LibraryManagement {
    constructor() {
        this.arrBooks = [];
        this.oBookTaken={};
    }
    addBook(oBook) {
        this.oBook = oBook;
        this.arrBooks.push(this.oBook)
    }
    updateBook(id, updateBy, currentValue, updateValue) {
        this.oBook=this.searchBook(id,updateBy,currentValue);
        if (this.oBook) {
            this.oBook[updateBy]=updateValue;
        }
    }
    deleteBook(bookId) {
        // this.isExist = 0
        // this.arrBooks.forEach(element => {
        //     if (bookId === element.id) {
        //         this.isExist = 1
        //         this.obj = element;
        //     }
        // });
        // if (this.isExist == 0) {
        //     console.log('Enter the valid Id');
        // } else {
        //     const index = this.arrBooks.indexOf(this.obj)
        //     return this.arrBooks.splice(index, 1);
        // }
        const index=this.arrBooks.findIndex(object=> object.id==bookId);
        if (index == -1) {
                console.log('Enter the valid Id');
            } else {
                return this.arrBooks.splice(index, 1);
            }
    }
    getBook() {
        return this.arrBooks;
    }
    borrowBook(bookId,borrowName) {
        this.borrowName=borrowName;
        this.oBook=this.deleteBook(bookId)[0];
        Object.defineProperty(this.oBookTaken,this.borrowName,{
            value:this.oBook,
            configurable:true,
            enumerable:true,
            writable:true
        });
        // console.log(this.oBookTaken);
    }
    returnBook(borrowName) {
        this.addBook(this.oBookTaken[borrowName]);
    }
    searchBook(id, searchBy, sValue) {
        switch (searchBy) {
            case 'author':
                this.isExist = 0;
                this.arrBooks.forEach(obj => {
                    if (obj.id === id && obj.author === sValue) {
                        this.isExist = 1;
                        this.obj = obj;
                        // console.log('Book Founded');
                    }
                });
                if (this.isExist === 0) {console.log('Enter the valid author or id'); return 0;}
                return this.obj;
                break;
            case 'title':
                this.isExist = 0;
                this.arrBooks.forEach(obj => {
                    if (obj.id === id && obj.title === sValue) {
                        this.isExist = 1;
                        // console.log('Book Founded');
                        this.obj = obj;
                    }
                });
                if (this.isExist === 0) {console.log('Enter the valid title or id'); return 0;}
                return this.obj;
                break;
            case 'publicationDate':
                this.isExist= 0;
                this.arrBooks.forEach(obj => {
                    if (obj.id === id && obj.publicationDate === sValue) {
                        this.isExist = 1;
                        // console.log('Book Founded');
                        this.obj = obj
                    }
                });
                if (this.isExist === 0) {console.log('Enter the valid publication date or id'); return 0;}
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
// oLibraryManagement.addBook(oRevolution2020);
// oLibraryManagement.addBook(oMillionMutiniesNow);


// console.log(oLibraryManagement.getBook());   //get Method



// oLibraryManagement.updateBook(100,'author','ChetanBhagat','ChetanBhagat1');      //update method
// oLibraryManagement.updateBook(100,'title','MakingIndiaAwesome','Awesome');    //update method
// oLibraryManagement.updateBook(100,'publicationDate','21/07/2006','21/07/2000');    //update method

// console.log(oLibraryManagement.getBook());



// console.log("Book Founded =>",oLibraryManagement.searchBook(100,'author','ChetanBhagat'));      //Search method
// console.log(oLibraryManagement.searchBook(100,'author','ChetanBhagat'));      //Search method
// console.log(oLibraryManagement.searchBook(100,'author','ChetanBhagat'));      //Search method


// oLibraryManagement.deleteBook(100);             //delete method

// console.log(oLibraryManagement.getBook());

// oLibraryManagement.borrowBook(100,'vishal');        //borrow Book method
// oLibraryManagement.borrowBook(101,'paresh');        //borrow Book method

// oLibraryManagement.returnBook('vishal');            //return book method
// oLibraryManagement.returnBook('paresh');            //return book method


// console.log(oLibraryManagement.getBook());

