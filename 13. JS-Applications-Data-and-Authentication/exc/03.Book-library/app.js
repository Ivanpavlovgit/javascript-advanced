async function request(url, options) {
    const response = await fetch(url, options);
    if (response.ok !== true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}


//requests:
//load all books from server
async function getAllBooks() {
    const books = await request('http://localhost:3030/jsonstore/collections/books');
    return books;
}


//create new book
async function createBook(book) {
    const result = await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    return result;
}

//update an existing book with ID
async function updateBook(id, book) {
    const result = await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    return result;
}

//delete  a book with ID


//event listener or load button
//on the create button
//logic for updating the input form and filling existing values(on edit)
//program logic to reverse above changers to form
//event listeners on the delete & edit buttons


//main function
//attach event listeners
// load all books and display them