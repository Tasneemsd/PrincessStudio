import React from 'react';
import { Link,Routes,Route,BrowserRouter } from 'react-router-dom';
import './Nav.css';
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Login from './Login';
import Us from './Us';
import AppointmentTable from './AppointmentTable';
import Gallery from './Gallery';
import Dashboard from './Menu';




export default function Nav(){
  return(
             <>
             <BrowserRouter>
                  <div>
                    
                     <ul className='nav'>

                        <li className='logo'><img src="logoimg.jpg" width="45px" height="45px"style={{marginLeft:"0px"}} ></img></li>
                        <li><Link to = '/' style={{textDecoration:'none',color:'white'}}>Home</Link></li>
                        <li><Link to = './Services' style={{textDecoration:'none',color:'white'}}>Services</Link></li>
                        <li><Link to = './About' style={{textDecoration:'none',color:'white'}}>Menu</Link></li>
                        <li><Link to = './Gallery' style={{textDecoration:'none',color:'white'}}>Gallery</Link></li>
                        <li><Link to = './Contact' style={{textDecoration:'none',color:'white'}}>About us</Link></li>
                        <li><Link to = './Us' style={{textDecoration:'none',color:'white'}}>Contact-Us</Link></li>

                        <li><Link to = './AppointmentTable' style={{textDecoration:'none',color:'white'}}>Details</Link></li>


                        <li><Link to = './Login'><button className='bt'> Login </button></Link></li>
 
                    </ul>
                    <div className='pink' style={{marginTop:'0px'}}></div>
                  </div>
                  <div className='bG6'>
                    
                  </div>
                    
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Gallery" element={<Gallery />} />

                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Us" element={<Us />} />

                    <Route path="/AppointmentTable" element={<AppointmentTable userRole="owner" />} />


                    <Route path="/Login" element={<Login />} />
                    <Route path="/Dashboard" element={<Dashboard />} />


                


                </Routes>
                                 
             </BrowserRouter>
                
                
             </> 
  );

  
}

