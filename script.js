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

}

const oathbringer = new Book('oathbringer', 'branderson', '1450', true);
console.log(oathbringer.info());
