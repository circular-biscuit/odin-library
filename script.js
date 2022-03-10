//library array declaration
let myLibrary = [];

//Book object constructor
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
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
    console.table(myLibrary);
    document.querySelector('form').reset(); //to clear form for the next entries
}

//get submit button
const submitBook = document.querySelector('.submit-button');
//add book to array on button click
submitBook.addEventListener('click', addBook);