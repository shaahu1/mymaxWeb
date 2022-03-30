import React from 'react'

import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
//import { useEffect } from 'react';
import './contactUs.scss'
import ScrollToTop from '../../Components/ScrollToTop';
import Mailbox from '../../Components/Contact us/Mailbox';

const ContactUs = () => {


    return (
        <div>
            <ScrollToTop/>
            <div className='contactUsTop'>
                <NavBar />
                <span id='contactUs_text'> Contact US</span>
            </div>
            <br/>
            <Mailbox />
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>

        </div>
    )
}

export default ContactUs;