import React, { useState } from "react";
import './Home.css';
import Offer from './Offer'; 

export default function Home() {
 
  const [showOffers, setShowOffers] = useState(false);

  
  const handleEnquireClick = () => {
    setShowOffers(!showOffers); 
  };

  return (
    <>
      <div className="bgim">
      
      </div> 

      <div className="content">
        <h1 className="magic" style={{marginTop: "200px"}}>Beauty is about enhancing</h1>
        <h1 className="magic">what you have!</h1>
        
        <button className="enquire-btn" onClick={handleEnquireClick}>
          Enquire now!
        </button>
        
      
        {showOffers && <Offer />}
      </div>
    </>
  );
}
