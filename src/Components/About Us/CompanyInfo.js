import React from 'react'
import './CompanyInfo.scss'
import vision from '../../Img/vision.jpg'


const CompanyInfo = () => {


    return (
        <>
            
            <div className='companyInfo_Container'>

                <div className='vision_contaner'>
                    <div className='vision_info'>
                        <h2> ___ Vision ___ </h2>
                        <br/>
                        <span> Our Maintain quality and provide excellent services to our clients. </span>
                    </div>
                </div>

                <div className='mission_contaner'>
                    <div className='mission_info'>
                        <h2> ___ Mission ___ </h2>
                        <br/>
                        <span> To be a leader for the IT industry in sri lanka & provide Most Innovation Technology for Retail & other businesses. </span>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CompanyInfo;