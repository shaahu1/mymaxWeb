import React from 'react'
import CompanyInfo from '../../Components/About Us/CompanyInfo';
import NumberBlock from '../../Components/About Us/NumberBlock';

import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import './aboutUs.scss'
import OurTeam from '../../Components/About Us/OurTeam';
import ScrollToTop from '../../Components/ScrollToTop';

const AboutUs = () => {

    
    /*   const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (500 > window.scrollY && 200 < window.scrollY) {
            document.getElementById("aboutUs_text").style.marginTop = "500px";
            document.getElementById("aboutUs_text").style.marginRight = "5%";
            document.getElementById("aboutUs_text").style.fontSize = "45px";
            console.log(window.scrollY);
        } 
        else
        {
            document.getElementById("aboutUs_text").style.marginTop = "300px";
            document.getElementById("aboutUs_text").style.marginRight = "20%";
            document.getElementById("aboutUs_text").style.fontSize = "70px";
        }
    };

    window.addEventListener("scroll", (e) => handleNavigation(e)); */

    return (
        <div>
            <ScrollToTop/>
            <div className='aboutUsTop'>
                <NavBar />
                <span id='aboutUs_text'> ABOUT US</span>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <CompanyInfo/>
            <NumberBlock/>
            <OurTeam/>
            <Footer/>

        </div>
    )
}

export default AboutUs;