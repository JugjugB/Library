const container = document.querySelector('.container');

const myLibrary = [];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function Book(author, title, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages + ' pages';
}

function update(library) {
  for (i = 0; i < library.length; i++) {
    let div = document.createElement('div');
    for (const property in library[i]) {
      let content = document.createTextNode(`${library[i][property]}\n`);
      div.appendChild(content);
    }
    container.appendChild(div);
  }
}

const HP = new Book('J.K. Rowling', "Harry Potter and the Philosopher's Stone", 500);
addBookToLibrary(HP);
const LOTR = new Book('J.R.R. Tolkien', "The Lord of the Rings", 1000);
addBookToLibrary(LOTR);

update(myLibrary);


