import React from 'react'
import Home from './Home/Home'
import Course from './components/Course'
import Courses from './Courses/Courses'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
