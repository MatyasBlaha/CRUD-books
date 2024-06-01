import './App.css';
import {Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home/Home'
import EditBooks from './pages/Books/EditBooks'
import AddBooks from './pages/AddBooks/AddBooks'

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/edit-books" element={<EditBooks/>}></Route>
          <Route exact path="/add-books" element={<AddBooks/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
