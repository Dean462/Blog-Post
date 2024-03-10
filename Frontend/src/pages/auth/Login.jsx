import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../store/AuthContests';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleLogin(email, password)
  }

  return (
    <div>
      <main class="form-signin w-100 m-auto container mt-5">
        <form onSubmit={handleSubmit} className='mx-auto' style={{ maxWidth: 400 }}>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
          <div class="form-floating">
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mt-3">
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>
          <button class="btn btn-primary w-100 py-2 mt-3 mb-3" type="submit">Sign in</button>
          <Link to="/register">Don't have an account? Signup</Link>
        </form>
      </main>
    </div>
  )
}

export default Login
