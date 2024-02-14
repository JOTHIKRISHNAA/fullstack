import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import "../Pages/Details.css";
import CustomNavBar from "../components/CustomNavBar";

const Details = () => {
    return(
        <div>
            <header>
                <CustomNavBar/>
                <br></br>
            </header>
        <>
            
            
            <div className="details-container">
                <div className="image-container">
                    <img src="https://pixewall.com/wp-content/uploads/2023/08/birthday-background729176198016-scaled.jpg" alt="Boat" className="image" />
                </div>
                <div className="details">
                    <div className="details-content">
                        <h2 style={{fontWeight:"bolder",textAlign:'center',color:'black'}}>Event Details</h2>
                        <br></br>
                        
                        <p style={{fontSize:"15px"}}><b style={{color:"black"}}>Event Name:</b> SK BIRTHDAY EVENT</p>
                        <br></br>
                        <p style={{fontSize:"15px"}}><b style={{color:"black"}}>Event Location:</b> GANDHIPURAM</p>
                        <br></br>
                        <p style={{fontSize:"15px"}}><b style={{color:"black"}}>Photographer Name:</b> SENTHIL KUMAR</p>
                        <br></br>
                        <p style={{fontSize:"15px"}}><b style={{color:"black"}}>Photographer Contact :</b> 9080502987</p>
                        <br></br>
                        <p style={{fontSize:"15px"}}><b style={{color:"black"}}>Videographer Name:</b> VIJAYA KUMAR</p>
                        <br></br>
                        <p style={{fontSize:"15px"}}><b style={{color:"black"}}>Videographer Contact:</b> 9600856225</p>
                        <br></br>
                        <b style={{fontSize:"15px",color:"black"}}>Activities We Offer:</b>
                        <br></br>
                        <br></br>
                        <li>
                            ANCHOR ARTIST
                        </li>
                        <li>
                        DJ SOUND
                        </li>
                        <li>
                        GAME HOST
                        </li>
                        <li>
                        MAGICIANS
                        </li>
                        <li>
                        MIMICRY ARTIST
                        </li>
                        <li>
                        TATTOO ARTIST
                        </li>
                    
            <div className="button-container" style={{marginTop:20,marginRight:20}}>
                <Link to="/book" className="button-link">
                    <button className="book-button">
                        <FontAwesomeIcon icon={faShoppingCart} /> Book Event
                    </button>
                </Link>
            </div>
                    </div>
                    
                </div>
            </div>
           
            
        </>
        </div>
    )
}

export default Details;