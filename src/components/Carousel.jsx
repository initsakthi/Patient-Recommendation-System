import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const content = [
    {
        h3: 'Best Patients Services',
        h1:
            'Keep Your mind Happy',
        button: 'Appoinment',
        h5: 'Healthy populations are more productive, save more, and live longer.',
        image: '../img/carousel-1.jpg',
        interval: 2500
    },
    {
        h3: 'Best Patients Services',
        h1: ' care that places the patient',
        button: 'Appoinment',
        h5: 'Health is Wealth',
        image: '../img/carousel-2.jpg',
        interval: 400
    }
];


const Slider = () => {
    return (
        <div className="container-fluid p-0">
            <Carousel indicators={false} className="slide" prevLabel="" nextLabel="" nextIcon={<div className="btn btn-primary rounded" style={{ width: "45px", height: "45px" }}>
                <span className="carousel-control-next-icon mb-n2"></span>
            </div>} prevIcon={<div className="btn btn-primary rounded" style={{ width: "45px", height: "45px" }}>
                <span className="carousel-control-prev-icon mb-n2"></span>
            </div>}>
                {content.map((item, index) => (
                    <Carousel.Item interval={item.interval} activeIndex={index}>
                        <img className="w-100" src={item.image} alt="Image" />
                        <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: "900px" }}>
                                <h3 className="text-white mb-3 d-none d-sm-block">{item.h3}</h3>
                                <h1 className="display-3 text-white mb-3">{item.h1}</h1>
                                <h5 className="text-white mb-3 d-none d-sm-block">{item.h5}</h5>
                                <Link to="/appointment" className="text-decoration-none">
                                <button type="button" className="btn btn-lg btn-primary mt-3 mt-md-4 px-5">
                                     {item.button}
                                </button></Link>
                                {/* <button type="button" className="btn btn-lg btn-secondary mt-3 mt-md-4 px-5">Learn More</button> */}
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Slider;