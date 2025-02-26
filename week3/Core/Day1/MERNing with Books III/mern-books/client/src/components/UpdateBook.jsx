import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateBook() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title: '',
        authorName: '',
        pages: '',
        isAvailable: true
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/books/${id}`, book)
            .then(() => navigate('/'))
            .catch(err => setErrors(err.response.data.errors));
    };

    return (
        <div className="form-container">
            <h2>Update Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input 
                        type="text"
                        value={book.title}
                        onChange={e => setBook({...book, title: e.target.value})}
                    />
                    {errors.title && 
                        <p className="error-message">{errors.title.message}</p>
                    }
                </div>
                <div className="form-group">
                    <label>Author Name:</label>
                    <input 
                        type="text"
                        value={book.authorName}
                        onChange={e => setBook({...book, authorName: e.target.value})}
                    />
                    {errors.authorName && 
                        <p className="error-message">{errors.authorName.message}</p>
                    }
                </div>
                <div className="form-group">
                    <label>Pages:</label>
                    <input 
                        type="number"
                        value={book.pages}
                        onChange={e => setBook({...book, pages: e.target.value})}
                    />
                    {errors.pages && 
                        <p className="error-message">{errors.pages.message}</p>
                    }
                </div>
                <button type="submit" className="btn">Update Book</button>
            </form>
        </div>
    );
}
export default UpdateBook;
