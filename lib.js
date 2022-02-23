// initialize container div and library array
const container = document.querySelector('.container');
let myLibrary = [];


// create book constructor
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

// create function to add book to library array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// create function that displays all books from library array to html
function displaybooks(library) {
  container.innerHTML = ''; // clears container div
  // adds all objects in array (creates div for each property in object)
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
    // adds a remove button to each book object
    let removebutton = document.createElement('button');
    removebutton.innerText = 'Remove Book';
    removebutton.setAttribute('class', 'removebutton');
    removebutton.setAttribute('id', i);
    div.appendChild(removebutton);
    container.appendChild(div);
  }
  // adds remove function to each remove button
  let removebuttons = document.querySelectorAll('.removebutton');
  removebuttons.forEach((button) => {
    button.addEventListener(('click'), () => {
      myLibrary.splice(button.id ,1);
      displaybooks(myLibrary);
      console.log(myLibrary);
    })
  })
}

// initialize example books (to be removed in future revisions)
let newbook = new Book("Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 500, true);
addBookToLibrary(newbook);
newbook = new Book("The Lord of the Rings", 'J.R.R. Tolkien', 1000, false);
addBookToLibrary(newbook);
displaybooks(myLibrary);

// Show/Hide functionality to Add Book button
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

// creates form (not form element) for adding new books
function newbookfunction() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  if ((title == '') || (author == '') || (pages == '')) {
    alert('Please fill in all the blanks');
  }
  else {
    newbook = new Book(title, author, pages, read);
    addBookToLibrary(newbook);
    container.innerHTML = "";
    displaybooks(myLibrary);
  }
}






