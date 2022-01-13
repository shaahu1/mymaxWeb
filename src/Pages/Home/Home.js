import React from 'react'
import { CusromerSay } from '../../Components/CusromerSay';
import CustomerList from '../../Components/CustomerList';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import OurProducts from '../../Components/OurProducts';
import OurServices from '../../Components/OurServices';
import StartEffect from '../../Components/StartEffect';
import TopBar from '../../Components/TopBar'
import bc from '../../Img/POS-System.jpg';
import './home.css'
import {Link} from 'react-scroll'
import Block1 from '../../Components/Block1';

const Home = () => {


    return (
        <div>

            <div className ="back">
                <StartEffect />
                <NavBar />

                <span id="main-description"> Point of Sales Software Solutions, <br/> Point of Sales Accessories, <br/>Computer and Computer Accessories, <br/> IT Solutions</span>
            </div>

            <Block1 />
            <OurServices/>
            <OurProducts/>
            <CusromerSay/>
            <CustomerList/>
            <Footer/>


        </div>
    )
}

export default Home;
