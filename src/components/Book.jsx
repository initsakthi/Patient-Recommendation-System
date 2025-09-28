import React from 'react'

const Book = () => {
  return (
    <div className="container-fluid bg-light">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="bg-primary py-5 px-4 px-sm-5">
                        <form className="py-5">
                            <div className="form-group">
                                <input type="text" className="form-control border-0 p-4" placeholder="Your Name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required="required" />
                            </div>
                            <div className="form-group">
                                <div className="date" id="date" data-target-input="nearest">
                                    <input type="text" className="form-control border-0 p-4 datetimepicker-input" placeholder="Reservation Date" data-target="#date" data-toggle="datetimepicker"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="time" id="time" data-target-input="nearest">
                                    <input type="text" className="form-control border-0 p-4 datetimepicker-input" placeholder="Reservation Time" data-target="#time" data-toggle="datetimepicker"/>
                                </div>
                            </div>
                          <div className="form-group">
    <select
        name="treatment"
        className="custom-select border-0 px-4"
        style={{ height: "47px" }}
        required
    >
        <option value="">Select a Treatment</option>
        <option value="Grooming">Grooming</option>
        <option value="Vaccination">Vaccination</option>
        <option value="Dental Care">Dental Care</option>
        <option value="General Check-up">General Check-up</option>
        <option value="Emergency Care">Emergency Care</option>
        <option value="Surgery Consultation">Surgery Consultation</option>
        <option value="Nutritional Advice">Nutritional Advice</option>
        <option value="Parasite Control">Parasite Control</option>
    </select>
</div>

                            <div>
                                <button className="btn btn-dark btn-block border-0 py-3" type="submit">Book Now</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h4 className="text-secondary mb-3">Going for a sugession</h4>
                    <h1 className="display-4 mb-4">Book For <span className="text-primary"> Patient</span></h1>
                    <p>Book Your health Recomendation ideas
                    </p>
                    <div className="row py-2">
                        <div className="col-sm-6">
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-2">
                                    <h1 className="flaticon-house font-weight-normal text-secondary m-0 mr-3"></h1>
                                    <h5 className="text-truncate m-0">Patient's</h5>
                                </div>
                                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-2">
                                    <h1 className="flaticon-food font-weight-normal text-secondary m-0 mr-3"></h1>
                                    <h5 className="text-truncate m-0">Patient's</h5>
                                </div>
                                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-2">
                                    <h1 className="flaticon-grooming font-weight-normal text-secondary m-0 mr-3"></h1>
                                    <h5 className="text-truncate m-0">Patient'</h5>
                                </div>
                                <p className="m-0">Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-2">
                                    <h1 className="flaticon-toy font-weight-normal text-secondary m-0 mr-3"></h1>
                                    <h5 className="text-truncate m-0">Patients</h5>
                                </div>
                                <p className="m-0">Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
  )
}

export default Book