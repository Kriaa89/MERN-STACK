import { useState, useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios'; 

function updateBook() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title: "",
        author: "",
        pages: "",
        isAvailable: true
    });
    const [errors , setErrors] = useState({});
    useEffect(() => { // the useEffect will run when the component loads
        axios.get(`http://localhost:8000/api/book/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.log(err));
    }, [id]);
    const handleSubmit = (e) => { // the handleSubmit will handle the form submission
        e.preventDefault();
        axios.put(`http://localhost:8000/api/book/${id}`, book)
            .then(res => navigate('/'))
            .catch(err => setErrors(err.resonse.data.errors));
    };
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label> Title: </label>
                    <input type="text" value={book.title} onChange={e => setBook({...book, title: e.target.value})}/>
                    { errors.title && <p>{errors.title.message}</p>}
                </div>
                <div className='form-group'>
                    <label> Author: </label>
                    <input type="text" value={book.author} onChange={e => setBook({...book, author: e.target.value})}/>
                    { errors.author && <p>{errors.author.message}</p>}
                </div>
                <div className='form-group'>
                    <label> Pages: </label>
                    <input type="number" value={book.pages} onChange={e => setBook({...book, pages: e.target.value})}/>
                    { errors.pages && <p>{errors.author.pages}</p>}
                </div>
                <button type="submit">Update Book</button>
            </form>
        </div>
    )
}