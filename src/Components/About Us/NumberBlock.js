import React from 'react'
import './NumberBlock.scss'


const NumberBlock = () => {


    return (
        <>

            <div className='NumberBlock_Container'>

                <h1> Our Current State </h1>

                <div className='Numberbox_Container'>

                    <div className='year_contaner'>
                        <h1 > 2021 </h1>
                        <h3> Year Established </h3>
                        <div></div>
                    </div>

                    <div className='customers_contaner'>
                        <h1 className='counter'> 5 </h1>
                        <h3> Products </h3>
                    </div>

                    <div className='customers_contaner'>
                        <h1 className='counter'> 39 </h1>
                        <h3> Customers </h3>
                    </div>

                    <div className='customers_contaner'>
                        <h1 className='counter'> 39 </h1>
                        <h3> Customers </h3>
                    </div>

                </div>


            </div>

        </>
    )
}

export default NumberBlock;