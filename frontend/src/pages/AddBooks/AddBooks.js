import {useState} from "react";
import axios from 'axios'
import {useNavigate} from "react-router-dom";


const AddBooks = () => {

    const navigate = useNavigate()

    const [book, setBook] = useState({
        title: '',
        description: '',
        cover: '',
        price: null
    })

    const handleChange = (e) => {
        setBook((prev)=>({...prev, [e.target.name]: e.target.value}));
    }

    const handleClick = async (e) => {
        e.preventDefault()

        try {
            await axios.post('http://localhost:3001/books', book)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            Add Books

            <input type="text" placeholder='title' onChange={handleChange} name="title"/>
            <input type="text" placeholder='description' onChange={handleChange} name="description"/>
            <input type="text" placeholder='cover' onChange={handleChange} name="cover"/>
            <input type="number" placeholder='price' onChange={handleChange} name="price"/>
            <button onClick={handleClick}>add</button>
        </div>
    )
}

export default AddBooks