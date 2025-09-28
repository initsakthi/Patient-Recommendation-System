import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container py-5">
        <div className="row py-5">
            <div className="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 className="text-secondary mb-3">About Us</h4>
                <h1 className="display-4 mb-4"><span className="text-primary">treatment</span> & <span className="text-secondary">Daycare</span></h1>
                <h5 className="text-muted mb-3">Here your .</h5>
                <p className="mb-4">  .</p>
                <ul className="list-inline">
                    <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>Best In Industry</h5></li>
                    <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>Emergency Services</h5></li>
                    <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>24/7 Customer Support</h5></li>
                </ul>

                <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <a href="http://localhost:3000/ " className="btn btn-lg btn-primary px-3 d-none d-lg-block">Nutrition Metrix</a>

  <Link to="learnmore" className="btn btn-lg btn-primary px-4">Learn More</Link>
</div>

                {/* <Link to="nutri" className="btn btn-lg btn-primary mt-3 px-4" >Nutrition</Link>
                

                <Link to="learnmore" className="btn btn-lg btn-primary mt-3 px-4" >Learn More</Link> */}
                {/* <a href="" className="btn btn-lg btn-primary mt-3 px-4">Learn More</a> */}
            </div>
            <div className="col-lg-5">
                <div className="row px-3">
                    <div className="col-12 p-0">
                        <img className="img-fluid w-100" src="img/about-1.jpg" alt=""/>
                    </div>
                    <div className="col-6 p-0">
                        <img className="img-fluid w-100" src="img/about-2.jpg" alt=""/>
                    </div>
                    <div className="col-6 p-0">
                        <img className="img-fluid w-100" src="img/about-3.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default About