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
    useEffect(() => {
        axios.get(`http://localhost:8000/api/book/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.log(err));
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/book/${id}`, book)
            .then(res => navigate('/'))
            .catch(err => setErrors(err.resonse.data.errors));
    };
    return (
        
    )
}