import React from 'react'
import './Block1.scss'

import icon1 from '../../src/Img/satis.png';


const Block1Card = (props) => {
    return (
        
        <div className='Block1_card' >
            <img src={props.imgPath} className='benifitIcon' />
            <h3> {props.tital1} </h3>
            <h3> {props.tital2} </h3>
            <br/>
            <span className='block1_details'>
                {props.details}
            </span>

        </div>
    )
}

export default Block1Card