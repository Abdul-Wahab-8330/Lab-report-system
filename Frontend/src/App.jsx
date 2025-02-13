import React from 'react'
import Home from './Home/Home'
import Course from './components/Course'
import Courses from './Courses/Courses'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import Register from './components/Register'
import PatientList from './components/Patientlist'
import PatientDetail from './components/PatientDetail'
import PendingReports from './components/PendingReports'
import CompletedReports from './components/CompletedReports'
const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser)
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={authUser?<Courses/>: <Navigate to='/signup'/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/patientslist" element={<PatientList/>}/>
    <Route path="/patients/:id" element={<PatientDetail />} />
    <Route path="/pending-reports" element={<PendingReports />} />
    <Route path="/completed-reports" element={<CompletedReports />} />
    </Routes>
    <Toaster/>
    </BrowserRouter>
    </>
  )
}

export default App
