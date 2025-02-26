import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <h1>Favorite Books</h1>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/books/new" className="nav-link">Add a New Book</Link>
            </div>
        </header>
    );
}

export default Header;