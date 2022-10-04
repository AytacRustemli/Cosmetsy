import React from 'react'
import Botanical from '../components/Botanical/Botanical'
import CountDown from '../components/CountDown/CountDown'
import Cream from '../components/Cream/Cream'
import Davines from '../components/Davines/Davines'
import Featured from '../components/Featured/Featured'
import HomePopular from '../components/HomePopular/HomePopular'
import Latest from '../components/Latest/Latest'
import Product from '../components/Products/Product'
import SkinCare from '../components/SkinCare/SkinCare'

const Home = () => {
  return (
    <div>
      <Botanical />
      <Product />
      <Davines />
      {/* <SkinCare />
      <Featured />
      <Cream />
      <CountDown />
      <Latest />
      <HomePopular /> */}
    </div>
  )
}

export default Home