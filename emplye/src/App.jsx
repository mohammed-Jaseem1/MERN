import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Add from './components/Add'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Routes>
     
        <Route path='/' element={<Add />} />
        <Route path='/view' element={<View />} />
    
        </Routes>
    
    </>
  )
}

export default App
