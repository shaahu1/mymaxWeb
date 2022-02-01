import React from 'react'
import CompanyInfo from '../../Components/About Us/CompanyInfo';
import NumberBlock from '../../Components/About Us/NumberBlock';

import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import { useEffect } from 'react';
import './aboutUs.scss'

const AboutUs = () => {

        

    return (
        <div>
            <div className='aboutUsTop'>
                
                <NavBar />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <CompanyInfo/>
            <NumberBlock/>
            <Footer/>

        </div>
    )
}

export default AboutUs;