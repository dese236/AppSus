import { utilService } from "../services/util.service.js";
import { defaultBooks } from './booksJson.js'
import { storageService } from './storage.service.js'
export const bookService = {
    query,
    getBookById,
    addReview,
    deleteReview,
    searchBook,
    createBook,
    getNextBookId
}



const KEY = 'books';
let gBooks = []
let bookCache = []

_createBooks();

function _createBooks() {
    let losdedeBooks = storageService.loadFromStorage(KEY) || []
    if (!losdedeBooks || !losdedeBooks.length) {
        losdedeBooks = defaultBooks
    }
    gBooks = losdedeBooks;
    _saveBooksToStorage()
}


function createBook(book) {
    book.reviews = []
    gBooks.unshift(book)
    _saveBooksToStorage()

    return Promise.resolve()
}


function query(filterBy) {
    
    if (filterBy) {
        let { name, minPrice, maxPrice } = filterBy
        maxPrice = maxPrice ? maxPrice : Infinity
        minPrice = minPrice ? minPrice : 0
        const booksToShow = gBooks.filter(book => book.title.toUpperCase().includes(name) &&
            book.listPrice.amount >= minPrice && book.listPrice.amount <= maxPrice)
        return Promise.resolve(booksToShow)
    }
    return Promise.resolve(gBooks);
}


function getBookById(id) {
    let book = gBooks.find(book => book.id === id)
    return Promise.resolve(book)
}


function addReview(bookToEdit, review) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookToEdit.id;
    })
    gBooks[bookIdx].reviews.unshift({ id: review.id, name: review.name, rate: review.rate, txt: review.txt, date: review.date })
    return Promise.resolve()
}


function deleteReview(bookId, reviewId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    const reviewIdx = gBooks[bookIdx].reviews.findIndex(review => review.id === reviewId);
    gBooks[bookIdx].reviews.splice(reviewIdx, 1);
    _saveBooksToStorage()
    return Promise.resolve();
}


function _saveBooksToStorage() {
    storageService.saveToStorage(KEY, gBooks)
}


function searchBook(keySerch) {
    console.log('service:', keySerch)
    keySerch = keySerch.trim()
    bookCache = storageService.loadFromStorage([keySerch])
    if (bookCache) {
        console.log('No need to fetch, retrieving from Cache');
        return Promise.resolve(bookCache)
    }
    const resPrm = axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${keySerch}`)
        .then((res) => {
            console.log('Axios RES:', res);
            bookCache = res.data
            storageService.saveToStorage([keySerch], res.data)
            return res.data
        })
        .catch((err) => {
            console.log('Cannot reach server:', err);
        })

    return resPrm
}


function getNextBookId(bookid){
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookid;
    })
    let nextBookrIdx = bookIdx + 1
    if (nextBookrIdx === gBooks.length) nextBookrIdx = 0
    return gBooks[nextBookrIdx].id

}
