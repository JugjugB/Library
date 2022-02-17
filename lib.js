const container = document.querySelector('.container');

let myLibrary = [];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function Book(author, title) {
  this.author = author;
  this.title = title;
  this.addtolib = function () {
    myLibrary.push(title);
  }
}

function update(library) {
  for (i = 0; i < library.length; i++) {
    let div = document.createElement('div');
    div.textContent = library[i];
    container.appendChild(div);
  }
}

const HP = new Book('J.K. Rowling', "Harry Potter and the Philosopher's Stone");
HP.addtolib();
const LOTR = new Book('J.R.R. Tolkien', "The Lord of the Rings");
LOTR.addtolib();

update(myLibrary);


