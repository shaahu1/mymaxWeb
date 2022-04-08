import React from 'react'
import './news.scss'

import { FaClock } from 'react-icons/fa'



function News (props) {

    return (

        <div>

            <div className="newsBlog_block">

                <a href="" className ="newsBlog_image_container">

                    <img alt="blog-post-image"  src= {props.NewsImg} class="newsBlog_image" />

                </a>

                <div className="newsTag_container">

                    <div className="newsTag"> {props.NewsTagName} </div>

                </div>

                <div className="newsBlog_heading_container">

                    <a href="/post/by-2030-every-person-in-the-planet-will-have-a-smartphone" className="newsBlog_heading_link">

                        <h3 className="newsBlog_heading"> {props.NewsDescription} </h3>

                    </a>

                </div>
                <div className="newsBlog_block_date_container">

                    <div className="time_icon_container">

                        <FaClock className='' />

                    </div>

                    <div className="newsBlog_block_date"> {props.NewsDate} </div>

                </div>
            </div>
        </div>
    )
}

export default News;