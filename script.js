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
    title.append(`title: ${Book.title}`);
    const author = document.createElement('div');
    author.append(`author: ${Book.author}`);
    const pages = document.createElement('div');
    pages.append(`number of pages: ${Book.pages}`);
    const read = document.createElement('div');
    read.append(`read status: ${Book.read}`);
    card.append(title, author, pages, read);
    bookCards.append(card);
}

//add user input book into library array
const addBook = (e) => {
    e.preventDefault(); //to stop form from submitting and making page reload
    //get user input values from form
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;
    //create new book object using user values
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    printBook(newBook);
    console.table(myLibrary);
    document.querySelector('form').reset(); //to clear form for the next entries
}

//get submit button
const submitBook = document.querySelector('.submit-button');
//add book to array on button click
submitBook.addEventListener('click', addBook);