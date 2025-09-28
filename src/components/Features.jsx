import React from 'react'

const Care = ["Best In Industry","Emergency Services","Special Care","Customer Support"];

const Features = () => {
  return (
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5">
                <img className="img-fluid w-100" src="img/feature.jpg" alt="" />
            </div>
            <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                <h4 className="text-secondary mb-3">Why Choose Us?</h4>
                <h1 className="display-4 mb-4"><span className="text-primary">Special Care</span> for our body</h1>
                <p className="mb-4">Access to Quality Care: Ensuring that everyone has access to affordable, high-quality healthcare services is critical for maintaining public health and improving health outcomes. This involves having well-trained medical professionals, advanced healthcare infrastructure, and efficient systems that make healthcare available to all populations. </p>
                <p className="mb-4">Prevention and Wellness: Focusing on preventive care, healthy lifestyle choices, and early interventions helps reduce the risk of chronic diseases, enhances the quality of life, and lowers healthcare costs over time.</p>
                <div className="row py-2">
                {Care.map((item, index) => (
                    <div className="col-6">
                        <div className="d-flex align-items-center mb-4">
                            <h1 className="flaticon-cat font-weight-normal text-secondary m-0 mr-3"></h1>
                            <h5 className="text-truncate m-0">{item}</h5>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Features