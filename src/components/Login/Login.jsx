import React from 'react'
import './login.scss'

const Login = () => {
  return (
    <div>
        <section id="login">
            <h3>Login</h3>
            <p>Username or email address *</p><br />
            <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autocomplete="username" value="" /> <br />
            <p>Password *</p>
            <input class="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autocomplete="current-password" /> <br />
            <button>LOG IN</button> <br />
            <p className='p'>Lost your password?</p>
        </section>
    </div>
  )
}

export default Login