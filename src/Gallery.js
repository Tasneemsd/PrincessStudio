import React from "react";
import './Gallery.css'
const stylist = {
  name: "Naaz",
  bio: "Naaz is a skilled stylist with over 5 years of experience in creating unique and stunning looks. Her expertise includes bridal makeup, creative hairstyles, and hair coloring.",
  specialties: ["Bridal Makeup", "Hair Styling", "Hair Coloring"],
  image: "https://i.pinimg.com/736x/dc/e4/1a/dce41afc6bc9671cd4713e6ec870687d.jpg", 
};

export default function Gallery(){
    return(
        <>
        
        
        <h1 style={{textAlign:"center",color:"crimson",textDecoration:"underline",textDecorationColor:"crimson"}}> Gallery and Testimonials</h1>
                    
              <div className="grid-container2">
                           
              <div className="bg12">
                  
                    <img style={{ borderRadius: '25px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_GxcXFxz5OYNK8oJ-4QYk_aK-IN6DfjxvVA&s" width="200px" height="170px"></img>
                    <p style={{marginLeft:"10px",fontSize:"18px",fontFamily:"serif"}}>"My special day became more special because of princess studio"<br></br> <br></br>.. Sanvi rishi</p>
                  </div>

                  <div className="bg23">
                  
                  <img  style={{ borderRadius: '5px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJvPEIpw_Orz-m5vVEd_FJa5oMNNr0OnEbw&s" width="160px" height="170px"></img>
                  <p style={{fontSize:"18px",fontFamily:"serif"}}>"I always consult princess studio for my personal care"<br></br> <br></br>.. Neha Mishra</p>
                  </div> 

                  <div className="bg34">
                  
                  <img  style={{ borderRadius: '10px'}}src="https://content.jdmagicbox.com/comp/imphal/z1/9999p3852.3852.220609012542.e9z1/catalogue/meitei-prem-hair-art-salon-imphal-ho-imphal-beauty-parlours-n8rcrd1o1a.jpg" width="160px" height="170px"></img>
                  <p style={{fontSize:"18px",fontFamily:"serif"}}>"I suggest keratin treatment, that is flawless"<br></br> <br></br>.. Sabhitha Aarya</p>
                  </div>

                  <div className="bg45">
                  
                  <img  style={{ borderRadius: '10px'}}src="https://5.imimg.com/data5/QF/XK/PL/ANDROID-82823084/product-jpeg-500x500.jpg" width="160px" height="170px"></img>
                  <p style={{fontSize:"18px",fontFamily:"serif"}}>"I suggest princess studio for princess treatment"<br></br> <br></br>.. Nitha</p>
                  </div>
                  

                </div>
                
               
                <div className="stylist-profile">
                      <div className="profile-header">
                        <img src={stylist.image} alt={stylist.name} className="stylist-image" />
                        <h2>{stylist.name}</h2>
                      </div>

                      <div className="profile-details">
                        <p className="stylist-bio">{stylist.bio}</p>
                        
                        <h3>Specialties:</h3>
                        <ul className="stylist-specialties">
                          {stylist.specialties.map((specialty, index) => (
                            <li key={index}>{specialty}</li>
                          ))}
                        </ul>
                      </div>
 
                </div>
               

               

                  
        </>
    )
}