import React from 'react';
import '../Style/Contentx.css';
import img from '../Style/Bloger.png';

const Contentx = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto d-flex justify-content-center align-items-center">
            <img className="main-image" src={img} alt="Tech Blog" />
          </div>
          <div className="col-md-7 mt-5">
            <h3 className="text-center text-light">Tech Trends - The Future of Innovation | Techsperts</h3>
            <p className="text-light textp">
              As we move through 2024, the landscape of technology continues to evolve at an unprecedented pace, with several key trends poised to make a significant impact on our lives. Quantum computing is breaking barriers, promising to tackle problems that were previously unsolvable by classical computers, potentially revolutionizing fields such as logistics, drug discovery, and materials science. The rollout of 5G technology is now widespread, enabling faster speeds, lower latency, and enhanced connectivity, laying the groundwork for the Internet of Things (IoT), smart cities, and autonomous vehicles, while research into 6G technology is already underway, aiming to deliver even more advanced capabilities. Artificial Intelligence (AI) and machine learning are becoming increasingly integrated into everyday applications, from personalized marketing and customer service chatbots to predictive analytics in finance and healthcare. Generative AI, in particular, is making waves with its ability to create new content from existing data.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contentx;
