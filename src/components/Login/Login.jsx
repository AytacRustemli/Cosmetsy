import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './login.scss'
import { loginUserAction } from './../../redux/Actions/UserAction';
import Swal from 'sweetalert2';

const Login = () => {
  const { userInfo } = useSelector((state) => state.user)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const dispach = useDispatch() 

  const loginHandler = () => {
    dispach(loginUserAction(email, password))
  }


  useEffect(() => {
    if (userInfo.status) {
      if (userInfo.status === 200) {
        navigate("/")
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Bir xəta baş verdi.',
          text: 'Emailiniz və ya şifrəniz yanlışdır!'
        })
        navigate("/account")
      }
    }
  }, [userInfo])


  return (
    <div>
        <section id="login">
            <h3>Login</h3>
            <p>Username or email address *</p><br />
            <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autocomplete="username" onChange={(e) => setEmail(e.target.value)} /> <br />
            <p>Password *</p>
            <input class="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autocomplete="current-password" onChange={(e) => setPassword(e.target.value)} /> <br />
            <button onClick={() => loginHandler()}>LOG IN</button> <br />
            {/* <p className='p'>Lost your password?</p> */}
        </section>
    </div>
  )
}

export default Login