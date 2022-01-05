import React from 'react'
import './customerSay.css'
import CustomerSayCard from './CustomerSayCard';

export const CusromerSay = () => {


    
    return (
        <div>
            <h2> What our customer say </h2>
            <br/>
            <div className="customerSay-container">
                
                <CustomerSayCard/>
                <CustomerSayCard/>
                <CustomerSayCard/>
            </div>
            
        </div>
    )
}

export default CusromerSay;