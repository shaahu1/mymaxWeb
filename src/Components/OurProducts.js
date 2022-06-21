import React from 'react'
import './OurProducts.scss'

import ProductCard from './ProductCard'

const OurProducts = () => {
    return (
        
        <div className = 'ourProduct_block'>

            <div className = 'ourProduct_tital'>  <h2> Our Products </h2> </div>
            
            <div className = 'ourProduct_description'> <span> Paid annually and Auto renewal option is available in the checkout process </span> </div>

            <div className='productCard_container'>

                <ProductCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/mymaxwebsite.appspot.com/o/bookshop-bivar.jpg?alt=media&token=340eb402-74b6-4d40-9655-6736935ea029"
                    productName = "POS System"
                    productDesc = "Poin of Sale Software"
                    productPrice = "Rs. 50 000 /="
                    btnText = "CHECK NOW"
                />
                <ProductCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/mymaxwebsite.appspot.com/o/bookshop-bivar.jpg?alt=media&token=340eb402-74b6-4d40-9655-6736935ea029"
                    productName = "POS System"
                    productDesc = "Poin of Sale Software"
                    productPrice = "Rs. 50 000 /="
                    btnText = "CHECK NOW"
                />
                <ProductCard 
                    image = "https://firebasestorage.googleapis.com/v0/b/mymaxwebsite.appspot.com/o/bookshop-bivar.jpg?alt=media&token=340eb402-74b6-4d40-9655-6736935ea029"
                    productName = "POS System"
                    productDesc = "Poin of Sale Software"
                    productPrice = "Rs. 50 000 /="
                    btnText = "CHECK NOW"
                />

            </div>
            
        </div>
    )
}

export default OurProducts;