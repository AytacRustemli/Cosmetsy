import React from 'react'
import { Link } from 'react-router-dom'
import './wishlist.scss'

const Wishlist = () => {
  return (
    <div>
        <div id='wishlist'>
            <div className="box">
                <div className="image">
                    <div className="d-flex">
                        <Link to="/" style={{textDecoration: "none"}}><p style={{cursor : "pointer"}}>Home/</p></Link>
                        <p style={{marginLeft : "10px"}}>Wishlist</p>
                    </div>
                </div>
                <div className="bottom">
                    <h1>Wishlist</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wishlist