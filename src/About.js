import React from "react";
import { useState } from "react";
import './About.css';
import Book from "./Book";

 
export default function About(){
   const [showBook, setShowBook] = useState(false);
   const handleClick = () => {
   setShowBook(!showBook); 
 };
   
   
         return(
            <>
               
            
                  <img  className="mimg" style={{marginTop:"30px",marginLeft:"380px"}} src="https://companyprods.dubaiyellowpagesonline.com/1686566161.jpg"></img>
                  <div className="kimg">
                     <h4 style={{marginLeft:"100px" ,textDecoration:"underline"}}>Bridal package</h4>
                     <p style={{marginLeft:"30px"}}> Makeup</p>
                     <p style={{marginLeft:"30px"}}> Hairstyle.................................... Rs. 5,000</p>
                     <p style={{marginLeft:"30px"}}> Saree drapping and Mehendi</p>
                    


                     <h4 style={{marginLeft:"100px" ,textDecoration:"underline"}}>Hairstyle</h4>
                     <p style={{marginLeft:"30px"}}> Haircut and blow dry........... Rs. 2,000</p>
                     <p style={{marginLeft:"30px"}}> Hairwash and blow dry............. Rs.1,500</p>
                     <p style={{marginLeft:"30px"}}> Keratin treatment and Straitening............... Rs.7,700</p>
                     

                     <h4 style={{marginLeft:"100px" ,textDecoration:"underline"}}>Mehendi</h4>
                     <p style={{marginLeft:"30px"}}> Simple arabic................ Rs. 400  </p>
                     <p style={{marginLeft:"30px"}}> Manicure and Pedicure.................................... Rs. 1,500</p>
                     <p style={{marginLeft:"30px"}}> Threading and waxing ............. Rs. 500</p>
                     




                  </div>
                  
       
     
                  <button onClick={handleClick}  style={{marginLeft:"850px",marginTop:"20px",fontSize:"35px",borderRadius:"10px",backgroundColor:"crimson",color:"white",borderColor:"crimson",cursor:"pointer"}}>Book now</button>
                  {showBook && <Book />}
                 
            </>
         )
}