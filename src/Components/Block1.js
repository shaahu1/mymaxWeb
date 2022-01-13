import React from 'react'
import './Block1.scss'
import Block1Card from './Block1Card'

import icon1 from '../../src/Img/satis.png';
import icon2 from '../../src/Img/protect.png';
import icon3 from '../../src/Img/growth.png';

const Block1 = () => {
    return (
        
        <div className='Block1_container' >
            <h1> Make your business easier </h1>

            <div className='Block1_cardContainer'>
                <Block1Card 
                    imgPath = {icon1}
                    tital1 = "Better Customer" 
                    tital2 = "Satisfaction & Loyalty"
                    details = "With a POS system, it’s easier to exceed consumers’ initial expectations by providing fast, accurate and efficient service. "
                    />

                <Block1Card 
                    imgPath = {icon2}
                    tital1 = "Better Security" 
                    tital2 = " - "
                    details = "Your data needs to be accessible to the company’s authorized users only. With a POS system, your data is more secured from unknown intrusion."
                    />

                <Block1Card 
                    imgPath = {icon3}
                    tital1 = "Higher Productivity" 
                    tital2 = " - "
                    details = "Using software to manage inventory will cut down on time it takes to process, audit, and track your merchandise. "
                    />
                
                <div>

                </div>

            </div>

        </div>
    )
}

export default Block1