import React from 'react';
import './topBar.css';
import {FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

const TopBar = () => {
    return (
        <div className="topBar">
		    <span className="mobileNo"> <FaPhone className="icon"/>&nbsp; +9471-433-3933 </span>
		    <span className="emailAddress"><FaEnvelope className="icon"/> &nbsp; mymaxholdings@gmail.com </span> 

            <div className="social-network-button-container">
                <a href="http://www.facebook.com/mymaxholdings" target="_blank" className="social-button"> <FaFacebookF className="icon"/> </a>
                <a href="http://www.facebook.com/hasalaheshan" target="_blank" className="social-button"> <FaInstagram className="icon"/> </a>
                <a href="http://www.facebook.com/hasalaheshan" target="_blank" className="social-button"> <FaTwitter className="icon"/> </a>
                <a href="http://www.facebook.com/hasalaheshan" target="_blank" className="social-button"> <FaLinkedinIn className="icon"/> </a>
            </div>
            

        </div>
    )
}

export default TopBar;
