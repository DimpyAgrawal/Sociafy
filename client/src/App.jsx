import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import Home from './component/Home'
import Navbar from './component/Navbar';
import Profile from './component/profile';
import CreatePost from './component/CreatePost'

import { ToastContainer } from 'react-toastify'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/createPost' element={<CreatePost />} />
      
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}
