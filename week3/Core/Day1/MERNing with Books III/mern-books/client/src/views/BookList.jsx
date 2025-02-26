import { useEffect, useState } from "react"; // import UseState and UseEffect to use hooks in the function
import {  Link } from "react-router-dom"; // import Link to use it in the return
import axios from "axios"; // import axios to make requests to the server


function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/book")
            .then(res => setBooks(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="container">
            <table className="book-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pages</th>
                        <th>Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book._id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.pages}</td>
                            <td>{book.isAvailable ? "Yes" : "No"}
                                <Link to={`/books/${book._id}/edit`} className="btn">
                                Edit
                                </Link>
                            </td>
                            <td>
                                <Link to={`/books/${book._id}`} className="btn">
                                    Book Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookList;