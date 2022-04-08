import React, {useState, useEffect} from 'react'
import { CusromerSay } from '../../Components/CusromerSay';
import CustomerList from '../../Components/CustomerList';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import OurProducts from '../../Components/OurProducts';
import OurServices from '../../Components/OurServices';
//import StartEffect from '../../Components/StartEffect';
//import TopBar from '../../Components/TopBar'
//import bc from '../../Img/POS-System.jpg';
import './home.css'
//import {Link} from 'react-scroll'
import Block1 from '../../Components/Block1';
import ScrollToTop from '../../Components/ScrollToTop';
import News from '../../Components/News';

import {db} from "../../firebase-config"
import {getDocs, collection} from "@firebase/firestore"

const Home = () => {

    const [newsData, setNewsData] = useState([]);
    const newsCollectionref = collection(db, "newsInfo");

    useEffect (() => 
    {
        const getNewsInfo = async () =>
        {
            const data = await getDocs(newsCollectionref);
            setNewsData(data.docs.map((doc) => ({...doc.data(), id: 1})));

        };
        

        getNewsInfo();
        
        console.log(newsData);

    }, [] );
    

    return (
        <div>
            <ScrollToTop />
            <div className ="back">
               
                <NavBar />

                <span id="main-description"> Point of Sales Software Solutions, <br/> Point of Sales Accessories, <br/>Computer and Computer Accessories, <br/> IT Solutions</span>
            </div>

            <Block1 />
            <OurServices/>
            <OurProducts/>
            <CusromerSay/>
            <CustomerList/>
            <br/>
            <br/>

           

            <h2> News & Events </h2> 
            <br/>
            <br/>
            <br/>
            <div className='newsBlog_block_container'>
                
                <News 
                    NewsImg= {newsData.map((newsData1) => 
                        {
                            console.log(newsData1.image)
                        return <div> {newsData1.image} </div>;
                        })}
                    NewsTagName = {newsData.map((newsData1) => 
                        {
                        return <div> {newsData1.tag} </div>;
                        })}
                    NewsDescription = "By 2030, every person in the planet will have a smartphone"
                    NewsDate = {newsData.map((newsData1) => 
                        {
                        return <div> {newsData1.date} </div>;
                        })}
                    />
                <News 
                    NewsImg="https://assets.website-files.com/6123836e9fe0df3f7d56d0df/612505080ea15b4ecb0255ae_exp-blog-08.jpg"
                    NewsTagName = "SUPER MARKET"
                    NewsDescription = "Will VR revolutionize the way kids learn at school ?"
                    NewsDate = "August 1, 2018"
                    />
                <News 
                    NewsImg="https://assets.website-files.com/6123836e9fe0df3f7d56d0df/612505080ea15b4ecb0255ae_exp-blog-08.jpg"
                    NewsTagName = "SUPER MARKET"
                    NewsDescription = "How robots are helping farmers in improving produce quality ?"
                    NewsDate = "August 1, 2018"
                    />

            </div>
            
            <Footer/>


        </div>
    )
}

export default Home;
