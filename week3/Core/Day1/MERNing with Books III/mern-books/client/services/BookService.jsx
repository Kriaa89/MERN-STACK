import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
});

// all API calls in This file

export const getAllBooks = () => {
    return http.get('/books')
        .then(response => response.data)
        .catch(err => {throw err; });
};

export const getOneBook = (id) => {
    return http.get(`/books/${id}`)
        .then(response => response.data)
        .catch(err => {throw err; });
};

export const createBook = (book) => {
    return http.post('/books', book)
        .then(response => response.data)
        .catch(err => {throw err; });
};
export const updateBook = (id, book) => {
    return http.put(`/books/${id}`, book)
        .then(response => response.data)
        .catch(err => {throw err; });
};

export const deleteBook = (id) => {
    return http.delete(`/books/${id}`)
        .then(response => response.data)
        .catch(err => {throw err; });
}