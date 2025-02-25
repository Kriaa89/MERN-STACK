import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <h1>Favorite Book</h1>
            <div className="nav-links">
                <Link to="/" className="nav-link">catalog</Link>
                <Link to="/books/new" className="nav-link">Add a Book</Link>
            </div>
            
        </div>
    );
}
export default Header;