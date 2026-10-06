import { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Pages/Home'
import Addproduct from './Pages/Addproduct'
import Listproduct from './Pages/Listproduct'
import Edit from './Pages/Edit'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/addproduct' element={<Addproduct/>} />
        <Route path='/Listproduct' element={<Listproduct/>} />
 
                <Route
                    path="/edit-product/:id"
                    element={<Edit />}
                />
      </Routes>
    
    </div>
 <Footer />
    </>
  )
}

export default App
