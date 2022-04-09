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
import './home.scss'
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
            setNewsData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

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

           
            <div className='newsBlog_block_container'>
                <br/>
                <br/>
                <br/>
                <div className='newsBlog_header'> News & Events </div> 
                <br/>
                <br/>
                <br/>
                <div className='newsBlog_container'>
                    {newsData.map((newsData1) => 
                    {
                        console.log(newsData1.image)
                        return <div> 
                
                            <News 
                                NewsImg = {newsData1.image}
                                NewsTagName = {newsData1.tag}
                                NewsDescription = {newsData1.description}
                                NewsDate = {newsData1.date}
                            />

                    </div>;

                    })}

                </div>
            </div>
            
            <Footer/>


        </div>
    )
}

export default Home;
