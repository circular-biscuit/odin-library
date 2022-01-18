//library array declaration
let myLibrary = [];

//Book object constructor
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//book info display function added to prototype
Book.prototype.info = function(){
    if (Book.read){
        return (Book.title + ' by ' + Book.author + ', ' + Book.pages + ' pages, yes I have read it.')
    } else { 
        return (Book.title + ' by ' + Book.author + ', ' + Book.pages + ' pages, no i have not read it.')
    }
}

//add user input book into library array
function addBookToLibrary(){
    let title = prompt('enter book title')
    let author = prompt('enter book author')
    let pages = prompt('enter number of pages')
    let read = prompt('enter true if book read, false if not')
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    console.log(myLibrary)
}

const addBookButton = document.querySelector('#addBookButton');
addBookButton.addEventListener('click', addBookToLibrary);


