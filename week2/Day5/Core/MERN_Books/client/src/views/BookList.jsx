import { useEffect, useState } from "react"; // import UseState and UseEffect to use hooks in the function
import {  useNavigate } from "react-router-dom"; // import Link to use it in the return
import axios from "axios"; // import axios to make requests to the server


function BookForm() {
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
                            <td>{book.title}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}