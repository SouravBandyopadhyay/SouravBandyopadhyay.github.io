import React from 'react'
import Home from './Home'
import {Routes,Route} from "react-router-dom"
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}
export default AllRoutes