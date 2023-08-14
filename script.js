let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
    displayArray(book);
}

const showInput = document.getElementById("newBook");
const dialog = document.querySelector("dialog");

showInput.addEventListener("click", () => dialog.showModal());
dialog.addEventListener("mousedown", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

const submitButton = document.getElementById("submit");
const pagesInput = document.getElementById("pagesInput");
const form = document.getElementById("myForm");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

        const formInputs = form.querySelectorAll("input");

        let isValid = true; 

        
        if (parseInt(pagesInput.value) < 0 || (pagesInput.value === "")) {
            isValid = false;
            pagesInput.classList.add("invalid"); 
        } else {
            pagesInput.classList.remove("invalid"); 
        }

        if (titleInput.value === "") {
            isValid = false;
            titleInput.classList.add("invalid"); 
        } else {
            titleInput.classList.remove("invalid"); 
        }

        if (authorInput.value === "") {
            isValid = false;
            authorInput.classList.add("invalid"); 
        } else {
            authorInput.classList.remove("invalid"); 
        }

        if (isValid) {
            const title = formInputs[0].value;
            const author = formInputs[1].value;
            const pages = formInputs[2].value;
            const read = formInputs[3].checked;

            const newBook = new Book(title, author, pages, read);
            addBookToLibrary(newBook);

            form.reset();

            dialog.close();
        }
    });
    function displayArray(book) {
    const bodyTwo = document.querySelector(".bodytwo");

    const bookDiv = document.createElement("div");
    bookDiv.className = "book-info";
    bookDiv.innerHTML = `
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <button class="readcheck ${book.read ? "true" : "false"}">Read: ${book.read ? "Yes" : "No"}</button>
        <button class="remove">Remove</button>
    `;


    bodyTwo.appendChild(bookDiv);
}


const bodyTwo = document.querySelector(".bodytwo");

bodyTwo.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove")) {
        const divToRemove = event.target.closest(".book-info");

        if (divToRemove) {
            bodyTwo.removeChild(divToRemove);
        }
    }


    if (event.target.classList.contains("readcheck")) {
        const button = event.target;
        const isRead = button.classList.contains("true");
        
        if (isRead) {
            button.classList.remove("true");
            button.classList.add("false");
        } else {
            button.classList.remove("false");
            button.classList.add("true");
        }
}
});