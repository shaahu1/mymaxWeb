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
                        <span> We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen. When our data changes, React will efficiently update and re-render our components. </span>
                    </div>
                </div>

                <div className='mission_contaner'>
                    <div className='mission_info'>
                        <h2> ___ Mission ___ </h2>
                        <br/>
                        <span> We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen. When our data changes, React will efficiently update and re-render our components. </span>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CompanyInfo;