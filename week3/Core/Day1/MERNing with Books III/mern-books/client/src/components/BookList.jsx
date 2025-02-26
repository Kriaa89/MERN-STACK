import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/books')
            .then(res => setBooks(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author Name</th>
                        <th>Pages</th>
                        <th>Available</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book._id}>
                            <td>{book.title}</td>
                            <td>{book.authorName}</td>
                            <td>{book.pages}</td>
                            <td>
                                {book.isAvailable ? "Yes" : "No"}
                                <Link to={`/books/${book._id}/edit`} className="edit-link">
                                    Edit
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