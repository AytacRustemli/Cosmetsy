import React from 'react'
import Account from '../components/Account/Account'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'

const Auth = () => {
  return (
    <div>
      <Account />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <Login />
          </div>
          <div className="col-lg-6 col-sm-6">
            <Register />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth