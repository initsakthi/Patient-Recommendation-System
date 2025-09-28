import React from 'react'

const prices = [
    {
        image: '../img/Surgery.jpg',
        listGroup:[
            {
                listType:'fa fa-check text-secondary mr-2',
                listName:'Pet Surgery Booking Center'
            },
         
        ],
        buttonType: 'btn btn-primary btn-block p-3'
    },
    {
        image: '../img/Treatment.jpg',
        listGroup:[
            {
                listType:'fa fa-check text-secondary mr-2',
                listName:'Pet Treatment Types'
            },
           
        ],
        buttonType: 'btn btn-secondary btn-block p-3'
    },
    {
        image: '../img/pharmacy.jpg',
        listGroup:[
            {
                listType:'fa fa-check text-secondary mr-2',
                listName:'Online Pharmacy for Pets'
            },
            
        ],
        buttonType: 'btn btn-primary btn-block p-3'
    },
    
]

const Pricing = () => {
    return (
        <div className="container-fluid bg-light pt-5 pb-4">
            <div className="container py-5">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-secondary mb-3">Health Center</h4>
                    <h1 className="display-4 m-0">Choose the Treatments and Take care  <span className="text-primary">your Health</span></h1>
                </div>
                <div className="row">
                {prices.map((item) => (
                    <div className="col-lg-4 mb-4">
                        <div className="card border-0">
                            <div className="card-header position-relative border-0 p-0 mb-4">
                                <img className="card-img-top" src={item.image} alt="" />
                                    <div className="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100" style={{top: 0, left: 0, zIndex: 1, background: 'rgba(0, 0, 0, .5)'}}>
                                        <h3 className="text-primary mb-3">{item.priceType}</h3>
                                        <h1 className="display-4 text-white mb-0">
                                            {/* <small className="align-top" style={{fontSize:"22px", lineHeight: "45px"}}>$</small>{item.price}<small className="align-bottom" style={{fontSize:"16px", lineHeight: "40px"}}>/ Mo</small> */}
                                        </h1>
                                    </div>
                                    
                            </div>
                            <div className="card-footer border-0 p-0">
                                <a href="https://shop.aryavaidyasala.com/" className={item.buttonType} style={{borderRadius: 0}}>Purchase Now</a>
                            </div>
                            {/* <div className="card-body text-center p-0">
                                <ul className="list-group list-group-flush mb-4">
                                    {item.listGroup.map((list) => (
                                        <li className="list-group-item p-2"><i className={list.listType}></i>{list.listName}</li>
                                    ))}
                                </ul>
                            </div> */}
                            
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

    )
}

export default Pricing