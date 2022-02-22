const container = document.querySelector('.container');

const myLibrary = [];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages + ' pages';
  if (read === true) {
    read = 'Read';
  }
  else if (read === false) {
    read = 'Not Read';
  }
  this.read = read;
}

function update(library) {
  for (i = 0; i < library.length; i++) {
    let div = document.createElement('div');
    for (const property in library[i]) {
      let contentdiv = document.createElement('div');
      contentdiv.innerText = `${library[i][property]}`;
      if (property == "title") {
        contentdiv.style.fontWeight = "bold";
      }
      div.appendChild(contentdiv);
    }
    container.appendChild(div);
  }
}

myLibrary['HP'] = new Book("Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 500, true);
addBookToLibrary(myLibrary['HP']);
myLibrary['LOTR'] = new Book("The Lord of the Rings", 'J.R.R. Tolkien', 1000, false);
addBookToLibrary(myLibrary['LOTR']);
update(myLibrary);

const newbookform = document.querySelector('.newbookform');
const newbookbutton = document.querySelector('.newbookbutton');
newbookbutton.addEventListener(('click'), () => {
  if (newbookform.style.display === "none") {
    newbookform.style.display= "block";
    newbookbutton.innerText = "Hide";
  }
  else {
    newbookform.style.display= "none";
    newbookbutton.innerText = "Add Book";
  }
  
})

function newbookfunction() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  if ((title == '') || (author == '') || (pages == '')) {
    alert('Please fill in all the blanks');
  }
  else {
    let varname = `${title.split(" ").join("")}`;
    myLibrary[`${varname}`] = new Book(title, author, pages, read);
    addBookToLibrary(myLibrary[`${varname}`]);
    container.innerHTML = "";
    update(myLibrary);
  }
  
}




