import { useState } from "react";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

const EditBooks = () => {

    const [books, setBooks] = useState({
        title: '',
        description: '',
        cover: '',
        price: null
    })

    const { id } = useParams()
    console.log(id)

    const handleChange = (e) => {
        setBooks((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.put('http://localhost:3001/books/' + id, books)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h2>Edit book</h2>
            <input type="text" placeholder='title' onChange={handleChange} name="title"/>
            <input type="text" placeholder='description' onChange={handleChange} name="description"/>
            <input type="text" placeholder='cover' onChange={handleChange} name="cover"/>
            <input type="number" placeholder='price' onChange={handleChange} name="price"/>
            <button onClick={handleClick}>add</button>
        </div>
    )
}

export default EditBooks