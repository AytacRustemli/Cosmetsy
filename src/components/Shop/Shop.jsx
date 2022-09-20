import { Slider, Typography } from '@mui/material';

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategoryAction } from '../../redux/Actions/CategoryActions';
import './shop.scss'

const Shop = () => {
    const [value, setValue] = React.useState([2, 10]);

    const { categories } = useSelector((state) => state.category)
    const dispatch = useDispatch();
    

    // Changing State when volume increases/decreases
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    useEffect(() => {
        dispatch(getCategoryAction())
    }, [])


    return (
        <div id='shop'>
            <div className="top">
                <div className="image">
                    <img width="100%" src="http://dtiva.wpengine.com/wp-content/uploads/2020/05/breadcrumb-1.jpg" alt="" />
                </div>
                <div className="text">
                    <h1>Shop</h1>
                    <p><Link to='/' style={{textDecoration : "none",color: "black"}}>Home / </Link><span>Shop</span></p>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="box">
                                <h4>Product categories</h4>
                                {
                                    categories &&
                                    categories.map((cat) => (
                                        <div key={cat.id}>
                                            <p>{cat.name}</p>
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="box">
                                <h4>BRANDS</h4>
                                <div className="smallBox d-flex  justify-content-center">
                                    <div className="col-lg-8">
                                        <p>ERBAVIVA</p>
                                    </div>
                                    <div className="col-lg-4">(35)</div>
                                </div>
                                <div className="smallBox d-flex  justify-content-center">
                                    <div className="col-lg-8">
                                        <p>Medium</p>
                                    </div>
                                    <div className="col-lg-4">(35)</div>
                                </div><div className="smallBox d-flex  justify-content-center">
                                    <div className="col-lg-8">
                                        <p>Small</p>
                                    </div>
                                    <div className="col-lg-4">(35)</div>
                                </div>


                            </div>
                            <div className="box2">
                                <div style={{
                                    margin: 'auto',
                                    // display: 'block',
                                    width: 'fit-content'
                                }}>
                                    <h3>Shop by Price</h3>
                                    <Typography id="range-slider" gutterBottom>

                                    </Typography>
                                    <Slider
                                        value={value}
                                        onChange={rangeSelector}
                                        valueLabelDisplay="auto"
                                    />
                                    Your range of Price is between £ {value[0]} - £ {value[1]}
                                </div>
                                <button>Filter</button>
                            </div>
                            <div className="box3">
                                <h3>Shop By Size</h3>
                                <div className="smallBox d-flex align-items-center  justify-content-center">
                                    <div className="col-lg-8">
                                        <h6>Myst Spray</h6>
                                        <p><del>£40.00</del> £28.00</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="image">
                                            <img width="40%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/shop-58.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="smallBox d-flex align-items-center  justify-content-center">
                                    <div className="col-lg-8">
                                        <h6>Texas Primer</h6>
                                        <p><del>£40.00</del> £28.00</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="image">
                                            <img width="40%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/shop-58.jpg" alt="" />
                                        </div>
                                    </div>
                                </div><div className="smallBox d-flex align-items-center  justify-content-center">
                                    <div className="col-lg-8">
                                        <h6>BB Cream</h6>
                                        <p><del>£40.00</del> £28.00</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="image">
                                            <img width="40%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/shop-58.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>
                       
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop