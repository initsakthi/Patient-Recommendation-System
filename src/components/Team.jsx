import React from 'react'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const teamMembers = [
    {
        name: 'Henry Cavill',
        designation:'Dentral Specilist',
        img:'../img/Doctor4.jpg',
        socialMedia:['fa-twitter','fa-facebook-f','fa-linkedin-in','fa-instagram']
    },
    {      
         
        name: 'Hugh Jackman ',
        designation:'Chief Doctor',
        img:'../img/DOctors/HeatSpelist.jpg',
        socialMedia:['fa-twitter','fa-facebook-f','fa-linkedin-in','fa-instagram']
    },
    {
        name: 'Chris Hemsworthr',
        designation:'Lab Specilist',
        img:'../img/Doctor1.jpg',
        socialMedia:['fa-twitter','fa-facebook-f','fa-linkedin-in','fa-instagram']
    },
    {
        name: 'Alina Bense',
        designation:'Dental Specilist',
        img:'../img/Doctors/Dental_specil.jpg',
        socialMedia:['fa-twitter','fa-facebook-f','fa-linkedin-in','fa-instagram']
    },
    {
        name: 'Mollie Ross',
        designation:'Surgery Specilist',
        img:'../img/team-1.jpg',
        socialMedia:['fa-twitter','fa-facebook-f','fa-linkedin-in','fa-instagram']
    },
    { 
        name: 'Jennifer Page',
        designation:'Chef Executive',
        img:'../img/team-2.jpg',
        socialMedia:['fa-twitter','fa-facebook-f','fa-linkedin-in','fa-instagram']
    },
    {
        name: 'Kate Glover',
        designation:'Doctor',
        img:'../img/team-3.jpg',
        socialMedia:['fa-twitter','fa-facebook-f','fa-linkedin-in','fa-instagram']
    },
    {
        name: 'Lilly Fry',
        designation:'Trainer',
        img:'../img/team-4.jpg',
        socialMedia:['fa-twitter','fa-facebook-f','fa-linkedin-in','fa-instagram']
    }
];


const Team = () => {
  return (
    <div className="container mt-5 pt-5 pb-3">
        <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-secondary mb-3">Doctors</h4>
            <h1 className="display-4 m-0">Meet Our <span className="text-primary">Specialist</span></h1>
        </div>
        <div className="row">
            {teamMembers.map((member) => (
            <div className="col-lg-3 col-md-6">
                <div className="team card position-relative overflow-hidden border-0 mb-4">
                    <img className="card-img-top" src={member.img} alt="" />
                    <div className="card-body text-center p-0">
                        <div className="team-text d-flex flex-column justify-content-center bg-light">
                            <h5>{member.name}</h5>
                            <i>{member.designation}</i>
                        </div>
                        <div className="team-social d-flex align-items-center justify-content-center bg-dark">
                            {member.socialMedia.map((socalIcon) => (
                            <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{width: "36px", height: "36px"}} ><i className={`fab ${socalIcon}`}></i></a>
                            ))}
                        </div>
                    </div>
                   
                </div>
                <Rating name="size-large" defaultValue={2} size="large" />
            
            </div>
            
            ))}
        </div>
        <div align="center"className="display-4 m-0">
        {/* <Link to="doctorpages" className="btn btn-lg btn-primary mt-3 px-4" >Visit More Doctors</Link> */}
        {/* <a href="" className="btn btn-lg btn-primary mt-3 px-4">Visit More Doctors</a> */}
        </div>
     
    </div>
    
  )
}

export default Team