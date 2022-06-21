import React from 'react'
import './productCard.scss'

const ProductCard = (props) => {
    return (
        
        <div className = 'productCard_block'>

            <div className='productImg_container'>
                <img src={props.image} className='productImg' />
            </div>

            <div className='productName'>
                <h3> {props.productName} </h3>
            </div>

            <div className='productDescription'>
                <span> {props.productDesc} </span>
            </div>

            <div className='productPrice'>
                <span> {props.productPrice} </span>
            </div>

            <div className='productBtn'>
                <a href=''> {props.btnText} </a>
            </div>

        </div>
    )
}

export default ProductCard;