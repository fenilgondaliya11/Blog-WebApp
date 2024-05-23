import React from 'react'
import ReactCardSlider from 'react-card-slider-component';
import sliderData from '../data.json';
import { useNavigate } from 'react-router-dom';
import '../Style/slder.css'


const Slider = () => {
  const navigate = useNavigate();

  const handleSlideClick = () => {
    navigate('/BlogCard');
};

  const slides = sliderData.map(slide => ({
    ...slide,
    clickEvent: handleSlideClick
  }));

  return (
    <>
      <div className='mid-content container'>
        <h1 className='text-light cerators' style={{ fontFamily: 'Cursive' }}>Our Creators Stories</h1>
        <div className='sliders'  style={{ marginTop: "2em" }}>
          <ReactCardSlider  slides={slides} onClick={handleSlideClick} />
        </div>
      </div>
    </>
  )
}

export default Slider
