import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Student from "./Components/Student"
import AddStudents from "./Components/AddStudents"
import React, {Component} from 'react'
import './Components/css.css';
import { BrowserRouter, Link, Route, Routes} from "react-router-dom"
import StudentsList from "./Components/StudentsList"
import UpdateStudents from "./Components/UpdateStudent"


class App extends Component {
  render(){
  return ( 
    <div>
      <StudentsList>
      <BrowserRouter>
      <div className="navBar">
        <div><Link to="" className="label">Home</Link></div>
        <div><Link to="/Student" className="label">Students</Link></div>
        <div><Link to="/Contact" className="label">Contact Us</Link></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Student" element={<Student />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Students/Details" element={<AddStudents />} />
        <Route path="/Student/:path" element={<UpdateStudents />} />
      </Routes>
      </BrowserRouter>
      </StudentsList>
    </div>

  );
  }
}

export default App;