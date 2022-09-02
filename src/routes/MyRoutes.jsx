import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import Categories from '../pages/Categories'
import Home from '../pages/Home'

function MyRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/categories' element={<Categories />}/>
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogdetail' element={<BlogDetail/>}/>
    </Routes>
  )
}

export default MyRoutes