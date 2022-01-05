import React from 'react'
import { CusromerSay } from '../../Components/CusromerSay';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import OurServices from '../../Components/OurServices';
import StartEffect from '../../Components/StartEffect';
import TopBar from '../../Components/TopBar'
import bc from '../../Img/POS-System.jpg';
import './home.css'

const Home = () => {

    

    return (
        <div>

            <div className ="back">
                <StartEffect />
                <NavBar />

                <span id="main-description"> Point of Sales Software Solutions, <br/> Point of Sales Accessories, <br/>Computer and Computer Accessories, <br/> IT Solutions</span>
            </div>
            <OurServices/>
            <CusromerSay/>
            <Footer/>


        </div>
    )
}

export default Home;
