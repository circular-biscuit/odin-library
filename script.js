//library array declaration
let myLibrary = [];

//Book object constructor
function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

const bookCards = document.querySelector('.book-cards');
// const printBook = (Book) => {
//     // console.log(Book.index);
//     const card = document.createElement('div');
//     card.classList.add('card');
//     const title = document.createElement('div');
//     title.append(`"${Book.title}"`);
//     const author = document.createElement('div');
//     author.append(`by ${Book.author}`);
//     const pages = document.createElement('div');
//     pages.append(`${Book.pages} pages`);
//     const isRead = document.createElement('div');
//     isRead.append(`${Book.isRead.value}`);
//     const removeBook = document.createElement('button');
//     removeBook.textContent = 'Remove Book';
//     card.append(title, author, pages, isRead, removeBook);
//     bookCards.append(card);
// }

const printBook = (Book) => {
    // console.log(Book.index);
    const card = document.createElement('div');
    card.classList.add('card');
    const title = document.createElement('div');
    title.classList.add('bookTitle');
    title.append(`${Book.title}`);
    const author = document.createElement('div');
    author.append(`by ${Book.author}`);
    const pages = document.createElement('div');
    pages.append(`${Book.pages} pages`);

    const isRead = document.createElement('button');
    isRead.classList.add('isReadButton');
    switch (Book.isRead.checked){
        case true:
            isRead.textContent = `${Book.isRead.value}`;
            isRead.style.backgroundColor = 'limeGreen';
            break;
        case false:
            isRead.textContent = `${Book.isRead.value}`;
            isRead.style.backgroundColor = 'crimson';
            break;
    }
    const removeBook = document.createElement('button');
    removeBook.textContent = 'Remove Book';
    card.append(title, author, pages, isRead, removeBook);
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
    let isRead = form.isRead;
    //create new book object using user values
    if(titlePattern.test(title) && authorPattern.test(author) && pagesPattern.test(pages)){
        if (isRead.checked){
            isRead.value = 'you have read this book';
            const newBook = new Book(title, author, pages, isRead);
            myLibrary.push(newBook);
            printBook(newBook);
            // console.table(myLibrary);
            document.querySelector('form').reset(); //to clear form for the next entries
        } else {
            isRead.value = 'you have not read this book';
            const newBook = new Book(title, author, pages, isRead);
            myLibrary.push(newBook);
            printBook(newBook);
            // console.table(myLibrary);
            document.querySelector('form').reset(); //to clear form for the next entries
        }
    } else {
        console.log('your input is invalid');
    }
}

const form = document.querySelector('.add-book-form');
form.addEventListener('submit', addBook);