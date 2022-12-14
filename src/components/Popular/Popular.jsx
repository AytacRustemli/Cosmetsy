import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../Popular/popular.scss'
import { getCategoryAction } from './../../redux/Actions/CategoryActions';

const Popular = () => {
    const { categories } = useSelector((state) => state.category)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCategoryAction())
    }, [])

  return (
    <div>
        <section id="popular">
            <div className="container">
                <div className="top">
                    <h2>Popular Categories</h2>
                    <p>Etiam eget faucibus turpis, sit amet viverra eros. Maecenas eget vehicula nisl. Quisque imperdiet iaculis dignissim. In hac habitasse platea dictumst.</p>
                </div>
                <div className="bottom">
                    <div className="row">
                        {
                            categories &&
                            categories.map((cat) => (
                                <div className="col-lg-3 my-4 col-6" key={cat.id}>
                                    <Link to={'/category/' + cat.id}>
                                    <div className="box">
                                        <div className="image">
                                            <img src={cat.photoURL} alt="" />
                                        </div>
                                        <div className="text">
                                            <h4>{cat.name}</h4>
                                            <span>SHOP NOW</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Popular