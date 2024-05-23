import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { UserContext } from '../Context/AuthContext'
// import { useContext } from 'react'

const About = () => {
    // const { user } = useContext(UserContext);

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login');
    };
    
    return (
        <>
            <div className="main-container py-3 py-md-5 py-xl-">
                <div className="blur-circle1"></div>
                <div className="blur-circle2"></div>
                <div className="container">
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                        <div className="col-12 col-lg-6 col-xl-5">
                            <img
                                className="img-fluid rounded"
                                loading="lazy"
                                src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp"
                                alt=""
                            />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-7">
                            <div className="row justify-content-xl-center">
                                <div className="col-12 col-xl-11">
                                    <h2 className="h1 mb-3 text-light">Who Are We?</h2>
                                    <p className="lead fs-4 text-secondary mb-3">
                                        Welcome to Our Blogger Web app, where we believe in the power of words to inspire, educate, and connect.
                                        Our platform is a labor of love crafted with the aim of providing a space for individuals to express themselves
                                        freely, share their stories, and engage with a community of like-minded individuals. Whether you're a seasoned write,
                                        an aspiring blogger, or simply someone with a story to tell, we invite you to join us on this journey of exploration and creativity.
                                    </p>
                                    <p className="mb-5 text-light">
                                        At Blogger Web app, we prioritize authenticity, inclusivity, and creativity.
                                        We strive to foster a supportive environment where every voice is heard and valued. Our mission is to empower
                                        individuals to share their perspectives, spark meaningful conversations, and forge connections that transcend boundaries.
                                        Join us in celebrating the diversity of human experiences and uncovering the endless possibilities that storytelling holds.
                                        Together, let's create a vibrant community where words have the power to inspire change and unite us in our shared humanity.
                                    </p>
                                    <button className='mx-auto d-block btn1' onClick={handleLogout}>Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
