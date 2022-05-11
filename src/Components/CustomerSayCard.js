import React from 'react'
import './customerSay.scss'
import avtr from '../Img/55.jpg'
import {FaQuoteLeft} from 'react-icons/fa'

//style={{width: "100%", paddingTop: '20px', paddingBottom:'30px'}}

const CustomerSayCard = () => {
    return (
        
        <div className='csCard' >  
            <div className="csCard-container">
                <FaQuoteLeft style={{width: '30px', height: '30px', color:'#506585'}}/>
                <br/>
                <br/>
                <div className="cuatomerSayText">
                    <span >
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    </span>
                </div>
                
            </div>
            <img className="avatar" src={avtr}/>
            <br/>
            <h3>Name</h3>
            <span style={{fontSize: '13px'}}> Position </span>
        </div>
    )
}

export default CustomerSayCard
