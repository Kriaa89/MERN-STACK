import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
});

// all API calls in This file

export const getAllBooks = () => {
    return http.get('/books')
        .then(response => response.data)
        .catch(err => {throw err; });
}

export const getOneBook = (id) => {
    return http.get(`/books/${id}`)
        .then(response => response.data)
        .catch(err => {throw err; });
}

export const addBook = 