import React from 'react'
import { Link } from 'react-router-dom';

const content = [
    
    {
    
        h3: 'for sugar patients',
        para: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link: 'Sugar Patient More Details'
    },
    {
        h3: 'heartpatients',
        para1:'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link1:'Heart patients More Details'
    },
    {
        h3: 'dental care',
        para_dental: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link2: 'dental Care More Details'
    },
    {
        h3: 'hair problems',
        para_hair: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_hair: 'Hair Problem More Details'
    },
    {
        h3: 'Get rid of acney',
        para_acney: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_acney: 'Acney Read More'
    },
    {
        h3: 'back pain',
        para_backpain: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_backpain: 'Back Pain Read More'
    },
    {
        h3: 'Hypertension (High Blood Pressure)',
        para: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link6: 'Hypertension Read More'
    },
    {
        h3: 'Anemia (Iron Deficiency)',
        para_Anemia: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_Anemia: 'Anemia Read More'
    },
    {
        h3: ' Cold & Flu',
        para_cold: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_cold: 'Cold & Flu Read More'
    },
    {
        h3: 'Arthritis (Joint Pain)',
        para_Arthritis: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_Arthritis: 'Arthritis Read More'
    },
    {
        h3: 'Asthma',
        para_asthma: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_asthma: 'Asthma Read More'
    },
    {
        h3: ' Skin Diseases (e.g., Eczema, Psoriasis)',
        para_SkinDiseases: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_SkinDiseases: 'Skin Diseases Read More'
    },
    {
        h3: 'Thyroid Disorders (Hypothyroidism)',
        para: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link12: 'Read More'
    },
    {
        h3: 'Depression / Mood Disorders',
        para: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link13: 'Thyroid Read More'
    },
    {
        h3: 'Cancer Prevention / Support',
        para_cancer: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_cancer: 'Cancer Read More'
    },
    {
        h3: 'Depression / Mood Disorders',
        para_Depression: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_Depression: 'Depression Read More'
    },
    {
        h3: 'Liver Disorders (Fatty Liver, Hepatitis)',
        para_LiverDisorders: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_LiverDisorders: 'Liver Disorders Read More'
    },
    {
        h3: 'Kidney Stones',
        para_kidneystones: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_kideneystones: 'Kidney Stones Read More'
    },
    
    {
        h3: 'Jaundice ( High Bilirubin)',
        para_jaundice: 'Diam amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_jaundice: 'Jaundice Read More'
    },
    {
        h3: 'Typhoid',
        para_typhoid: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_typhoid: 'Read More'
    },
    {
        h3: 'Dengue Fever',
        para_dengue: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link_dengue: 'Dengue Fever Read More'
    },
];

const content1 = [
  
    {
        h3: 'heartpatients',
        para:'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo',
        link:'ReadMore 1'
    },
    
];


const Services = () => {
    
  return (
    
    <div className="container-fluid bg-light pt-5">
        <div className="container py-5">
            <div className="d-flex flex-column text-center mb-5">
                <h4 className="text-secondary mb-3">Our Services</h4>
                <h1 className="display-4 m-0"><span className="text-primary">Premium</span> healthcare</h1>
            </div>
            <div className="row pb-3">
            {content.map((item, index) => (
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <h3 className="flaticon-house display-3 font-weight-normal text-secondary mb-3"></h3>
                        <h3 className="mb-3">{item.h3}</h3>
                        <p>{item.para_backpain}</p>
                        <p>{item.para_acney}</p>
                        <p>{item.para_hair}</p>
                        <p>{item.para_Arthritis}</p>
                        <p>{item.para1}</p>
                        <p>{item.para}</p>
                        <p>{item.para_dental}</p>
                        <p>{item.para_Anemia}</p>
                        <p>{item.para_cold}</p>
                        <p>{item.para_cancer}</p>
                        <p>{item.para_kidneystones}</p>
                        <p>{item.para_typhoid}</p>
                        <p>{item.para_asthma}</p>
                        <p>{item.para_dengue}</p>
                        <p>{item.para_LiverDisorders}</p>
                        <p>{item.para_Depression}</p>
                        <p>{item.para_SkinDiseases}</p>
                        
                        <p>{item.para_jaundice}</p>
                        <Link to="readmore" lassName="text-uppercase font-weight-bold" >{item.link}</Link>
                      
                        <Link to="readmore1" lassName="text-uppercase font-weight-bold" >{item.link1}</Link>

                        <Link to="dentalCare" lassName="text-uppercase font-weight-bold" >{item.link2}</Link>

                        <Link to="arthritis" lassName="text-uppercase font-weight-bold" >{item.link_Arthritis}</Link>

                        <Link to="hair" lassName="text-uppercase font-weight-bold" >{item.link_hair}</Link>

                        <Link to="acney" lassName="text-uppercase font-weight-bold" >{item.link_acney}</Link>

                        <Link to="backpain" lassName="text-uppercase font-weight-bold" >{item.link_backpain}</Link>
                        
                        <Link to="anemia" lassName="text-uppercase font-weight-bold" >{item.link_Anemia}</Link>

                        <Link to="anemia" lassName="text-uppercase font-weight-bold" >{item.link_cold}</Link>

                        <Link to="cancer" lassName="text-uppercase font-weight-bold" >{item.link_cancer}</Link>

                        <Link to="kidneystones" lassName="text-uppercase font-weight-bold" >{item.link_kideneystones}</Link>

                        <Link to="typhoid" lassName="text-uppercase font-weight-bold" >{item.link_typhoid}</Link>

                        <Link to="asthma" lassName="text-uppercase font-weight-bold" >{item.link_asthma}</Link>

                        <Link to="dengue" lassName="text-uppercase font-weight-bold" >{item.link_dengue}</Link>

                        <Link to="jaundice" lassName="text-uppercase font-weight-bold" >{item.link_jaundice}</Link>
                        <Link to="depression" lassName="text-uppercase font-weight-bold" >{item.link_Depression}</Link>
                        <Link to="skinDiseases" lassName="text-uppercase font-weight-bold" >{item.link_SkinDiseases}</Link>
                        
                        <Link to="liverDisorders" lassName="text-uppercase font-weight-bold" >{item.link_LiverDisorders}</Link>
                
                    </div>
                </div>
                




                
            ))}
            </div>
           
                
        </div>
    </div> 
  )
}

export default Services