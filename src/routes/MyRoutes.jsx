import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Finish from '../components/Finish/Finish'
import NotFound from '../components/NotFound/NotFound'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import About from '../pages/About'
import Auth from '../pages/Auth'
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import CartPage from '../pages/CartPage'
import Categories from '../pages/Categories'
import CheckOutPage from '../pages/CheckOutPage'
import ContactUs from '../pages/ContactUs'
import Home from '../pages/Home'
import ShopPage from '../pages/ShopPage'
import WishlistPage from '../pages/WishlistPage'

function MyRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/categories' element={<Categories />}/>
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogdetail/:id' element={<BlogDetail/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/contact' element={<ContactUs />}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/wishlist' element={<WishlistPage />}/>
        <Route path='/checkout' element={<CheckOutPage />}/>
        <Route path='/account' element={<Auth />} />
        <Route path='/finish' element={<Finish />}/>
        <Route path='/shop' element={<ShopPage />}/>
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default MyRoutes