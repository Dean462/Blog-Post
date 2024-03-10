import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div>
      <main class="form-signin w-100 m-auto container mt-5">
        <form className='mx-auto' style={{maxWidth: 400}}>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mt-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
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
