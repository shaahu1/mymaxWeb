import React from 'react'
import './customerSay.scss'
import CustomerSayCard from './CustomerSayCard';

export const CusromerSay = () => {


    
    return (
        <div>
            <h2 className='customerSayTital'> What our customer say </h2>
            <br/>
            <div className="customerSay-container">
                
                <CustomerSayCard/>
                <CustomerSayCard/>
                <CustomerSayCard/>
                <CustomerSayCard/>
                <CustomerSayCard/>
            </div>
            
        </div>
    )
}

export default CusromerSay;