import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
      <div className='card'>
          <div className='left'>
            <h1>hello world</h1>
            <p>
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <span>don't you have an account?</span>
            <Link to= '/register'>
            <button>Register</button>
            </Link>
            
          </div>
          <div className='right'>
            <h1>login</h1>
            <form>
              <input type='text' placeholder='UserName'/>
              <input type='password' placeholder='PassWord'/>
              <button type='submit'>login</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Login