import React from 'react'
import './ourTeam.scss'

import asanka from '../../Img/m1.jpg'
import {FaFacebookF, FaGooglePlus, FaInstagram, FaLinkedin} from 'react-icons/fa'


const TeamCard = (props) => {

    return (
        <>
          
        <div className='TeamCard_container'>

            <div id='memberImg_container'> 
                {props.image === "lahiru" && <img src={""} />}
                {props.image === "ranjula" && <img src={""} />}
                {props.image === "asanka" && <img src={asanka} />}
                {props.image === "kushan" && <img src={""} />}

                <div className='memberSocialMedia'>

                    <a href={props.fbLink} target="_blanck"><FaFacebookF/></a>
                    <a href={props.InsterLink}> <FaInstagram/> </a>
                    <a href={props.linkedinLink}> <FaLinkedin/> </a>
                    <a href={props.gmailLink}> <FaGooglePlus/> </a>

                </div>

            </div>

            <h3 id='TeamMemberName'> {props.name} </h3>
            <h4 id='TeamMemberDesig'> {props.designation} </h4> 
           
        </div>

        </>
    )
}

export default TeamCard;