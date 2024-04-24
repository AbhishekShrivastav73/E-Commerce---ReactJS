import React from 'react'
import TopNav from './Components/TopNav'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <div>
      <TopNav/>
      <Navbar/>
    </div>

    <Routes>
      <Route path="/home" element={<Home />} />
     
    </Routes>


    </>
  )
}

export default App