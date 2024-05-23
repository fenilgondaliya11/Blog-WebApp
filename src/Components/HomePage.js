import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/homepage.css';
import Slider from '../Components/Slider';
import BlogCards from './BlogCards';
import Contentx from './Contentx';
import Contactus from './Contactus';

function HomePage() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const navigateToBlog = () => navigate('/BlogCard');


    return (
        <div className="main-container">
            
          
            <div className={`landing-page ${isVisible ? 'fade-in' : ''}`}>
                <div className="content">
                    <div className="container">
                        <div className="info">
                            <h1 className={isVisible ? 'fade-in' : ''}>Welcome to TechTrends!</h1>
                            <h3 className='text-secondary'>Publish your passions, your way</h3>
                            <p className='text-warning'>Create a unique and beautiful blog easily.</p>
                            <button className='mx-auto btn1' onClick={navigateToBlog}>Read The Blogs</button>
                        </div>
                        <div className="image">
                            <img
                                className="main-image"
                                src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp"
                                alt="Not Found"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center' style={{ fontFamily: 'Cursive' }}>About Us</h1>
            <Contentx />
            <Slider />
            <BlogCards  />
            <Contactus />           
        </div>
    );
}

export default HomePage;



