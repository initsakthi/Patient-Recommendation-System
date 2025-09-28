import React from 'react'
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  return (
    <>
     {/* <!-- Topbar Start --> */}
    <div className="container-fluid">
        <div className="row bg-secondary py-2 px-lg-5">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                    <a className="text-white pr-3" >FAQs</a>
                    <span className="text-white">|</span>
                    <a className="text-white px-3" >Help</a>
                    <span className="text-white">|</span>
                    <a className="text-white pl-3" >Support</a>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-white px-3" >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="text-white px-3" >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="text-white px-3" >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="text-white px-3" >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="text-white pl-3" >
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="row py-3 px-lg-5">
            <div className="col-lg-4">
                <Link to="/" className="navbar-brand d-none d-lg-block">
                    <h1 className="m-0 display-5 text-capitalize"><span className="text-primary">Patient's </span> Food Recomendation sysem</h1>
                </Link>
            </div>
            <div className="col-lg-8 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <div className="d-inline-flex flex-column text-center pr-3 border-right">
                        <h6>Opening Hours</h6>
                        <p className="m-0">8.00AM - 9.00PM</p>
                    </div>
                    <div className="d-inline-flex flex-column text-center px-3 border-right">
                        <h6>Email Us</h6>
                        <p className="m-0">nitheshwwe007@gmail.com</p>
                    </div>
                    <div className="d-inline-flex flex-column text-center pl-3">
                        <h6>Call Us</h6>
                        <p className="m-0">+91 9361298438</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}


    {/* <!-- Navbar Start --> */}
    <div className="container-fluid p-0">
        <div className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
            <a href="" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-5 text-capitalize font-italic text-white"><span className="text-primary">Safety</span>First</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    
                    <Link to="/price" className="nav-item nav-link ">Pharmacy</Link>
                    
                    <Dropdown className="nav-item" >
                        <Dropdown.Toggle className="nav-link" >
                                Pages
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="rounded-0 m-0">
                            <Dropdown.Item ><Link to="/blogpages">Blog Grid</Link></Dropdown.Item>
                            <Dropdown.Item ><Link to="/blogdeatil">Blog Detail</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </div>
                <a href="https://otterfresh.in/ " className="btn btn-lg btn-primary px-3 d-none d-lg-block">Purchase Herbal Products</a>
            </div>
        </div>
    </div>
    {/* <!-- Navbar End --> */}
    </>
  )
}

export default Header