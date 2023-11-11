const myLibrary = [];

function Book (title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

function addToLibrary(book) {
	myLibrary.push(book);
}

const book1 = new Book("A Hora da Estrela", "Clarice Lispector", 100);
addToLibrary(book1);
console.log(myLibrary);