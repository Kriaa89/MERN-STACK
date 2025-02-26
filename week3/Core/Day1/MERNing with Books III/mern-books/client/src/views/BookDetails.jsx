import axios from "axios";
import { useEffect, useState } from "react"; // import UseState and UseEffect to use hooks in the function
import { useParams, useNavigate } from "react-router-dom";

function BookDetails() {
    const [book, setBook] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/book/${id}`)
            .then(res => {
                console.log(res.data);
                setBook(res.data);
            })
            .catch(err => {
                console.log(err)
            });
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
                <p><strong>Author:</strong>{book.author}</p>
                <p><strong>Pages:</strong>{book.pages}</p>
                <p><strong>Status:</strong>{book.isAvailable ? "Available" : "Not Available"}</p>
                <button onClick={handleBorrow} className="borrow-btn">
                    Borrow
                </button>
            </div>
        </div>
    );
}

export default BookDetails;