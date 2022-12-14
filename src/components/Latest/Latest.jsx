import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../Latest/latest.scss'
import { getBlogAction } from './../../redux/Actions/BlogAction';

const Latest = () => {
    const {blogs} = useSelector((state) => state.blog)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBlogAction())
    }, [])

  return (
    <div>
        <section id="latest">
            <div className="container">
                <div className="top">
                    <div className="d-flex justify-content-between">
                        <h2>Latest News</h2>
                        <Link to='/blog' style={{textDecoration:"none",color:"black"}}>
                            <div className="text d-flex">
                                <span>View All Posts</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="bottom">
                    <div className="row align-items-center">
                        {
                            blogs &&
                            blogs.map((blog) =>(
                                <div className="col-lg-4 col-sm-6">
                                    <div className="box">
                                        <Link to={'/blogdetail/' + blog.id}>
                                            <div className="image">
                                                <img src={blog.picture} alt="" />
                                            </div>
                                        </Link>
                                        <Link to={'/blogdetail/' + blog.id} style={{textDecoration:"none"}}>
                                            <div className="text">
                                                <div className="d-flex">
                                                    <span className="box1 date">7 FEB 2021</span>
                                                    <span className="box1 title">{blog.style}</span>
                                                </div>
                                                <span className='box1 super'>{blog.name}</span>
                                                <span className='box1 number'><i className='i'>By</i>Sinan</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>    
                </div>
                <hr />
            </div> 
        </section>
    </div>
  )
}

export default Latest