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
function addBook(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    console.log(myLibrary)
}

//get submit button
const submitBook = document.querySelector('.submit-button');
//add book to array on button click
submitBook.addEventListener('click', addBook);

