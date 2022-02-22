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

myLibrary['HP'] = new Book('J.K. Rowling', "Harry Potter and the Philosopher's Stone", 500);
addBookToLibrary(myLibrary['HP']);
myLibrary['LOTR'] = new Book('J.R.R. Tolkien', "The Lord of the Rings", 1000);
addBookToLibrary(myLibrary['LOTR']);
update(myLibrary);

const newbookform = document.querySelector('.newbookform');
const newbook = document.querySelector('.newbook');
newbook.addEventListener(('click'), () => {
  if (newbookform.style.display === "none") {
    newbookform.style.display= "block";
  }
  else {
    newbookform.style.display= "none";
  }
  
})

function newbookfunction() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let varname = `${title.split(" ").join("")}`;
  myLibrary[`${varname}`] = new Book(title, author, pages);
  addBookToLibrary(myLibrary[`${varname}`]);
  container.innerHTML = "";
  update(myLibrary);
}




