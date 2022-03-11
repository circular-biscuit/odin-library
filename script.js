//library array declaration
let myLibrary = [];

//Book object constructor
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

const bookCards = document.querySelector('.book-cards');
const printBook = (Book) => {
    // console.log(Book.index);
    const card = document.createElement('div');
    card.classList.add('card');
    const title = document.createElement('div');
    title.append(`"${Book.title}"`);
    const author = document.createElement('div');
    author.append(`by ${Book.author}`);
    const pages = document.createElement('div');
    pages.append(`${Book.pages} pages`);
    const read = document.createElement('div');
    read.append(`read status: ${Book.read}`);
    const removeBook = document.createElement('button');
    removeBook.textContent = 'Remove Book';
    card.append(title, author, pages, read, removeBook);
    bookCards.append(card);
}

//validation patterns for form inputs
const titlePattern = /^.{1,}$/;
const authorPattern = /^[a-zA-Z\s]{1,}$/;
const pagesPattern = /^[0-9]{1,}$/;

//add user input book into library array
const addBook = (e) => {
    e.preventDefault(); //to stop form from submitting and making page reload
    //get user input values from form
    let title = form.title.value;
    let author = form.author.value;
    let pages = form.pages.value;
    let read = form.read.value;
    //create new book object using user values
    if(titlePattern.test(title) && authorPattern.test(author) && pagesPattern.test(pages)){
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        printBook(newBook);
        console.table(myLibrary);
        document.querySelector('form').reset(); //to clear form for the next entries
    } else {
        console.log('your input is invalid');
    }
}

const form = document.querySelector('.add-book-form');
form.addEventListener('submit', addBook);



//temporary Book objects
const newBook = new Book(title, author, pages, read);
newBook.title = 'a little hatred';
newBook.author = 'joe abercrombie';
newBook.pages = 523;
newBook.read = 'yes';
myLibrary.push(newBook);
printBook(newBook);
console.table(myLibrary);

const newBook2 = new Book(title, author, pages, read);
myLibrary.push(newBook2);
newBook2.title = 'the trouble with peace';
newBook2.author = 'joe abercrombie';
newBook2.pages = 532;
newBook2.read = 'yes';
printBook(newBook2);
console.table(myLibrary);

const newBook3 = new Book(title, author, pages, read);
newBook3.title = 'the wisdom of crowds';
newBook3.author = 'joe abercrombie';
newBook3.pages = 544;
newBook3.read = 'yes';
myLibrary.push(newBook3);
printBook(newBook3);
console.table(myLibrary);