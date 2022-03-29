import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
import {FaEnvelope, FaPhone, FaHome, FaBuilding, FaFacebookF, FaGooglePlus, FaLinkedin } from 'react-icons/fa'

const Footer = () => {

    

    return (
        <div>
        <br/>
            <div className="hr"> </div>

            <div className="footer-container">

                <div className="companyInfo-container">
                    <span className="companyNameF" >My Max Holdings</span>
                    
                    <br/> <br/>

                    <p className="companyInfo">
                        Maxsoft is the one of the Leading POS software Company in Sri Lanka. We are providing POS software with inventory management system for Retail & Hole sale management syatem for Super market, Textile, Fancy shop and Hardware stores.
                    </p>

                </div>

                <div className = "pageListAndDetail_container">

                    <div className="pages-container">
                        
                        <ul className="pageList">
                            <li> <p className="footerTital"> Pages </p> </li>
                            <br/>

                            <li className='contactFooter'> <Link to="/aboutUs" className="footerLink"> About </Link></li>

                            <li className='contactFooter'> <Link to="/top" className="footerLink"> Services </Link></li>

                            <li className='contactFooter'> <Link to="/top" className="footerLink"> Gallery </Link></li>

                            <li className='contactFooter'> <Link to="/contactUs" className="footerLink"> Contact </Link></li>

                        </ul>
                    </div>

                    <div className="contact-container">
                        <ul className="pageList">
                            <li> <p className="footerTital"> Contact </p> </li>

                            <br/>

                            <table> 
                                <tr>
                                    <td className='iconFooter'> <FaPhone/> </td>
                                    <td className='contactFooter'> <a href="tel:0714333933"> 071 43 33 933 </a> </td>
                                </tr>
                                <tr>
                                    <td className='iconFooter'> <FaEnvelope/> </td>
                                    <td className='contactFooter'> <a href="mailto:mymaxholdings@gmail.com"> mymaxholdings@gmail.com </a> </td>
                                </tr>
                                <tr>
                                    <td className='iconFooter'> <FaBuilding/> </td>
                                    <td className='contactFooter'> No. 244/2, Dabahena Road, <br/> Maharagama. </td>
                                </tr>
                            </table>

                        </ul>
                    </div>

                    <div className='openTime_Container'>

                        <ul className="pageList">
                            <span> <p className="footerTital"> Business Hours </p> </span>
                            <br/>
                            <li className='date1'> Mon: 9:00 AM - 6:00 PM </li>
                            <li id='date2'> Tue: 9:00 AM - 6:00 PM </li>
                            <li id='date3'> Wed: 9:00 AM - 6:00 PM </li>
                            <li id='date4'> Thu: 9:00 AM - 6:00 PM </li>
                            <li id='date5'> Fri: 9:00 AM - 6:00 PM </li>
                            <li id='date6'> Sat: 9:00 AM - 6:30 PM </li>
                            <li id='date7'> Sun: Closed </li>
                        </ul>

                    </div>

                </div>

            </div>

            <div className='socialMedia_Container'>

                <a href="https://www.facebook.com/mymaxholdings" target={0} > <FaFacebookF className='socialMediaIcon' size={25}/> </a> 
                <a href="https://www.facebook.com/mymaxholdings" target={0} ><FaGooglePlus className='socialMediaIcon' size={25}/> </a>
                <a href="https://www.facebook.com/mymaxholdings" target={0} ><FaLinkedin className='socialMediaIcon' size={25}/> </a>

            </div>

            <div className="hr"> </div>

            <br/> <br/>

            <span id="pbText"> Powered by </span> <span id="pbValue">&nbsp;My Max Holdings </span>

            <br/> <br/>

            <div className="footerEnd"> </div>

        </div>

    )
}

export default Footer;
