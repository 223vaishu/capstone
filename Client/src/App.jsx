import React from "react";
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Detail from "./Pages/Detail";
import Contact from "./Pages/contact";
import Register from "./Pages/Register";
import Batch from "./Pages/Batch";
import UpdateForm from "./Pages/UpdateForm";
import Signup from "./Pages/Signup";
import Welcome from "./Pages/Welcome";



function App(){
  return(
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Detail" element={<Detail/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/batch" element={<Batch/>}/>
      <Route path="/updateform" element={<UpdateForm/>}/>
      <Route path="/signup" element={<Signup/>}/>
     

    </Routes>
    </BrowserRouter>
    
  )
  
  
}

export default App;