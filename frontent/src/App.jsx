import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Docters from './pages/Doctors.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import MyAppointment from './pages/MyAppointment.jsx'
import Myprofile from './pages/Myprofile.jsx'
import Appointment from './pages/Appointment.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/doctors' element={<Docters/>}/>
      <Route path='/doctors/:speciality' element={<Docters/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/my-appointment' element={<MyAppointment/>}/>
      <Route path='/my-profile' element={<Myprofile/>}/>
      <Route path='/appointment/:docId' element={<Appointment/>}/>
      
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
