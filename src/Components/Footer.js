import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
import {FaEnvelope, FaPhone, FaHome, FaBuilding} from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
        <br/>
            <div className="hr"> </div>

            <div className="footer-container">

            <div className="companyInfo-container">
                <span className="companyNameF" >My Max Holdings</span>
                <br/>
                <br/>
                <p className="companyInfo">
                    Maxsoft is the one of the Leading POS software Company in Sri Lanka. We are providing POS software with inventory management system for Retail & Hole sale management syatem for Super market, Textile, Fancy shop and Hardware stores.
                </p>
            </div>

            <div className="pages-container">
                
                <ul className="pageList">
                    <li> <p className="footerTital"> Pages </p> </li>
                    <br/>

                    <table>
                        <tr>
                            <td className='contactFooter'> <Link to="/aboutUs" className="footerLink"> About </Link></td>
                        </tr>
                        <tr>
                            <td className='contactFooter'> <Link to="/top" className="footerLink"> Services </Link></td>
                        </tr>
                        <tr>
                            <td className='contactFooter'> <Link to="/top" className="footerLink"> Gallery </Link></td>
                        </tr>
                        <tr>
                            <td className='contactFooter'> <Link to="/contactUs" className="footerLink"> Contact </Link></td>
                        </tr>
                    </table>
                    
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
            
        </div>
        <div className="hr"> </div>
        <br/>
        <br/>
        <span id="pbText"> Powered by </span> <span id="pbValue">&nbsp;My Max Holdings </span>
        <br/>
        <br/>
        <div className="footerEnd"> </div>
    </div>
        
    )
}

export default Footer
