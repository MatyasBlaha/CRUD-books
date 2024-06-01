import { Link } from 'react-router-dom'

import './Navbar.css'
const Navbar = () => {

    return (
        <div className="navbar-container">
            <div>
                Books logo
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/edit-books">Edit Books</Link>
                <Link to="/add-books">Add books</Link>
            </div>
        </div>
    )
}

export default Navbar