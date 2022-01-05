import React from 'react'
import './customerList.css'

import l1 from '../Img/logo1.jpg'
import l2 from '../Img/logo2.jpg'
import l3 from '../Img/logo3.jpg'
import l4 from '../Img/logo4.jpg'
import l5 from '../Img/logo5.jpg'
import l6 from '../Img/logo6.jpg'
import l7 from '../Img/logo7.jpg'

const CustomerList = () => {
    return (

        <div>
        
            <h2> Our Customerts </h2>
            <div className='slider'>

                <div className='slider-track'>

                    <div className='slide'>
                        <img src={l1}/>
                    </div>

                    <div className='slide'>
                        <img src={l2}/>
                    </div>

                    <div className='slide'>
                        <img src={l3}/>
                    </div>

                    <div className='slide'>
                        <img src={l4}/>
                    </div>

                    <div className='slide'>
                        <img src={l5}/>
                    </div>

                    <div className='slide'>
                        <img src={l6}/>
                    </div>

                    <div className='slide'>
                        <img src={l7}/>
                    </div>

                    <div className='slide'>
                        <img src={l1}/>
                    </div>

                    <div className='slide'>
                        <img src={l2}/>
                    </div>

                    <div className='slide'>
                        <img src={l3}/>
                    </div>

                    <div className='slide'>
                        <img src={l4}/>
                    </div>

                    <div className='slide'>
                        <img src={l5}/>
                    </div>

                    <div className='slide'>
                        <img src={l6}/>
                    </div>

                    <div className='slide'>
                        <img src={l7}/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CustomerList;