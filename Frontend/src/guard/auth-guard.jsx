import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../store/AuthContests'
import { useNavigate } from 'react-router-dom'

const AuthGuard = ({ children }) => {

    const { authenticated } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (authenticated) {
            navigate("/");
        }
    },[authenticated])
    return (
        <div>
            {children}
        </div>
    )
}

export default AuthGuard
