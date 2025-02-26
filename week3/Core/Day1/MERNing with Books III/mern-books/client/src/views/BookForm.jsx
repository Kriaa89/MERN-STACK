import { useState } from "react"; // import UseState and UseEffect to use hooks in the function
import {  useNavigate } from "react-router-dom"; // import Link to use it in the return
import axios from "axios"; // import axios to make requests to the server


function BookForm() {
    const [book, setBook] = useState({ // this is the state that will hold the book data and we use the useState to initialize it with   an empty object
        title: "",
        author: "",
        pages: "",
        isAvailable: true
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/book", {
            ...book,
            pages : parseInt(pages), // we use parseInt to convert the string to an integer
        })
        .then(() => navigate('/'))
        .catch( err => setErrors(err.response.data.errors));
    };
    return (
        <div className="form-container">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={e =>  setBook({...book, title: e.target.value})} />
                    { errors.title && <p>{errors.title.message}</p>}
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" value={author} onChange={e => setBook({...book, author: e.target.value})} />
                </div>
                <div>
                    <label>Pages:</label>
                    <input type="number" value={pages} onChange={e => setBook({...book, pages: e.target.value})} />
                    { errors.author && <p>{errors.author.message}</p>}
                </div>
                <div>
                    <label>it is available ?</label>
                    <input type="checkbox" checked={isAvailable} onChange={e => setBook({...book, isAvailable: e.target.value})} />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}
export default BookForm;