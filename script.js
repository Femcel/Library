const myLibrary = [];
const containerDiv = document.getElementById("container");

const dialog = document.querySelector("dialog");
const newBtn = document.getElementById("new_book");
const closeForm = document.getElementById("close");
const submitBtn = document.querySelector("#submit");
const form = document.querySelector("#form");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

function Book (title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

function addToLibrary(book) {
	myLibrary.push(book);
}

function addToPage(book) {
	let div = document.createElement("div");
	div.classList.add("book_card"); 
	containerDiv.appendChild(div);

	let para = document.createElement("p");
	para.textContent = `${book.title} || ${book.author} || ${book.pages}`;
	div.appendChild(para);
}

submitBtn.addEventListener('click', (Event) => {
	let book = new Book(title.value, author.value, pages.value);
	addToLibrary(book);
	addToPage(book);
	form.reset();
	dialog.close();

	Event.preventDefault();
});

newBtn.addEventListener('click', () => {
	dialog.showModal();
});

closeForm.addEventListener('click', (Event) => {
	form.reset();
	dialog.close();

	Event.preventDefault();
});