let myLibrary = [];
let library = document.getElementById("libraryList");

// book constructor

function book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

//add new book to library

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

document.getElementById("myAddButton").addEventListener("click", function () {

    // onClick button, create new object and add it to array
    // ON CLICK EVENT LISTENER HINZUFÜGEN 

    let newTitle = document.getElementById("validationCustom01").value;
    let newAuthor = document.getElementById("validationCustom02").value;
    let newPages = document.getElementById("validationCustom03").value;
    let newStatus = document.getElementById("validationCustom04"); 
    let newStatusText = newStatus.options[newStatus.selectedIndex].text;


    const newBookEntry = new book(newTitle, newAuthor, newPages, newStatus);

    addBookToLibrary(newBookEntry);
    let newEntry = document.createElement("li");



    // loop through array  

    for (let i = 0; i < myLibrary.length; i++) {
        newEntry.innerText = "Title: " + newTitle + " Author: " + newAuthor + " Pages: " + newPages + " " + newStatusText;
        library.appendChild(newEntry);
        }

});



const removeChilds = (library) => {
    while (library.lastChild) {
        library.removeChild(library.lastChild);
    }
};


// delete list on clicking button 

document.getElementById("deleteButton").addEventListener("click", function () {
removeChilds(library);
});