import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Gettables from './components/Gettables'
import State from './components/State'
import Count from './components/Count'
import Message from './components/Message'
import Product from './components/Product'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Gettable' element={<Gettables />} />
        <Route path='/state' element={<State />} />
        <Route path='/count' element={<Count />} />
        <Route path='/message' element={<Message />} />
        <Route path='/product' element={<Product />} />

        
   </Routes>
    </>
  )
}

export default App
