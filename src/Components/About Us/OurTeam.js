import React from 'react'
import './ourTeam.scss'
import TeamCard from './TeamCard';
import m1 from '../../Img/m1.jpg'


const OurTeam = () => {

    const data = [
  
        {
            "id" : 0,
            "name": "Lahiru Sampath",
            "designation" : "Director Software",
            "image":"lahiru",
            "fbLink": "https://www.facebook.com/mltsamapath",
            "insterLink": '',     
            "inLink": '',     
            "g+Link": '',     
        },
        {
            "id" : 1,
            "name": "Ranjula Wejesekara",
            "designation" : "Director Account & Administration",
            "image":"ranjula",
            "fbLink": 'https://www.facebook.com/ranjula.wijesekara',     
            "insterLink": '',     
            "inLink": '',     
            "g+Link": '',
        },
        {
            "id" : 2,
            "name": "Asanka Pradeep",
            "designation" : "Director Technical",
            "image":"asanka",
            "fbLink": "https://www.facebook.com/apradeepkumara1",
            "insterLink": '',     
            "inLink": '',     
            "g+Link": '',  
        },
        {
            "id" : 3,
            "name": "Kushan Sampath",            
            "designation" : "Director Marketing",
            "image":"kushan",
            "fbLink": 'https://www.facebook.com/kushan.sameera.526',     
            "insterLink": '',     
            "inLink": '',     
            "g+Link": '', 
        }
  
    ]

    return (
        <>
          <h1> Our Team </h1>
          <div className='ourTeam_container'>
            
            <div className='ourTeamRow'>

                <TeamCard 
                    image = {data[0].image}
                    fbLink = {data[0].fbLink}
                    InsterLink = {data[0].inLink}
                    linkedinLink = {data[0].linkedinLink}
                    gmailLink = {data[0].gmailLink}
                    name = {data[0].name}
                    designation = {data[0].designation}
                    /> 
                <TeamCard 
                    image = {data[1].image}
                    fbLink = {data[1].fbLink}
                    InsterLink = {data[1].inLink}
                    linkedinLink = {data[1].linkedinLink}
                    gmailLink = {data[1].gmailLink}
                    name = {data[1].name}
                    designation = {data[1].designation}
                />

            </div>
            
            <div className='ourTeamRow'>

                <TeamCard
                    image = {data[2].image}
                    fbLink = {data[2].fbLink}
                    InsterLink = {data[2].inLink}
                    linkedinLink = {data[2].linkedinLink}
                    gmailLink = {data[2].gmailLink}
                    name = {data[2].name}
                    designation = {data[2].designation}
                />
                <TeamCard
                    image = {data[3].image}
                    fbLink = {data[3].fbLink}
                    InsterLink = {data[3].inLink}
                    linkedinLink = {data[3].linkedinLink}
                    gmailLink = {data[3].gmailLink}
                    name = {data[3].name}
                    designation = {data[3].designation}
                />

            </div>
            

          </div>

          

        </>
    )
}

export default OurTeam;