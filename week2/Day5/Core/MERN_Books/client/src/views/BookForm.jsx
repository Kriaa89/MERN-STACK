import { useState } from "react"; // import UseState and UseEffect to use hooks in the function
import {  useNavigate } from "react-router-dom"; // import Link to use it in the return
import axios from "axios"; // import axios to make requests to the server


function BookForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState("");
    const [isAvailable, setIsAvailable] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/books", {
            title,
            author,
            pages : parseInt(pages), // we use parseInt to convert the string to an integer
            isAvailable
        })
        .then(() => navigate('/'))
        .catch(console.log(err));
    };
    return (
        <div className="form-container">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
                </div>
                <div>
                    <label>Pages:</label>
                    <input type="number" value={pages} onChange={e => setPages(e.target.value)} />
                </div>
                <div>
                    <label>it is available ?</label>
                    <input type="checkbox" checked={isAvailable} onChange={e => setIsAvailable(e.target.checked)} />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}
export default BookForm;