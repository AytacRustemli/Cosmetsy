import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'

function MyRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About/>}/>
    </Routes>
  )
}

export default MyRoutes