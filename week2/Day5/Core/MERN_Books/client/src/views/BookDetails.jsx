import axios from "axios";
import { useEffect, useState } from "react"; // import UseState and UseEffect to use hooks in the function
import { useParams, useNavigate } from "react-router-dom";

function BookDetails() {
    const [book, setBook] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/book/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleBorrow = () => {
        axios.delete(`http://localhost:8000/api/book/${id}`)
            .then(() => navigate('/'))
            .catch(err => console.log(err));
    };
    return (
        <div className="detail-container">
            <h2>{book.title}</h2>
            <div className="detail-container">
                <p><strong>Author:</strong></p>
                <p><strong>Pages:</strong></p>
                <p><strong>Status:</strong></p>

            </div>
        </div>
    )
}