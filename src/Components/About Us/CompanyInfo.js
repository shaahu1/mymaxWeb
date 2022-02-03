import React from 'react'
import './CompanyInfo.scss'
import logo from '../../Img/logo_full.png'
import collection1 from '../../Img/sto1.jpg'


const CompanyInfo = () => {


    return (
        <>
            <h1>We Are &nbsp; <span id='myMax_text'> My Max</span></h1> 
            <div className='companyInfo_text'>

                <p>
                    <img src={logo} className='logo_companyInfo'/>
                    MaxSoft is the Subsidiary of the Mymax Holdings (pvt)Ltd. MaxSoft is The point of
                    sales solution, which gives you a convenient way of checking out customers and of
                    recording sales whilst keeping record of the store inventory, order processing,
                    printing out receipts, carrying out promotions, tracking customers, managing sales
                    assistants performances, etc. The system eases the flow at checkout terminals,
                    while recording all the information that can help you make better business
                    decisions.
                    <br/> <br/>
                    When checking out a customer you can either input the sales item yourself, use a
                    bar code scanner or going one step further you can use our mobile solutions for
                    much faster checkout times. System makes your business accounting a lot easier
                    by creating reports on inventory, sales, customers, etc. Since it is already
                    recording each sale, it can easily tell you the sales and revenue of the day.
                        <br/> <br/> 
                        <img src={collection1} className='collecction1'/>

                    MaxSoft provides an easy to use interface for all your activities and it can make
                    the job of the cashier a lot easier by automating the routine tasks of the day.
                    MaxSoft comes with a wide variety of modules and you can choose one that fits
                    your budget and meets the needs of your particular business.
                        <br/> <br/>
                    Software solutions are developed by using C# for a front-end and MS SQL server
                    for a Back office Database. We do another service for the customer’s to providing Such as a Barcode Sticker,
                    Tags, Thermal Paper Rolls, weighing scale stickers, Thermal Transfer Ribbon,
                    Barcode Printer &amp; Barcode readers with any kind of Hardware peripherals for the
                    Textile’s, Supermarket &amp; also Restaurants.

                        <br/> <br/>
                    We import Hardware Peripherals from China &amp; Taiwan.
                </p>
            </div>
            

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