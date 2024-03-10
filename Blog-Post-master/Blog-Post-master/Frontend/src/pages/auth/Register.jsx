import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <main class="form-signin w-100 m-auto container mt-5">
        <form className='mx-auto' style={{ maxWidth: 400 }}>
          <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
          <div class="form-floating">
            <input type="name" class="form-control" id="name" placeholder="Name" />
            <label for="floatingPassword">Name</label>
          </div>
          <div class="form-floating mt-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mt-3 ">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>
          <button class="btn btn-primary w-100 py-2 mt-3 mb-3" type="submit">Sign up</button>
          <Link to="/login">Already Register? Signin</Link>
        </form>
      </main>
    </div>
  )
}

export default Register
