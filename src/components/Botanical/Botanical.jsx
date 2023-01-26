import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../api/config';
import '../Botanical/botanical.scss'

const Botanical = () => {
    const [APIData, setAPIData] = useState([]);

    const getBotanical = async () => {
      axios.get(BASE_URL + "Botanical/getall").then((response) => {
        setAPIData(response.data);
      });
    };

    useEffect(() => {
        getBotanical();
    }, []);

  return (
    <div>
        <section id="botanical">
            <div className="container">
                <div className="text">
                    {
                        APIData &&
                        APIData.map((data) => (
                            <>
                                <h6>{data.name}</h6>
                                <h3>{data.title}<br /> world’s finest plant oils <br /> and absolutes.</h3>
                                <p className='skincare'>{data.description}<br />
                                    with 30-minute expert sessions targeting your top skincare concerns.
                                </p>
                            </>
                        ))
                    }
                    <Link to='/shop' style={{textDecoration : "none"}}>
                    <div className="deneme">
                        <span className='shop'>SHOP NOW</span>
                    </div>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Botanical