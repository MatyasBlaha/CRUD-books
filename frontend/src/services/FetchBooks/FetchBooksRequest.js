import axios from 'axios';


export const FetchBooksRequest =  async () => {
    try {
        const response = await axios.get('http://localhost:3001/books')
        return response.data
    } catch (err) {
        console.log(err)
    }
}
