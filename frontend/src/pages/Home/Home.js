import { useState } from "react";
import { FetchBooksRequest } from '../../services/FetchBooks/FetchBooksRequest'
import {useEffect} from "react";

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


    return (
        <div>
            {books.map((book) => (
                <div key={book.id}>
                    <h1>{book.title}</h1>
                    <p>{book.description}</p>
                    <img src={book.cover} alt={book.title} />
                    <p>{book.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Home