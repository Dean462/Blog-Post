import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyPost from './pages/MyPost'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Navbar from './components/Navbar'
import AuthGuard from './guard/auth-guard'
import GuestGuard from './guard/guest-guard'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<GuestGuard><Home /></GuestGuard>} />
        <Route path='/my-post' element={<GuestGuard><MyPost /></GuestGuard>} />
        <Route path='/login' element={<AuthGuard><Login /></AuthGuard>} />
        <Route path='/register' element={<AuthGuard><Register /></AuthGuard>} />
      </Routes>
    </div>
  )
}

export default App
