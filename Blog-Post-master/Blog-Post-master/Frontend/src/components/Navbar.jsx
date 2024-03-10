import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../store/AuthContests'

const Navbar = () => {
    const { authenticated } = useContext(AuthContext)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/">Daily Stories</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {
                            authenticated && (
                                <>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/my-post">My Post</Link>
                                        </li>
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                    <button className="btn btn-danger ms-3" type="submit">Logout</button>
                                </>)
                        }

                        {
                            !authenticated && (<div className='d-flex gap-4 ms-auto'>
                                <Link className="btn btn-primary" to="/login">Login</Link>
                                <Link className="btn btn-success" to="/register">Register</Link>
                            </div>)
                        }

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
