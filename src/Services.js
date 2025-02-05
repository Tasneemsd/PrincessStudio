import React from "react";
import './Services.css'

export default function Services(){
         return(
            <>
               
               <div className="grid-container">
                <img className="images" src="https://png.pngtree.com/thumb_back/fh260/background/20210410/pngtree-mass-pink-flower-mother-festival-gradient-background-image_604824.jpg"></img>
                    
                  <div className="bg1">
                  <h2 style={{color:'deeppink'}}>Bridal Makeup</h2>
                    <img style={{ borderRadius: '10px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0VxJKcwp2-QAGzQJDlxyBMbQxYKe-V50jA&s" width="250px" height="370px"></img>
                  </div>

                  <div className="bg2">
                  <h2 style={{color:'deeppink'}}>Hairstyles</h2>
                  <img  style={{ borderRadius: '10px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMhmuIg-y4DWgowQ-eoZ9v-0K1B9Rh3q-OkYqm-W-kAvvWiGNSVFtdoKxW3JA7bG7aXok&usqp=CAU" width="250px" height="370px"></img>
                  </div> 

                  <div className="bg3">
                  <h2 style={{color:'deeppink'}}>Spa</h2>
                  <img  style={{ borderRadius: '10px'}}src="https://rukminim2.flixcart.com/image/850/1000/knxiavk0/brush-applicator/p/e/7/women-face-pack-brush-foundation-makeup-cosmetics-facial-soft-original-imag2hyakderuscc.jpeg?q=90&crop=false" width="250px" height="370px"></img>
                  </div>

                  <div className="bg4">
                    <h2 style={{color:'deeppink'}}>Mehendi</h2>
                  <img style={{ borderRadius: '10px'}} src="https://cdn2.stylecraze.com/wp-content/uploads/2013/10/A-girl-flaunting-her-eid-mehndi-design.jpg.webp" width="250px" height="370px"></img>
                  </div>
                  
              </div>
          

            
            </>
         )
}