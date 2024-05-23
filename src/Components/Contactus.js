import React from 'react'
import '../Style/contactus.css'

const Contactus = () => {

    return (
        <>
            <div className="mincontainerrr">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12'>
                            <h1 className='contectus mt-5'  style={{ fontFamily: 'Cursive' }}>Contact Us</h1>
                            <form className='form mt-5' style={{ maxWidth: "100%" }}>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="text" id="form4Example1" className="form-control" />
                                    <label className="form-label" htmlFor="form4Example1">Name</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="email" id="form4Example2" className="form-control" />
                                    <label className="form-label" htmlFor="form4Example2">Email address</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                                    <label className="form-label" htmlFor="form4Example3">Message</label>
                                </div>

                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        value=""
                                        id="form4Example4"
                                    />
                                    <label className="form-check-label " htmlFor="form4Example4">
                                        Send me a copy of this message
                                    </label>
                                </div>

                                <button type="button" className="btn btn-primary w-25 mx-auto d-block ">Send</button>
                            </form>
                        </div>
                        <div className='col-md-6'>
                            <div className="map-section">
                                <div className="map" style={{ height: 200, marginTop: 110 }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.7006200491596!2d70.80019037474905!3d22.289327743294127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbb335b124b1%3A0x36b54037b5f20661!2sTechnoComet%20Solutions%20-%20IT%20Company!5e0!3m2!1sen!2sin!4v1716360117973!5m2!1sen!2sin"
                                        width="100%"
                                        title='TechnoComet'
                                        height={350}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus
