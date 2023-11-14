const myLibrary = [];
const containerDiv = document.getElementById("container");

const dialog = document.querySelector("dialog");
const openDialog = document.getElementById("new_book");
const closeDialog = document.getElementById("close_dialog");
const dialogTitle = document.querySelector("#title");
const dialogAuthor = document.querySelector("#author");
const dialogPages = document.querySelector("#pages");
const dialogSubmit = document.querySelector("#submit");
const dialogForm = document.querySelector("#form");

dialogSubmit.addEventListener('click', (Event) => {
	let book = new Book(dialogTitle.value, dialogAuthor.value, dialogPages.value);
	addToPage(book);
	dialogForm.reset();
	dialog.close();

	Event.preventDefault();
});

openDialog.addEventListener('click', () => {
	dialog.showModal();
});

closeDialog.addEventListener('click', () => {
	dialog.close();
});

function Book (title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

function addToLibrary(book) {
	myLibrary.push(book);
}
function addToPage(book) {
	let para = document.createElement("p");
	para.textContent = `${book.title} `;
	containerDiv.appendChild(para);

}

const book1 = new Book("A Hora da Estrela", "Clarice Lispector", 100);
const book2 = new Book("Um Sopro de Vida", "Clarice Lispector", 180);
const book3 = new Book("A Obscena Senhora D", "Hilda Hilst", 50);
const book4 = new Book("Mrs. Dalloway", "Virginia Woolf", 250);
const book5 = new Book("Vidas Secas", "Graciliano Ramos", 150);

addToLibrary(book1);
addToLibrary(book2);
addToLibrary(book3);
addToLibrary(book4);
addToLibrary(book5);

myLibrary.forEach((book) => addToPage(book));

console.log(myLibrary);
