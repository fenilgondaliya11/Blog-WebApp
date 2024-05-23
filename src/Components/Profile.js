import React,{useContext} from 'react'
import '../Style/homepage.css'
import { UserContext } from '../Context/AuthContext';


const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            <div className="main-container">
                <div className="blur-circle1"></div>
                <div className="blur-circle2"></div>

                <section className="vh-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-lg-6 mb-4 mb-lg-0">
                                <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4 gradient-custom text-center text-white"
                                            style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                alt="Avatar" className="img-fluid my-5" style={{ width: "80px" }} />
                                            <h5 className='text-dark'>{user.name}</h5>
                                            <p>Role: {user.role}</p>
                                            <i className="far fa-edit mb-5 text-primary"></i>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body p-4">
                                                <h6>Profile</h6>
                                                <hr className="mt-0 mb-4" />
                                                <div className="row pt-1">
                                                    <div className="col-6 mb-3">
                                                        <h6>{user.email}</h6>
                                                        <p className="text-muted">info@techtrends.com</p>
                                                    </div>
                                                    <div className="col-6 mb-3">
                                                        <h6>Phone</h6>
                                                        <p className="text-muted">+91 6353389744</p>
                                                    </div>
                                                </div>
                                                <h6>Blogs</h6>
                                                <hr className="mt-0 mb-4" />
                                                <div className="row pt-1">
                                                    <div className="col-6 mb-3">
                                                        <h6>Recent</h6>
                                                        <p className="text-muted">Blog-8</p>
                                                    </div>
                                                    <div className="col-6 mb-3">
                                                        <h6>Most Viewed</h6>
                                                        <p className="text-muted">Blog-1</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-start">
                                                    <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                                    <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                                    <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}

export default Profile
