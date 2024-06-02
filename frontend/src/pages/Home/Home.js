import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { FetchBooksRequest } from '../../services/FetchBooks/FetchBooksRequest'

import axios from "axios";

const Home = () => {

    const [books, setBooks] = useState([])
    const fetchBooks = async () => {
        try {
            const books = await FetchBooksRequest()
            setBooks(books)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    const handleClick = async (id) => {
        try{
            await axios.delete('http://localhost:3001/books/'+id)
            window.location.reload()
        }catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            {books.map((book) => (
                <div key={book.id}>
                    <h1>{book.title}</h1>
                    <p>{book.description}</p>
                    <img src={book.cover} alt={book.title} />
                    <p>{book.price}</p>
                    <button onClick={()=>handleClick(book.id)}>Delete</button>
                    <button><Link to={`/edit-books/${book.id}`}>Edit</Link></button>
                </div>
            ))}
        </div>
    )
}

export default Home