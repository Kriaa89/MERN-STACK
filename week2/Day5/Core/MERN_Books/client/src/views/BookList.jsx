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
        <form onSubmit={handleSubmit}>
            

        </form>
    )
}