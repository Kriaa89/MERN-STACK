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
        axios.get(``)
    })
}